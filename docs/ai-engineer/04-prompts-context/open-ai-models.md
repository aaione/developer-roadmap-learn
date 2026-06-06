# Open AI Models：理解开放模型和 Token

## 学习目标

读完这一节，你应该能说清楚：

- 图谱里的 Open AI Models 为什么容易和 OpenAI Models 混淆。
- Token 是 LLM 处理文本、计算成本和限制上下文长度的基本单位。
- 开放模型、开放权重模型和闭源 API 模型有什么差别。
- 选开放模型时应该看哪些工程指标，而不只是看排行榜分数。

## 概念解释

developer-roadmap 这个图谱节点叫 `Open AI Models`，但同 ID 的原始内容文件讲的是 LLM 里的 Token：Token 是模型处理文本的基本单位，可能是单词、子词或字符。模型按 Token 序列预测下一个 Token，API 费用通常按 Token 计费，模型也会有输入和输出的最大 Token 限制。本节按图谱顺序保留 `Open AI Models` 这个主题，同时把 Token 作为理解开放模型和模型选型的基础。

先说 Token。人读一句话，会自然按词语和语义理解；模型看到的是被 tokenizer 切开的编号序列。中文、英文、代码、标点、空格都会被切成 Token，只是切法不同。一个中文词不一定等于一个 Token，一个英文长词也可能拆成几个子词。工程里关心 Token，不是为了背 tokenizer 细节，而是为了估算三件事：一次请求能塞多少上下文、一次回答大概要花多少钱、长输入会不会拖慢延迟。

开放模型则是另一个维度。日常说“开源模型”时，很多人其实混用了三类东西：

<div class="flow-branch" aria-label="开放模型判断维度">
  <span class="flow-question">开放到什么程度？</span>
  <span class="flow-path"><span class="flow-step">模型权重可下载</span><span class="flow-step">推理代码可运行</span><span class="flow-step">训练数据或配方可追溯</span></span>
  <span class="flow-question">能不能商用？</span>
  <span class="flow-path"><span class="flow-step">许可证允许</span><span class="flow-step">有使用规模限制</span><span class="flow-step">需要遵守品牌或安全条款</span></span>
  <span class="flow-question">上线成本是什么？</span>
  <span class="flow-path"><span class="flow-step">GPU / 内存</span><span class="flow-step">上下文长度</span><span class="flow-step">吞吐和延迟</span><span class="flow-step">量化和部署工具</span></span>
</div>

Hugging Face、Meta Llama、Mistral、Google Gemma 等生态让 AI Engineer 可以把模型部署到自己的云环境或本地环境里。好处很直接：数据边界更可控，模型版本更可控，也能针对延迟和成本做深度优化。代价也很现实：你要自己处理推理服务、显存规划、监控、升级、许可证、内容安全和回滚。

Token 在开放模型里同样重要。模型的上下文长度决定一次请求最多能处理多少 Token；不同 tokenizer 会让同一段中文、英文或代码产生不同 Token 数；量化、KV cache、批处理和并发都会影响真实吞吐。一个模型在榜单上分数不错，不代表它能在你的硬件、你的上下文长度、你的中文数据和你的延迟目标下稳定运行。

所以，开放模型不是“免费替代 API”。它更像是把模型能力搬进自己的工程边界里。你得到更多控制权，也接过更多运维责任。

## 实践建议

- 先用真实样例估算 Token。把中文长文、代码片段、表格和历史对话都放进评估集，不要只用英文短 prompt 测试。
- 选模型前先读许可证。尤其要确认商用、再分发、微调产物、用户规模限制和品牌使用条款。
- 记录 tokenizer 和模型版本。换 tokenizer 或换 checkpoint 后，成本、截断位置和召回效果都可能变。
- 用小规模压测看真实吞吐。关注首 Token 延迟、总生成耗时、并发下的 P95、显存占用和失败率。
- 开放模型也要做安全层。内容过滤、提示词注入防护、敏感数据处理和日志脱敏不能因为自部署就省掉。

## 常见误区

- **误区一：开放权重等于开源。** 很多模型能下载权重，但训练数据、训练代码或许可证并不完全开放。
- **误区二：自部署一定更便宜。** 低频调用、复杂运维和 GPU 闲置会让自部署成本高于 API。
- **误区三：上下文长度只看模型宣传。** 长上下文还要看检索质量、注意力退化、延迟和成本。
- **误区四：Token 只是计费单位。** Token 还决定截断、缓存、上下文拼接和流式输出体验。

## 延伸阅读

- [NVIDIA Blog：Explaining Tokens — the Language and Currency of AI](https://blogs.nvidia.com/blog/ai-tokens-explained/)
- [OpenAI Cookbook：How to count tokens with tiktoken](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken)
- [Hugging Face Transformers：LLM tutorial](https://huggingface.co/docs/transformers/llm_tutorial)
- [Meta Llama：Official Llama models](https://ai.meta.com/llama/)
- [Mistral AI Docs：Models Overview](https://docs.mistral.ai/models/overview)
- [Open Source Initiative：The Open Source AI Definition](https://opensource.org/ai/open-source-ai-definition)
- [nilbuild/developer-roadmap：tokens@2WbVpRLqwi3Oeqk1JPui4.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/tokens%402WbVpRLqwi3Oeqk1JPui4.md)
