export class HtmlHandler {
  // private markdownChange : Markdown = new Markdown;
  public TextChangeHandler(id: string, output: string): void {
    let markdown = <HTMLTextAreaElement>document.getElementById(id);
    let markdownOutput = <HTMLLabelElement>document.getElementById(output);

    if (markdown !== null) {
      console.log("空值");

      markdown.onkeyup = (e) => {
        // this.RenderHtmlContent(markdown, markdownOutput);
        markdownOutput.innerHTML = markdown.value;
      };
      window.onload = (e) => {
        // this.RenderHtmlContent(markdown, markdownOutput);
        markdownOutput.innerHTML = "<p></p>";
      };
    }
  }

  // private RenderHtmlContent(markdown: HTMLTextAreaElement, markdownOutput: HTMLLabelElement) {
  //     if (markdown.value) {
  //         markdownOutput.innerHTML = this.markdownChange.ToHtml(markdown.value);
  //     }
  //     else
  //         markdownOutput.innerHTML = "<p></p>";
  // }
}
