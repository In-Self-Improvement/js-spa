window.addEventListener("load", () => {
  const app = document.getElementById("app");

  const routes = {
    home: "<h1>홈 페이지</h1>",
    about: "<h1>소개 페이지</h1>",
    contact: "<h1>연락처 페이지</h1>",
  };

  function render(route) {
    app.innerHTML = routes[route] || "<h1>404 페이지를 찾을 수 없습니다.</h1>";
  }

  window.addEventListener("hashchange", () => {
    const route = location.hash.slice(1);
    render(route);
  });

  if (!location.hash) {
    location.hash = "#home";
  } else {
    const route = location.hash.slice(1);
    render(route);
  }
});
