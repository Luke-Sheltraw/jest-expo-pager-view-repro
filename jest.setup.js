import { requireNativeModule } from 'expo-modules-core';

class ObservableState extends globalThis.expo.SharedObject {
  #value;

  constructor({ value }) {
    super();
    this.#value = value;
  }

  getValue() {
    return this.#value;
  }

  setValue({ value }) {
    this.#value = value;
  }

  setOnChange() {}
}

class WorkletCallback extends globalThis.expo.SharedObject {
  setWorklet() {}
}

globalThis.expo.modules.ExpoUI = {
  ...requireNativeModule('ExpoUI'),
  ObservableState,
  WorkletCallback,
};
