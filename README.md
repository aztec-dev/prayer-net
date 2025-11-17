# Prayer-Net 🙏

A React Native mobile application built with Expo that brings Christians together through prayer. Prayer-Net provides a platform for believers to connect, share prayer requests, and support one another in faith.

> "For where two or three are gathered together in My name, I am there in the midst of them." - Matthew 18:20

## Features

- **User Authentication**: Secure sign-in and sign-up functionality powered by Supabase
- **Cross-Platform**: Built with React Native and Expo for iOS, Android, and web
- **Modern UI**: Styled with NativeWind (TailwindCSS for React Native)
- **File-based Routing**: Intuitive navigation using Expo Router
- **Responsive Design**: Optimized for phones and tablets, including iPad landscape mode

## Tech Stack

- **Framework**: React Native 0.81.5 with Expo ~54.0
- **Navigation**: Expo Router ~6.0 with file-based routing
- **Styling**: NativeWind 4.2 (TailwindCSS)
- **Backend**: Supabase for authentication and database
- **TypeScript**: Full TypeScript support
- **Fonts**: Custom fonts with Playfair and Roboto

## Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac only) or Android Emulator

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Create a `.env` file in the root directory with your Supabase credentials:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Start the Development Server

```bash
npx expo start
```

In the terminal output, you'll find options to open the app:

- Press `i` for iOS simulator
- Press `a` for Android emulator
- Press `w` for web browser
- Scan the QR code with Expo Go app (limited functionality)

For the best development experience, use a [development build](https://docs.expo.dev/develop/development-builds/introduction/).

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Start on Android emulator
- `npm run ios` - Start on iOS simulator
- `npm run web` - Start in web browser
- `npm run lint` - Run ESLint

## Project Structure

```
prayer-net/
├── app/                    # File-based routing
│   ├── (app)/             # Main app routes
│   ├── (auth)/            # Authentication routes
│   │   ├── SignIn.tsx
│   │   └── SignUp.tsx
│   ├── _layout.tsx        # Root layout
│   └── index.tsx          # Landing page
├── components/            # Reusable components
│   ├── Buttons.tsx
│   ├── Card.tsx
│   └── Hero.tsx
├── lib/                   # Utilities and services
│   └── supabase.ts        # Supabase client configuration
└── assets/                # Images and static resources
```

## Development

This project uses:

- **Expo Router** for navigation with typed routes
- **NativeWind** for styling (TailwindCSS syntax)
- **Supabase** for backend services
- **TypeScript** for type safety
- **ESLint & Prettier** for code quality

## Building for Production

### Create a production build with EAS:

```bash
npm install -g eas-cli
eas build --platform ios
eas build --platform android
```

For more information, see the [EAS Build documentation](https://docs.expo.dev/build/introduction/).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is private and proprietary.

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Supabase Documentation](https://supabase.com/docs)
