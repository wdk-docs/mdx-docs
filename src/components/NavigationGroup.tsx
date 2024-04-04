// Augment vfile data:
/// <reference types="rehype-infer-description-meta" />

type ElementContent = import("hast").ElementContent;

type ReactNode = import("react").ReactNode;

type Item = import("./sort").Item;

interface ItemProperties {
  includeDescription?: boolean | undefined;
  includePublished?: boolean | undefined;
  item: Readonly<Item>;
  name?: string | undefined;
}

interface GroupOnlyProperties {
  className?: string | undefined;
  items: ReadonlyArray<Item>;
  sort?: string | undefined;
  name?: string | undefined;
}

type GroupProperties = Omit<ItemProperties, "item"> & GroupOnlyProperties;

import { apStyleTitleCase } from "ap-style-title-case";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import React from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { sortItems } from "./sort";

const dateTimeFormat = new Intl.DateTimeFormat("en", { dateStyle: "long" });

/**
 * @param {Readonly<GroupProperties>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 */
export function NavigationGroup(properties: any): JSX.Element {
  const { className, items, sort = "navSortSelf,meta.title", ...rest } = properties;

  return (
    <ol {...{ className }}>
      {sortItems(items, sort).map(function (d: any) {
        return <NavigationItem key={d.name} {...rest} item={d} />;
      })}
    </ol>
  );
}

/**
 * @param {Readonly<ItemProperties>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 */
export function NavigationItem(properties: any): JSX.Element {
  const { includeDescription, includePublished, item, name: activeName } = properties;
  const { children, data = {}, name } = item;
  const { matter = {}, meta = {}, navExcludeGroup, navigationSortItems } = data;
  const title = matter.title || meta.title;
  const defaultTitle = apStyleTitleCase(name.replace(/\/$/, "").split("/").pop());
  /** @type {ReactNode} */
  let description: ReactNode;
  /** @type {string | undefined} */
  let published: string | undefined;

  if (includeDescription) {
    if (meta.descriptionHast) {
      // Cast because we don’t expect doctypes.
      const children = /** @type {Array<ElementContent>} */ meta.descriptionHast.children;

      description = toJsxRuntime(
        {
          type: "element",
          tagName: "div",
          properties: { className: ["nav-description"] },
          children,
        },
        // @ts-expect-error: to do: fix in `hast-util-to-jsx-runtime`.
        { Fragment, jsx, jsxs }
      );
    } else {
      description = matter.description || meta.description || undefined;

      description &&= (
        <div className="nav-description">
          <p>{description}</p>
        </div>
      );
    }
  }

  const pub = matter.published || meta.published;

  if (includePublished && pub) {
    published = dateTimeFormat.format(typeof pub === "string" ? new Date(pub) : pub || undefined);
  }

  return (
    <li>
      {title ? (
        <a href={name} aria-current={name === activeName ? "page" : undefined}>
          {title}
        </a>
      ) : (
        defaultTitle
      )}
      {published ? " — " + published : undefined}
      {description || undefined}
      {!navExcludeGroup && children.length > 0 ? (
        <NavigationGroup
          items={children}
          sort={typeof navigationSortItems === "string" ? navigationSortItems : undefined}
          name={activeName}
        />
      ) : undefined}
    </li>
  );
}
