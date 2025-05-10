import Messenger from "./components/Messenger.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./App.css";
import AccountProvider from "./context/AccountProvider.tsx";

function App() {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
