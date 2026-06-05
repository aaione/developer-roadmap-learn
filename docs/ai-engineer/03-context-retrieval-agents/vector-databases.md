# 向量数据库：让语义检索跑起来

## 学习目标

读完这一节，你应该能说清楚：

- 向量数据库为什么适合存储和检索 Embedding。
- 语义搜索、关键词搜索和混合搜索有什么差别。
- 在 RAG 或推荐系统里，向量库通常负责哪一段工作。
- 设计向量库时要关注哪些工程问题：维度、索引、元数据、过滤、更新和成本。

## 概念解释

developer-roadmap 原文把 Vector Databases 描述为专门存储、索引和检索高维向量的系统。文本、图片或音频被模型转成 Embedding 后，就可以放进向量数据库。查询时，系统比较向量之间的距离，找出最相近的内容。它常用于语义搜索、推荐系统和内容发现，也会用近似最近邻搜索来处理大规模数据。

换成更直白的说法：传统数据库擅长回答“字段等于什么”“时间在什么范围内”这类精确问题；向量数据库擅长回答“这段话和哪些内容意思接近”。例如用户问“公司报销打车费要什么凭证”，文档里可能写的是“交通费用需提供电子发票和行程单”。关键词不完全相同，但语义接近，向量检索就能把它找出来。

向量库通常不是单独工作的。一个可用的检索系统会把原文、向量、元数据和权限规则放在一起处理：

<div class="flow-diagram" aria-label="向量数据库检索流程">
  <span class="flow-step">原始资料</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">切分 Chunk</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">生成 Embedding</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">写入向量数据库</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">相似度检索</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">元数据和权限过滤</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">返回候选片段</span>
</div>

这里有几个细节很容易被低估。第一，向量维度要和 Embedding 模型匹配，换模型时不能随便把新旧向量混在一个索引里。第二，近似最近邻搜索追求速度，不一定每次都返回数学上最精确的最近点，所以要关注召回率和延迟。第三，元数据过滤很重要。企业知识库里常见部门、租户、语言、时间、文档类型、权限标签，如果只做向量相似度，很容易把不该看的内容也召回。

不少向量数据库现在也支持混合搜索：稠密向量负责语义相似，稀疏向量或全文索引负责关键词、产品名、代码、编号。真实业务里这很有用。比如“ERR-1042 支付失败”这种查询，编号比语义更重要；“用户无法完成付款”这种查询，语义更重要。混合检索让系统可以同时看这两类信号。

## 实践建议

- 先明确检索目标。FAQ、合同、代码、图片和商品推荐的切分方式、Embedding 模型和过滤字段都不一样。
- 给每条向量保留原文片段、来源 URL、更新时间、权限标签和业务 ID。后续调试、展示引用和删除数据都要用。
- 不要只测 top-1 命中。RAG 常会取 top-5 或 top-10，再重排或交给模型阅读，评估时要看召回、排序和最终答案。
- 对专有名词、编号、错误码和人名使用混合搜索。纯语义检索可能把“看起来意思接近”的内容排在精确匹配前面。
- 建立重建索引流程。切分策略、Embedding 模型或元数据结构变更时，要能批量重算、灰度切换和回滚。

## 常见误区

- **误区一：有了向量库，搜索就自然准确。** 向量库只负责存和找。资料质量、切分、Embedding 模型、过滤、重排和评估都会影响结果。
- **误区二：相似度最高就一定最有用。** 用户问题可能需要最新政策、特定租户数据或精确关键词。相似度只是一个信号。
- **误区三：元数据以后再补。** 权限、来源和时间字段应该从第一天就设计进去。上线后再补，往往要重建索引。
- **误区四：所有内容都适合向量化。** 表格里的金额、日期、状态码和严格枚举字段，很多时候用 SQL 或全文检索更稳。

## 延伸阅读

- [Pinecone Docs：Concepts](https://docs.pinecone.io/guides/get-started/concepts)
- [Cloudflare Vectorize：Vector databases](https://developers.cloudflare.com/vectorize/reference/what-is-a-vector-database/)
- [Qdrant Docs：Search](https://qdrant.tech/documentation/concepts/search/)
- [Milvus Docs：What is Milvus](https://milvus.io/docs/overview.md)
- [pgvector：Open-source vector similarity search for Postgres](https://github.com/pgvector/pgvector)
- [nilbuild/developer-roadmap：vector-databases@tt9u3oFlsjEMfPyojuqpc.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/vector-databases%40tt9u3oFlsjEMfPyojuqpc.md)
