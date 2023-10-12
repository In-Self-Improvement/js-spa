const { render } = require("./app");

document.body.innerHTML = `
  <div id="app"></div>
`;

// render 함수가 정상적으로 작동하는지 테스트합니다.
describe("Render Tests", () => {
  it("renders the home page", () => {
    render("home");
    const app = document.getElementById("app");
    expect(app.innerHTML).toContain("<h1>홈 페이지</h1>");
  });

  it("renders the about page", () => {
    render("about");
    const app = document.getElementById("app");
    expect(app.innerHTML).toContain("<h1>소개 페이지</h1>");
  });

  it("renders the contact page", () => {
    render("contact");
    const app = document.getElementById("app");
    expect(app.innerHTML).toContain("<h1>연락처 페이지</h1>");
  });

  it("renders a 404 page for unknown routes", () => {
    render("unknown");
    const app = document.getElementById("app");
    expect(app.innerHTML).toContain("<h1>404 페이지를 찾을 수 없습니다.</h1>");
  });
});
