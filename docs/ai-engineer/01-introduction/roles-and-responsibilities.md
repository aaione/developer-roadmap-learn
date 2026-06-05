# AI Engineer 的角色和职责

![AI Engineer 角色和职责黑板报配图](/images/ai-engineer/roles-and-responsibilities.png)

## 学习目标

学完这一节，你应该能判断：

- AI Engineer 每天主要在做什么。
- 这个岗位和软件工程师、数据科学家、ML Engineer 分别怎么协作。
- 一个 AI 功能从需求到上线，中间有哪些责任不能漏。
- 哪些职责属于生产系统，而不是 Demo 阶段的临时脚本。

## 概念解释

developer-roadmap 原文把 AI Engineer 的职责概括为：设计、开发和部署能解决真实问题的 AI 系统；构建模型、数据处理管道，把 AI 方案集成到现有软件或平台中；处理数据收集、清洗、标注、训练、测试、优化、扩展、监控和故障排查；并与数据科学家、软件开发者和业务方协作，让方案可靠、高效、符合伦理。这个描述覆盖面很广，实际落到大模型应用时，可以理解成“让模型能力进入生产系统，并持续对结果负责”。

AI Engineer 不是只写 prompt，也不是只调 API。更常见的职责包括：

- **理解业务场景**：把“我们想用 AI”翻译成一个明确任务，例如分类、摘要、检索、生成、问答或自动执行。
- **选择模型和接口**：根据质量、成本、延迟、上下文长度、数据合规要求，选择合适的模型或供应商。
- **搭建数据和上下文链路**：处理文档、知识库、向量检索、用户状态、权限过滤，让模型拿到该看的信息。
- **实现产品集成**：把 AI 能力接到 Web、移动端、内部系统、工作流或后台任务里。
- **评估和监控**：用 eval、日志、人工抽检和线上指标持续检查效果。
- **处理安全和隐私**：包括 prompt injection、敏感数据、越权访问、内容审核和审计记录。

一个比较实用的分工方式是看生命周期：

<div class="flow-diagram" aria-label="AI Engineer 的职责生命周期">
  <span class="flow-step">需求澄清</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">任务拆解与成功标准</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">数据、权限、上下文设计</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">模型选择与 Prompt / RAG 实现</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">离线评估和人工抽检</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">产品集成与发布</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">监控、反馈、成本控制</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">迭代或回滚</span>
  <span class="flow-arrow">↺</span>
</div>

Workable、Indeed、Coursera、IBM 这类岗位说明通常会同时提到模型、数据、软件、部署和协作。原因很简单：AI Engineer 的输出不是一份模型报告，而是一个可运行的能力。它要能接住真实用户输入，要能解释失败原因，也要能在模型升级、数据变化、成本上升时继续维护。

一句话说，AI Engineer 要对“模型输出是否能在产品里可靠工作”负责。不是每句话都必须完美，但系统要知道什么时候可以回答、什么时候应该拒答、什么时候需要人工接手。

## 实践建议

- 写需求时，把输入、输出、拒答条件和成功标准写清楚。
- 评估模型时，不只看单次回答，要用一组固定样例反复测试。
- 为每个 AI 调用记录必要日志：模型版本、prompt 版本、检索命中文档、延迟、成本和用户反馈。
- 和产品、设计、后端、安全团队尽早对齐边界。AI 功能越靠近用户数据，越不能晚到上线前才做安全审查。
- 重要场景保留人工兜底。比如医疗、法律、财务、招聘筛选等领域，AI 输出通常只能辅助决策。

## 常见误区

- **误区一：AI Engineer 就是 Prompt Engineer。** Prompt 很重要，但生产系统还需要数据、服务端集成、评估、监控和安全。
- **误区二：只要模型更强，工程就简单。** 模型升级可能改变输出格式、成本、延迟和失败模式，工程约束不会消失。
- **误区三：所有问题都适合 fine-tuning。** 很多业务问题先用 prompt、RAG、工具调用和规则约束就能解决。
- **误区四：上线后不用管。** 用户输入、业务数据和模型版本都会变，AI 功能需要持续观测。

## 延伸阅读

- [Workable：AI Engineer Job Description](https://resources.workable.com/ai-engineer-job-description)
- [Indeed：How To Become an AI Engineer](https://www.indeed.com/career-advice/finding-a-job/ai-engineer)
- [Coursera：What Is an AI Engineer?](https://www.coursera.org/articles/ai-engineer)
- [IBM：What is an AI Developer?](https://www.ibm.com/think/topics/ai-developer)
- [Codecademy：What Does an AI Engineer Do?](https://www.codecademy.com/resources/blog/what-does-an-ai-engineer-do/)
- [nilbuild/developer-roadmap：roles-and-responsiblities@K9EiuFgPBFgeRxY4wxAmb.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/roles-and-responsiblities%40K9EiuFgPBFgeRxY4wxAmb.md)
