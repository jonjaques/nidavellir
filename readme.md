# Nidavellir

## Development

### Environment Dependencies
- Android Studio
- XCode
- Node 10 (Or if you have nvm, `nvm use` upon entering the directory)
- Yarn (not strictly required, but build scripts reference it)

### Setup
```
$ nvm use
Found '~/nidavellir/.nvmrc' with version <10.14.1>
Now using node v10.14.1 (npm v6.4.1)
$ yarn
✨  Done in 10.0s.
$ cp .env.sample .env
```

#### Web development

```
$ yarn web:dev
```

#### Android development

```
$ yarn android:emulator:create
$ yarn android:dev
```

**Notes:**

- The emulator creation script creates and Android AVD, which is persisted to disk in the default location.
  You can find it by running `$ avdmanager list avd`. By default the emulator does not accept keyboard
  input, but you can customize it by editing the AVD's `config.ini` to contain the following.
  
  ```
  hw.dPad=yes
  hw.keyboard=yes
  ```
  
- The `android:dev` script tries to install the app to a running emulator, which may not be ready when

- Running the emulator for the first time. You can either run the emulator separately, beforehand; using `$ yarn android:emulator`.

#### iOS development

```
$ yarn ios:dev
```

**Notes:**

- Project Settings > Use Legacy Build

- `$ cd ./node_modules/react-native/third-party/glog-0.3.4 && ../../scripts/ios-configure-glog.sh`