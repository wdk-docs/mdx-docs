import linkMap from "@/nav/link.map.json";
import { NextRequest } from "next/server";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "url";
import path from "path";

export async function GET(request: NextRequest) {
  console.log(request.nextUrl.searchParams);
  const getPath = request.nextUrl.searchParams.get("path") || "/";
  const file = linkMap[getPath] || "index.mdx";
  const __dirname = path.dirname(fileURLToPath(new URL(import.meta.url)));
  const pathMdx = path.resolve(__dirname, "../../../", "content", getPath);
  console.log({ getPath, __dirname, pathMdx });
  // const mdx: any = await import(`@/content/docs/${file}`);
  const mdx: any = readFileSync(`${pathMdx}.mdx`);
  return new Response(mdx);
}
