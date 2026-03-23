export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin/", "/api/", "/staging/", "/internal/"],
            },
            {
                userAgent: "GPTBot",
                allow: "/",
            },
            {
                userAgent: "ChatGPT-User",
                allow: "/",
            },
            {
                userAgent: "Google-Extended",
                allow: "/",
            },
            {
                userAgent: "anthropic-ai",
                allow: "/",
            },
            {
                userAgent: "ClaudeBot",
                allow: "/",
            },
            {
                userAgent: "MicrosoftPreview",
                allow: "/",
            },
            {
                userAgent: "Bingbot",
                allow: "/",
            },
            {
                userAgent: "PerplexityBot",
                allow: "/",
            },
            {
                userAgent: "Meta-ExternalAgent",
                allow: "/",
            },
            {
                userAgent: "FacebookBot",
                allow: "/",
            },
            {
                userAgent: "Applebot",
                allow: "/",
            },
            {
                userAgent: "Applebot-Extended",
                allow: "/",
            },
            {
                userAgent: "cohere-ai",
                allow: "/",
            },
            {
                userAgent: "Bytespider",
                disallow: "/",
            },
        ],
        sitemap: [
            "https://fidigital.ae/sitemap.xml",
            "https://fidigital.ae/sitemap-ar.xml",
        ],
    };
}
