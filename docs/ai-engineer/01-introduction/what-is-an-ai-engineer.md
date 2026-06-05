# What is an AI Engineer?

![What is an AI Engineer 黑板报配图](/images/ai-engineer/what-is-an-ai-engineer.png)

## 学习目标

学完这一节，你应该能回答：

- AI Engineer 是什么，不是什么。
- 这个岗位为什么在大模型普及后变得更常见。
- 初学者应该先补哪些基础，而不是一上来追工具列表。

## 概念解释

AI Engineer 是把 AI 模型、工具和产品系统连起来的人。这个岗位通常不从零训练基础大模型，而是使用已有模型和平台，把它们变成用户能直接使用的功能。

常见例子包括：

- 给客服系统接入智能摘要和自动回复建议。
- 给知识库做语义搜索和 RAG 问答。
- 给内部运营系统增加文档分类、信息抽取和自动填表。
- 给开发工具接入代码解释、测试生成和自动修复建议。

和传统软件工程相比，AI Engineering 多了一层不确定性：模型输出不是固定函数返回值。同样的问题，换一种问法、换一段上下文、换一个模型版本，结果都可能变化。因此 AI Engineer 既要懂软件工程，也要懂模型行为、上下文设计和评估方法。

## 实践建议

如果你刚开始学，可以这样安排：

1. 先掌握 Web/API 基础。AI 功能最终还是要跑在应用里。
2. 学会调用至少一个主流 LLM API，理解 message、token、temperature、streaming、tool calling 等概念。
3. 做一个小项目，例如“上传 PDF 后问答”或“客服工单自动摘要”。
4. 给项目加 eval。不要只看自己试的两三个问题，要准备固定测试集。
5. 再学习 RAG、Agent、Embedding、向量数据库和安全议题。

## 常见误区

- **误区一：必须先学完整机器学习数学。** 数学有帮助，但 AI Engineer 的入门路径通常先从应用、API、数据流和评估开始。
- **误区二：会聊天工具就会做 AI 产品。** 使用 ChatGPT 和构建一个可靠的 AI 功能，中间隔着工程化。
- **误区三：AI Engineer 不需要软件工程能力。** 正好相反，错误处理、权限、测试、部署、监控这些基础会直接决定产品能不能用。
- **误区四：只追最新模型。** 模型会变，但任务拆解、上下文管理、评估和安全边界是更耐用的能力。

## 延伸阅读

- [What Is an AI Engineer? - Coursera](https://www.coursera.org/articles/ai-engineer)
- [AI Engineers: What they do and how to become one - TechTarget](https://www.techtarget.com/whatis/feature/How-to-become-an-artificial-intelligence-engineer)
- [roadmap.sh 原始章节：What is an AI Engineer?](https://roadmap.sh/ai-engineer)

## 本次参考

- [Coursera: What Is an AI Engineer?](https://www.coursera.org/articles/ai-engineer)
- [TechTarget: AI Engineers: What they do and how to become one](https://www.techtarget.com/whatis/feature/How-to-become-an-artificial-intelligence-engineer)
- 原项目文件：`src/data/roadmaps/ai-engineer/content/what-is-an-ai-engineer@GN6SnI7RXIeW8JeD-qORW.md`
