# 预训练模型的限制和选型考虑

## 学习目标

读完这一节，你应该能判断：

- 预训练模型为什么不是“直接拿来就能上线”的万能部件。
- 使用 foundation model 或 pre-trained model 时要重点评估哪些风险。
- RAG、fine-tuning、自托管和商业 API 分别会带来什么取舍。
- 在产品评审里，怎样把模型能力、数据边界、成本和安全放到同一张表里看。

## 概念解释

developer-roadmap 图谱把这一节放在 `Pre-trained Models` 主题下，紧跟“预训练模型的好处”。原始仓库没有为这个图节点提供独立 Markdown 正文，但上一节 `Pre-trained Models` 的核心定义仍然适用：预训练模型是在大规模数据上提前训练过的机器学习模型，已经学到模式、特征和表示，可以被 fine-tune 或适配到相关任务上。它能节省从零训练所需的数据和算力，但这些优势也带来了新的限制。

预训练模型的第一层限制来自训练数据。模型学到的是历史数据里的统计规律，它可能不知道你的公司制度、最新价格、内部术语和实时状态，也可能继承数据里的偏见。Foundation model 越通用，越需要在产品侧补上明确上下文、权限和评估。

第二层限制来自运行方式。商业 API 上手快，但会受供应商模型版本、价格、速率限制、数据处理条款影响；自托管模型可控性更高，但要承担 GPU、部署、监控、升级和安全成本。开源模型不等于没有约束，许可证、训练数据透明度和商用限制都要看清楚。

第三层限制来自生成式模型本身。LLM 可能幻觉，可能把不确定的内容说得很像事实；Embedding 可能召回语义相近但并不适合回答的材料；多模态模型可能误读图片细节。AI Engineer 的工作不是假设模型永远正确，而是设计一个能承认不确定、能追溯来源、能限制权限、能回滚问题的系统。

一个比较实用的评估框架是：

<div class="flow-branch" aria-label="预训练模型上线评估框架">
  <span class="flow-question">模型能完成任务吗？</span>
  <span class="flow-path"><span class="flow-step">能力测试</span><span class="flow-step">真实样例评估</span></span>
  <span class="flow-question">模型知道该知道的资料吗？</span>
  <span class="flow-path"><span class="flow-step">Prompt</span><span class="flow-step">RAG</span><span class="flow-step">Fine-tuning</span></span>
  <span class="flow-question">系统能控制风险吗？</span>
  <span class="flow-path"><span class="flow-step">权限</span><span class="flow-step">引用</span><span class="flow-step">拒答</span><span class="flow-step">日志</span></span>
  <span class="flow-question">上线后可持续吗？</span>
  <span class="flow-path"><span class="flow-step">成本</span><span class="flow-step">延迟</span><span class="flow-step">供应商依赖</span><span class="flow-step">维护人力</span></span>
</div>

IBM、AWS、Google Cloud 和 Hugging Face 的资料都反复提醒：foundation model 很强，但应用方仍然要处理偏见、隐私、可解释性、成本和任务适配。Stanford CRFM 的综述则把 foundation model 的机会和风险放在一起讨论：规模和通用性让模型更容易迁移到新任务，也让错误、偏见和不可预期行为更难定位。

## 实践建议

- 先做小型评估集。准备真实问题、边界问题、错误输入和不可回答问题，再比较模型表现。
- 把模型知识和业务知识分开。模型不懂内部资料时，优先用 RAG 或工具查询，不要指望它凭空知道。
- 明确数据边界。哪些数据可以发给商业 API，哪些必须本地处理，哪些需要脱敏或审计，要在接入前定好。
- 记录成本模型。输入 token、输出 token、Embedding 重建、向量库、重排、缓存和人工复查都要算进去。
- 给模型升级留回归测试。模型版本变化后，同一个 prompt 的输出可能变，重要流程要能回放和比较。

## 常见误区

- **误区一：预训练模型越新越适合当前业务。** 新模型可能更强，也可能在你的格式、语言、延迟或成本要求上不合适。
- **误区二：RAG 可以修复所有幻觉。** RAG 只能提供资料和召回依据，仍然会受 chunk、检索、重排和提示词影响。
- **误区三：fine-tuning 能把模型变成数据库。** Fine-tuning 更适合学习格式、风格或稳定分类边界，不适合频繁更新的事实知识。
- **误区四：开源模型一定更安全。** 自托管减少了部分外部传输风险，但你仍然要负责访问控制、补丁、日志和模型输出安全。

## 延伸阅读

- [IBM：What are foundation models?](https://www.ibm.com/think/topics/foundation-models)
- [AWS：What are Foundation Models?](https://aws.amazon.com/what-is/foundation-models/)
- [Google Cloud：Foundation models on Vertex AI](https://cloud.google.com/vertex-ai/generative-ai/docs/learn/models)
- [Hugging Face：Model cards](https://huggingface.co/docs/hub/model-cards)
- [Stanford CRFM：On the Opportunities and Risks of Foundation Models](https://arxiv.org/abs/2108.07258)
- [NIST：Artificial Intelligence Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [nilbuild/developer-roadmap：pre-trained-models@d7fzv_ft12EopsQdmEsel.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/pre-trained-models%40d7fzv_ft12EopsQdmEsel.md)
