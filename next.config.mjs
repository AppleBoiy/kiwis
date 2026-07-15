import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
});

export default withNextra({
  async redirects() {
    return [
      { source: "/docs/:path*", destination: "/legacy", permanent: false },
      { source: "/appendix/:path*", destination: "/legacy", permanent: false },
      { source: "/faq/:path*", destination: "/legacy", permanent: false },
    ];
  },
  experimental: {
    turbo: {
      resolveAlias: {
        "next-mdx-import-source-file": "./mdx-components.tsx",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
});
