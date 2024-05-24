import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useTheme } from "nextra-theme-docs";

const KiwiLightLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="67.202 85.9683 274.3194 85.3718"
    width="200"
    height="50"
  >
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        x1="84.133"
        y1="89.783"
        x2="84.133"
        y2="129.783"
        id="gradient-0"
      >
        <stop
          offset="0"
          style={{ stopColor: "rgb(24.706%, 24.706%, 24.706%)" }}
        />
        <stop
          offset="1"
          style={{ stopColor: "rgb(15.584%, 15.584%, 15.584%)" }}
        />
      </linearGradient>
      <style>{`@import url(https://fonts.googleapis.com/css2?family=Aleo%3Aital%2Cwght%400%2C100..900%3B1%2C100..900&amp;display=swap);`}</style>
    </defs>
    <circle
      cx="97.133"
      cy="124.783"
      r="35"
      style={{ fill: "rgb(175, 175, 175)" }}
      transform="matrix(0.8390810489654541, 0, 0, 0.8229879140853882, 15.067381858825698, 23.214466094970703)"
    />
    <circle
      cx="84.133"
      cy="109.783"
      r="20"
      style={{ fill: "url(#gradient-0)" }}
      transform="matrix(0.8390810489654541, 0, 0, 0.8229879140853882, 15.067381858825698, 23.214466094970703)"
    />
    <path
      d="M 83.984 117.68 L 88.179 113.565 L 83.984 109.45"
      fill="#FFCC66"
      style={{}}
      transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)"
    />
    <circle
      cx="79.133"
      cy="106.783"
      r="3"
      fill="white"
      style={{}}
      transform="matrix(0.8390810489654541, 0, 0, 0.8229879140853882, 15.067381858825698, 23.214466094970703)"
    />
    <circle
      cx="89.133"
      cy="106.783"
      r="3"
      fill="white"
      style={{}}
      transform="matrix(0.8390810489654541, 0, 0, 0.8229879140853882, 15.067381858825698, 23.214466094970703)"
    />
    <rect
      x="89.602"
      y="130.537"
      width="20.407"
      height="12.046"
      fill="black"
      style={{}}
      transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)"
    />
    <line
      x1="88.179"
      y1="134.139"
      x2="85.662"
      y2="138.254"
      stroke="#3F3F3F"
      style={{}}
      transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)"
    />
    <text
      style={{ fill: "rgb(51, 51, 51)", fontFamily: "Aleo", fontSize: "28px" }}
      transform="matrix(2.4651730060577393, 0, 0, 2.5389389991760254, -208.32769775390625, -246.15667724609375)"
      x="139.41"
      y="156.166"
    >
      KIWIS
    </text>
    <ellipse
      style={{
        fillRule: "nonzero",
        paintOrder: "fill",
        stroke: "rgba(0, 0, 0, 0)",
        fill: "rgb(52, 52, 52)",
      }}
      cx="103.327"
      cy="129.636"
      rx="4.903"
      ry="7.889"
      transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)"
    />
    <style jsx>{`
      svg {
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      svg:hover {
        mask-position: 100%;
        transition:
          mask-position 1s ease,
          -webkit-mask-position 1s ease;
      }
    `}</style>
  </svg>
);

const KiwiDarkLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="67.202 85.9683 274.3194 85.3718"
    width="200"
    height="50"
  >
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        x1="84.133"
        y1="89.783"
        x2="84.133"
        y2="129.783"
        id="gradient-0"
      >
        <stop offset="0" style={{ stopColor: "rgb(75%, 75%, 75%)" }} />
        <stop offset="1" style={{ stopColor: "rgb(85%, 85%, 85%)" }} />
      </linearGradient>
      <style>{`@import url(https://fonts.googleapis.com/css2?family=Aleo%3Aital%2Cwght%400%2C100..900%3B1%2C100..900&amp;display=swap);`}</style>
    </defs>
    <circle
      cx="97.133"
      cy="124.783"
      r="35"
      style={{ fill: "rgb(80, 80, 80)" }}
      transform="matrix(0.8390810489654541, 0, 0, 0.8229879140853882, 15.067381858825698, 23.214466094970703)"
    />
    <circle
      cx="84.133"
      cy="109.783"
      r="20"
      style={{ fill: "url(#gradient-0)" }}
      transform="matrix(0.8390810489654541, 0, 0, 0.8229879140853882, 15.067381858825698, 23.214466094970703)"
    />
    <path
      d="M 83.984 117.68 L 88.179 113.565 L 83.984 109.45"
      fill="#0033AA"
      style={{}}
      transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)"
    />
    <circle
      cx="79.133"
      cy="106.783"
      r="3"
      fill="black"
      style={{}}
      transform="matrix(0.8390810489654541, 0, 0, 0.8229879140853882, 15.067381858825698, 23.214466094970703)"
    />
    <circle
      cx="89.133"
      cy="106.783"
      r="3"
      fill="black"
      style={{}}
      transform="matrix(0.8390810489654541, 0, 0, 0.8229879140853882, 15.067381858825698, 23.214466094970703)"
    />
    <rect
      x="89.602"
      y="130.537"
      width="20.407"
      height="12.046"
      fill="white"
      style={{}}
      transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)"
    />
    <line
      x1="88.179"
      y1="134.139"
      x2="85.662"
      y2="138.254"
      stroke="#C0C0C0"
      style={{}}
      transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)"
    />
    <text
      style={{
        fill: "rgb(204, 204, 204)",
        fontFamily: "Aleo",
        fontSize: "28px",
      }}
      transform="matrix(2.4651730060577393, 0, 0, 2.5389389991760254, -208.32769775390625, -246.15667724609375)"
      x="139.41"
      y="156.166"
    >
      KIWIS
    </text>
    <ellipse
      style={{
        fillRule: "nonzero",
        paintOrder: "fill",
        stroke: "rgba(255, 255, 255, 255)",
        fill: "rgb(203, 203, 203)",
      }}
      cx="103.327"
      cy="129.636"
      rx="4.903"
      ry="7.889"
      transform="matrix(1, 0, 0, 1, 1.4210854715202004e-14, 0)"
    />
    <style jsx>{`
      svg {
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      svg:hover {
        mask-position: 100%;
        transition:
          mask-position 1s ease,
          -webkit-mask-position 1s ease;
      }
    `}</style>
  </svg>
);

const config: DocsThemeConfig = {
  logo: () => {
    const { resolvedTheme, theme } = useTheme();
    return theme === "dark" && resolvedTheme === "dark" ? (
      <KiwiDarkLogo />
    ) : (
      <KiwiLightLogo />
    );
  },
  project: {
    link: "https://github.com/AppleBoiy/kiwis",
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – KIWIS",
      };
    }
  },
  docsRepositoryBase: "https://github.com/AppleBoiy/kiwis",
  head: function useHead() {
    const { title } = useConfig();
    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="wiki is designed to assist CS students at CMU, Thailand."
        />
        <meta name="og:title" content={title ? title + " – KIWIS" : "KIWIS"} />
        <meta name="apple-mobile-web-app-title" content="Nextra" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="Auther"
            href="https://github.com/AppleBoiy"
          >
            <p>© 2023 AppleBoiy</p>
          </a>
        </div>
      </div>
    ),
  },
  toc: {
    backToTop: true,
  },
};

export default config;
