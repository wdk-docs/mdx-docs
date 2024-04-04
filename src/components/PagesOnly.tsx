"use client";

import { usePathname } from "next/navigation";

export function PagesOnly({ children }: any) {
  const ifPages = usePathname().split("/")[2].includes("pages");
  return <>{ifPages ? <>{children}</> : <></>} </>;
}
