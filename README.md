# Albums

## Setup
To set up the development environment for React Native, follow this guide:
[React Native - Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)

I installed XCode, HomeBrew, Node/NPM, watchman, RN CLI.

```
To run your app on iOS:
  cd to project root directory
  react-native run-ios
  - or -
  Open ios/albums.xcodeproj in Xcode
  Hit the Run button
To run your app on Android:
  cd to project root directory
  Have an Android emulator running (quickest way to get started), or a device connected
  react-native run-android
```

#### troubleshooting
At first I had this error:

<img src="docs/error.png" width="300">

reference: https://github.com/facebook/react-native/issues/18962

To fix this, downgrade babel from 5.0.0 to 4.0.0 in `package.json`:
```
"babel-preset-react-native": "4.0.0",
```

Then it worked.

<img src="docs/fixed.png" width="300">
