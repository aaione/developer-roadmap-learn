# Developer Roadmap 中文体系化电子书

这个站点是一个独立的 VitePress 项目，用来把 `developer-roadmap` 中 `src/data/roadmaps` 下的技术路线图，整理成中文、可连续阅读的体系化电子书。

每个路线图目录会作为一个大的学习分类推进。当前进行中的分类是 `ai-engineer`；这个分类完成后，再按任务记录继续整理其他技术栈，例如 frontend、backend、system-design、python、devops 等。

整理规则：

- 大分类对应 `src/data/roadmaps` 下的目录名，当前大分类记录为 `ai-engineer`。
- 每个大分类内部按原始图谱从上到下推进，不自行调整学习顺序。
- 每次只处理一批章节，方便复查、验证和增量更新。
- 每篇文章先判断文档类型，再采用解释、教程、操作指南或参考结构。
- 图片资源按分类存放，例如当前 AI Engineer 使用 `docs/public/images/ai-engineer/`，文章用 `/images/ai-engineer/...` 引用。

## 当前进度

当前大分类：`ai-engineer`。

已按图谱顺序完成 Introduction、Model Basics、向量检索到 Agent、Prompts / Context、云平台、OpenAI API and Model Providers、AI Safety and Ethics、OpenSource AI，以及 Safety Operations 的前 42 个小节：

- [AI Engineer 章节目录](/ai-engineer/)

下一批将继续 `ai-engineer` 图谱中的 `Robust prompt engineering`、`Know your Customers / Usecases`、`Constraining outputs and inputs`。

## 分类推进记录

| 大分类 | 来源目录 | 状态 | 当前说明 |
| --- | --- | --- | --- |
| AI Engineer | `src/data/roadmaps/ai-engineer` | 进行中 | 先完成这个分类，再进入其他技术栈 |
| 其他技术栈 | `src/data/roadmaps/*` | 待整理 | 后续按任务记录逐类建立电子书 |

## 知识体系图

下图是当前 `ai-engineer` 分类阶段的知识体系图，展示 AI Engineering 学习主线、Agent、安全、数据、平台和工程支撑之间的关系。后续整理其他技术栈时，会按新的大分类补充对应目录和进度记录。

![developer-roadmap-learn 知识体系图](/images/ai-engineer/developer-roadmap-learn-knowledge-system-v2.png)
