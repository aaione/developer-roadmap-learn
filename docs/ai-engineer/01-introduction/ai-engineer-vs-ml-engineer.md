# AI Engineer 和 ML Engineer 的区别

## 学习目标

读完这一节，你应该能说清楚：

- AI Engineer 和 ML Engineer 的工作重心分别在哪里。
- 为什么这两个岗位在不同公司里会有重叠。
- 初学者该怎么根据自己的兴趣选择学习路线。

## 概念解释

AI Engineer 更像“把 AI 能力做进产品的人”。他要把 LLM、Embedding、RAG、Agent、模型 API、业务数据和软件系统接起来，让用户真的能用上一个稳定的功能。日常工作会碰到接口设计、上下文管理、权限、日志、评估、监控、成本和失败兜底。

ML Engineer 更像“把机器学习模型做成可运行系统的人”。他通常更靠近数据、训练、实验、特征、模型评估和 MLOps。团队里如果需要从数据集开始训练模型、调参、部署预测服务、监控模型漂移，ML Engineer 往往会承担更多责任。

最容易混淆的地方在于：两者都需要软件工程能力，也都可能写 Python、用 PyTorch、处理数据、上线服务。区别不在工具名，而在主要问题。

| 维度 | AI Engineer | ML Engineer |
| --- | --- | --- |
| 核心目标 | 把现成或定制 AI 能力集成到产品里 | 训练、评估、部署和维护机器学习模型 |
| 常见输入 | 用户问题、业务文档、工具调用、模型 API | 数据集、特征、标签、实验结果 |
| 常见输出 | 聊天、检索、摘要、自动化工作流、智能功能 | 预测服务、分类器、推荐模型、训练流水线 |
| 更常碰到的问题 | prompt、context、RAG、延迟、成本、权限、安全 | 数据质量、训练效果、模型漂移、推理性能 |

在小团队里，一个人可能同时做两边。比如你既要接 OpenAI 或 Claude API 做问答，也要训练一个内部分类模型。这时岗位标题不重要，重要的是你知道自己正在解决哪类问题。

## 实践建议

- 如果你喜欢产品、后端、API、用户流程和快速落地，可以先走 AI Engineer 路线。
- 如果你喜欢数据、实验、模型指标和训练细节，可以把 ML Engineer 作为主线。
- 两条路线都要补软件工程基础。日志、测试、部署、监控、权限和故障处理不会因为用了 AI 就消失。
- 做作品集时，不要只放聊天 Demo。AI Engineer 项目最好能展示 RAG、eval、工具调用和线上观测；ML Engineer 项目最好能展示数据处理、训练记录、评估和部署。
- 面试时先问清楚岗位真实职责。有些公司说 AI Engineer，实际招的是后端；有些公司说 ML Engineer，实际偏平台和 MLOps。

## 常见误区

- **误区一：AI Engineer 不需要懂机器学习。** 不需要一开始就能写训练框架，但至少要理解模型能力、训练数据、过拟合、评估和偏差这些基本概念。
- **误区二：ML Engineer 只在 Notebook 里调模型。** 真正的 ML 工程会进入生产环境，涉及服务、监控、回滚、数据管道和协作流程。
- **误区三：岗位标题有统一标准。** 现实中没有。不同公司会把 AI Engineer、LLM Engineer、Applied AI Engineer、ML Engineer 混着用。
- **误区四：只会调 API 就够了。** 调 API 是入口，不是终点。可靠的 AI 功能还要处理异常输入、权限、成本、评估和用户反馈。

## 延伸阅读

- [Codecademy：How To Become an AI Engineer in 2026](https://www.codecademy.com/resources/blog/how-to-become-an-ai-engineer/)
- [Coursera：What Is an AI Engineer?](https://www.coursera.org/articles/ai-engineer)
- [Coursera：What Is a Machine Learning Engineer?](https://www.coursera.org/articles/what-is-machine-learning-engineer)
- [TechTarget：What Is a Machine Learning Engineer?](https://www.techtarget.com/searchenterpriseai/definition/machine-learning-engineer-ML-engineer)
- [IBM：What is an AI Developer?](https://www.ibm.com/think/topics/ai-developer)
- [roadmap.sh 原始章节：AI Engineer vs ML Engineer](https://roadmap.sh/ai-engineer)

## 本次参考

- [Codecademy：How To Become an AI Engineer in 2026](https://www.codecademy.com/resources/blog/how-to-become-an-ai-engineer/)
- [Codecademy：What Does an AI Engineer Do?](https://www.codecademy.com/resources/blog/what-does-an-ai-engineer-do/)
- [Coursera：What Is an AI Engineer?](https://www.coursera.org/articles/ai-engineer)
- [Coursera：What Is a Machine Learning Engineer?](https://www.coursera.org/articles/what-is-machine-learning-engineer)
- [TechTarget：What Is a Machine Learning Engineer?](https://www.techtarget.com/searchenterpriseai/definition/machine-learning-engineer-ML-engineer)
- [IBM：What is an AI Developer?](https://www.ibm.com/think/topics/ai-developer)
- [CSP Global：Machine Learning Engineer vs. AI Engineer](https://online.csp.edu/resources/article/machine-learning-engineer-guide/)
- 原项目文件：`developer-roadmap/src/data/roadmaps/ai-engineer/content/ai-engineer-vs-ml-engineer@jSZ1LhPdhlkW-9QJhIvFs.md`
