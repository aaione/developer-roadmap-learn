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
            { text: '什么是 AI Engineer？', link: '/ai-engineer/01-introduction/what-is-an-ai-engineer' }
          ]
        }
      ],
      '/logs/': [
        {
          text: '整理日志',
          items: [
            { text: '2026-06-05 首次整理', link: '/logs/2026-06-05-run-01' }
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
