export function createElement(type, props = {}, ...children) {
  const element = document.createElement(type);

  // 속성 설정
  Object.entries(props).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  // 자식 요소 추가
  children.forEach((child) => {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else {
      element.appendChild(child);
    }
  });

  return element;
}
