export default async function sitemap() {
    const baseUrl = "https://www.fidigital.ae";
    const lastModified = new Date();

    const pages = [
        // Core
        { path: "/", freq: "weekly", pri: 1 },
        { path: "/about", freq: "monthly", pri: 0.8 },
        { path: "/solutions", freq: "weekly", pri: 0.9 },
        { path: "/methodology", freq: "weekly", pri: 0.8 },
        { path: "/contact", freq: "yearly", pri: 0.9 },
        { path: "/resources", freq: "weekly", pri: 0.7 },
        { path: "/case-studies", freq: "monthly", pri: 0.7 },
        { path: "/zoho-partner", freq: "monthly", pri: 0.7 },

        // Solutions
        { path: "/sales", freq: "weekly", pri: 0.8 },
        { path: "/service", freq: "weekly", pri: 0.8 },
        { path: "/marketing-automation", freq: "weekly", pri: 0.8 },
        { path: "/ai", freq: "weekly", pri: 0.8 },

        // Digital Workers
        { path: "/digital-workers", freq: "weekly", pri: 0.8 },
        { path: "/digital-workers/whatsapp-sales-agents", freq: "weekly", pri: 0.7 },
        { path: "/digital-workers/customer-service-agents", freq: "weekly", pri: 0.7 },
        { path: "/digital-workers/finance-procurement-agents", freq: "weekly", pri: 0.7 },
        { path: "/digital-workers/hr-onboarding-agents", freq: "weekly", pri: 0.7 },
        { path: "/digital-workers/real-estate-agents", freq: "weekly", pri: 0.7 },

        // Platform
        { path: "/platform", freq: "weekly", pri: 0.8 },
        { path: "/platform/custom-ai-development", freq: "weekly", pri: 0.7 },
        { path: "/platform/zoho-agentic-ai", freq: "weekly", pri: 0.7 },
        { path: "/platform/data-analytics", freq: "weekly", pri: 0.7 },
        { path: "/platform/multilingual-llm", freq: "weekly", pri: 0.7 },
        { path: "/platform/n8n-orchestration", freq: "weekly", pri: 0.7 },

        // Product Studio
        { path: "/product-studio", freq: "weekly", pri: 0.8 },
        { path: "/product-studio/ai-mvp", freq: "weekly", pri: 0.7 },
        { path: "/product-studio/custom-saas", freq: "weekly", pri: 0.7 },
        { path: "/product-studio/legacy-modernization", freq: "weekly", pri: 0.7 },
        { path: "/product-studio/scaling-maintenance", freq: "weekly", pri: 0.7 },

        // Industries
        { path: "/industries", freq: "weekly", pri: 0.8 },
        { path: "/industries/fnb-hospitality", freq: "monthly", pri: 0.7 },
        { path: "/industries/healthcare", freq: "monthly", pri: 0.7 },
        { path: "/industries/logistics", freq: "monthly", pri: 0.7 },
        { path: "/industries/professional-services", freq: "monthly", pri: 0.7 },
        { path: "/industries/real-estate", freq: "monthly", pri: 0.7 },
        { path: "/industries/retail-ecommerce", freq: "monthly", pri: 0.7 },

        // Case Studies
        { path: "/casestudy/wallan-trading-co-digital-transformation-zoho", freq: "monthly", pri: 0.6 },
    ];

    return pages.map(({ path, freq, pri }) => ({
        url: path === "/" ? baseUrl : `${baseUrl}${path}`,
        lastModified,
        changeFrequency: freq,
        priority: pri,
    }));
}
