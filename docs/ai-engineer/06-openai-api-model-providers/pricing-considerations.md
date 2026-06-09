# 怎么估算一次 AI 功能的真实成本

开始前先准备三样东西：目标模型的价格页、真实请求样例、以及你希望达到的日调用量。AI 功能的成本不只来自输出 token，还包括输入、缓存、重试、工具调用、Embedding、托管推理和人工兜底。

## 第一步：把一次请求拆开

developer-roadmap 图谱把这个节点标为 `Pricing Considerations`，但同 ID 源文件是 `Few-Shot Prompting`。原文解释 Few-Shot Prompting 时说，少量输入输出示例可以放进 prompt，帮助 LLM 理解任务模式。这个点和定价有关：示例越多，输入 token 越多；输入越长，成本和延迟都会上升。

先别急着看“每百万 token 多少钱”。你要先把一次请求拆成几块：

| 成本来源 | 例子 | 常见风险 |
| --- | --- | --- |
| 系统提示 | 角色、规则、输出格式 | 长期堆规则，输入越来越贵 |
| 用户输入 | 问题、文档、图片、音频 | 用户输入长度不可控 |
| Few-shot 示例 | 3 到 5 组输入输出样例 | 示例重复，占上下文 |
| 检索内容 | 文档片段、引用、工具结果 | 召回太多，成本和噪声一起上升 |
| 模型输出 | 回答、JSON、代码、摘要 | 输出上限过大，最坏成本变高 |
| 重试和修复 | 格式修复、失败重跑 | 错误率会直接放大账单 |

拆完以后，你才知道该优化哪一段。很多团队一开始只盯模型单价，后来才发现真正烧钱的是过长上下文、重复请求、失败重试和没有缓存。

## 第二步：按 token 估算单次成本

大多数文本模型按输入 token 和输出 token 分开计费。你可以用真实样例先估一个平均值，再算 P95。平均值告诉你日常成本，P95 告诉你最坏体验和预算风险。

一个简单公式是：

```text
单次成本 = 输入 token / 1,000,000 * 输入单价
        + 输出 token / 1,000,000 * 输出单价
```

如果供应商有 prompt caching、batch API、批量折扣或不同上下文价格，还要把这些条件单独算。OpenAI、Anthropic、Google Gemini、Mistral 和 Hugging Face 的价格模型不完全一样，所以不要把一个供应商的计算方式直接套到另一个供应商。

这里有个容易踩的坑：便宜模型不一定让总成本更低。如果便宜模型输出格式经常错，需要多次重试，或者需要更长 prompt 才能稳定工作，最终成本可能反而更高。

## 第三步：把流量和失败率算进去

单次请求只是开始。真正的预算要乘上流量、峰值和失败率。

```text
每日成本 ≈ 单次成本 * 每日请求量 * (1 + 重试率)
```

如果功能会调用多个模型，还要分开算。例如一个客服功能可能先做意图分类，再检索文档，再生成回复，最后做安全审核。每一步的模型、token 和错误率都不同。

高并发场景还要看速率限制和延迟。价格便宜但速率限制太低，可能需要排队、降级或切换模型。托管推理和自部署模型还要考虑 GPU 实例、空闲时间、冷启动和扩缩容。

## 验证：怎么知道预算算对了

上线前做一次小规模压测或灰度，把估算值和真实 usage 对上。日志里至少记录这些字段：

- 模型名称和版本
- 输入 token、输出 token、总 token
- 是否命中缓存
- 是否重试
- `finish_reason` 或类似的结束原因
- 请求延迟和错误类型
- 业务任务是否成功

如果真实账单比估算高，先查三个地方：输入是否被塞进了太多历史和检索材料，输出是否经常打到上限，失败重试是否被用户或后端放大。

## 降成本的顺序

降成本不要先砍质量。更稳的顺序是先删无用输入，再做缓存和批处理，然后按任务换模型。

1. 删除 prompt 里的重复规则和无关背景。
2. 控制检索片段数量，必要时做重排和压缩。
3. 对稳定前缀使用 prompt caching。
4. 对离线任务使用 batch API 或批处理。
5. 把简单分类、格式化、路由任务交给小模型。
6. 对高价值复杂任务保留更强模型。

这样做的好处是，用户体验不一定下降。很多时候，清理上下文和拆分任务会同时降低成本、延迟和错误率。

## 延伸阅读

- [OpenAI：API Pricing](https://openai.com/api/pricing/)
- [OpenAI Docs：Prompt caching](https://platform.openai.com/docs/guides/prompt-caching)
- [OpenAI Docs：Batch API](https://platform.openai.com/docs/guides/batch)
- [Anthropic Docs：Pricing](https://docs.anthropic.com/en/docs/about-claude/pricing)
- [Google AI for Developers：Gemini API Pricing](https://ai.google.dev/gemini-api/docs/pricing)
- [Mistral AI Docs：La Plateforme pricing](https://docs.mistral.ai/getting-started/models/models_overview/)
- [nilbuild/developer-roadmap：few-shot@DZPM9zjCbYYWBPLmQImxQ.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/few-shot%40DZPM9zjCbYYWBPLmQImxQ.md)
