import { userStore } from "./store/user/userStore.js";
import { productStore } from "./store/product/productStore.js";

export function test() {
  console.log("초기 상태:", userStore.state);

  // 이름만 변경
  userStore.setName("Jane Doe");
  console.log("이름 변경 후:", userStore.state);

  // 나이만 변경
  userStore.setAge(25);
  console.log("나이 변경 후:", userStore.state);
}
