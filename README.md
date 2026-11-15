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
    ✕ should render without erring (64 ms)

  ● App › should render without erring

    TypeError: ExpoUI.ObservableState is not a constructor

      at Object.factory (node_modules/@expo/ui/build/State/State/useNativeState.ts:63:19)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.549 s, estimated 2 s
Ran all test suites.
error Command failed with exit code 1.
```
