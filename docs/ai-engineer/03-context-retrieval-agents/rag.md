# RAG：把外部知识接进模型

## 学习目标

读完这一节，你应该能说清楚：

- RAG 为什么要把检索和生成放在一起。
- 一个基础 RAG 系统从提问到回答会经过哪些步骤。
- RAG 适合解决什么问题，又不适合替代什么。
- 为什么检索质量、引用、评估和数据治理比“接上向量库”更重要。

## 概念解释

developer-roadmap 原文把 RAG 描述为 Retrieval-Augmented Generation，也就是把信息检索和语言生成结合起来。系统先从知识库或外部数据源里找相关资料，再把这些资料交给语言模型生成回答。这样做可以让模型输出更贴近真实资料，适合问答、摘要和聊天机器人，尤其适合需要可靠、最新或私有知识的场景。

可以把 RAG 理解成给模型配了一个可查资料的工作台。模型本身有语言能力，但它不一定知道你的公司制度、产品文档、客户合同和今天刚更新的价格表。RAG 的做法不是重新训练模型，而是在每次回答前，把最相关的资料找出来，作为上下文交给模型。

一个基础 RAG 调用链通常长这样：

<div class="flow-diagram" aria-label="RAG 调用链">
  <span class="flow-step">用户问题</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">查询改写或补全</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">检索：向量 / 关键词 / 混合搜索</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">过滤和重排</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">拼接上下文与引用</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">LLM 生成回答</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">校验</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">返回答案</span>
</div>

RAG 的关键不只是“检索”。Google Cloud、AWS、IBM、NVIDIA 等资料都强调 grounding，也就是让生成内容有外部事实依据。论文里的 RAG 也把参数化知识和非参数化知识结合起来：模型负责表达和推理，外部语料负责提供可更新的知识。工程上看，这让系统可以在不重新训练模型的情况下更新知识库，也能把答案追溯到具体来源。

但 RAG 不是灵丹妙药。检索错了，模型会被错误上下文带偏；资料切得太碎，模型看不到完整逻辑；资料太长，成本和延迟会上升；权限过滤没做好，可能造成数据泄露。还有一种常见问题是“有引用但答错了”：模型引用了资料，却没有按资料回答。这需要评估集、人工抽查和线上日志一起盯。

## 实践建议

- 从真实问题开始做评估集。不要只拿演示问题测试，要收集用户真正会问的含糊问题、错别字、缩写和跨文档问题。
- 把 RAG 拆成可观测步骤。记录查询改写、召回片段、过滤规则、重排分数、最终 prompt 和模型输出。
- 保留引用和来源。面向用户的答案最好能给出处；内部调试也需要知道模型到底看了哪些资料。
- 先用简单方案跑通，再加复杂组件。很多场景从 chunk、Embedding、向量库、重排和引用校验就能起步。
- 定期清理知识库。过期文档、重复文档和冲突版本会让 RAG 变得不稳定。

## 常见误区

- **误区一：RAG 可以消灭幻觉。** RAG 能降低无依据回答的概率，但检索错误、prompt 设计不当和模型误读仍会出问题。
- **误区二：上下文越多越好。** 塞太多资料会增加成本，也会让模型忽略真正关键的片段。
- **误区三：只要向量检索就够了。** 业务查询经常包含编号、日期、人名和权限条件，混合搜索和元数据过滤通常更稳。
- **误区四：RAG 和 fine-tuning 二选一。** RAG 更适合接入可更新知识；fine-tuning 更适合固定风格、格式和任务习惯。两者可以组合。

## 延伸阅读

- [Google Cloud：What is Retrieval-Augmented Generation?](https://cloud.google.com/use-cases/retrieval-augmented-generation)
- [AWS：What is RAG?](https://aws.amazon.com/what-is/retrieval-augmented-generation/)
- [IBM Think：What is RAG?](https://www.ibm.com/think/topics/retrieval-augmented-generation)
- [NVIDIA Blog：What Is Retrieval-Augmented Generation?](https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/)
- [Lewis et al.：Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks](https://arxiv.org/abs/2005.11401)
- [nilbuild/developer-roadmap：rag@IX1BJWGwGmB4L063g0Frf.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/rag%40IX1BJWGwGmB4L063g0Frf.md)
