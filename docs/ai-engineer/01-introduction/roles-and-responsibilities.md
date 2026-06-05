# AI Engineer 的角色和职责

![AI Engineer 角色和职责黑板报配图](/images/ai-engineer/roles-and-responsibilities.png)

## 学习目标

学完这一节，你应该能判断：

- AI Engineer 每天主要在做什么。
- 这个岗位和软件工程师、数据科学家、ML Engineer 分别怎么协作。
- 一个 AI 功能从需求到上线，中间有哪些责任不能漏。

## 概念解释

AI Engineer 的工作重点是把 AI 能力接进真实产品。它不是只写 prompt，也不是只调 API。更常见的职责包括：

- **理解业务场景**：把“我们想用 AI”翻译成一个明确任务，例如分类、摘要、检索、生成、问答或自动执行。
- **选择模型和接口**：根据质量、成本、延迟、上下文长度、数据合规要求，选择合适的模型或供应商。
- **搭建数据和上下文链路**：处理文档、知识库、向量检索、用户状态、权限过滤，让模型拿到该看的信息。
- **实现产品集成**：把 AI 能力接到 Web、移动端、内部系统、工作流或后台任务里。
- **评估和监控**：用 eval、日志、人工抽检和线上指标持续检查效果。
- **处理安全和隐私**：包括 prompt injection、敏感数据、越权访问、内容审核和审计记录。

一句话说，AI Engineer 要对“模型输出是否能在产品里可靠工作”负责。

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

- [AI Engineer Job Description - Workable](https://resources.workable.com/ai-engineer-job-description)
- [How To Become an AI Engineer - Indeed](https://www.indeed.com/career-advice/finding-a-job/ai-engineer)
- [roadmap.sh 原始章节：AI Engineer 的角色和职责](https://roadmap.sh/ai-engineer)

## 本次参考

- [Workable: AI Engineer Job Description](https://resources.workable.com/ai-engineer-job-description)
- 原项目文件：`src/data/roadmaps/ai-engineer/content/roles-and-responsiblities@K9EiuFgPBFgeRxY4wxAmb.md`
