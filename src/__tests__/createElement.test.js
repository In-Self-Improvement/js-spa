import { createElement } from "../lib/createElement";

test("createElement creates a div with text content", () => {
  const element = createElement("div", { class: "test-class" }, "Hello World");

  // 요소가 생성되었는지 확인
  expect(element.tagName).toBe("DIV");
  expect(element.className).toBe("test-class");
  expect(element.textContent).toBe("Hello World");
});
