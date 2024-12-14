# 🎉 Welcome to My Edu! 🎉

Hey there,  Welcome to **My Edu** ,

## 🚀 Getting Started

### Prerequisites

Before we jump into the fun, make sure you have the following installed on your machine:

- **Node.js** (v12 or later) - Your trusty sidekick for running JavaScript on the server!
- **Ionic CLI** - The magical tool that helps you create and manage Ionic apps. Install it globally with:
  ```bash
  npm install -g @ionic/cli
  ```

### 🎈 Cloning the Repository

First, let's grab the code! Open your terminal and run:
```bash
git clone https://github.com/yourusername/my-edu.git
cd my-edu
```

### 📦 Installing Dependencies

Now that you have the code, it's time to install the necessary packages. Run:
```bash
npm install
```

### 🏃‍♂️ Running the App

You're almost there! To start the app, simply run:
```bash
ionic serve
```
This command will launch a local development server and open your app in the browser. You can now see your app in action!

### 📱 Testing on a Device

Want to see how it looks on your mobile device? Here’s how:

1. **Connect your device** to your computer.
2. Run the following command:
   ```bash
   ionic capacitor run android --livereload
   ```
   or for iOS:
   ```bash
   ionic capacitor run ios --livereload
   ```

### 🧪 Running Tests

To ensure everything is working smoothly, you can run the tests with:
```bash
npm test
```

### 🛠️ Building the App

Now that you have the app running, you might want to build it for production. Here’s how to do it for different platforms:

#### Android
To build the app for Android, run:
```bash
ionic capacitor build android
```

#### iOS
To build the app for iOS, run:
```bash
ionic capacitor build ios
```

#### Web
To build the app for the web, run:
```bash
ionic build
```
