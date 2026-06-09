# 怎么用 OpenAI Playground 调试 Prompt

OpenAI Playground 适合把“凭感觉写 prompt”变成可比较、可回滚、可接进代码的实验流程。你可以在界面里调模型、参数、变量、函数和结构化输出，再把稳定版本发布成 Prompt ID 或迁移到 API。

## 第一步：把任务拆成固定部分和变量

先写清楚任务的固定部分：模型扮演什么角色、输入是什么、输出要满足什么格式、失败时怎么处理。然后把每次都会变化的内容抽成变量，比如 `{user_goal}`、`{ticket_text}` 或 `{document}`。

这样做的好处很直接：你能保留同一份 prompt，只替换输入变量。多人协作时，也能看清楚到底是 prompt 变了，还是测试样例变了。

developer-roadmap 同 ID 源文件讲的是 Chain-of-Thought Prompting，也就是让模型通过中间推理步骤提升复杂任务表现。现在的 OpenAI Playground 更适合把这类技巧放进可管理的 prompt 版本里：你可以要求模型先分析任务，再输出最终 JSON；也可以只保留简短理由，把内部推理细节限制在不会泄露敏感信息的范围内。

## 第二步：调模型和参数

同一段 prompt 换模型后，输出可能完全不同。Playground 的价值在于让你快速比较模型、temperature、输出长度、工具调用和结构化输出设置。

temperature 可以先从低值开始。分类、抽取、格式化这类任务通常更希望稳定；创意写作、头脑风暴和多样化候选结果才更适合提高随机性。输出长度也要设上限，否则一次看似简单的测试可能变成不可控成本。

| 调整项 | 先看什么 | 常见信号 |
| --- | --- | --- |
| 模型 | 质量、延迟、成本 | 小模型够用时，不急着上大模型 |
| Temperature | 输出是否稳定 | 固定格式任务通常用低值 |
| Max output tokens | 是否截断 | 输出被截断时先看 schema 和样例长度 |
| Structured Outputs | 是否可解析 | 需要后端消费时优先用 schema |
| Tools / Functions | 是否需要外部动作 | 只有模型必须查数据或执行动作时再加 |

表里的项目不需要一次全调。先固定模型和参数，只改 prompt；再固定 prompt，只换模型。这样你才知道变化来自哪里。

## 第三步：用结构化输出和函数定义约束结果

如果后端要消费模型结果，不要只在自然语言里写“请返回 JSON”。Structured Outputs 可以让模型按你给的 schema 返回字段，函数定义则适合描述模型可以调用的外部能力。

Playground 能生成 prompt、function definition 和 output schema。它不是替你完成设计，而是帮你从空白草稿起步。生成后还要检查字段名、必填项、枚举、失败分支和示例输入。schema 写得太复杂，模型和后端都会更难维护。

## 验证：怎么知道调对了

至少准备一组固定样例。每次改 prompt 后，用同一批输入跑一遍，记录输出是否满足格式、是否答到重点、是否出现编造内容、是否超出成本和延迟预算。

Playground 的 prompt 管理支持版本历史、回滚、变量和人工 Eval 连接。发布前可以做一次并排比较：旧版本和新版本同时跑同一组样例。如果新版本只是“看起来更会说”，但格式更不稳定，就不该上线。

## 延伸阅读

- [OpenAI Help：Prompt management in Playground](https://help.openai.com/en/articles/9824968-generate-prompts-function-definitions-and-structured-output-schemas-in-the-playground)
- [OpenAI Docs：Prompt generation](https://platform.openai.com/docs/guides/prompt-generation)
- [OpenAI Docs：Prompt engineering](https://platform.openai.com/docs/guides/prompt-engineering)
- [OpenAI Docs：Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs)
- [OpenAI Docs：Function calling](https://platform.openai.com/docs/guides/function-calling)
- [OpenAI Cookbook：Prompt engineering guide](https://cookbook.openai.com/examples/gpt4-1_prompting_guide)
- [nilbuild/developer-roadmap：cot@nyBgEHvUhwF-NANMwkRJW.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/cot%40nyBgEHvUhwF-NANMwkRJW.md)
