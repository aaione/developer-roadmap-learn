# AGENTS.md — 自动化提交约束与规范

> 本文件从历史提交中提炼的约束规则，供后续自动化运行和人工维护统一遵循。

---

## 提交规范

- **作者/提交人**: `tj <tiejia0319@gmail.com>`
- **提交粒度**: 每次自动化运行验证通过后立即提交，保持项目树干净（不留未暂存的修改）
- **提交信息格式**: 简述做了什么（祈使句），body 中记录以下字段：

```
Constraint: 本次运行必须遵守的约束
Rejected: 被否决的做法及原因
Confidence: high / medium / low
Scope-risk: narrow / medium / wide
Directive: 下次运行应继续的方向
Tested: 已验证的项目
Not-tested: 未验证的项目

Co-authored-by: <根据实际使用的工具动态填写，例如：>
  - Claude Code: Claude <noreply@anthropic.com>
  - OmX: OmX <omx@oh-my-codex.dev>
```

---

## 内容约束

1. **严格遵循 roadmap 图序**: 按照 `/Users/apple/work/hs/ai-feature/developer-roadmap` 中 ai-engineer 图的 y 轴顺序推进章节，不得跳序或按主题重排
2. **中文优先**: 章节标签、标题以中文为主，技术术语（如 AI Engineer、LLM）保留英文
3. **禁止使用 createimage**: 后续运行不得调用 createimage 生成图片
4. **禁止绝对路径**: 公开文档和日志中不得出现本地绝对路径（如 `/Users/apple/...`）
5. **不翻译 slug**: 保持现有英文 slug 不变，确保链接稳定

---

## 构建与验证流程

1. **VitePress 构建**: `pnpm docs:build`（Node 24），确保无报错
2. **本地预览**: `pnpm docs:dev` 启动 `localhost:5173`，通过 Chrome MCP 检查新增页面
3. **Markdown 检查**: 验证本地链接、公开资源路径、图片引用正确
4. **进度追踪**: 基于项目 `data/roadmap-progress.json` 记录已完成的章节

---

## 排除项

- 不提交 `node_modules/` 和 VitePress `dist/` 构建产物（可复现）
- 不做移动端视口视觉测试（除非明确要求）
- 不对外部参考链接做逐一可用性验证

---

## 当前进度

从 `data/roadmap-progress.json` 读取，下次运行继续完成 **Embeddings → Limitations and Considerations → OpenAI Models** 章节。
