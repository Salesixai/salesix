# 📱 Build APK Guide for Salesix Mobile App

This guide will help you build an installable APK file for the Salesix (Kortix) mobile app.

## 🚀 Quick Build (Recommended)

### Option 1: Build with EAS (Cloud Build - Easiest)

1. **Install EAS CLI** (if not already installed):
```bash
npm install -g eas-cli
```

2. **Login to Expo** (if not already logged in):
```bash
eas login
```

3. **Navigate to mobile app directory**:
```bash
cd /Users/vrujanpithadiya/Documents/GitHub/salesix/apps/mobile
```

4. **Build APK**:
```bash
# For preview/testing APK
eas build --platform android --profile preview

# OR for production APK
eas build --platform android --profile production
```

5. **Download APK**:
After the build completes (5-10 minutes), EAS will provide a download link.
You can also view/download from: https://expo.dev/accounts/kortix/projects/kortix/builds

---

## 📦 Build Profiles

We've configured multiple build profiles in `eas.json`:

### 1. **`preview`** - Quick Testing APK
```bash
eas build --platform android --profile preview
```
- Fast build
- Internal distribution
- Good for testing

### 2. **`apk`** - Standalone APK
```bash
eas build --platform android --profile apk
```
- Basic APK build
- No distribution

### 3. **`production`** - Production APK
```bash
eas build --platform android --profile production
```
- Production-ready
- Optimized and signed

---

## 🔧 Build Options

### Non-Interactive Build
If you want to build without prompts:
```bash
eas build --platform android --profile preview --non-interactive
```

### Local Build (Advanced)
If you prefer to build locally:
```bash
# Install dependencies
npm install

# Generate native Android project
npx expo prebuild --platform android

# Build with Gradle (requires Android Studio)
cd android
./gradlew assembleRelease

# APK will be at: android/app/build/outputs/apk/release/app-release.apk
```

---

## 📱 Installing the APK

### On Physical Device:
1. Download the APK from EAS build
2. Transfer to your Android device
3. Enable "Install from Unknown Sources" in Settings
4. Tap the APK file to install

### On Emulator:
```bash
adb install path/to/app.apk
```

---

## 🎯 App Details

- **App Name:** Kortix
- **Package:** com.kortix.app
- **Version:** 1.0.0
- **EAS Project ID:** 9fca3cff-a291-41c9-88b9-feb8053b990f

---

## 🔑 Environment Variables

Make sure you have a `.env` file with:
```bash
EXPO_PUBLIC_BACKEND_URL=your-backend-url
EXPO_PUBLIC_SUPABASE_URL=your-supabase-url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-supabase-key
```

---

## 🐛 Troubleshooting

### Build fails with "Not logged in"
```bash
eas login
```

### Need to update EAS CLI
```bash
npm install -g eas-cli@latest
```

### Build takes too long
- Check build status: https://expo.dev/accounts/kortix/projects/kortix/builds
- Builds typically take 5-15 minutes

### Can't install APK on device
1. Enable "Unknown Sources" in Android Settings
2. Check if device has enough storage
3. Try uninstalling previous version first

---

## 📊 Build Status

You can monitor your builds at:
- Dashboard: https://expo.dev/accounts/kortix/projects/kortix
- Builds: https://expo.dev/accounts/kortix/projects/kortix/builds

---

## 🎉 Next Steps After Build

1. Download the APK from EAS
2. Install on your Android device
3. Test all features:
   - Authentication
   - Chat functionality
   - Billing/Credits
   - Triggers
   - Agent management

---

## 📚 Resources

- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)
- [Android Build Configuration](https://docs.expo.dev/build-reference/apk/)
- [Expo Dashboard](https://expo.dev)

---

**Ready to build!** 🚀

Run: `eas build --platform android --profile preview`

