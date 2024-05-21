"use client";

import menus from "@/nav/menus";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment, useSelectedLayoutSegments } from "next/navigation";

function SubMenu({ menu }: any) {
  return (
    <li key={menu.label}>
      {menu.subMenus && menu.subMenus.length ? (
        <details>
          <summary>
            {!menu.href ? (
              menu.label
            ) : (
              <Link href={menu.href || "#"} dangerouslySetInnerHTML={{ __html: menu.label }}></Link>
            )}
          </summary>
          <ul>
            {menu.subMenus.map((subMenu: any) => (
              <SubMenu key={subMenu.label} menu={subMenu} />
            ))}
          </ul>
        </details>
      ) : (
        <Link href={menu.href || "#"} dangerouslySetInnerHTML={{ __html: menu.label }}></Link>
      )}
    </li>
  );
}

export function Sidebar() {
  // const segment = useSelectedLayoutSegment();
  // const segments = useSelectedLayoutSegments();
  // console.log({ segment, segments });
  const pathname = usePathname();
  const routerRoot: any = pathname.split("/")[1] || "docs";

  return (
    routerRoot &&
    menus[routerRoot] && (
      <ul className="menu menu-sm lg:menu-md px-4 py-0">
        {menus[routerRoot].map((menu: any) => (
          <SubMenu key={menu.label} menu={menu} />
        ))}
      </ul>
    )
  );
}
