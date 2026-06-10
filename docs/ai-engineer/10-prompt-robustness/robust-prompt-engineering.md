# 怎么把 Prompt 写得更稳

稳健的 Prompt 不是把话写得更长，而是把任务、边界、输入来源、输出格式和失败处理说清楚。developer-roadmap 对 Robust prompt engineering 的核心介绍是：通过清晰指令、示例和结构化格式，引导模型输出更准确、相关、可靠的结果；同时提前考虑误解、不合适回答和复杂任务里的不稳定行为，并通过测试持续改进。

## 第一步：先定义成功标准

Prompt 工程一上来就改措辞，很容易陷入“这版感觉更好”的循环。Anthropic 的提示工程文档把前置条件讲得很清楚：先有用例成功标准，再有可测试的方法，最后才是要改进的 Prompt 初稿。

对 AI Engineer 来说，成功标准最好写成可观察的行为，而不是抽象评价。

| 模糊说法 | 可测试说法 |
| --- | --- |
| 回答要专业 | 输出必须引用给定文档里的字段，不编造来源 |
| 语气要友好 | 面向新用户时用短句，不使用责备式措辞 |
| 能处理复杂问题 | 遇到多步骤任务时先列计划，再执行第一步 |
| 不要乱答 | 证据不足时返回“不确定”，并说明缺少哪类信息 |

这一步决定后面的测试集。没有成功标准，Prompt 只是在调文案；有了成功标准，Prompt 才能进入工程迭代。

## 第二步：把 Prompt 拆成稳定结构

OpenAI 的 Prompt engineering 文档强调，可以用不同层级的指令、示例和上下文来组织请求。工程上更稳的写法，是把“系统行为”和“用户输入”分开，而不是把所有内容拼成一段自然语言。

一个可维护的 Prompt 通常至少有四块：

- 角色和任务：模型现在负责什么，不负责什么。
- 输入定义：用户文本、检索内容、业务字段分别是什么。
- 输出要求：格式、字段、长度、语气、禁止项。
- 失败处理：缺字段、冲突、越权、证据不足时怎么返回。

```mermaid
flowchart LR
  A[任务说明] --> B[输入边界]
  B --> C[示例]
  C --> D[输出格式]
  D --> E[失败处理]
  E --> F[测试集验证]
```

这里的重点不是“模板越复杂越好”。复杂模板会增加维护成本，也可能让模型过度分析。Gemini 的提示设计文档提醒：直接、清楚的指令通常更适合新一代推理模型。能用短句讲清楚，就不要堆十几条抽象原则。

## 第三步：用示例覆盖真实边界

稳健性来自边界样例。只给一个正常输入，模型学到的是“快乐路径”；给几个相似正常输入，模型仍然不知道异常情况怎么处理。

示例可以按三类准备：

- 标准样例：最常见、最希望模型复制的输入输出。
- 边界样例：字段缺失、表达含糊、用户目标和规则冲突。
- 拒答样例：越权请求、诱导泄露、要求绕过政策的请求。

few-shot 示例不是越多越好。示例太多会挤占上下文，也会让模型模仿错误细节。更好的做法是保留少量高质量样例，并把它们纳入回归测试。每次改 Prompt 后，用同一批样例比较输出，而不是只看一次手工试跑。

## 第四步：把 Prompt 当代码一样测试

Prompt 的输出有随机性，所以测试不能只看“这次是否通过”。你要记录输入、模型版本、关键参数、期望行为和实际结果。OpenAI 文档也建议给生产应用固定模型快照，并建立评估套件来观察 Prompt 行为。

一个轻量测试表就够起步：

| 用例 | 输入类型 | 期望行为 | 失败信号 |
| --- | --- | --- | --- |
| 正常问答 | 合法问题 | 基于上下文回答 | 引用不存在的内容 |
| 缺少信息 | 信息不足 | 说明缺什么 | 编造细节 |
| 规则冲突 | 用户要求越权 | 拒绝并给替代方案 | 执行越权请求 |
| 格式要求 | JSON 输出 | 字段齐全 | 少字段或多解释文本 |

如果测试失败，先定位是哪一层问题：任务描述不清、输入边界混在一起、示例误导、输出格式太松，还是模型本身不适合这个任务。不要每次都只加一句“请严格遵守”，这类补丁很快会变成不可维护的长 Prompt。

## 验证：怎么知道 Prompt 更稳了

一次 Prompt 改动通过手工检查，只能说明它在少数样例上看起来不错。更可靠的信号是：固定测试集的高风险失败下降，正常样例没有明显退化，输出格式能被程序稳定解析。

上线前可以做三件小事：

- 跑一遍正常样例，确认没有把体验改坏。
- 跑一遍安全样例，确认越权、泄露、绕规则请求不会通过。
- 跑一遍格式样例，确认下游代码能直接消费输出。

稳健 Prompt 的目标不是让模型永远不犯错，而是让错误更容易被发现、复现和修。到了工具调用、权限控制或内容安全这类场景，Prompt 只是第一层约束，后端校验和 guardrails 仍然要接上。

## 延伸阅读

- [OpenAI API：Prompt engineering](https://developers.openai.com/api/docs/guides/prompt-engineering)
- [Anthropic Claude：Prompt engineering overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
- [Google Gemini：Prompt design strategies](https://ai.google.dev/gemini-api/docs/prompting-strategies)
- [Prompt Engineering Guide](https://www.promptingguide.ai/)
- [OWASP：LLM01 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
- [nilbuild/developer-roadmap：robust-prompt-engineering@qmx6OHqx4_0JXVIv8dASp.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/robust-prompt-engineering%40qmx6OHqx4_0JXVIv8dASp.md)
