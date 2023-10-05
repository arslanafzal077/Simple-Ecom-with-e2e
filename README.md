
# Softoo e-com test app with e2e test cases


## Installation

Install node_modules with yarn

```bash
  yarn
```
Install node_modules with npm

```bash
  npm install
```

```bash
  cd ios && pod install && cd ..
```
or

```bash
  npx pod-install
```

to run the test cases make sure you started you bundler if not started run this command to start
```bash
  npx react-native start
```
first make the build
```bash
  yarn iosDebugBuild
```
and then run this to run the test case
```bash
  yarn iosDebugTest
```

    