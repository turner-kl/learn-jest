import { JSDOM, DOMWindow } from "jsdom";
import fs from "fs";
import path from "path";

const html = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf8");

describe("simple ui test", () => {
  let document: Document;
  let window: DOMWindow;

  beforeEach(() => {
    window = new JSDOM(html, { runScripts: "dangerously" }).window;
    document = window.document;
  });

  it("does not show a message at the initial state", () => {
    const message = document.querySelector("#message > p");
    expect(message).toBeNull();
  });

  it("shows a message when the button is clicked", () => {
    const button = document.querySelector("#showMessage");
    button?.dispatchEvent(new window.MouseEvent("click"));
    const message = document.querySelector("#message > p");
    expect(message?.textContent).toBe("You Passed!!!");
  });

  it("shows only one message when the button is clicked twice", () => {
    const button = document.querySelector("#showMessage");
    button?.dispatchEvent(new window.MouseEvent("click"));
    button?.dispatchEvent(new window.MouseEvent("click"));
    const message = document.querySelectorAll("#message > p");
    expect(message.length).toBe(1);
  });
});
