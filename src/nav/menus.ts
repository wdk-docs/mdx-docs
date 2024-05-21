const menus: any = {
  docs: [
    {
      label: "入门介绍",
      href: "/docs",
    },
    {
      label: "什么是 MDX？",
      href: "/docs/what-is-mdx",
    },
    {
      label: "入门",
      href: "/docs/getting-started",
    },
    {
      label: "使用 MDX",
      href: "/docs/using-mdx",
    },
    {
      label: "扩展 MDX",
      href: "/docs/extending-mdx",
    },
    {
      label: "MDX 疑难解答",
      href: "/docs/troubleshooting-mdx",
    },
  ],
  guides: [
    {
      label: "GFM",
      href: "/guides/gfm/",
    },
    {
      label: "Frontmatter",
      href: "/guides/frontmatter/",
    },
    {
      label: "Math",
      href: "/guides/math/",
    },
    {
      label: "语法高亮显示",
      href: "/guides/syntax-highlighting/",
    },
    {
      label: "嵌入",
      href: "/guides/embed/",
    },
    {
      label: "MDX on demand",
      href: "/guides/mdx-on-demand/",
    },
    {
      label: "注入组件",
      href: "/guides/injecting-components/",
    },
  ],
  packages: [
    {
      label: "unified",
      subMenus: [
        {
          label: "vfile",
          href: "/packages/vfile",
        },

        {
          label: "vfile-matter",
          href: "/packages/vfile-matter",
        },
      ],
    },
    {
      label: "remark",
      subMenus: [
        {
          label: "remark-mdx",
          href: "/packages/remark-mdx",
        },
        {
          label: "remark-mdx-frontmatter",
          href: "/packages/remark-mdx-frontmatter",
        },
      ],
    },
    {
      label: "rehype",
      subMenus: [
        {
          label: "rehype-highlight",
          href: "/packages/rehype-highlight",
        },
        {
          label: "rehype-pretty-code",
          href: "/packages/rehype-pretty-code",
        },
      ],
    },
    {
      label: "retext",
      subMenus: [
        {
          label: "retext",
          href: "/packages/retextjs",
        },
      ],
    },
    {
      label: "mdx",
      subMenus: [
        {
          label: "next-mdx-remote",
          href: "/packages/next-mdx-remote",
        },
        {
          label: "@mdx-js/esbuild",
          href: "/packages/esbuild",
        },
        {
          label: "@mdx-js/loader",
          href: "/packages/loader",
        },
        {
          label: "@mdx-js/mdx",
          href: "/packages/mdx",
        },
        {
          label: "@mdx-js/node-loader",
          href: "/packages/node-loader",
        },
        {
          label: "@mdx-js/preact",
          href: "/packages/preact",
        },
        {
          label: "@mdx-js/react",
          href: "/packages/react",
        },
        {
          label: "@mdx-js/rollup",
          href: "/packages/rollup",
        },
        {
          label: "@mdx-js/vue",
          href: "/packages/vue",
        },
        {
          label: "Prism React 渲染器",
          href: "/packages/prism-react-renderer",
        },
        {
          label: "lowlight",
          href: "/packages/lowlight",
        },
      ],
    },
  ],
  components: [
    {
      label: "组件",
      href: "/components",
    },
  ],
  community: [
    {
      label: "支持",
      href: "/community/support",
    },
    {
      label: "贡献",
      href: "/community/contribute",
    },
    {
      label: "赞助商",
      href: "/community/sponsor",
    },
    {
      label: "关于",
      href: "/community/about",
    },
    {
      label: "项目",
      href: "/community/projects",
    },
  ],
  blog: [
    {
      label: "MDX 3",
      href: "/blog/v3",
    },
    {
      label: "MDX 2",
      href: "/blog/v2",
    },
    {
      label: "MDXConf",
      href: "/blog/conf",
    },
    {
      label: "短代码",
      href: "/blog/shortcodes",
    },
    {
      label: "MDX趋于稳定",
      href: "/blog/v1",
    },
    {
      label: "自定义杂注",
      href: "/blog/custom-pragma",
    },
    {
      label: "Highlight.js vs Shiki",
      href: "/blog/highlightjs-vs-shiki",
    },
    {
      label: "使用Next.js和Retype Pretty Code在MDX中复制到剪贴板按钮",
      href: "/blog/copy-to-clipboard-button-nextjs-mdx-rehype",
    },
  ],
  unifiedjs: [
    {
      label: "学习",
      href: "/unifiedjs/learn",
      subMenus: [
        {
          label: "简介unified",
          href: "/unifiedjs/learn/introduction-to-unified",
        },
        {
          label: "使用unified",
          href: "/unifiedjs/learn/using-unified",
        },
        {
          label: "使用插件",
          href: "/unifiedjs/learn/using-plugins",
        },
        {
          label: "语法树typescript",
          href: "/unifiedjs/learn/syntax-trees-typescript",
        },
        {
          label: "语法树导论",
          href: "/unifiedjs/learn/introduction-to-syntax-trees",
        },
        {
          label: "创建编辑器",
          href: "/unifiedjs/learn/create-an-editor",
        },
        {
          label: "创建插件",
          href: "/unifiedjs/learn/create-a-plugin",
        },
        {
          label: "树遍历类型脚本",
          href: "/unifiedjs/learn/tree-traversal-typescript",
        },
        {
          label: "查找节点",
          href: "/unifiedjs/learn/find-node",
        },
        {
          label: "remark table",
          href: "/unifiedjs/learn/remark-table",
        },
        {
          label: "remark html",
          href: "/unifiedjs/learn/remark-html",
        },
        {
          label: "remove node",
          href: "/unifiedjs/learn/remove-node",
        },
        {
          label: "构建语法树",
          href: "/unifiedjs/learn/build-a-syntax-tree",
        },
        {
          label: "树遍历",
          href: "/unifiedjs/learn/tree-traversal",
        },
        {
          label: "窄node打字脚本",
          href: "/unifiedjs/learn/narrow-node-typescript",
        },
      ],
    },
    {
      label: "社区",
      subMenus: [
        {
          label: "社区",
          href: "/unifiedjs/community",
        },
        {
          label: "集体的",
          href: "/unifiedjs/community/collective",
        },
      ],
    },
    {
      label: "语法树",
      href: "/unifiedjs/syntax-tree",
      subMenus: [
        {
          label: "unist(通用语法树)",
          href: "/unifiedjs/syntax-tree/unist",
        },
        {
          label: "mdast(MD抽象语法树)",
          href: "/unifiedjs/syntax-tree/mdast",
        },
        {
          label: "hast(超文本抽象语法树)",
          href: "/unifiedjs/syntax-tree/hast",
        },
        {
          label: "xast(可扩展抽象语法树)",
          href: "/unifiedjs/syntax-tree/xast",
        },
        {
          label: "esast(ECMAScript抽象语法树)",
          href: "/unifiedjs/syntax-tree/esast",
        },
        {
          label: "nlcst(自然语言具体语法树)",
          href: "/unifiedjs/syntax-tree/nlcst ",
        },
        {
          label: "awesome",
          href: "/unifiedjs/syntax-tree/awesome-syntax-tree ",
        },
      ],
    },
    {
      label: "micromark",
      href: "/unifiedjs/micromark",
      subMenus: [],
    },
  ],
};
export default menus;
