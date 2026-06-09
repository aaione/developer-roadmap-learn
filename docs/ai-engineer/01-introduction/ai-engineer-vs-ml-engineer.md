# AI Engineer 和 ML Engineer 的区别

一句话说清楚：**AI Engineer 用现成的模型解决产品问题，ML Engineer 创建或改进模型本身**。前者的主战场是产品集成，后者的主战场是模型和数据。

这个区别听起来简单，但它背后有真实的历史原因，也直接影响你该学什么、往哪个方向走。

## 为什么会有这两个角色

在大语言模型出现之前，"用 AI"基本等于"造 AI"——你要做一个能分类文本的功能，就需要收集数据、训练模型、调参、部署，这套活通常是同一个人做的。

2020 年之后，这件事发生了根本性的变化。OpenAI、Google、Anthropic 等公司发布了已经训练好的大型语言模型，通过 API 就能调用，不需要任何训练经验。一个后端工程师调几行代码，就能让模型帮用户总结文章、回答问题、生成代码。

这就把原来一件事拆成了两件：

- 有人专门负责**训练和改进模型**——这是 ML Engineer 一直在做的事
- 有人专门负责**把模型能力接进产品**——这是 AI Engineer 这个新角色出现的原因

所以这两个岗位不是同一件事的深浅之别，而是分工不同、面对的核心问题不同。

## 各自在解决什么问题

**AI Engineer** 的典型工作场景：公司想让内部员工能用自然语言查公司文档和制度。AI Engineer 的任务是：把文档整理好，设计一套检索方式，决定每次用户提问时给模型看哪些内容，处理权限（哪些人不能看哪些文件），设计回答格式，处理"不知道"的情况，监控效果和成本。整个过程不需要训练任何模型，重点是把现有模型能力稳定地接进这个业务场景。

**ML Engineer** 的典型工作场景：同一家公司发现，通用模型在处理公司专有术语时经常出错。ML Engineer 的任务是：整理一批有标注的正确问答，选择合适的训练方式，跑实验记录每个版本的效果，把训练好的模型部署成服务，上线后持续监控效果有没有下滑。

如果效果不够好，他需要回到数据端重新优化。他的工作重心不只是"训练一次"，而是**数据和模型的完整生命周期**——从数据准备、模型训练、部署上线，到持续监控和迭代改进。

两个角色面对同一个需求，切入点完全不同。AI Engineer 问的是"怎么把现成模型接进来用好"，ML Engineer 问的是"怎么用数据和训练让模型本身变得更好"。

## 关键差异在哪里

| 维度 | AI Engineer | ML Engineer |
| --- | --- | --- |
| 核心问题 | 怎么把 AI 能力稳定接进产品 | 怎么用数据创建或改进一个模型，并让它持续可靠 |
| 日常工作 | API 集成、上下文设计、效果评估、权限安全、成本监控 | 数据准备、模型训练、实验追踪、部署服务、效果衰退监控 |
| 成功标准 | 用户用起来效果好、系统稳定可靠 | 模型指标达标、在真实场景表现稳定且不退化 |
| 和模型的关系 | 使用模型为主 | 创建或修改模型，管理模型的全生命周期 |

两者都要求扎实的软件工程能力——日志、测试、部署、监控、故障处理，这些不会因为用了 AI 就消失。

### 技能侧重

两个角色的工程基础是相通的，差别在于日常工作最常调用的技能：

| 技能方向 | AI Engineer 侧重 | ML Engineer 侧重 |
| --- | --- | --- |
| 模型相关 | 给模型设计输入内容（提示词）、管理上下文、接入工具 | 特征设计、模型选型、训练调参、实验管理 |
| 数据相关 | 文档整理、检索设计、元数据和权限管理 | 数据清洗、标注、采样、数据集版本管理 |
| 基础设施 | API 服务、后端框架、可观测性 | PyTorch/TensorFlow、训练集群、模型部署 |

不需要现在就理解表格里的每个词——后面 roadmap 的各个章节会逐一展开。这里只需建立一个印象：两者共享工程底座，但日常着力点不同。

## 两者的关系：接力，不是对立

很多人把这两个岗位理解成竞争关系，实际上更像是一条产品线上的不同阶段。

一个新功能上线的典型路径是：先由 AI Engineer 用现成模型快速验证方案，上线跑一段时间，积累了足够多的真实数据和明确的瓶颈之后，如果通用模型的效果确实不够用，才轮到 ML Engineer 介入，用这批数据训练一个更合适的模型。

在小团队里，一个人可能同时承担两边的工作。这时候岗位标题没那么重要，重要的是你清楚自己当前在解决哪类问题——在接入模型还是在改进模型。

