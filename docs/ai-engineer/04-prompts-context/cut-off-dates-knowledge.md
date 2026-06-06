# Cut-off Dates / Knowledge：知识截止日期不是实时记忆

## 学习目标

读完这一节，你应该能说清楚：

- 知识截止日期和训练数据截止日期有什么区别。
- 为什么模型答得像“知道”，并不代表它掌握最新事实。
- Sampling Parameters 会怎样影响模型回答的确定性和发散程度。
- 面对实时信息、公司内部知识和高风险事实时，应该怎样给模型补上下文。

## 概念解释

developer-roadmap 对应源文件介绍的是 Sampling Parameters：它们是一组控制 LLM 输出随机性和创造性的设置，会影响模型选择下一个词的方式，也会影响回答的连贯性、多样性和相关性。调这些参数，本质上是在“稳定、保守的输出”和“更开放、更有探索性的输出”之间做取舍。

图谱标题写的是 `Cut-off Dates / Knowledge`，它和采样参数其实经常一起出问题。模型的知识来自训练数据和后续对齐过程。训练完成后，模型参数不会因为今天发生了新闻、公司文档刚更新、价格刚变化就自动改变。模型卡或模型说明里常见的 knowledge cutoff，指的是模型知识相对可靠的时间边界；training data cutoff 则更偏训练数据覆盖范围。Anthropic 的模型说明就把这两个概念分开列出，因为“见过一些数据”和“能稳定回答相关事实”不是一回事。

更麻烦的是，模型会用很顺的语言补全答案。Temperature、top-p、top-k 这类采样参数会影响它在候选 Token 之间怎么选：温度低，答案通常更稳定；温度高，表达更发散。可是采样参数不能把旧知识变成新知识。把 temperature 调到 0，也只能让模型更倾向于选择高概率说法，不会让它突然知道今天的汇率、最新 API 变更或你们公司昨晚发布的内部规范。

可以把一次需要事实性的回答看成这条链路：

<div class="flow-diagram" aria-label="知识补全链路">
  <span class="flow-step">用户问题</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">识别是否需要最新事实</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">检索外部资料或内部文档</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">附上来源和时间</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">模型基于上下文回答</span>
  <span class="flow-arrow">→</span>
  <span class="flow-step">校验引用和结论</span>
</div>

RAG、搜索、数据库查询和工具调用解决的正是这类问题：不要让模型靠参数里的旧知识硬猜，而是把当前资料放进本次上下文。IBM 对 RAG 的解释强调，检索增强生成会先取回外部知识，再让模型基于这些资料生成答案。Google 和 Hugging Face 的生成文档则提醒我们，generation config 控制的是生成方式，不是知识来源。

工程上要把“模型知识”和“任务知识”分开看。模型知识适合处理语言、常识、通用推理和模式迁移；任务知识应该来自用户输入、产品数据库、文档库、搜索结果或工具返回。比如写代码时，模型可能知道某个框架的大概用法，但具体版本的破坏性变更要查官方文档；做客服时，模型可能懂退款流程的通用表达，但用户订单状态必须从业务系统查。

## 实践建议

- 对涉及时间的事实加来源。价格、政策、模型列表、法律条款、比赛结果、公司规则都不要只靠模型记忆。
- 在 prompt 里写清楚资料时间。比如“以下文档更新于 2026-06-06，以它为准”。
- 把 temperature 当成表达稳定性参数，不要当成事实可靠性参数。
- 对知识型回答要求引用。没有引用时，让模型明确说明“不确定”或“需要查询”。
- 记录检索结果和采样参数。线上复盘时要知道模型看到了哪些资料，以及当时用了什么 temperature、top-p 和最大输出长度。

## 常见误区

- **误区一：模型能流畅回答，就说明它知道事实。** 流畅只是语言能力，事实要看来源和时间。
- **误区二：低 temperature 可以消除幻觉。** 它能降低随机性，但不能补齐缺失知识。
- **误区三：knowledge cutoff 是唯一边界。** 还要看训练数据覆盖、模型版本、供应商更新、工具是否可用，以及当前请求给了哪些上下文。
- **误区四：把整份资料塞进上下文就稳了。** 资料太多会增加噪声。更好的做法是检索、重排、压缩，再让模型回答。

## 延伸阅读

- [Anthropic Docs：Models overview](https://docs.anthropic.com/en/docs/about-claude/models/overview)
- [IBM Think：What is retrieval-augmented generation?](https://www.ibm.com/think/topics/retrieval-augmented-generation)
- [Hugging Face Transformers：Generation strategies](https://huggingface.co/docs/transformers/en/generation_strategies)
- [Google AI for Developers：Text generation and generation config](https://ai.google.dev/gemini-api/docs/text-generation)
- [IBM Think：What is LLM temperature?](https://www.ibm.com/think/topics/llm-temperature)
- [OpenAI Docs：Text generation](https://platform.openai.com/docs/guides/text)
- [nilbuild/developer-roadmap：sampling-parameters@LbB2PeytxRSuU07Bk0KlJ.md](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/content/sampling-parameters%40LbB2PeytxRSuU07Bk0KlJ.md)
