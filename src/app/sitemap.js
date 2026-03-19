export default function sitemap() {
    const baseUrl = "https://fristine-uae.com";
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
    ];
}
