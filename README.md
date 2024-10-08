# Chat UI Demo

A Chat UI demo built with React Native

<img src="./assets/sample.png" alt="Demo Image" width="300" height="600"/>

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Development](#development)
- [Building the Application](#building-the-application)
- [Troubleshooting](#troubleshooting)

## Installation

### Prerequisites

Before you start, ensure you have the following installed:

- **Node.js**: Download and install the latest LTS version from [nodejs.org](https://nodejs.org/).
- **Expo CLI**: Install Expo CLI globally using npm:

  ```bash
  npm install -g expo-cli
  ```

### Steps to Install

1. **Clone the repository**:

   ```bash
   git clone git@github.com:jestir1234/chat_ui_demo.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd chat_ui_demo
   ```

3. **Install the dependencies**:

   ```bash
   npm install
   ```

## Running the Application

### Using Expo Go

1. **Start the Expo server**:

   ```bash
   expo start
   ```

2. **Open the application on a physical device**:

   - Download the **Expo Go** app from the [App Store (iOS)](https://apps.apple.com/app/expo-go/id982107779) or [Google Play Store (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent).
   - Scan the QR code displayed in your terminal or browser using the Expo Go app.

3. **Run the application on an emulator**:

   - **iOS**: Press `i` in the terminal to open the app in the iOS Simulator (macOS only).
   - **Android**: Press `a` in the terminal to open the app in an Android emulator.

### Directly Running on a Device

1. **Connect your device**:

   - Ensure your mobile device is on the same Wi-Fi network as your development machine.
   - Use the Expo Go app to scan the QR code generated by `expo start`.

2. **Run the application**:
   - The app should automatically load on your device through Expo Go.

## Development

### File Structure

- **`/components`**: Reusable components.
- **`/screens`**: Screen components.
- **`/constants`**: Constants
- **`/hooks`**: Custom Hooks
- **`/types`**: Types
- **`/utils`**: Util functions
- **`App.tsx`**: The entry point for the application.
- **`mock.ts`**: Mock data

### Debugging

1. **Debugging with Expo**:

   - Shake your device or press `Ctrl + M` (on Windows/Linux) or `Cmd + D` (on macOS) in the emulator to bring up the developer menu.
   - Use the "Debug Remote JS" option to debug JavaScript code in Chrome.

2. **Using React Developer Tools**:
   - Install [React Developer Tools](https://reactjs.org/blog/2019/08/15/new-react-devtools.html) to inspect the React component tree.

### Adding Dependencies

To add new npm packages:

```bash
npm install package-name
```

## Building the Application

To create a production build of your application, you can use Expo's build services.

### Building for iOS/Android

1. **Login to Expo**:

   ```bash
   expo login
   ```

2. **Build the app**:

   - For **iOS**:

     ```bash
     expo build:ios
     ```

   - For **Android**:

     ```bash
     expo build:android
     ```

3. **Download the build**:
   - Follow the instructions provided by Expo to download the build to your device or upload it directly to the App Store or Google Play Store.

## Troubleshooting

### Common Issues

1. **Expo CLI Not Found**:

   - Ensure you have installed Expo CLI globally: `npm install -g expo-cli`.

2. **Stuck at "Starting Metro Bundler"**:

   - Restart your development server: `expo start -c` to clear the cache.

3. **QR Code Not Scanning**:

   - Ensure your mobile device and development machine are on the same Wi-Fi network.
   - Try refreshing the QR code by pressing `r` in the terminal.

4. **Build Errors**:
   - Ensure all dependencies are installed by running `npm install`.
   - Check for any platform-specific issues in the [Expo documentation](https://docs.expo.dev/).
