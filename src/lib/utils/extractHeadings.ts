import { marked } from "marked";
import { slugifyyy } from "./textConverter";
import type { TocHeading } from "@/types";

export default function extractHeadings(markdown: string = ""): TocHeading[] {
  const tokens = marked.lexer(markdown);
  const headings: TocHeading[] = [];
  for (const token of tokens) {
    if (token.type === "heading") {
      headings.push({
        depth: (token as any).depth,
        slug: slugifyyy((token as any).text),
        text: (token as any).text,
      });
    }
  }
  return headings;
}
