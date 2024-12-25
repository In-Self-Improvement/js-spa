import { Store } from "../store.js";
import { observable } from "../observer.js";

class UserStore extends Store {
  constructor() {
    if (UserStore.instance) {
      return UserStore.instance;
    }

    const state = observable({
      name: "sangbong",
      age: 30,
    });

    const mutations = {
      setName(state, name) {
        state.name = name;
      },
      setAge(state, age) {
        state.age = age;
      },
      updateUser(state, { name, age }) {
        state.name = name;
        state.age = age;
      },
    };

    const actions = {
      setName({ commit }, name) {
        // 여기서 API 호출 등 비동기 작업 수행 가능
        commit("setName", name);
      },
      setAge({ commit }, age) {
        // 여기서 API 호출 등 비동기 작업 수행 가능
        commit("setAge", age);
      },
    };

    super({ state, actions, mutations });
    UserStore.instance = this;
  }

  setName(name) {
    this.dispatch("setName", name);
  }

  setAge(age) {
    this.dispatch("setAge", age);
  }

  static getInstance() {
    if (!UserStore.instance) {
      UserStore.instance = new UserStore(); // 인스턴스가 없으면 새로 생성
    }
    return UserStore.instance; // 인스턴스를 반환
  }
}

export const userStore = UserStore.getInstance(); // 싱글턴 인스턴스 생성 및 내보내기
