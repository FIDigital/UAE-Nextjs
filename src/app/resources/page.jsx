import ResourcesClient from "./ResourcesClient";

export const metadata = {
  title: "Resources | FI Digital UAE — Learn. Explore. Stay Ahead.",
  description:
    "Bilingual blog, whitepapers, webinars, and partner ecosystem for UAE enterprises exploring AI agent transformation.",
  alternates: {
    canonical: "https://fidigital.ae/resources",
  },
};

export default function Page() {
  return <ResourcesClient />;
}
