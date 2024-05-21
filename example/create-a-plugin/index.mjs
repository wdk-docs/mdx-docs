import { visit } from "unist-util-visit";
import { is } from "unist-util-is";
import util from "node:util";
import fs from "node:fs";

export default function retextSentenceSpacing() {
  return (tree, file) => {
    fs.writeFile("./out.json", JSON.stringify(tree), (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    });
    console.log(util.inspect(tree, { showHidden: false, depth: null, colors: true }));
    visit(tree, "ParagraphNode", (node) => {
      //   console.log(node);
      const children = node.children;

      children.forEach((child, index) => {
        // child.children?.forEach((child, index) => {
        //   child.children?.forEach((child, index) => {
        //     console.log(child);
        //   });
        // });
        // if (
        //   is(children[index - 1], "SentenceNode") &&
        //   is(child, "WhiteSpaceNode") &&
        //   is(children[index + 1], "SentenceNode")
        // ) {
        //   if (child.value.length === 1) {
        //     file.message("Expected 1 space between sentences, not " + child.value.length, child);
        //   }
        // }
      });
    });
  };
}
