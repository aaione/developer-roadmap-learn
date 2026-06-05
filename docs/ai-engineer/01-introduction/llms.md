# 什么是 LLM？

## 学习目标

读完这一节，你应该能解释：

- LLM 为什么能生成、摘要、翻译、问答和写代码。
- token、prompt、context、inference 这些词大概指什么。
- 使用 LLM 做产品时，应该先关注哪些工程限制。

## 概念解释

LLM 是 Large Language Model，大语言模型。它经过大量文本和代码数据训练，学会根据上下文预测下一个 token。这里的 token 可以粗略理解成模型处理文本时的“小片段”，可能是一个字、一个词，也可能是词的一部分。

LLM 的强大，主要来自三件事：

- **大量数据**：模型看过很多语言和代码样例，因此能学到表达、结构、知识线索和常见模式。
- **Transformer 架构**：self-attention 让模型能在一段文本里判断哪些 token 更相关，而不是只按顺序读前后几个词。
- **推理时逐步生成**：用户给出 prompt 后，模型把输入转成 token 和向量表示，再一步步预测后续 token，直到生成完整回答。

这也解释了为什么 LLM 看起来像在“思考”，但并不是传统意义上的数据库查询。它生成的是概率上合理的文本，不保证每句话都来自事实来源。做产品时，AI Engineer 要给它补上下文、设边界、做验证，并在必要时接入工具或检索系统。

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
- [NVIDIA：Large Language Models Explained](https://www.nvidia.com/en-eu/glossary/large-language-models/)
- [roadmap.sh 原始章节：LLMs](https://roadmap.sh/ai-engineer)

## 本次参考

- [Cloudflare：What is a large language model?](https://www.cloudflare.com/learning/ai/what-is-large-language-model/)
- [IBM：What Are Large Language Models?](https://www.ibm.com/think/topics/large-language-models)
- [Stanford HAI：What is a Large Language Model?](https://hai.stanford.edu/ai-definitions/what-is-a-llm)
- [Microsoft Azure：What are large language models?](https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-are-large-language-models-llms)
- [Microsoft Learn：Introduction to large language models](https://learn.microsoft.com/en-us/training/modules/introduction-large-language-models/)
- [NVIDIA：Large Language Models Explained](https://www.nvidia.com/en-eu/glossary/large-language-models/)
- 原项目文件：`developer-roadmap/src/data/roadmaps/ai-engineer/content/large-language-model-llm@wf2BSyUekr1S1q6l8kyq6.md`
