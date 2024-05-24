const nextra = require("nextra");

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  latex: true,
  flexsearch: {
    codeblocks: false,
  },
});

module.exports = {
  ...withNextra({
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "raw.githubusercontent.com",
          pathname: "/AppleBoiy/kiwis/main/**",
        },
        {
          protocol: "https",
          hostname: "raw.githubusercontent.com",
          pathname: "/CSCMU-65s/cs-wiki101/main/**",
        },
        {
          protocol: "https",
          hostname: "raw.githubusercontent.com",
          pathname: "/ape-docs/kiwis.med/main/**",
        }
      ],
    },
    webpack(config) {
      const allowedSvgRegex = /components\/icons\/.+\.svg$/;

      const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test?.test?.(".svg"),
      );
      fileLoaderRule.exclude = allowedSvgRegex;

      config.module.rules.push({
        test: allowedSvgRegex,
        use: ["@svgr/webpack"],
      });
      return config;
    },
  }),
};
