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
        header: "Cormorant Garamond",
        body: "Inter",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f0f4f7",
          lightgray: "#dde5ec",
          gray: "#8ea3b0",
          darkgray: "#3a4d5c",
          dark: "#1a2e3d",
          secondary: "#4a7fa0",
          tertiary: "#7aaec8",
          highlight: "rgba(74, 127, 160, 0.07)",
          textHighlight: "#c8dde888",
        },
        darkMode: {
          light: "#111820",
          lightgray: "#1c2b38",
          gray: "#4a6a80",
          darkgray: "#bfcdd8",
          dark: "#e4ecf0",
          secondary: "#7db5ce",
          tertiary: "#9ec9de",
          highlight: "rgba(125, 181, 206, 0.10)",
          textHighlight: "#1a3a4e88",
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
