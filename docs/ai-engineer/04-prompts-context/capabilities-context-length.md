# Capabilities / Context Length：能力边界和上下文长度

## 学习目标

读完这一节，你应该能说清楚：

- Context 在 LLM 里指什么，为什么它不等于“模型记忆”。
- Context length 会影响成本、延迟、准确性和交互设计。
- 长上下文模型适合哪些场景，又有哪些隐藏限制。
- 如何在产品里管理上下文，而不是把所有资料都塞给模型。

## 概念解释

developer-roadmap 原文把 Context 描述为和 prompt 一起提供给模型的信息。它可以包含用户问题、辅助文本、之前的对话轮次，或其他能帮助模型理解预期输出的数据。简单说，Context 是模型本次生成时能看到的背景知识和指令。

Context length 则是模型一次请求能处理的最大上下文窗口，通常按 Token 计算。这个窗口里要同时放系统指令、用户输入、检索资料、历史对话、工具返回和模型将要生成的输出空间。窗口很大不代表可以随意塞资料，因为模型仍然要在这些 Token 里找重点，推理成本也会随长度上升。

一个典型上下文管理流程可以这样看：

<div class="flow-diagram" aria-label="上下文管理流程">
  <span class="flow-step">用户目标</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">选择必要历史</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">检索相关资料</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">压缩和去重</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">拼接 prompt</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">预留输出 Token</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">生成和记录</span>
</div>

IBM、Coursera、Google 和模型供应商的资料都强调同一点：上下文窗口决定模型“本次能看见什么”。它不是长期记忆，也不会自动理解所有内容的重要性。研究论文 `Lost in the Middle` 还指出，模型在长上下文里可能更容易使用开头和结尾的信息，中间位置的信息反而被忽略。这对产品设计很关键：长上下文能减少截断，但不能替代排序、压缩和结构化组织。

Capabilities 也要放在上下文长度旁边一起看。一个模型可能上下文很长，但工具调用、结构化输出、多模态输入、推理能力或低延迟不一定适合你的任务。比如法律合同审查需要长文档和引用定位；客服机器人更在意低延迟和多轮状态；代码 Agent 需要工具调用、文件读写和错误反馈。上下文只是能力的一部分。

## 实践建议

- 给输出预留 Token。不要把上下文窗口全部用在输入上，否则模型可能回答不完整。
- 用检索和重排控制上下文。先找最相关资料，再压缩、去重和排序。
- 把重要指令放在稳定位置。系统规则、输出格式和安全边界不要被长资料淹没。
- 对长上下文做位置测试。把关键答案放在开头、中间和结尾各测一次，看模型是否稳定引用。
- 记录上下文组成。线上问题要能回放当时使用的历史消息、检索片段、Token 数和截断策略。

## 常见误区

- **误区一：上下文窗口就是模型记忆。** 它只代表本次请求能看到的内容，长期记忆需要外部存储和检索策略。
- **误区二：窗口越长，答案越准。** 信息太多会增加噪声，模型也可能漏掉中间关键内容。
- **误区三：截断最后几条消息就够了。** 多轮对话里，早期约束和用户偏好可能比最近一句更重要。
- **误区四：只看最大 Token 数选模型。** 还要看价格、延迟、工具能力、结构化输出、多模态能力和评估结果。

## 延伸阅读

- [IBM Think：What is a context window?](https://www.ibm.com/think/topics/context-window)
- [Coursera：What Is an AI Context Window?](https://www.coursera.org/articles/context-window)
- [Google AI for Developers：Long context](https://ai.google.dev/gemini-api/docs/long-context)
- [Anthropic Docs：Context windows](https://docs.anthropic.com/en/docs/build-with-claude/context-windows)
- [Liu et al.：Lost in the Middle](https://arxiv.org/abs/2307.03172)
- [OpenAI Cookbook：How to count tokens with tiktoken](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken)
- [nilbuild/developer-roadmap：context@vvpYkmycH0_W030E-L12f.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/context%40vvpYkmycH0_W030E-L12f.md)
