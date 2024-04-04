import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import Player from "./components/Player.";
import MyCodeBlock from "./components/CodeBlock";
import { AppOnly } from "./components/AppOnly";
import { PagesOnly } from "./components/PagesOnly";
import { Check } from "./components/Check";
import { Cross } from "./components/Cross";
import ThemeImage from "./components/theme-image";
// import { Note } from "./components/Note";
import { Alert } from "./components/Alert";

// 该文件允许您提供在MDX文件中使用的自定义React组件。
// 你可以导入和使用任何你想要的React组件，包括来自其他库的组件。

// 这个文件需要在`app`目录下使用MDX。
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // 允许自定义内置组件，例如添加样式。
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    img: (props: any) => <Image {...props} />,
    Image: (props: any) => <ThemeImage {...props} />,
    Player: ({ title }) => <Player title={title} />,
    CodeBlock: (props) => <MyCodeBlock {...props} />,
    Tabs: ({ children }) => <>{children}</>,
    TabItem: ({ children }) => <>{children}</>,
    AppOnly: ({ children }) => <AppOnly>{children}</AppOnly>,
    PagesOnly: ({ children }) => <PagesOnly>{children}</PagesOnly>,
    Check: ({ children }) => <Check>{children}</Check>,
    Cross: ({ children }) => <Cross>{children}</Cross>,
    Note: (props) => <Alert {...props}></Alert>,
    ...components,
  };
}
