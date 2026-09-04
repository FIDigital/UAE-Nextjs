export default async function sitemap() {
    const baseUrl = "https://fidigital.ae"; // Standardized to primary domain
    const lastModified = new Date();

    return [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/solutions`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/methodology`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified,
            changeFrequency: "yearly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/sales`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/service`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/marketing-automation`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/ai`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/platform/custom-ai-development`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/platform/zoho-agentic-ai`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/digital-workers/whatsapp-sales-agents`,
            lastModified,
            changeFrequency: "weekly",
            priority: 0.7,
        },
    ];
}
