"use client";

import { usePathname } from "next/navigation";

export function AppOnly({ children }: any) {
  const ifApp = usePathname().split("/")[2].includes("app");
  return <>{ifApp ? <> {children}</> : {}} </>;
}
