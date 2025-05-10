# WhatsApp Web Clone

This project is a clone of WhatsApp Web built using modern web technologies. It allows users to log in using their Google account, scan a QR code, and access a chat interface. The application is designed to mimic the look and feel of WhatsApp Web while providing a seamless user experience.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Vite**: A fast build tool and development server.
- **Material-UI (MUI)**: A popular React UI framework for building responsive and accessible components.
- **Google OAuth**: For user authentication via Google accounts.
- **JWT Decode**: To decode JSON Web Tokens for user data.

## Features

- **Google Login**: Users can log in using their Google account.
- **QR Code Scanning**: Mimics the WhatsApp Web login process.
- **Chat Interface**: A simple chat interface for demonstration purposes.
- **Responsive Design**: Optimized for various screen sizes.

## Project Structure

The project is organized as follows:

```
src/
  components/       # React components for the UI
  context/          # Context API for managing global state
  constants/        # Static data and constants
  assets/           # Static assets like images
  App.tsx           # Main application component
  main.tsx          # Entry point of the application
```

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd chat_with_me
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to `http://localhost:3000`.

## Deployment

The project can be built and deployed using the following commands:

1. Build the project:
   ```bash
   npm run build
   ```
2. Preview the production build:
   ```bash
   npm run preview
   ```

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.
