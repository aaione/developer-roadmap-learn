# Chat Completions API：用消息数组组织一次对话

## 学习目标

读完这一节，你应该能说清楚：

- Chat Completions API 的 `messages`、`model`、`temperature`、`stream`、`tools` 分别负责什么。
- 为什么 Chat Completions 适合理解多轮对话接口的基本形态。
- Temperature 在聊天接口里如何影响输出稳定性。
- 什么时候该用结构化输出、工具调用或 streaming。

## 概念解释

developer-roadmap 对应源文件介绍的是 Temperature：它是语言模型里的一个生成参数，用来控制生成文本的随机性。较高的 temperature，比如 1.0，会让模型更容易采样到低概率词，输出更丰富也更不可预测；较低的 temperature，比如 0.2，会让模型更保守，更偏向训练中概率最高的表达。它改变的是下一个 Token 的概率分布采样方式。

图谱这一节是 `Chat Completions API`。这个接口的核心思想很直接：把对话整理成一个消息数组，交给模型生成下一条 assistant 消息。每条消息都有 role 和 content。常见 role 包括 `system`、`user`、`assistant` 和 `tool`。`system` 放长期规则，`user` 放本轮用户输入，`assistant` 可放历史回答，`tool` 用来把工具执行结果送回模型。

一次典型调用大致是这样：

<div class="flow-diagram" aria-label="Chat Completions 调用链">
  <span class="flow-step">系统规则</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">用户消息</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">历史对话</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">可用工具</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">模型生成</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">文本 / tool_calls / JSON</span>
</div>

OpenAI 当前文档里，Responses API 是更统一的新接口，但 Chat Completions 仍然是大量项目、教程和旧代码最常见的入口。学它的价值在于理解“消息、角色、采样参数、流式输出、工具调用、用量统计”这些概念。换到 Responses API、Anthropic Messages API 或其他 OpenAI-compatible API 时，很多设计仍然能迁移。

`temperature` 和 `top_p` 都控制采样，通常不要同时大幅调整。写客服回复、数据抽取、代码补丁说明这类任务时，低 temperature 更容易稳定；写广告文案、头脑风暴、备选标题时，可以适当提高。即便如此，API 输出仍要做后端校验。需要 JSON 时，优先用结构化输出或 schema 约束，而不是只在 prompt 里写“请返回 JSON”。

工具调用是 Chat Completions 的另一个关键点。你把函数名、描述和 JSON Schema 参数交给模型，模型可以返回 `tool_calls`，由你的程序真正执行函数，再把执行结果作为 tool 消息放回下一轮。模型负责决定“要不要调用”和“参数大概是什么”，业务系统负责执行、鉴权、重试和结果校验。

## 实践建议

- 把消息角色分清。稳定规则放 `system`，用户原文放 `user`，工具结果放 `tool`，不要混在同一段文本里。
- 对生产任务固定参数。记录 `model`、`temperature`、`top_p`、最大输出 Token、prompt 版本和响应 usage。
- 对长回答使用 streaming。前端能更快显示首字，但后端要能处理中断、重试和增量拼接。
- 工具调用只让模型“提议”。真实执行前检查权限、参数范围、幂等性和错误处理。
- 结构化数据用 schema。让模型贴近格式，再用程序解析和校验，不要相信裸文本。

## 常见误区

- **误区一：Chat Completions API 会自动记住历史。** 它只看到你本次传入的 `messages`，历史要由应用自己保存和裁剪。
- **误区二：temperature 越低越正确。** 低 temperature 更稳定，但事实仍然要靠上下文、检索和校验。
- **误区三：工具调用等于模型能执行工具。** 模型只返回调用意图和参数，执行发生在你的系统里。
- **误区四：streaming 只是前端体验。** 流式输出会影响日志、审计、错误恢复和内容安全检查的时机。

## 延伸阅读

- [OpenAI API Reference：Chat Completions](https://platform.openai.com/docs/api-reference/chat/create)
- [OpenAI Docs：Text generation](https://platform.openai.com/docs/guides/text)
- [OpenAI Cookbook：How to call functions with chat models](https://cookbook.openai.com/examples/how_to_call_functions_with_chat_models)
- [OpenAI Cookbook：How to stream completions](https://cookbook.openai.com/examples/how_to_stream_completions)
- [OpenAI Docs：Structured model outputs](https://platform.openai.com/docs/guides/structured-outputs)
- [OpenAI Docs：Function calling](https://platform.openai.com/docs/guides/function-calling)
- [nilbuild/developer-roadmap：temperature@_bPTciEA1GT1JwfXim19z.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/temperature%40_bPTciEA1GT1JwfXim19z.md)
