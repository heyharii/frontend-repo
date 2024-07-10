# Frontend Repository

This is a Next.js-based frontend application using React MUI for the UI, Firebase for authentication, and Redux for state management. It demonstrates API integration with a backend service and server-side data fetching.

## Features

- Next.js 13+ with App Router
- React MUI for UI components and theming
- Firebase authentication
- Redux for state management (excluding auth)
- Mobile-responsive login form
- API integration with backend, including error handling
- Theme switching between "Daylight" and "Pastel" modes
- Server-side data fetching for user data

## Project Structure

```
frontend-repo/
├── app/
│   ├── (home)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── page.client.tsx
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── globals.css
│   └── layout.tsx
├── apis/
│   ├── apiClient.ts
│   └── userApi.ts
├── components/
│   ├── Greeting.tsx
│   ├── LoginButton.tsx
│   ├── Providers.tsx
│   ├── ThemeSwitcher.tsx
│   └── UpdateButton.tsx
├── context/
│   └── AuthContext.tsx
├── hooks/
│   ├── use-client-user.ts
│   └── use-server-user.ts
├── lib/
│   ├── auth-cookie.ts
│   ├── firebase.ts
│   └── revalidate-path.ts
├── store/
│   ├── actions.ts
│   ├── reducers.ts
│   └── store.ts
├── theme/
│   └── theme.ts
├── types/
│   └── user.ts
└── package.json
```

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure Firebase:
   - Create a `.env.local` file in the root directory
   - Add the following Firebase configuration variables:
     ```
     NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
     NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
     ```
   - Ensure Firebase Authentication is set up in your Firebase console
4. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add `NEXT_PUBLIC_API_URL=your_backend_api_url`
5. Start the development server: `npm run dev`

## Authentication

Firebase Authentication is used for user login. The login form is implemented in `app/(home)/login/page.tsx`.

## Authentication State Management

The application uses a custom `AuthContext` to manage authentication state across the app. This context provides the current user information and is updated in real-time using Firebase's `onAuthStateChanged` listener.

## State Management

Redux is used to manage application state, excluding authentication and theme preferences. It handles:
- API call states (loading, success, error)
- Auto-reset of success/error messages after 1.5 seconds

## Theme Switching

The application supports two themes: "Daylight" (light mode) and "Pastel" (dark mode). Theme switching is implemented using Material-UI's theming system. Users can toggle between themes using the `ThemeSwitcher` component.

The theme configuration is defined in `theme/theme.ts` and includes custom color schemes for both light and dark modes. The `ThemeProvider` from Material-UI is used to apply the theme throughout the application.

## API Integration

API calls are abstracted in the `apis` folder, with proper error handling and authentication checks. The `apiClient.ts` file provides a centralized method for making authenticated API requests.

## Server-Side Data Fetching

User data is fetched server-side in the home page (`app/(home)/page.tsx`) using Next.js 13+ server components. This ensures that the data is available immediately when the page loads.

## Testing

The project is set up for testing with Jest and React Testing Library. To run tests:

```
npm run test
```

Authentication state changes can be tested using Jest mocks for Firebase auth.

## Main Components

- `Greeting`: Displays a personalized greeting based on the user's login status
- `LoginButton`: Provides a link to the login page
- `UpdateButton`: Allows logged-in users to update their name
- `ThemeSwitcher`: Enables users to toggle between light and dark themes