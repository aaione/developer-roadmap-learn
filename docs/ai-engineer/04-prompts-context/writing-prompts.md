# Writing Prompts：把需求写成模型能执行的指令

## 学习目标

读完这一节，你应该能说清楚：

- 一个好 Prompt 通常由哪些部分组成。
- 为什么写 Prompt 不是堆关键词，而是把任务边界、材料和输出要求讲清楚。
- 什么时候该加示例、拆步骤、限定格式或改用工具。
- 在团队项目里怎样把 Prompt 写得可测试、可维护。

## 概念解释

developer-roadmap 没有为 `Writing Prompts` 提供独立正文文件，本节沿用它在 `Prompt Engineering` 章节里的核心介绍：Prompt engineering 是设计有效提示词的艺术和方法，目标是让 LLM 生成准确、相关、符合预期的输出。它要求你理解模型能力和限制，并通过结构、关键词、上下文线索和反复实验来改进结果。

换成工程里的说法，写 Prompt 更像写一份“给模型执行的任务单”。人类同事能通过上下文、经验和反问补齐很多信息，模型不会自动知道你的业务规则、数据来源、输出用途和失败处理方式。Prompt 写得含糊，模型通常也会给一个看似顺滑但不可用的答案。

一个可维护的 Prompt 通常包括几类信息：任务目标、输入材料、约束条件、输出格式、示例和失败时的处理方式。OpenAI、Anthropic、Google 和 Microsoft 的提示词文档都反复强调同一件事：先说明任务，再给上下文；能结构化就结构化；复杂任务要拆开；有固定口径时给示例；事实性任务要要求引用来源或承认不确定。

<div class="flow-diagram" aria-label="Prompt 写作流程">
  <span class="flow-step">说明目标</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">提供材料</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">写清约束</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">限定格式</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">用样例校准</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">用真实用例评估</span>
</div>

举个例子，`帮我总结这段话` 很容易得到泛泛的摘要。改成 `请用 5 个要点总结下面的客户投诉，按“问题、证据、建议动作”三列输出；如果文本里没有证据，写“未提供”`，模型就更容易交出可以进入工单系统的结果。这里真正起作用的不是某个神奇词，而是你把下游使用方式写进了任务。

Prompt 也不是越长越好。长 Prompt 能放更多规则，但规则之间可能冲突，模型也可能被无关材料带偏。一个实用做法是把 Prompt 当作产品配置来管理：保留版本、记录评估样例、对高风险输出做人工抽查，并把“能用代码校验的东西”交给代码，比如 JSON schema、权限判断、敏感词过滤和工具调用参数校验。

## 实践建议

- 先写成功标准。比如“能正确抽取字段”“能引用证据”“能给出下一步动作”，不要只写“回答得好一点”。
- 把任务和材料分开。用标题、分隔符或 XML / Markdown 块标出 `任务`、`输入`、`输出格式`。
- 复杂任务先拆步骤。提取事实、判断条件、生成答案可以分开做，别让一个 Prompt 承担所有责任。
- 有稳定输出要求时给示例。少量输入输出样例往往比抽象描述更有用。
- 把 Prompt 纳入测试。用真实样例跑回归，记录模型版本、参数和失败案例。

## 常见误区

- **误区一：Prompt 是玄学。** Prompt 有试错成分，但清晰指令、结构化输入、示例和评估都可以工程化。
- **误区二：把所有规则写进一个超长系统提示就稳了。** 规则太多会互相干扰，也会增加成本和维护难度。
- **误区三：示例越多越好。** 示例要覆盖关键差异；重复相似样例只会占上下文。
- **误区四：Prompt 能替代业务校验。** 模型可以生成建议，权限、金额、身份、格式和安全边界仍要由程序兜底。

## 延伸阅读

- [OpenAI Docs：Prompt engineering](https://platform.openai.com/docs/guides/prompt-engineering)
- [OpenAI Help：Prompt engineering best practices for ChatGPT](https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt)
- [Anthropic Docs：Prompt engineering overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
- [Google AI for Developers：Prompt design strategies](https://ai.google.dev/gemini-api/docs/prompting-strategies)
- [Microsoft Learn：Prompt engineering techniques](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/prompt-engineering)
- [Prompt Engineering Guide：Basics of Prompting](https://www.promptingguide.ai/introduction/basics)
- [nilbuild/developer-roadmap：prompt-engineering@VjXmSCdzi2ACv-W85Sy9D.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/prompt-engineering%40VjXmSCdzi2ACv-W85Sy9D.md)
