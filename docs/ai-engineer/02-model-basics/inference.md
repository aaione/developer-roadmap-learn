# 推理：模型真正干活的阶段

## 学习目标

读完这一节，你应该能解释：

- inference 和 training 的区别。
- 一次模型推理通常会经过哪些步骤。
- AI Engineer 在上线推理服务时要关注哪些工程指标。

## 概念解释

Inference 通常翻译成“推理”。它不是让模型重新学习，而是把已经训练好的模型拿来用：输入一段文本、一张图片或一组业务数据，模型根据已有参数给出预测、分类、生成结果或下一步动作。

以 LLM 为例，用户发来 prompt 后，系统会先把文本切成 token，再把 token 送进模型。模型根据上下文预测下一个 token，生成一个，再继续预测下一个，直到回答结束。图像识别、欺诈检测、推荐排序也是类似逻辑：训练好的模型接收新输入，然后给出结果。

Training 更像“学会规律”，inference 更像“按规律处理新问题”。AI Engineer 多数时间不从零训练大模型，而是在产品里把推理服务接好：控制延迟、成本、上下文、输出格式和失败处理。

## 实践建议

- 先分清任务类型。分类、抽取、摘要、对话、代码生成、图片理解，对延迟和输出校验的要求不一样。
- 记录核心指标：首 token 时间、总延迟、输入 token、输出 token、错误率、重试次数和单次成本。
- 重要接口要做超时和降级。模型慢了、断了、返回格式错了，产品仍然要能给用户一个可理解的结果。
- 对生成式任务使用结构化输出或后置校验。不要假设模型每次都会按 JSON、表格或固定字段返回。
- 把 prompt 版本、模型版本和参数一起记录。线上问题回放时，这些信息比“用户说模型答错了”有用得多。

## 常见误区

- **误区一：推理只是调用一个 API。** API 只是入口，真正的线上推理还包括鉴权、上下文组装、限流、缓存、监控和回滚。
- **误区二：模型越大，推理体验越好。** 大模型可能更准，也可能更慢、更贵。简单分类或固定抽取任务可以先试小模型。
- **误区三：离线测试通过就能直接上线。** 线上流量会带来长输入、脏数据、恶意 prompt 和超出预期的并发。
- **误区四：只看平均延迟。** 用户更在意最慢的那批请求。P95、P99 延迟往往比平均值更能说明体验问题。

## 延伸阅读

- [Cloudflare：Inference vs Training](https://www.cloudflare.com/learning/ai/inference-vs-training/)
- [AWS：What is Machine Learning Inference?](https://aws.amazon.com/what-is/machine-learning-inference/)
- [IBM：What is AI Inference?](https://www.ibm.com/think/topics/ai-inference)
- [NVIDIA：What is AI Inference?](https://www.nvidia.com/en-us/glossary/ai-inference/)
- [Google Cloud：Get online predictions from custom trained models](https://cloud.google.com/vertex-ai/docs/predictions/get-online-predictions)
- [roadmap.sh 原始章节：Inference](https://roadmap.sh/ai-engineer)

## 本次参考

- [Cloudflare：Inference vs Training](https://www.cloudflare.com/learning/ai/inference-vs-training/)
- [AWS：What is Machine Learning Inference?](https://aws.amazon.com/what-is/machine-learning-inference/)
- [IBM：What is AI Inference?](https://www.ibm.com/think/topics/ai-inference)
- [NVIDIA：What is AI Inference?](https://www.nvidia.com/en-us/glossary/ai-inference/)
- [Google Cloud：Get online predictions from custom trained models](https://cloud.google.com/vertex-ai/docs/predictions/get-online-predictions)
- [Hazelcast：What is Machine Learning Inference?](https://hazelcast.com/glossary/machine-learning-inference/)
- 原项目章节：`developer-roadmap / ai-engineer / Inference`
