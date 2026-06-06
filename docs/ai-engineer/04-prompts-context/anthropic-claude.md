# Anthropic Claude：偏重安全、长上下文和复杂任务的模型家族

## 学习目标

读完这一节，你应该能说清楚：

- Claude 是什么，为什么经常和安全、对齐、长上下文一起被讨论。
- Claude API 的 Messages 接口和 OpenAI Chat Completions 有哪些相似和差异。
- Opus、Sonnet、Haiku 这类模型定位大致怎么选。
- 在工程项目里接入 Claude 时要注意哪些上下文、工具调用和评估问题。

## 概念解释

developer-roadmap 原文把 Anthropic's Claude 描述为 Anthropic 开发的 AI 语言模型，目标是支持安全、可扩展的 AI 系统。Claude 这个名字来自信息论奠基人 Claude Shannon。原文还强调，Claude 重视负责任的 AI 使用、和人类意图对齐，并尽量减少有害输出。

放到工程视角里，Claude 不是单个模型，而是一组模型和 API 能力。Anthropic 文档把 Claude 模型按能力、速度、价格和上下文窗口做区分：Opus 更适合复杂推理、长周期 Agent 和高难度编码；Sonnet 常被当成质量和速度之间的平衡点；Haiku 更偏低延迟和成本敏感任务。具体模型名和可用能力会随时间更新，所以生产项目不要只看博客里的旧名称，要看当前模型文档和 deprecation 计划。

Claude 的 Messages API 也采用多轮消息结构，但有几个习惯和 OpenAI Chat Completions 不完全一样。Claude 的 `messages` 通常使用 `user` 和 `assistant` 轮次；系统提示放在顶层 `system` 参数里，而不是作为一条 `system` role 消息。请求里还必须设置 `model` 和 `max_tokens`。这点迁移时很容易踩坑：如果你把 OpenAI 的 message 数组原样搬过去，系统提示位置和工具结果格式都要重新适配。

一个简化的 Claude 调用链可以这样理解：

<div class="flow-diagram" aria-label="Claude Messages API 调用链">
  <span class="flow-step">选择 Claude 模型</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">顶层 system 指令</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">user / assistant 消息</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">可选工具和结构化输出</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">content blocks 与 stop_reason</span>
</div>

Anthropic 的 prompt engineering 文档有一个很实用的前提：先定义成功标准，再做 prompt 调整。也就是说，不要一上来就追求“更像 Claude 的写法”。先拿真实样例评估模型是否能完成任务，再决定是换模型、改 prompt、加工具、用缓存，还是把任务拆成多个步骤。

Claude 的长上下文和较强的文档处理能力适合合同审阅、代码库问答、长报告总结、客服工单分析和多步骤 Agent。但长上下文不是万能方案。你仍然要处理权限、引用、检索质量、成本、延迟和输出校验。Claude 对安全和对齐的强调也不等于应用天然安全；越接近生产环境，越要做越权调用、提示注入、敏感信息和错误建议的测试。

## 实践建议

- 先按任务选模型。复杂推理和代码 Agent 看能力，实时客服看延迟，批量分类看成本。
- 迁移接口时重写消息适配层。特别注意 Claude 的顶层 `system`、`max_tokens`、content blocks 和 stop reason。
- 给 Claude 清晰上下文和成功标准。长文档任务要说明引用范围、输出结构和不确定时的处理方式。
- 工具调用要有边界。工具描述、输入 schema、权限检查和执行日志都要由应用负责。
- 关注模型版本和下线计划。生产系统要固定模型 ID，定期评估新版本，不要让模型变更悄悄影响结果。

## 常见误区

- **误区一：Claude 更安全，所以不用做安全测试。** 模型供应商的安全训练不能替代你的业务权限、审计和输入输出过滤。
- **误区二：长上下文可以替代 RAG。** 长上下文能容纳更多资料，但检索、排序、去重和引用仍然重要。
- **误区三：OpenAI 接口可以无脑平移到 Claude。** 两者都有消息概念，但 system、工具、输出块和错误处理都有差异。
- **误区四：只选最强模型就行。** 成本、延迟、并发、上下文大小和任务难度要一起看。

## 延伸阅读

- [Anthropic Docs：Claude models overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)
- [Anthropic API Reference：Messages](https://docs.anthropic.com/en/api/messages)
- [Anthropic Docs：Prompt engineering overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
- [Anthropic Docs：Tool use overview](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview)
- [Anthropic Docs：Model cards](https://docs.anthropic.com/en/docs/about-claude/models/model-cards)
- [Anthropic：Constitutional AI](https://www.anthropic.com/news/constitutional-ai-harmlessness-from-ai-feedback)
- [nilbuild/developer-roadmap：anthropic-claude@hy6EyKiNxk1x84J63dhez.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/anthropic-claude%40hy6EyKiNxk1x84J63dhez.md)
