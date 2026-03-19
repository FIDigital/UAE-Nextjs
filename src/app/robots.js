export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/_next/"],
        },
        sitemap: "https://fristine-uae.com/sitemap.xml",
        host: "https://fristine-uae.com",
    };
}
