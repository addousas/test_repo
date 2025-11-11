# TeamOnboard

This is a full-stack application for onboarding teams to a new platform. It includes a React Native mobile application and a NestJS backend.

## Features

- User sign-up and authentication with JWT
- Organization creation
- Team member invitations

## Technologies Used

### Backend

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)

### Frontend

- [React Native](https://reactnative.dev/)
- [NativeWind](https://www.nativewind.dev/) (for Tailwind CSS)
- [React Navigation](https://reactnavigation.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Axios](https://axios-http.com/)

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- A running PostgreSQL instance

### Backend Setup

1.  Navigate to the `api` directory:
    ```bash
    cd api
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `api` directory and add the following environment variables:
    ```
    DB_HOST=localhost
    DB_PORT=5432
    DB_USERNAME=your_db_user
    DB_PASSWORD=your_db_password
    DB_DATABASE=teamonboard
    JWT_SECRET=your_jwt_secret
    ```
4.  Start the backend server:
    ```bash
    npm run start:dev
    ```

### Frontend Setup

1.  Navigate to the `mobile` directory:
    ```bash
    cd mobile
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the Metro bundler:
    ```bash
    npx react-native start
    ```
4.  Run the application on your desired platform:
    - For Android:
      ```bash
      npx react-native run-android
      ```
    - For iOS:
      ```bash
      npx react-native run-ios
      ```
