# 什么是 AI Engineer？

![什么是 AI Engineer 黑板报配图](/images/ai-engineer/what-is-an-ai-engineer.png)

## 学习目标

学完这一节，你应该能回答：

- AI Engineer 是什么，不是什么。
- 这个岗位为什么在大模型普及后变得更常见。
- 一个 AI 功能从模型调用到产品上线，中间要补哪些工程环节。
- 初学者应该先补哪些基础，而不是一上来追工具列表。

## 概念解释

developer-roadmap 对这一节的定义很直接：AI Engineer 是设计、开发和实现 AI 系统的人，这些系统会让机器完成过去通常需要人类智能参与的任务，比如问题求解、学习和决策。这个定义要保留，但放到今天的大模型产品里，还需要再往下拆一层。

AI Engineer 的核心工作不是“会不会问 ChatGPT”，也通常不是从零训练基础大模型。更常见的工作，是把 LLM、Embedding、RAG、工具调用、业务数据和软件系统接起来，让用户在产品里完成一个具体任务。比如客服工单自动摘要、企业知识库问答、合同条款抽取、代码解释、销售线索分级、运营报表生成。这些功能看起来是模型在回答，背后其实有一串工程链路。

<div class="flow-diagram" aria-label="AI 功能进入产品的工程链路">
  <span class="flow-step">用户任务</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">业务数据与权限</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">Prompt / Context 组装</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">模型或工具调用</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">输出校验与安全过滤</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">产品界面或自动化流程</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">日志、反馈、评估</span>
  <span class="flow-arrow">↺</span>
</div>

和传统软件工程相比，AI Engineering 多了一层不确定性。普通函数输入相同，通常应该返回相同结果；LLM 则会受 prompt、上下文、采样参数、模型版本和外部工具结果影响。一次 Demo 看起来没问题，不代表线上用户的长输入、脏数据、越权问题和高并发都能兜住。

这也是为什么 AI Engineer 需要同时理解三件事：软件工程的基本盘、模型行为的边界、产品场景的成功标准。Coursera、TechTarget、IBM 等职业介绍都把编程、数据、机器学习基础、系统集成和部署能力放在一起讲，本质原因就在这里：AI 功能不是孤立脚本，它最后要进入真实业务流程。

## 实践建议

如果你刚开始学，可以这样安排：

1. 先掌握 Web/API 基础。AI 功能最终还是要跑在应用里，鉴权、错误处理、异步任务、数据库和日志都绕不开。
2. 学会调用至少一个主流 LLM API，理解 message、token、temperature、streaming、tool calling、structured output 这些概念。
3. 做一个小项目，例如“上传 PDF 后问答”或“客服工单自动摘要”。项目要有真实输入、失败兜底和可复查日志。
4. 给项目加 eval。不要只看自己试的两三个问题，要准备固定测试集，记录好答案、坏答案和不该回答的样例。
5. 再学习 RAG、Agent、Embedding、向量数据库和安全议题。顺序上先把一个窄场景做稳，再扩展复杂能力。

## 常见误区

- **误区一：必须先学完整机器学习数学。** 数学有帮助，但 AI Engineer 的入门路径通常先从应用、API、数据流和评估开始。
- **误区二：会聊天工具就会做 AI 产品。** 使用 ChatGPT 和构建一个可靠的 AI 功能，中间隔着权限、上下文、监控、成本和安全。
- **误区三：AI Engineer 不需要软件工程能力。** 正好相反，错误处理、测试、部署、观测和回滚这些基础会直接决定产品能不能用。
- **误区四：只追最新模型。** 模型会变，但任务拆解、上下文管理、评估和安全边界是更耐用的能力。

## 延伸阅读

- [Coursera：What Is an AI Engineer?](https://www.coursera.org/articles/ai-engineer)
- [TechTarget：AI Engineers: What they do and how to become one](https://www.techtarget.com/whatis/feature/How-to-become-an-artificial-intelligence-engineer)
- [IBM：What is an AI Developer?](https://www.ibm.com/think/topics/ai-developer)
- [Codecademy：What Does an AI Engineer Do?](https://www.codecademy.com/resources/blog/what-does-an-ai-engineer-do/)
- [Simplilearn：How to Become an AI Engineer](https://www.simplilearn.com/tutorials/artificial-intelligence-tutorial/how-to-become-an-ai-engineer)
- [nilbuild/developer-roadmap：what-is-an-ai-engineer@GN6SnI7RXIeW8JeD-qORW.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/what-is-an-ai-engineer%40GN6SnI7RXIeW8JeD-qORW.md)
