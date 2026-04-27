import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Kennissysteem",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "nl-NL",
    baseUrl: "soldiHo.github.io/kennissysteem-garden",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Noto Serif",
        body: "Nunito",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f7f4ed",
          lightgray: "#ece6d9",
          gray: "#9c9080",
          darkgray: "#3d3530",
          dark: "#1f1a15",
          secondary: "#5b7d5e",
          tertiary: "#8aab8d",
          highlight: "rgba(91, 125, 94, 0.08)",
          textHighlight: "#d4e6d688",
        },
        darkMode: {
          light: "#18191a",
          lightgray: "#252821",
          gray: "#52614e",
          darkgray: "#c8cfc0",
          dark: "#eaece6",
          secondary: "#8aab8d",
          tertiary: "#6a8d6d",
          highlight: "rgba(138, 171, 141, 0.12)",
          textHighlight: "#1e3a2288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
