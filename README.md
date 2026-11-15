# jest-expo-pager-view-repro

Run:

```bash
yarn install
yarn test
```

Result:

```
$ jest
 FAIL  __tests__/App.test.jsx
  App
    ✕ should render slides (64 ms)

  ● App › should render slides

    TypeError: ExpoUI.ObservableState is not a constructor

      at Object.factory (node_modules/@expo/ui/build/State/State/useNativeState.ts:63:19)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.859 s, estimated 1 s
Ran all test suites.
error Command failed with exit code 1.
```

Uncomment `jest.setup.js` definition in `jest.config.js` to remove error.
