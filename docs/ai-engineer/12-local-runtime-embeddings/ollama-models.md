# 怎么用 Ollama Models 在本地跑 LLM

Ollama Models 适合让你在自己的电脑、工作站或内网机器上运行 LLM。它最适合学习、原型验证、隐私敏感输入和本地开发；如果你要稳定服务大量用户，还要继续考虑硬件、并发、监控和模型治理。

## 第一步：先理解 Ollama 在解决什么

developer-roadmap 对 Ollama 的介绍是：Ollama 提供可以在个人设备本地运行的大语言模型，让 AI 功能不依赖云服务。它强调隐私、性能和易用性，开发者可以把模型部署在笔记本、桌面或边缘设备上，用于文本生成、摘要等任务，并获得更低延迟、更强数据控制和离线处理能力。

你可以把 Ollama 理解成“本地模型运行器 + 模型管理工具 + 本地 API”。它帮你下载模型、运行模型，并暴露本地接口，应用可以像调用服务一样调用本机模型。

## 第二步：从模型库选一个能跑动的模型

Ollama 的模型库里有 Llama、Qwen、Mistral、Gemma、DeepSeek 等常见模型家族，也有不同参数规模和量化版本。初学时先选小一点的模型，能稳定跑完真实样例比追求最大参数更重要。

选模型时看四个信号：

| 判断点 | 你要确认什么 |
| --- | --- |
| 任务 | 聊天、代码、摘要、Embedding 是否匹配 |
| 体积 | 模型大小是否适合你的磁盘和内存 |
| 性能 | 首 token 延迟和生成速度是否可接受 |
| 许可 | 模型许可证是否允许你的用途 |

如果只是学习和开发，先用一个生态资料多的模型跑通。等你能解释上下文长度、量化、显存和延迟之后，再比较更大的模型。

## 第三步：用本地 API 接进应用

Ollama 不只是命令行聊天工具。它提供本地 HTTP API，常见能力包括生成、聊天、模型列表、Embedding 和模型管理。这样你的应用可以把本地模型当成一个后端服务使用。

一个最小接入流程如下：

```mermaid
flowchart LR
  A[安装 Ollama] --> B[拉取模型]
  B --> C[命令行跑真实样例]
  C --> D[用本地 API 调用]
  D --> E[封装超时和错误处理]
  E --> F[接入应用]
```

本地 API 的好处是开发体验直接：不用先申请云端模型权限，也不用每次调用都产生外部 API 成本。代价是运行质量由你的机器承担。电脑休眠、内存不足、模型被换掉、本地服务没启动，都会变成应用错误。

## 第四步：用 Modelfile 固定行为

Ollama 的 Modelfile 可以定义模型来源、系统提示词、参数、模板和适配器。它的价值是把“我本地怎么跑这个模型”写成可复现配置，而不是只靠命令行历史。

在团队里，这一点很重要。你可以把基础模型、temperature、system prompt 和 stop token 放进 Modelfile，让同事拿到相同的运行方式。它不会替代完整的模型评估，但能减少“每个人本地表现都不一样”的问题。

## 验证：怎么知道本地模型可以继续用

把 Ollama 接进项目之前，先做一轮小检查：

| 项目 | 通过标准 |
| --- | --- |
| 模型可用 | 拉取、运行、重启后都能正常响应 |
| 输出质量 | 真实样例能完成任务，不只会聊天 |
| 性能 | 延迟和生成速度不阻塞主要流程 |
| 资源 | CPU、内存、显存和磁盘占用可接受 |
| 可复现 | 模型名、版本、参数和 Modelfile 有记录 |

如果这些条件还没过，先把 Ollama 留在开发和评估环境里。等模型选择、硬件和调用边界清楚后，再讨论内网服务或生产部署。

## 延伸阅读

- [Ollama 官网](https://ollama.com/)
- [Ollama GitHub：README](https://github.com/ollama/ollama/blob/main/README.md)
- [Ollama Docs：API](https://github.com/ollama/ollama/blob/main/docs/api.md)
- [Ollama Docs：Modelfile](https://github.com/ollama/ollama/blob/main/docs/modelfile.md)
- [Ollama Docs：LangChain Python tutorial](https://github.com/ollama/ollama/blob/main/docs/tutorials/langchainpy.md)
- [Ollama Library](https://ollama.com/library)
- [nilbuild/developer-roadmap：ollama@rTT2UnvqFO3GH6ThPLEjO.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/ollama%40rTT2UnvqFO3GH6ThPLEjO.md)
