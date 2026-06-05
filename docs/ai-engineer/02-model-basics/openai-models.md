# OpenAI Models：先按任务选模型

## 学习目标

读完这一节，你应该能说清楚：

- OpenAI Models 不是一个模型，而是一组面向不同任务的模型。
- GPT、推理模型、Embedding、语音、图像和多模态模型分别适合什么场景。
- 选模型时为什么要同时看质量、延迟、成本、上下文长度和工具能力。
- 在项目里怎样用评估集和日志验证模型选择，而不是只凭榜单或宣传页。

## 概念解释

developer-roadmap 原文把 OpenAI models 描述为 OpenAI 通过 API 提供的一组预训练 AI 模型，包括 GPT 和 o-series 等。GPT 模型擅长自然语言任务，比如文本生成、翻译和问答；其他专门模型也面向语音转写等任务。这个介绍适合做第一层理解：OpenAI 不是只提供“聊天模型”，而是提供一组可通过 API 调用的模型能力。

在工程里，更实用的看法是：先看任务，再选模型。需要长文写作、摘要、对话和代码辅助，可以从通用 GPT 模型开始；需要复杂推理、规划或多步问题，可以比较推理模型；需要语义搜索和 RAG 检索，要用 Embedding 模型；需要把语音变成文字，要用转写模型；需要图片理解或多模态输入，就要确认所选模型是否支持图像、音频或文件输入。

一个常见的选型流程如下：

<div class="flow-branch" aria-label="OpenAI 模型选型流程">
  <span class="flow-question">任务主要处理什么输入？</span>
  <span class="flow-path"><span class="flow-step">文本</span><span class="flow-step">图片</span><span class="flow-step">音频</span><span class="flow-step">向量检索</span></span>
  <span class="flow-question">输出需要什么形态？</span>
  <span class="flow-path"><span class="flow-step">自然语言</span><span class="flow-step">结构化 JSON</span><span class="flow-step">工具调用</span><span class="flow-step">Embedding</span></span>
  <span class="flow-question">产品约束是什么？</span>
  <span class="flow-path"><span class="flow-step">质量</span><span class="flow-step">延迟</span><span class="flow-step">成本</span><span class="flow-step">上下文长度</span><span class="flow-step">安全</span></span>
  <span class="flow-question">怎么确认选对了？</span>
  <span class="flow-path"><span class="flow-step">固定评估集</span><span class="flow-step">线上日志</span><span class="flow-step">A/B 对比</span><span class="flow-step">回归测试</span></span>
</div>

OpenAI 官方 Models 文档会列出不同模型的能力、输入输出、上下文和价格入口；API 文档则说明 Responses API、Embeddings API、语音和图像等能力怎么调用。OpenAI Cookbook 更偏实践，适合看 RAG、结构化输出、函数调用、评估和批处理例子。第三方模型清单可以帮助快速了解差异，但最终仍要回到官方文档和自己的评估集。

选模型时不要只问“哪个最强”。最强模型可能太慢或太贵；便宜模型可能足够处理分类、格式化、摘要草稿；推理模型在复杂任务上有价值，但简单客服改写未必需要。AI Engineer 的目标是让功能稳定地解决用户任务，而不是在每个调用里默认使用最大模型。

## 实践建议

- 为每类任务建立 baseline。用小模型、通用模型和推理模型各跑一遍真实样例，再比较质量、延迟和成本。
- 把模型版本写入日志。线上问题排查时，要能知道当时用的是哪个模型、参数和 prompt 版本。
- 对结构化输出使用官方结构化能力或严格校验。不要让后端直接相信自然语言里“看起来像 JSON”的片段。
- 对长上下文任务先做压缩和检索。上下文窗口大不代表应该把所有资料都塞进去。
- 给供应商异常做降级。API 超时、限流、模型变更和区域问题都应该有重试、缓存或人工兜底方案。

## 常见误区

- **误区一：OpenAI Models 等于 GPT 聊天。** 聊天只是其中一种形态。Embedding、语音、图像、多模态和工具调用也很常见。
- **误区二：模型越贵，产品越好。** 有些任务需要高质量推理，有些任务只需要稳定抽取或分类。过度使用大模型会拖慢体验并抬高成本。
- **误区三：官方模型清单看一次就够了。** 模型能力、价格和推荐用法会变，重要项目要定期复查官方文档。
- **误区四：选型只看离线评分。** 线上还要看超时率、P95 延迟、用户修正率、人工复查成本和安全事件。

## 延伸阅读

- [OpenAI Docs：Models](https://platform.openai.com/docs/models)
- [OpenAI API Reference：Responses](https://platform.openai.com/docs/api-reference/responses)
- [OpenAI API Reference：Embeddings](https://platform.openai.com/docs/api-reference/embeddings)
- [OpenAI Cookbook](https://cookbook.openai.com/)
- [OpenAI Platform：Pricing](https://openai.com/api/pricing/)
- [Microsoft Learn：Choose and deploy OpenAI models](https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/models)
- [nilbuild/developer-roadmap：openai-gpt-o-series@3PQVZbcr4neNMRr6CuNzS.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/openai-gpt-o-series%403PQVZbcr4neNMRr6CuNzS.md)
