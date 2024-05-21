import { Header } from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { Logo } from "@/components/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MDX文档",
  description: "学习MDX",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="bg-base-100 drawer lg:drawer-open">
          <input id="drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <Header />
            <Breadcrumb />
            <div className="max-w-[100vw] px-6 pb-6 xl:pr-2 min-h-screen">{children}</div>
            <Footer />
          </div>
          <div className="drawer-side z-40" style={{ scrollBehavior: "smooth", scrollPaddingTop: "5rem" }}>
            <label htmlFor="drawer" className="drawer-overlay" aria-label="Close menu"></label>
            <aside className="bg-base-100 w-80">
              <div className="bg-base-100 sticky top-0 z-20 hidden items-center gap-2 bg-opacity-90 px-4 py-2 backdrop-blur lg:flex ">
                <Link
                  href="/"
                  aria-current="page"
                  aria-label="Homepage"
                  className="flex-0 btn btn-ghost px-2"
                  data-svelte-h="svelte-pw6yxt"
                >
                  <Logo />
                  <div className="font-title inline-flex text-lg md:text-2xl">
                    <span className="">
                      MDX<sub>js</sub>
                    </span>{" "}
                    <span className="uppercase text-[#1AD1A5]">文档</span>
                  </div>
                </Link>{" "}
                <div className="dropdown">
                  <label tabIndex={0} className="link link-hover font-mono text-xs">
                    1.0.1
                  </label>{" "}
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu menu-sm bg-base-200 rounded-box mt-8 w-36 p-2 shadow"
                    data-svelte-h="svelte-hx87pu"
                  >
                    <li>
                      <a href="/docs/changelog/">更新日志</a>
                    </li>{" "}
                    <li></li>{" "}
                    <li>
                      <a target="_blank" rel="noopener, noreferrer" href="https://v2.daisyui.com/">
                        Version 2.x
                      </a>
                    </li>{" "}
                    <li>
                      <a target="_blank" rel="noopener, noreferrer" href="https://v1.daisyui.com/">
                        Version 1.x
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="h-4"></div>
              <Sidebar />
              <div className="bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [mask-image:linear-gradient(transparent,#000000)]"></div>
            </aside>
          </div>
        </div>
      </body>
    </html>
  );
}
