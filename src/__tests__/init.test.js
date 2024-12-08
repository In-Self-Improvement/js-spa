import { describe, beforeAll, afterAll } from "vitest";

describe("init", () => {
  beforeAll(async () => {
    // DOM 초기화
    window.alert = vi.fn();
    document.body.innerHTML = '<div id="root"></div>';
    await import("../main.js");
  });

  afterAll(() => {
    // 각 테스트 전에 root 엘리먼트 초기화
    document.getElementById("root").innerHTML = "";
    localStorage.removeItem("user");
  });

  it("root 엘리먼트가 존재해야 한다", () => {
    const rootElement = document.getElementById("root");
    expect(rootElement).not.toBeNull();
  });

  it("alert 함수가 호출되어야 한다", () => {
    window.alert("테스트");
    expect(window.alert).toHaveBeenCalled();
  });
});
