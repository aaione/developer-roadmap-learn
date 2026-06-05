# 什么是 LLM？

## 学习目标

读完这一节，你应该能解释：

- LLM 为什么能生成、摘要、翻译、问答和写代码。
- token、prompt、context、inference 这些词大概指什么。
- 使用 LLM 做产品时，应该先关注哪些工程限制。
- 为什么 LLM 的回答看起来像知识，但仍然需要事实校验和上下文设计。

## 概念解释

developer-roadmap 原文说，LLM 是在大规模数据上训练出来的高级 AI 模型，可以理解和生成接近人类表达的文本，能做文本生成、翻译、摘要、问答等任务，也能用于聊天机器人、内容生成和自动客服。原文还提醒了两个限制：LLM 需要较多计算资源，也可能继承训练数据里的偏见。

LLM 是 Large Language Model，大语言模型。它经过大量文本和代码数据训练，学会根据上下文预测下一个 token。这里的 token 可以粗略理解成模型处理文本时的“小片段”，可能是一个字、一个词，也可能是词的一部分。

LLM 的强大，主要来自三件事：

- **大量数据**：模型看过很多语言和代码样例，因此能学到表达、结构、知识线索和常见模式。
- **Transformer 架构**：self-attention 让模型能在一段文本里判断哪些 token 更相关，而不是只按顺序读前后几个词。
- **推理时逐步生成**：用户给出 prompt 后，模型把输入转成 token 和向量表示，再一步步预测后续 token，直到生成完整回答。

一次典型的 LLM 调用大致是这样：

<div class="flow-diagram" aria-label="LLM 从 Prompt 到输出的生成流程">
  <span class="flow-step">用户输入 Prompt</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">Tokenization</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">模型读取 Context</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">预测下一个 Token</span>
  <span class="flow-arrow">↺</span>
  <span class="flow-step">直到回答结束</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">输出文本 / 结构化结果</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">校验、引用、工具结果或产品展示</span>
</div>

Cloudflare、IBM、Stanford HAI、Microsoft Learn 和 NVIDIA 的解释都提到类似要点：LLM 的能力来自大规模训练、Transformer 架构和上下文建模。它可以处理复杂语言任务，但它不是传统数据库，也不会自动保证事实来源。它生成的是在当前上下文下概率上合理的 token 序列，所以会出现“语气很肯定但事实不对”的情况。

做产品时，AI Engineer 要把 LLM 当作一个强大的语言和推理部件，而不是完整系统。它需要业务资料、权限过滤、输出格式约束、敏感内容处理、引用和评估。尤其是企业知识问答、医疗、法律、财务、招聘等场景，模型不能只凭训练记忆回答，必须接入可追溯资料和人工兜底。

## 实践建议

- 先理解 prompt、token、context window、temperature、streaming、tool calling 这些基础概念，再上复杂框架。
- 用 LLM 做知识问答时，不要只靠模型记忆。业务资料应该通过 RAG 或工具调用提供。
- 给重要任务准备 eval。比如摘要、分类、客服回复，都要有固定样例和人工认可的判断标准。
- 记录每次调用的模型、prompt 版本、输入长度、输出长度、延迟、成本和失败原因。
- 设计降级方案。模型超时、上下文太长、返回格式不对时，产品不能直接卡死。

## 常见误区

- **误区一：LLM 是搜索引擎。** 它可以生成答案，但不等于自动查证事实。需要事实可靠性时，要接检索、引用和校验。
- **误区二：参数越大一定越适合。** 大模型通常更强，也可能更慢、更贵。很多分类、抽取、固定格式任务，小模型或规则就够用。
- **误区三：prompt 写好就万事大吉。** 真实系统还需要权限过滤、数据清洗、输出校验、监控和安全防护。
- **误区四：一次回答正确就说明功能可靠。** LLM 输出有随机性，必须用样例集和线上观测看整体表现。

## 延伸阅读

- [Cloudflare：What is a large language model?](https://www.cloudflare.com/learning/ai/what-is-large-language-model/)
- [IBM：What Are Large Language Models?](https://www.ibm.com/think/topics/large-language-models)
- [Stanford HAI：What is a Large Language Model?](https://hai.stanford.edu/ai-definitions/what-is-a-llm)
- [Microsoft Azure：What are large language models?](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-are-large-language-models-llms)
- [Microsoft Learn：Introduction to large language models](https://learn.microsoft.com/en-us/training/modules/introduction-large-language-models/)
- [NVIDIA：Large Language Models Explained](https://www.nvidia.com/en-eu/glossary/large-language-models/)
- [nilbuild/developer-roadmap：large-language-model-llm@wf2BSyUekr1S1q6l8kyq6.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/large-language-model-llm%40wf2BSyUekr1S1q6l8kyq6.md)
