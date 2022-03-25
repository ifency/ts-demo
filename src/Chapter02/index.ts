import { HtmlHandler } from "./Markdown";

const markdownParser = new HtmlHandler();

markdownParser.TextChangeHandler("markdown", "markdown-output");

export default markdownParser;
