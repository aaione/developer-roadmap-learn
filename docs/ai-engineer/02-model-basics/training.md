# 训练：模型从数据里学规律

## 学习目标

读完这一节，你应该能解释：

- model training 大概在做什么。
- 数据集、损失函数、参数更新和验证集分别有什么用。
- AI Engineer 为什么也要理解训练，即使不从零训练大模型。

## 概念解释

Training 是让模型从数据里学习规律的过程。我们给模型一批样本，模型先做预测，再把预测结果和正确答案或训练目标比较。差距会变成 loss，训练算法再根据 loss 调整模型参数。这个过程重复很多轮，模型慢慢学会把输入映射到更合理的输出。

传统机器学习里，训练可能是让模型学会判断邮件是否垃圾、预测用户是否会流失。深度学习和 LLM 里，训练规模会大很多：模型会处理海量文本、图片、音频或代码，通过大量参数学习表示能力。

对 AI Engineer 来说，理解训练不是为了每次都训练大模型，而是为了知道模型能力从哪里来、什么时候该 fine-tuning、什么时候该用 RAG 或 prompt 解决，以及为什么数据质量会直接影响结果。

## 实践建议

- 先把数据问题讲清楚。样本是否代表真实用户？标签是否一致？训练数据和线上输入是否差得太远？
- 保留训练集、验证集和测试集。不要用同一批数据既训练又证明模型可靠。
- 建立简单 baseline。复杂模型上来之前，先用规则、小模型或已有预训练模型看任务难度。
- 关注过拟合。训练集表现很好、线上或测试集表现差，通常说明模型记住了样本，而不是学会了可泛化的规律。
- 做好实验记录。数据版本、参数、模型版本、评估指标和失败样例都要能追溯。

## 常见误区

- **误区一：训练数据越多就一定越好。** 数据量重要，数据质量更重要。重复、脏标签、偏见样本会把模型带偏。
- **误区二：只要 loss 降低，模型就更适合产品。** 业务需要的是可用结果。还要看准确率、召回率、人工评分、延迟、成本和安全边界。
- **误区三：fine-tuning 可以解决所有问题。** 如果模型缺的是最新业务资料，RAG 往往更合适；如果缺的是稳定输出格式，prompt 和校验可能更便宜。
- **误区四：训练完成后工作就结束。** 真实业务会变，数据分布会漂移。模型上线后还要监控、评估和定期复查。

## 延伸阅读

- [AWS：Training ML Models](https://docs.aws.amazon.com/machine-learning/latest/dg/training-ml-models.html)
- [Google Machine Learning Crash Course：Training and Test Sets](https://developers.google.com/machine-learning/crash-course/training-and-test-sets/splitting-data)
- [Google Cloud：Custom training overview](https://cloud.google.com/vertex-ai/docs/training/overview)
- [Hugging Face：Training](https://huggingface.co/docs/transformers/en/training)
- [Domino：Machine learning model training](https://domino.ai/blog/what-is-machine-learning-model-training)
- [roadmap.sh 原始章节：Training](https://roadmap.sh/ai-engineer)

## 本次参考

- [AWS：Training ML Models](https://docs.aws.amazon.com/machine-learning/latest/dg/training-ml-models.html)
- [Google Machine Learning Crash Course：Training and Test Sets](https://developers.google.com/machine-learning/crash-course/training-and-test-sets/splitting-data)
- [Google Cloud：Custom training overview](https://cloud.google.com/vertex-ai/docs/training/overview)
- [Hugging Face：Training](https://huggingface.co/docs/transformers/en/training)
- [Domino：Machine learning model training](https://domino.ai/blog/what-is-machine-learning-model-training)
- [Oden Technologies：Model Training](https://oden.io/glossary/model-training/)
- 原项目章节：`developer-roadmap / ai-engineer / Training`
