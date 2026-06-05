# AI Agents：能规划和调用工具的系统

## 学习目标

读完这一节，你应该能说清楚：

- AI Agent 和普通聊天机器人有什么区别。
- 工具、记忆、检索、规划和环境反馈在 Agent 里分别做什么。
- 什么时候应该使用 Agent，什么时候只需要工作流或一次模型调用。
- Agent 上线前要怎样控制成本、权限、错误传播和停止条件。

## 概念解释

developer-roadmap 原文把 AI Agents 描述为能感知环境、做决策并采取行动以完成目标的系统或组件。Agent 可以和外部系统、用户或其他 Agent 交互，复杂度从规则机器人到使用机器学习、自然语言处理和强化学习的自治系统不等。

在现在的 AI Engineer 语境里，Agent 通常指“LLM 加工具，再加一个循环”。普通聊天机器人主要回答问题；Agent 不只回答，还会决定下一步要不要查资料、调用 API、写文件、运行测试、请求用户确认或把任务拆给其他组件。它的输出不一定是最终文字，也可能是一次工具调用或一个计划。

可以这样理解一个基础 Agent：

<div class="flow-branch" aria-label="AI Agent 执行循环">
  <span class="flow-question">输入目标</span>
  <span class="flow-path"><span class="flow-step">用户目标</span><span class="flow-step">任务约束</span><span class="flow-step">可用工具</span></span>
  <span class="flow-question">下一步怎么做？</span>
  <span class="flow-path"><span class="flow-step">理解任务</span><span class="flow-step">计划下一步</span><span class="flow-step">决定是否调用工具</span></span>
  <span class="flow-question">执行和反馈</span>
  <span class="flow-path"><span class="flow-step">调用搜索 / 数据库 / 代码 / 业务 API</span><span class="flow-step">读取结果或错误</span></span>
  <span class="flow-question">停止条件</span>
  <span class="flow-path"><span class="flow-step">目标完成</span><span class="flow-step">达到轮数或成本上限</span><span class="flow-step">等待人工确认</span></span>
</div>

Anthropic 的工程文章把 workflow 和 agent 分开看：workflow 是预先写好的路径，agent 是模型动态决定流程和工具使用。这个区分很实用。退款审批、内容审核、表单抽取这类路径清晰的任务，通常用工作流更稳；代码修复、复杂研究、跨系统排障这类步骤难以提前写死的任务，Agent 才更有价值。

框架可以减少样板代码，比如 OpenAI Agents SDK、LangChain、Google ADK 和 Azure 架构资料都提供了 Agent、工具、交接、编排或观测能力。不过框架不是核心。真正决定成败的是工具边界是否清楚、权限是否可控、每一步是否能拿到环境反馈、失败时能不能停止或降级。

## 实践建议

- 从固定工作流开始。只有当路径无法提前枚举，或者模型动态决策能明显提高结果时，再引入 Agent。
- 给工具写清楚输入、输出、边界和失败条件。工具描述越含糊，Agent 越容易误用。
- 给 Agent 设置停止条件。最大轮数、最大成本、超时时间、危险动作确认和人工检查点都应该写进系统。
- 让 Agent 读真实反馈。搜索结果、数据库返回、测试输出、API 错误和用户确认都要进入下一轮判断。
- 对敏感工具做权限隔离。读数据、写数据、发邮件、下单、退款和删除操作不应该共用一个宽权限入口。

## 常见误区

- **误区一：Agent 越自主越高级。** 自主性会带来成本、延迟和错误传播。能用简单工作流解决的问题，不必强行 Agent 化。
- **误区二：接几个工具就是 Agent。** 工具只是能力入口。没有计划、反馈、停止条件和错误处理，系统很难可靠运行。
- **误区三：框架能自动解决可靠性。** 框架能帮你组织调用，但业务规则、权限、观测和评估仍要自己设计。
- **误区四：让 Agent 自己处理所有异常。** 重要业务动作要有人工确认或明确保护栏，不能把风险都交给模型判断。

## 延伸阅读

- [Anthropic Engineering：Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)
- [OpenAI Agents SDK：Agents](https://openai.github.io/openai-agents-python/agents/)
- [LangChain Docs：Agents](https://docs.langchain.com/oss/javascript/langchain/agents)
- [Google ADK：Agents](https://adk.dev/agents/)
- [Microsoft Learn：AI Agent Orchestration Patterns](https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/ai-agent-design-patterns)
- [nilbuild/developer-roadmap：ai-agents@4_ap0rD9Gl6Ep_4jMfPpG.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/ai-agents%404_ap0rD9Gl6Ep_4jMfPpG.md)
