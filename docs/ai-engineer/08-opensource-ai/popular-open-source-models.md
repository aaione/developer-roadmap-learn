# Popular Open Source Models：先认识主流开放模型家族

Popular Open Source Models 不是让你背一份会过期的排行榜，而是让你知道常见开放模型家族各自适合什么。对初学者来说，先认识 Llama、Mistral、Qwen、Gemma、DeepSeek 这类模型家族，比记住某天的榜单排名更有用。

## 它解决什么问题

上一节讨论了开源和闭源模型的取舍。真正开始选模型时，你会马上遇到另一个问题：开放模型太多，名字相似，参数规模、上下文长度、许可证和运行方式又都不一样。

developer-roadmap 的图谱在 `OpenSource AI` 主题下列出 `Popular Open Source Models`，但当前源仓库没有同 ID 的独立 Markdown 内容文件。本节按图谱 label 写作，并把源文件链接固定到 ai-engineer 图谱 JSON，方便追溯原始节点。

这里的“开源模型”采用工程里的常用说法，包含严格开源模型和开放权重模型。真正落地前，你仍然要读许可证、模型卡和供应商说明。

## 主流家族怎么分

开放模型可以先按“谁维护、适合什么任务、能不能本地跑”来认识。下面不是排名，而是常见入口。

| 模型家族 | 你可以先这样理解 | 常见使用场景 |
| --- | --- | --- |
| Llama | Meta 维护的通用模型家族，生态资料多 | 通用聊天、检索增强、私有部署基线 |
| Mistral | 重视效率和开放权重，模型尺寸覆盖轻量到强能力 | 低延迟应用、企业部署、工具调用实验 |
| Qwen | 阿里维护的多语言、多模态模型家族，中文生态强 | 中文应用、代码、视觉语言任务 |
| Gemma | Google 发布的开放模型家族，适合学习和可控部署 | 教学、轻量应用、边缘或本地实验 |
| DeepSeek | 以代码和推理能力被广泛关注的开放模型家族 | 编程助手、推理任务、研究复现 |

同一个家族内部也会有很多版本。比如小参数模型适合本地开发和低成本分类，大参数模型更适合复杂生成，但需要更强硬件或托管服务。

## 选模型时看什么

先看任务类型。聊天、代码、Embedding、多模态、语音不是同一个问题。一个模型在聊天榜单上表现好，不代表它适合做你的分类器或检索系统。

再看运行条件。你要知道模型参数规模、量化版本、显存需求、上下文长度和推理框架支持。很多开放模型能在本地跑，但“能跑起来”和“能稳定服务用户”是两回事。

许可证也要提前读。开放权重不等于任意商业使用。有些模型要求保留署名，有些模型限制特定规模的商业使用，有些模型的训练数据来源并不完全透明。

## 怎么开始试用

最省事的起步方式是先在 Hugging Face、Ollama、LM Studio 或云端托管平台上试一个小模型。先用真实样例测任务，不要只看模型自带的演示对话。

你可以用同一批输入比较 2 到 3 个模型：

- 输出是否稳定符合格式。
- 中文或行业术语是否自然。
- 拒答和安全边界是否符合产品预期。
- 延迟、吞吐和成本是否能接受。
- 模型许可证是否允许你的部署方式。

如果只是学习，先选生态资料最多、安装路径最短的模型。等你理解了上下文、token、量化、显存和推理延迟，再追更强模型会轻松很多。

## 对你意味着什么

初学 AI Engineering 时，不要把开放模型学习变成“追榜单”。榜单能帮你发现候选项，但工程判断来自你的数据、任务和运行环境。

更实用的路线是：选一个通用模型家族做基线，再选一个更贴近任务的模型做对照。把失败样例记录下来，比换十个模型但不留下评估结果更有价值。

下一步按图谱顺序回到安全伦理分支的 `OpenAI Moderation API`。那一节会讨论如何用内容审核能力给输入和输出加一层风险判断。

## 延伸阅读

- [Meta AI：Llama](https://ai.meta.com/llama/)
- [Mistral AI：Models](https://mistral.ai/technology/#models)
- [Qwen：Hugging Face Organization](https://huggingface.co/Qwen)
- [Google AI for Developers：Gemma](https://ai.google.dev/gemma)
- [DeepSeek：Hugging Face Organization](https://huggingface.co/deepseek-ai)
- [Hugging Face：Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard)
- [nilbuild/developer-roadmap：ai-engineer.json](https://github.com/nilbuild/developer-roadmap/blob/master/src/data/roadmaps/ai-engineer/ai-engineer.json)
