import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kiwis.chaipat.cc"),
  title: {
    default: "KiWiS — Knowledge Workspace for Integrated Science",
    template: "%s · KiWiS",
  },
  description:
    "A living knowledge workspace for astronomy, machine learning, ontology engineering, and research provenance.",
  openGraph: {
    title: "KiWiS — Knowledge Workspace for Integrated Science",
    description: "Methods, concepts, and provenance across the chaipat.cc research network.",
    images: [{ url: "/og.png", width: 1734, height: 907, alt: "KiWiS knowledge workspace" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
};

const navbar = (
  <Navbar
    logo={
      <span className="kiwis-wordmark" aria-label="KiWiS home">
        <span className="kiwis-wordmark-mark">K</span>
        <span>
          <strong>KiWiS</strong>
          <small>Knowledge Workspace</small>
        </span>
      </span>
    }
    projectLink="https://github.com/AppleBoiy/kiwis"
  />
);

const footer = (
  <Footer>
    <div className="kiwis-footer">
      <span>KiWiS · Knowledge Workspace for Integrated Science</span>
      <span>Part of the chaipat.cc research network · 2026</span>
    </div>
  </Footer>
);

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <meta name="theme-color" content="#0d1815" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/AppleBoiy/kiwis/tree/main"
          footer={footer}
        >
          {children}
        </Layout>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
