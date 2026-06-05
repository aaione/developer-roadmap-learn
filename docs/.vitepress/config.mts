import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'AI Engineer Roadmap',
  description: '按照 roadmap.sh AI Engineer 图谱整理的中文学习笔记',
  lang: 'zh-CN',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'AI Engineer', link: '/ai-engineer/' },
      { text: '整理日志', link: '/logs/' }
    ],
    sidebar: {
      '/ai-engineer/': [
        {
          text: 'Introduction',
          items: [
            { text: 'AI 对产品开发的影响', link: '/ai-engineer/01-introduction/impact-on-product-development' },
            { text: 'AI Engineer 的角色和职责', link: '/ai-engineer/01-introduction/roles-and-responsibilities' },
            { text: '什么是 AI Engineer？', link: '/ai-engineer/01-introduction/what-is-an-ai-engineer' },
            { text: 'AI Engineer 和 ML Engineer 的区别', link: '/ai-engineer/01-introduction/ai-engineer-vs-ml-engineer' },
            { text: 'AI 和 AGI 的区别', link: '/ai-engineer/01-introduction/ai-vs-agi' },
            { text: '什么是 LLM？', link: '/ai-engineer/01-introduction/llms' }
          ]
        },
        {
          text: 'Model Basics',
          items: [
            { text: '推理：模型真正干活的阶段', link: '/ai-engineer/02-model-basics/inference' },
            { text: '训练：模型从数据里学规律', link: '/ai-engineer/02-model-basics/training' },
            { text: '预训练模型的好处', link: '/ai-engineer/02-model-basics/benefits-of-pre-trained-models' }
          ]
        }
      ],
      '/logs/': [
        {
          text: '整理日志',
          items: [
            { text: '2026-06-05 首次整理', link: '/logs/2026-06-05-run-01' },
            { text: '2026-06-05 第二次整理', link: '/logs/2026-06-05-run-02' },
            { text: '2026-06-05 第三次整理', link: '/logs/2026-06-05-run-03' },
            { text: '2026-06-05 既有内容优化', link: '/logs/2026-06-05-run-04' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/kamranahmedse/developer-roadmap' }
    ],
    search: {
      provider: 'local'
    }
  }
});
