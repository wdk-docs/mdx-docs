import { stream } from "unified-stream";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";
import remarkRehype from "remark-rehype";
import rehypeDocument from "rehype-document";
import rehypeStringify from "rehype-stringify";
import rehypeFormat from "rehype-format";
import { readSync, writeSync } from "to-vfile";
import { reporter } from "vfile-reporter";
import remarkRetext from "remark-retext";
import retextEnglish from "retext-english";
import retextIndefiniteArticle from "retext-indefinite-article";

const processor = unified()
  .use(remarkParse)
  .use(remarkRetext, unified().use(retextEnglish).use(retextIndefiniteArticle))
  .use(remarkSlug)
  .use(remarkToc)
  .use(remarkRehype)
  .use(rehypeDocument, { title: "Contents" })
  .use(rehypeFormat)
  .use(rehypeStringify);

// process.stdin.pipe(stream(processor)).pipe(process.stdout);

processor.process(readSync("./example.md")).then(
  (file) => {
    console.error(reporter(file));
    file.extname = ".html";
    writeSync(file);
  },
  (error) => {
    throw error;
  }
);
