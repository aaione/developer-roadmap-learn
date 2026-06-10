import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'AI Engineer Roadmap',
  description: '按照 roadmap.sh AI Engineer 图谱整理的中文学习笔记',
  lang: 'zh-CN',
  base: '/developer-roadmap-learn/',
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
            { text: '预训练模型的好处', link: '/ai-engineer/02-model-basics/benefits-of-pre-trained-models' },
            { text: 'Embedding：把语义变成可计算的向量', link: '/ai-engineer/02-model-basics/embeddings' },
            { text: '预训练模型的限制和选型考虑', link: '/ai-engineer/02-model-basics/limitations-and-considerations' },
            { text: 'OpenAI Models：先按任务选模型', link: '/ai-engineer/02-model-basics/openai-models' }
          ]
        },
        {
          text: 'Context, Retrieval and Agents',
          items: [
            { text: '向量数据库：让语义检索跑起来', link: '/ai-engineer/03-context-retrieval-agents/vector-databases' },
            { text: 'RAG：把外部知识接进模型', link: '/ai-engineer/03-context-retrieval-agents/rag' },
            { text: 'AI Agents：能规划和调用工具的系统', link: '/ai-engineer/03-context-retrieval-agents/ai-agents' }
          ]
        },
        {
          text: 'Prompts, Models and Context',
          items: [
            { text: 'Open AI Models：理解开放模型和 Token', link: '/ai-engineer/04-prompts-context/open-ai-models' },
            { text: 'Prompt Engineering：把意图写成任务', link: '/ai-engineer/04-prompts-context/prompt-engineering' },
            { text: '能力边界和上下文长度', link: '/ai-engineer/04-prompts-context/capabilities-context-length' },
            { text: '知识截止日期不是实时记忆', link: '/ai-engineer/04-prompts-context/cut-off-dates-knowledge' },
            { text: 'Chat Completions API：消息数组', link: '/ai-engineer/04-prompts-context/chat-completions-api' },
            { text: 'Anthropic Claude：模型与 API', link: '/ai-engineer/04-prompts-context/anthropic-claude' },
            { text: 'Writing Prompts：写清任务单', link: '/ai-engineer/04-prompts-context/writing-prompts' },
            { text: 'Google Gemini：多模态模型家族', link: '/ai-engineer/04-prompts-context/google-gemini' },
            { text: 'Maximum Tokens：输出长度上限', link: '/ai-engineer/04-prompts-context/maximum-tokens' }
          ]
        },
        {
          text: 'Cloud Model Platforms',
          items: [
            { text: 'Azure AI：云端 AI 工程平台', link: '/ai-engineer/05-cloud-model-platforms/azure-ai' },
            { text: 'AWS SageMaker：模型生命周期工作台', link: '/ai-engineer/05-cloud-model-platforms/aws-sagemaker' },
            { text: 'Token Counting：先算容量再发请求', link: '/ai-engineer/05-cloud-model-platforms/token-counting' }
          ]
        },
        {
          text: 'OpenAI API and Model Providers',
          items: [
            { text: 'Hugging Face Models：先读模型卡', link: '/ai-engineer/06-openai-api-model-providers/hugging-face-models' },
            { text: 'Pricing Considerations：估算真实成本', link: '/ai-engineer/06-openai-api-model-providers/pricing-considerations' },
            { text: 'Mistral AI：开放权重与商业 API', link: '/ai-engineer/06-openai-api-model-providers/mistral-ai' },
            { text: 'Cohere：企业检索和生成平台', link: '/ai-engineer/06-openai-api-model-providers/cohere' },
            { text: 'Replicate：把模型当成 API 试用', link: '/ai-engineer/06-openai-api-model-providers/replicate' },
            { text: 'OpenAI Playground：调试 Prompt', link: '/ai-engineer/06-openai-api-model-providers/open-ai-playground' },
            { text: 'Fine-tuning：让模型贴近任务', link: '/ai-engineer/06-openai-api-model-providers/fine-tuning' }
          ]
        },
        {
          text: 'AI Safety and Ethics',
          items: [
            { text: 'Prompt Injection Attacks：恶意输入改写模型行为', link: '/ai-engineer/07-ai-safety-ethics/prompt-injection-attacks' },
            { text: 'Security and Privacy Concerns：守住数据边界', link: '/ai-engineer/07-ai-safety-ethics/security-and-privacy-concerns' },
            { text: 'Bias and Fairness：减少系统性偏差', link: '/ai-engineer/07-ai-safety-ethics/bias-and-fairness' }
          ]
        },
        {
          text: 'OpenSource AI',
          items: [
            { text: 'Open vs Closed Source Models：控制权与省心程度', link: '/ai-engineer/08-opensource-ai/open-vs-closed-source-models' },
            { text: 'Popular Open Source Models：主流开放模型家族', link: '/ai-engineer/08-opensource-ai/popular-open-source-models' }
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
            { text: '2026-06-05 既有内容优化', link: '/logs/2026-06-05-run-04' },
            { text: '2026-06-05 Embedding 与 OpenAI 模型', link: '/logs/2026-06-05-run-05' },
            { text: '2026-06-05 向量检索与 Agent', link: '/logs/2026-06-05-run-06' },
            { text: '2026-06-05 开放模型与上下文', link: '/logs/2026-06-05-run-07' },
            { text: '2026-06-06 知识边界与 Claude', link: '/logs/2026-06-06-run-08' },
            { text: '2026-06-07 Prompt、Gemini 与 Token 上限', link: '/logs/2026-06-07-run-09' },
            { text: '2026-06-09 云平台与 Token Counting', link: '/logs/2026-06-09-run-10' },
            { text: '2026-06-09 Hugging Face、成本与 Mistral', link: '/logs/2026-06-09-run-11' },
            { text: '2026-06-09 Cohere、Replicate 与 Playground', link: '/logs/2026-06-09-run-12' },
            { text: '2026-06-10 Fine-tuning 与 AI 安全', link: '/logs/2026-06-10-run-13' },
            { text: '2026-06-10 公平性与开放模型', link: '/logs/2026-06-10-run-14' }
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
