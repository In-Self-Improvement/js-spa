import { observable } from "./observer.js";
export class Store {
  #state;
  #mutations;
  #actions;
  state = {};

  constructor({ state, mutations = {}, actions = {} }) {
    this.#state = observable(state);
    this.#mutations = mutations;
    this.#actions = actions;

    Object.keys(state).forEach((key) => {
      Object.defineProperty(this.state, key, {
        get: () => this.#state[key],
        enumerable: true,
      });
    });
  }

  commit(type, payload) {
    const mutation = this.#mutations[type];
    if (!mutation) {
      throw new Error(`Unknown mutation type: ${type}`);
    }
    mutation(this.#state, payload);
  }

  dispatch(type, payload) {
    const action = this.#actions[type];
    if (!action) {
      throw new Error(`Unknown action type: ${type}`);
    }
    return action(
      {
        state: this.#state,
        commit: this.commit.bind(this),
        dispatch: this.dispatch.bind(this),
      },
      payload
    );
  }
}
