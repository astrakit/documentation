/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Astrakit",
  "tagline": "Discover the future of chatting",
  "favicon": "img/favicon.ico",
  "url": "https://docs.astrakit.cc",
  "baseUrl": "/",
  "organizationName": "astrakit",
  "projectName": "documentation",
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "warn",
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "plugins": [
    "/run/media/cat/QVO/01 - CODE/astrakit-docs/documentation/node_modules/docusaurus-lunr-search/src/index.js"
  ],
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "./sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          "showLastUpdateTime": true,
          "showLastUpdateAuthor": true
        },
        "blog": {
          "showReadingTime": true,
          "feedOptions": {
            "type": [
              "rss",
              "atom"
            ],
            "xslt": true
          },
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          "onInlineTags": "warn",
          "onInlineAuthors": "warn",
          "onUntruncatedBlogPosts": "warn"
        },
        "theme": {
          "customCss": "./src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "colorMode": {
      "defaultMode": "dark",
      "disableSwitch": false,
      "respectPrefersColorScheme": true
    },
    "image": "img/docusaurus-social-card.jpg",
    "navbar": {
      "style": "dark",
      "title": "Astrakit documentation",
      "logo": {
        "alt": "Astrakit planet",
        "src": "img/astrakit.png"
      },
      "items": [
        {
          "type": "docSidebar",
          "sidebarId": "tutorialSidebar",
          "position": "left",
          "label": "Documentation"
        },
        {
          "to": "/docs/security/report",
          "label": "Security Report",
          "position": "left"
        },
        {
          "href": "https://github.com/astrakit/documentation",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Tutorial",
              "to": "/docs/getting-started"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Github",
              "href": "https://github.com/astrakit"
            },
            {
              "label": "Mastodon (cat-space)",
              "href": "https://cat-space.net/@astrakit"
            },
            {
              "label": "Main website",
              "href": "https://astrakit.cc"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "GitHub - docs",
              "href": "https://github.com/astrakit/documentation"
            },
            {
              "label": "GitHub - website",
              "href": "https://github.com/astrakit/main-website"
            }
          ]
        },
        {
          "title": "Legal matters",
          "items": [
            {
              "label": "Privacy Policy",
              "href": "/docs/legal/privacy"
            },
            {
              "label": "Terms Of Service",
              "href": "/docs/legal/tos"
            },
            {
              "label": "Security notice",
              "href": "/docs/legal/securityrep"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2025 Astrakit."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "blog": {
      "sidebar": {
        "groupByYear": true
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "baseUrlIssueBanner": true,
  "future": {
    "experimental_faster": {
      "swcJsLoader": false,
      "swcJsMinimizer": false,
      "swcHtmlMinimizer": false,
      "lightningCssMinimizer": false,
      "mdxCrossCompilerCache": false,
      "rspackBundler": false
    },
    "experimental_storage": {
      "type": "localStorage",
      "namespace": false
    },
    "experimental_router": "browser"
  },
  "onBrokenAnchors": "warn",
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "themes": [],
  "scripts": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "format": "mdx",
    "mermaid": false,
    "mdx1Compat": {
      "comments": true,
      "admonitions": true,
      "headingIds": true
    },
    "anchors": {
      "maintainCase": false
    }
  }
};
