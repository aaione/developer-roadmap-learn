# AI 和 AGI 的区别

## 学习目标

读完这一节，你应该能判断：

- 今天常见的 AI 系统和 AGI 之间差在哪里。
- 为什么 AGI 仍然是研究目标，而不是已经成熟的产品类别。
- 在做 AI 应用时，为什么不应该把 AGI 叙事直接当成产品假设。
- 如何把“模型能力展示”和“稳定产品能力”分开看。

## 概念解释

developer-roadmap 原文把 AI 和 AGI 的区别放在能力范围上：AI 是为特定任务设计的系统，会模拟人类智能的某些方面，比如模式识别、决策和语言处理；这类系统通常被称为 narrow AI。AGI 则是一种理论上的通用智能，能够在很宽的任务范围内理解、学习和迁移知识，接近人类层面的适应能力。当前 AI 已经很强，但 AGI 仍是远期目标，还涉及安全、伦理和技术可行性问题。

AI 是一个大范围概念。今天我们用到的大多数 AI 都是“窄 AI”：它可以在某个任务上表现很好，比如图片识别、语音转文字、推荐、摘要、代码补全或客服问答。它可以很强，但强在特定边界内。一个模型能写代码，不代表它能可靠经营公司；能通过某些考试，也不代表它能在所有开放环境里独立学习和行动。

AGI 是 Artificial General Intelligence，通常译作通用人工智能。不同机构对 AGI 的定义并不完全一致。OpenAI 的 Charter 把 AGI 描述为能在多数有经济价值的工作上超过人类的高度自主系统；DeepMind 的 Levels of AGI 论文则把能力广度、能力深度和自主性拆开分级。AWS、IBM、TechTarget 等解释也大多强调同一点：AGI 不是“聊天更像人”，而是跨领域学习、推理和迁移能力的组合。

<div class="flow-diagram" aria-label="从窄 AI 到 AGI 的能力范围">
  <span class="flow-step">窄 AI</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">特定任务表现强</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">可通过工程约束进入产品</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">更通用的模型能力</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">跨任务迁移与自主执行</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">AGI：仍是研究目标</span>
</div>

对 AI Engineer 来说，最实用的理解是：你现在做的产品大概率不是 AGI 产品，而是利用现有模型解决明确任务。用户需要的是稳定、可控、可解释的功能，不是一个没有边界的“通用智能承诺”。把 AGI 当作灵感可以，把 AGI 当作产品需求就很危险，因为它会掩盖输入边界、权限边界、失败责任和验收标准。

## 实践建议

- 需求评审时，把“AI 能不能做”改成“在什么输入、什么资料、什么约束下能做”。
- 不要把模型偶尔完成复杂任务理解成它已经具备通用能力。能力展示和稳定产品之间还有距离。
- 对外文案少用“接近 AGI”“类人智能”这类说法，除非你有非常清楚的定义和证据。
- 给 AI 功能设计边界：哪些问题能答，哪些必须拒答，哪些需要转人工。
- 关注当前系统的真实风险，比如幻觉、越权、隐私、偏见、自动化误操作，而不是只讨论遥远的 AGI 风险。

## 常见误区

- **误区一：LLM 很会聊天，所以就是 AGI。** 会聊天不等于能跨所有领域可靠学习和行动。语言能力强，只说明它在语言任务上很有用。
- **误区二：AGI 有统一定义。** 没有。学术界、公司、媒体和投资语境里的 AGI，经常指向不同标准。
- **误区三：窄 AI 就不重要。** 现在真正改变产品和业务的，大多仍是窄 AI：检索、摘要、分类、推荐、辅助编程、自动审核。
- **误区四：讨论 AGI 就能替代工程评估。** 产品上线看的是质量、延迟、成本、安全、可维护性和用户结果。

## 延伸阅读

- [AWS：What is AGI?](https://aws.amazon.com/what-is/artificial-general-intelligence/)
- [IBM：What is Artificial General Intelligence?](https://www.ibm.com/think/topics/artificial-general-intelligence)
- [OpenAI Charter](https://openai.com/charter/)
- [TechTarget：Artificial General Intelligence Definition](https://www.techtarget.com/searchenterpriseai/definition/artificial-general-intelligence-AGI)
- [DeepMind / arXiv：Levels of AGI](https://arxiv.org/abs/2311.02462)
- [Britannica：Is artificial general intelligence possible?](https://www.britannica.com/technology/artificial-intelligence/Is-artificial-general-intelligence-AGI-possible)
- [Bain：What is Artificial General Intelligence?](https://www.bain.com/insights/essentials/what-is-artificial-general-intelligence-agi/)
- [nilbuild/developer-roadmap：ai-vs-agi@5QdihE1lLpMc3DFrGy46M.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/ai-vs-agi%405QdihE1lLpMc3DFrGy46M.md)
