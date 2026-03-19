export const siteConfig = {
    name: "FI Digital UAE",
    tagline: "AI Agent Architects for Enterprise Transformation",
    url: "https://www.fidigital.ae",
    email: "info@fidigital.ae",
    phone: "+971 58 589 5292",
    whatsapp: "+971 58 589 5292",
    offices: {
        dubai: {
            city: "Dubai",
            address: "DSV Information Technology LLC. 412-582, Arjumand Offices and Retail, Dubai Investment Park, Dubai",
            phone: "+971 58 589 5292",
        },
        riyadh: {
            city: "Riyadh",
            address: "King Fahd Road, Olaya District, Riyadh, KSA",
            phone: "+971 58 589 5292",
        },
    },
};

export const navigation = [
    {
        label: "Home",
        href: "/home",
    },
    {
        label: "Services",
        href: "/digital-workers",
        children: [
            {
                label: "WhatsApp Sales Agents",
                href: "/digital-workers/whatsapp-sales-agents",
            },
            {
                label: "Real Estate Lead Qualification",
                href: "/digital-workers/real-estate-agents",
            },
            {
                label: "Finance & Procurement Agents",
                href: "/digital-workers/finance-procurement-agents",
            },
            {
                label: "Customer Service Agents",
                href: "/digital-workers/customer-service-agents",
            },
            {
                label: "HR & Onboarding Agents",
                href: "/digital-workers/hr-onboarding-agents",
            },
        ],
    },
    {
        label: "Platform",
        href: "/platform",
        children: [
            { label: "Zoho Agentic AI", href: "/platform/zoho-agentic-ai" },
            { label: "n8n Orchestration", href: "/platform/n8n-orchestration" },
            { label: "Multilingual LLM", href: "/platform/multilingual-llm" },
            {
                label: "Custom AI Development",
                href: "/platform/custom-ai-development",
            },
            { label: "Data & Analytics", href: "/platform/data-analytics" },
        ],
    },
    {
        label: "Industries",
        href: "/industries",
        children: [
            { label: "Real Estate & PropTech", href: "/industries/real-estate" },
            { label: "Retail & E-Commerce", href: "/industries/retail-ecommerce" },
            {
                label: "Professional Services",
                href: "/industries/professional-services",
            },
            { label: "Healthcare & Wellness", href: "/industries/healthcare" },
            { label: "F&B & Hospitality", href: "/industries/fnb-hospitality" },
            { label: "Logistics & Supply Chain", href: "/industries/logistics" },
        ],
    },
    {
        label: "About",
        href: "/about",
    },
    {
        label: "Contact",
        href: "/contact",
    },
];

export const stats = [
    { value: "40+", label: "Deployed Agent Workflows" },
    { value: "87%", label: "Avg Qualification Accuracy" },
    { value: "94%", label: "Finance Automation Rate" },
    { value: "80+", label: "Zoho Implementations" },
];

// Industry icons are now SVG-based, rendered in the component
export const industries = [
    {
        name: "Real Estate & PropTech",
        slug: "real-estate",
        tagline: "Sell More Properties with Less Manual Work",
        iconId: "building",
        description:
            "AI-powered lead qualification and WhatsApp agents for Dubai real estate.",
    },
    {
        name: "Retail & E-Commerce",
        slug: "retail-ecommerce",
        tagline: "Turn Every Customer Interaction Into Revenue",
        iconId: "shopping",
        description:
            "Boost sales with AI-powered commerce, inventory, and customer engagement.",
    },
    {
        name: "Professional Services",
        slug: "professional-services",
        tagline: "Deliver More Billable Value with Less Admin",
        iconId: "briefcase",
        description: "Automate proposals, billing, and knowledge management.",
    },
    {
        name: "Healthcare & Wellness",
        slug: "healthcare",
        tagline: "Better Patient Experience. Less Administrative Burden.",
        iconId: "heart",
        description: "Automate patient management for UAE clinics with AI agents.",
    },
    {
        name: "F&B & Hospitality",
        slug: "fnb-hospitality",
        tagline: "Elevate Every Guest Experience",
        iconId: "utensils",
        description: "Automate reservations, guest experience, and operations.",
    },
    {
        name: "Logistics & Supply Chain",
        slug: "logistics",
        tagline: "Move Faster. Track Everything. Waste Nothing.",
        iconId: "truck",
        description: "Optimize routes, automate tracking, streamline operations.",
    },
];
