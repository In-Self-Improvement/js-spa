window.addEventListener("load", () => {
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

// const render = (route) => {
//   const app = document.getElementById("app");

//   const routes = {
//     home: "<h1>홈 페이지</h1>",
//     about: "<h1>소개 페이지</h1>",
//     contact: "<h1>연락처 페이지</h1>",
//   };

//   app.innerHTML = routes[route] || "<h1>404 페이지를 찾을 수 없습니다.</h1>";
// };

function render(page) {
  const app = document.getElementById("app");
  if (page === "home") {
    app.innerHTML = "<h1>홈 페이지</h1>";
  } else if (page === "about") {
    app.innerHTML = "<h1>소개 페이지</h1>";
  } else if (page === "contact") {
    app.innerHTML = "<h1>연락처 페이지</h1>";
  } else {
    app.innerHTML = "<h1>404 페이지를 찾을 수 없습니다.</h1>";
  }
}

export { render };
