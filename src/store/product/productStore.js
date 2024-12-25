import { Store } from "../store.js";
import { observable } from "../observer.js";

class ProductStore extends Store {
  constructor() {
    if (ProductStore.instance) {
      return ProductStore.instance;
    }

    const state = observable({
      products: [],
    });

    const mutations = {
      addProduct(state, payload) {
        state.products.push(payload);
      },
    };

    super({ state, mutations });
    ProductStore.instance = this;
  }

  static getInstance() {
    if (!ProductStore.instance) {
      ProductStore.instance = new ProductStore();
    }
    return ProductStore.instance;
  }
}

export const productStore = ProductStore.getInstance();
