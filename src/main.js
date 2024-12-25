import { userStore } from "./store/user/userStore.js";
import { test } from "./storeTest.js";

function main() {
  const { name, age } = userStore.state;
  console.log("main", name, age);
  test();
  userStore.setName("sangbong");
  console.log("main", userStore.state);
}

main();
