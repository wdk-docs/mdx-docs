import { MDXRemote, compileMDX } from "next-mdx-remote/rsc";
import { Alert } from "@/components/Alert";
import path from "path";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import Link from "next/link";

const components = {
  Note: Alert,
};
export default async function RemoteMdxPage({ params }: any) {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  console.log({ params });
  const getPath = "packages/" + ((params.slug && params.slug.length && params.slug.join("/")) || "index");
  //   const res = await fetch("http://localhost:3000/api/mdx?" + new URLSearchParams({ path }), { cache: "no-store" });
  //   const markdown = await res.text();
  const __dirname = path.dirname(fileURLToPath(new URL(import.meta.url)));
  const pathMdx = path.resolve(__dirname, "../../../", "content", getPath);
  const source: any = readFileSync(`${pathMdx}.mdx`);
  //   console.error(String(markdown));
  const { content, frontmatter }: any = await compileMDX({
    source,
    options: { parseFrontmatter: true },
  });
  const { title, description, related } = frontmatter;
  console.log({ frontmatter });
  return (
    <div className="max-w-3xl mx-auto pt-3 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-1">
      <article className="relative z-20 prose prose-slate mt-3 mb-3 dark:prose-dark">
        <div className="prose prose-stone">
          <h1>{title}</h1>
          <div className="border-b-[1px] pb-5 text-md">{description}</div>
          {/* <MDXRemote source={markdown} components={components} />; */}
          {content}
          {related && (
            <div>
              <h2>{related.title || "关联信息"}</h2>
              <Link href={"/docs/" + related.links[0]}>{related.description}</Link>
            </div>
          )}
        </div>
      </article>
      <div className="fixed z-20 top-[3.8125rem] bottom-0 right-1 w-[16rem] py-10 overflow-y-auto hidden xl:block">
        {/* <Toc toc={Mdx.tableOfContents} /> */}
      </div>
    </div>
  );
}
