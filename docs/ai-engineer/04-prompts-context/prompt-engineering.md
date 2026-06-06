# Prompt Engineering：把意图写成模型能执行的任务

## 学习目标

读完这一节，你应该能说清楚：

- Prompt Engineering 不是“写漂亮提示词”，而是把目标、约束和上下文交代清楚。
- 系统提示、用户输入、示例、输出格式和工具说明分别解决什么问题。
- 为什么 prompt 要配合评估集、日志和版本管理，而不是靠临场手感。
- 在工程项目里怎样让 prompt 更稳定、更可复查。

## 概念解释

developer-roadmap 原文把 Prompt Engineering 描述为设计有效 prompt 的艺术和科学。Prompt 是给 LLM 的指令或输入，目标是引导模型生成准确、相关、有创造力的输出。它需要理解模型能力和限制，并尝试不同结构、关键词和上下文线索，让模型给出更合适的结果。

换成工程语言，Prompt Engineering 是“任务说明书”的设计。模型不知道你的产品目标、业务边界、用户是谁、哪些话不能说、输出要给哪个系统消费。prompt 要把这些信息组织清楚：角色不是重点，任务才是重点；语气不是唯一重点，边界和可验证输出更重要。

一个可维护的 prompt 通常包含这些部分：

<div class="flow-diagram" aria-label="Prompt 组成">
  <span class="flow-step">任务目标</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">必要上下文</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">输入数据</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">约束和禁止项</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">示例</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">输出格式</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">验收标准</span>
</div>

OpenAI、Anthropic 和 Google 的官方指南虽然措辞不同，但共同点很清楚：指令要具体，复杂任务要拆开，示例要贴近真实输入，输出格式要明确，必要时用分隔符把资料和指令隔开。Anthropic 还强调给 Claude 提供清晰上下文和示例；Google Gemini 文档强调角色、任务、上下文、格式和限制这些组成部分；AWS 的介绍则更适合理解 prompt engineering 在业务系统里的位置。

Prompt 不是一次写完就结束。只要它进入产品，就应该像代码一样管理：有版本、有测试样例、有回归检查、有线上日志。比如客服摘要 prompt 改了一句“请简洁回答”，可能会让模型漏掉退款原因；代码审查 prompt 增加了安全要求，可能会让输出变长并影响人工阅读。没有评估集，你很难知道这次修改到底变好了还是变坏了。

## 实践建议

- 从失败样例反推 prompt。收集模型答错、答偏、格式错和过度发挥的案例，再决定要补任务说明、示例还是校验。
- 把输出格式写死。需要 JSON 就给 schema 或字段说明，并在后端做解析和校验。
- 用少量高质量示例。示例要覆盖边界情况，不要堆很多重复样例。
- 分清系统指令和用户输入。系统指令放稳定规则，用户输入只放本次任务数据。
- 给 prompt 做版本号。线上日志至少记录 prompt 版本、模型版本、关键参数和输出校验结果。

## 常见误区

- **误区一：Prompt Engineering 是玄学。** 它有经验成分，但产品里靠的是样例、评估和迭代记录。
- **误区二：提示词越长越稳。** 长 prompt 容易互相冲突，也会增加成本。该删的背景要删，该检索的资料要检索。
- **误区三：加一句“不要犯错”就能提高可靠性。** 模型需要具体约束、可用资料和校验机制，不会因为一句提醒就自动可靠。
- **误区四：示例越多越好。** 示例太多会挤占上下文，也可能让模型套错模式。优先选代表性强的样例。

## 延伸阅读

- [OpenAI Docs：Prompt engineering](https://platform.openai.com/docs/guides/prompt-engineering)
- [Anthropic Docs：Prompt engineering overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
- [Google AI for Developers：Prompting strategies](https://ai.google.dev/gemini-api/docs/prompting-strategies)
- [AWS：What is Prompt Engineering?](https://aws.amazon.com/what-is/prompt-engineering/)
- [Prompt Engineering Guide](https://www.promptingguide.ai/)
- [OpenAI Cookbook：Prompting and eval examples](https://cookbook.openai.com/)
- [nilbuild/developer-roadmap：prompt-engineering@VjXmSCdzi2ACv-W85Sy9D.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/prompt-engineering%40VjXmSCdzi2ACv-W85Sy9D.md)
