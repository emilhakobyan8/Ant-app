# Ant App in React-Native

## Installation iOS

1. Make sure you have

   [NodeJS](https://nodejs.org/)

   ```
   brew install node
   ```

    [Watchman](https://facebook.github.io/watchman/)

    ```
    brew install watchman
    ```

    [cocoapods](https://cocoapods.org/) installed.

    ```
    sudo gem install cocoapods
    ```

2. Install `react-native-cli`

   ```
   npm install -g react-native-cli
   ```

   For more information please visit [here](https://facebook.github.io/react-native/docs/getting-started.html).

3. Clone down the repository

   ```
   git clone git@github.com:emilhakobyan8/Ant-app.git
   ```

4. Install your dependencies

   ```
   npm install
   ```

5. Run

   ```
   npx pod-install
   ```

6. Start the iOS app.

   Open AntApp.xcworkspace (in `AntApp/ios` folder) with XCode. Select device or simulator and run the project with XCode (or with cmd `react-native run-ios`).


## Installation Android

1. Make sure you have

   [NodeJS](https://nodejs.org/)

   ```
   brew install node
   ```

   [Watchman](https://facebook.github.io/watchman/)

   ```
   brew install watchman
   ```

2. Install `react-native-cli`

   ```
   npm install -g react-native-cli
   ```

   For more information please visit [here](https://facebook.github.io/react-native/docs/getting-started.html).

3. Clone down the repository

   ```
   git clone git@github.com:emilhakobyan8/Ant-app.git
   ```

4. Install your dependencies

   ```
   npm install
   ```

5. Setup `Android Studio` by following [these](https://facebook.github.io/react-native/docs/getting-started.html#1-install-android-studio) steps. Run `Android Studio` and open `./android`.
   Wait for gradle indexing... :)

6. Make sure you have `NDK`, `Android SDK Tools` checked in `Android SDK` section.

7. run `npx jetify`.

8. Run the project on the device or emulator with Android Studio (or with cmd `react-native run-android`).

9. Skip this step if you running on emulator.
   Shake your device (or long press on menu or back buttons). It will open developer menu. Press on `Dev Settings`.

Press on `Debug server host & port for device` and type `${your_ip_address}:8081` (e.g. `192.168.3.93:8081`).
Reload the app.
