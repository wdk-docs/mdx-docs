type Item = import("./sort").Item;

interface EntryProperties {
  item: Readonly<Item>;
}

interface GroupProperties {
  className?: string | undefined;
  items: ReadonlyArray<Item>;
  sort?: string | undefined;
}

import { apStyleTitleCase } from "ap-style-title-case";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import React from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { sortItems } from "./sort";

const dateTimeFormat = new Intl.DateTimeFormat("en", { dateStyle: "long" });

/**
 * @param {Readonly<EntryProperties>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 */
export function BlogEntry(properties: any): JSX.Element {
  const { item } = properties;
  const { data, name } = item;
  const { matter = {}, meta = {} } = data;
  const title = matter.title || meta.title;
  const defaultTitle = apStyleTitleCase(name.replace(/\/$/, "").split("/").pop());
  const description = matter.description || meta.description;
  const time = (
    meta.readingTime ? (Array.isArray(meta.readingTime) ? meta.readingTime : [meta.readingTime, meta.readingTime]) : []
  ).map(function (d: any) {
    return Math.ceil(d);
  });
  /** @type {string | undefined} */
  let timeLabel: string | undefined;

  if (time.length > 1 && time[0] !== time[1]) {
    timeLabel = time[0] + "-" + time[1] + " minutes";
  } else if (time[0]) {
    timeLabel = time[0] + " minute" + (time[0] > 1 ? "s" : "");
  }

  return (
    <div className="card">
      <h3>
        <a href={name}>{title || defaultTitle}</a>
      </h3>
      <div>
        {meta.descriptionHast ? (
          // @ts-expect-error: to do: fix in `hast-util-to-jsx-runtime`.
          toJsxRuntime(meta.descriptionHast, { Fragment, jsx, jsxs })
        ) : description ? (
          <p>{description}</p>
        ) : undefined}
        <span>
          <a href={name}>Continue reading »</a>
        </span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }} className="block">
        <div>
          {meta.author ? (
            <>
              <small>By {meta.author}</small>
              <br />
            </>
          ) : undefined}
          <small>Reading time: {timeLabel}</small>
        </div>
        {meta.published && typeof meta.published === "object" ? (
          <div style={{ marginLeft: "auto", textAlign: "right" }}>
            <small>
              Published on <time dateTime={meta.published.toISOString()}>{dateTimeFormat.format(meta.published)}</time>
            </small>
          </div>
        ) : undefined}
      </div>
    </div>
  );
}

/**
 * @param {Readonly<GroupProperties>} properties
 *   Properties.
 * @returns {JSX.Element}
 *   Element.
 */
export function BlogGroup(properties: any): JSX.Element {
  const { className, items, sort = "navSortSelf,meta.title", ...rest } = properties;
  const sorted = sortItems(items, sort);

  return (
    <>
      {sorted.map(function (d) {
        return <BlogEntry key={d.name} {...rest} item={d} />;
      })}
    </>
  );
}
