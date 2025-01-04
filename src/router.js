export class Router {
  constructor(routes = []) {
    this.routes = routes;
    this.currentPath = window.location.pathname;

    // 브라우저 뒤로가기/앞으로가기 처리
    window.addEventListener("popstate", () => {
      this.currentPath = window.location.pathname;
      this.render();
    });
  }

  addRoute(path, component) {
    this.routes.push({ path, component });
  }

  navigate(path) {
    window.history.pushState(null, null, path);
    this.currentPath = path;
    this.render();
  }

  render() {
    const root = document.getElementById("root");
    const route = this.routes.find((route) => route.path === this.currentPath);

    if (route) {
      const component = new route.component();
      root.innerHTML = "";
      root.appendChild(component.render());
    } else {
      root.innerHTML = "<h1>404 Not Found</h1>";
    }
  }
}
