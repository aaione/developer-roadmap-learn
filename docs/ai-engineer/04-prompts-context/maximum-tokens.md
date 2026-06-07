# Maximum Tokens：给输出长度设一个工程上限

## 学习目标

读完这一节，你应该能说清楚：

- Maximum Tokens 控制什么，不控制什么。
- 它和上下文窗口、输入 token、输出 token、Top-K 采样有什么关系。
- 为什么输出长度会影响成本、延迟和截断风险。
- 在 API 调用中怎样设置合理的输出上限。

## 概念解释

developer-roadmap 图谱把这个节点标为 `Maximum Tokens`，但同 ID 源文件标题是 `Top-K Sampling`。原文介绍 Top-K 采样：模型生成下一个词时，不看完整词表，而是只在概率最高的 K 个候选里选择。低 K 值更保守，较高 K 值更有多样性，技术任务常用较低 K，创意写作可以放宽。

本节按图谱 label 讲 Maximum Tokens，同时保留 Top-K 的核心关系：Maximum Tokens 管长度，Top-K 管候选范围。两者都影响生成，但不是同一种东西。Maximum Tokens 通常表示本次请求最多允许模型生成多少输出 token。它不会让模型“懂得更多”，也不会扩大输入上下文，只是给输出设上限。

很多人第一次接 API 时会混淆三个概念：上下文窗口、输入 token、输出 token。上下文窗口是模型一次请求能处理的总容量；输入 token 是你发给模型的系统提示、用户问题、检索材料、工具结果；输出 token 是模型生成的答案。Maximum Tokens 只限制输出部分。输入太长时，请求可能在生成前就失败；输出上限太小，答案可能被截断。

<div class="flow-diagram" aria-label="Token 预算分配">
  <span class="flow-step">模型上下文窗口</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">输入 token</span>
  <span class="flow-arrow">+</span>
  <span class="flow-step">预留输出 token</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">生成到上限或自然停止</span>
</div>

Maximum Tokens 的工程价值很直接。它能避免一次调用生成过长内容，控制成本和延迟，也能让接口返回更可预测。比如客服自动回复可以限制在 200 到 400 token；报告摘要可能需要 800 到 1500 token；代码生成、长文改写和多步骤分析则要留更大空间。真正的数值不该凭感觉拍脑袋，最好用真实输入样例跑一轮，看平均长度、P95 长度和截断率。

不同供应商参数名不完全一致。OpenAI Responses API 常见的是 `max_output_tokens`；Anthropic Messages API 需要 `max_tokens`；Google Gemini 的生成配置里有 `maxOutputTokens`；Hugging Face Transformers 里经常见到 `max_new_tokens`。迁移 SDK 时，先确认参数语义，而不是只看名字相似。

## 实践建议

- 先估算输入，再预留输出。RAG、长文档和工具结果会占掉大量上下文，不要只盯输出上限。
- 按场景设默认值。分类、抽取、客服、摘要、报告和代码生成应该有不同 token 预算。
- 对截断做检测。看到 `finish_reason`、`stop_reason` 或类似字段显示长度限制时，要决定重试、续写还是提示用户缩小任务。
- 结合输出格式控制长度。要求“最多 5 条”“每条不超过 40 字”比单独调 token 上限更可读。
- 把 token 用量写进日志。成本异常、延迟异常和质量下降，很多时候都能从 token 分布里找到线索。

## 常见误区

- **误区一：Maximum Tokens 越大越好。** 上限越大，最坏情况下成本和延迟越高，答案也更容易跑题。
- **误区二：调大输出上限能解决输入过长。** 输入超出上下文窗口时，需要压缩、检索、分块或换长上下文模型。
- **误区三：Maximum Tokens 能提高事实准确性。** 它只控制长度，不会补知识，也不会替你做验证。
- **误区四：不同模型的 token 预算可以照搬。** 分词器、上下文窗口、输出限制和计费方式都可能不同。

## 延伸阅读

- [OpenAI Docs：Text generation](https://platform.openai.com/docs/guides/text)
- [OpenAI Docs：Latency optimization](https://platform.openai.com/docs/guides/latency-optimization)
- [Anthropic API Reference：Messages](https://docs.anthropic.com/en/api/messages)
- [Google AI for Developers：Text generation](https://ai.google.dev/gemini-api/docs/text-generation)
- [Google AI for Developers：Token counting](https://ai.google.dev/gemini-api/docs/tokens)
- [Hugging Face Transformers：Generation](https://huggingface.co/docs/transformers/en/main_classes/text_generation)
- [nilbuild/developer-roadmap：top-k@qzvp6YxWDiGakA2mtspfh.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/top-k%40qzvp6YxWDiGakA2mtspfh.md)