大公司里两个角色分工更清晰，也会有协作：AI Engineer 发现某个场景效果持续不稳定，提出训练需求；ML Engineer 负责改进模型，交付给 AI Engineer 集成进产品。

这两个岗位之外，还有一个相邻角色值得区分——**AI Researcher**。如果说 AI Engineer 是"用模型做产品"、ML Engineer 是"用数据做模型"，那 AI Researcher 是"推进模型能力本身的边界"——研究新的算法架构和训练方法，产出是论文和新知识，而不是产品功能。大多数公司不需要自研模型，AI Researcher 主要集中在大型实验室。对于这个 roadmap 的目标读者来说，AI Engineer 是最实际的起步方向。

## 这对你意味着什么

如果你是 0~3 年的开发者还不确定该往哪个方向走，最直接的办法是**各做一个小项目**：花两周做一个"上传文档后用自然语言问答"的工具（AI Engineer 路径），再花两周用公开数据集训练一个分类模型并部署成 API（ML Engineer 路径）。哪个让你更想继续往深处挖，就先往那个方向走。

如果还是难以判断，可以对照下面的倾向信号：

- **倾向 AI Engineer**：更享受把功能做进产品、让用户真正用起来；对后端系统、API 设计、产品稳定性更感兴趣；想快速上线然后根据反馈迭代。
- **倾向 ML Engineer**：更享受在数据和实验里调出一个准确的模型；对数学和统计有兴趣；喜欢系统性地做实验、记录指标、分析原因。

还可以用这个判断流快速定位：

<div class="flow-branch" aria-label="AI Engineer 和 ML Engineer 分工判断">
  <span class="flow-question">日常主要工作是从零训练或大规模再训练模型吗？</span>
  <span class="flow-path"><span class="flow-step">是：更偏 ML Engineer / MLOps</span><span class="flow-step">否：继续</span></span>
  <span class="flow-question">主要工作是组装模型、工具和产品流程吗？</span>
  <span class="flow-path"><span class="flow-step">是：更偏 AI Engineer</span><span class="flow-step">否：继续</span></span>
  <span class="flow-question">主要是研究新算法或推进模型能力边界吗？</span>
  <span class="flow-path"><span class="flow-step">是：更偏 AI Researcher</span><span class="flow-step">否：可能是后端、数据工程或产品工程</span></span>
</div>

招聘标题不可靠这一点也值得留意：AI Engineer、LLM Engineer、Applied AI Engineer、ML Engineer 在不同公司含义不一样。面试前直接问："这个岗位是以集成现成模型为主，还是需要自己训练模型？"——一个问题就能定位清楚。

## 下一步怎么学

选定了 AI Engineer 方向：先从理解 LLM 的基本概念和 API 调用开始，逐步掌握提示词管理、检索增强（RAG）、效果评估和基本可观测性，再扩展到 Agent 和工具调用。这正是这个 roadmap 接下来要覆盖的主线——下一章我们会讲 LLM 是什么、怎么工作的。

选定了 ML Engineer 方向：从 Python 数据处理和一个完整的"训练-评估-部署"小项目开始，逐步学特征工程、实验管理（MLflow）和生产部署。这一块在 roadmap 的 MLOps 和模型训练章节有专门覆盖。

两条路线都值得补两块基础：软件工程能力（测试、日志、部署、监控）能帮 ML Engineer 把模型推进生产；机器学习基本概念（模型能力边界、过拟合、评估指标）能帮 AI Engineer 判断模型什么时候会失效。

## 延伸阅读

- [Codecademy：How To Become an AI Engineer in 2026](https://www.codecademy.com/resources/blog/how-to-become-an-ai-engineer/)
- [Coursera：What Is a Machine Learning Engineer?](https://www.coursera.org/articles/what-is-machine-learning-engineer)
- [TechTarget：What Is a Machine Learning Engineer?](https://www.techtarget.com/searchenterpriseai/definition/machine-learning-engineer-ML-engineer)
- [Towards Data Science：Machine Learning vs AI Engineer — No Confusing Jargon](https://towardsdatascience.com/machine-learning-vs-ai-engineer-no-confusing-jargon/)
- [CSP Global：Machine Learning Engineer vs. AI Engineer](https://online.csp.edu/resources/article/machine-learning-engineer-guide/)
- [nilbuild/developer-roadmap：ai-engineer-vs-ml-engineer@jSZ1LhPdhlkW-9QJhIvFs.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/ai-engineer-vs-ml-engineer%40jSZ1LhPdhlkW-9QJhIvFs.md)
