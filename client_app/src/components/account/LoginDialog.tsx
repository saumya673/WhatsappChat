import { useContext } from "react";
import { AccountContext } from "../../context/AccountContext.tsx";
import { Box, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data.ts";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { GoogleLogin } from "@react-oauth/google";
import { CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const LoginBox = styled(Box)`
  display: flex;
  border: 1px solid black; /* Border color */
  border-radius: 30px; /* Optional: rounded corners */
  background-color: white;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 68px;
  padding-right: 68px;
  height: 53vh;
  width: 840px; /* Adjust width */
`;

const WrittenContent = styled(Box)`
  width: 65%;
`;

const HelpBox = styled(Box)`
  display: flex;
  align-items: center;
  font-size: 17px;
  cursor: pointer;
  text-decoration: underline 2px #25d366;
  text-underline-offset: 4px; /* Adds space between text and underline */
  &:hover {
    color: #25d366; /* Change text color to green on hover */
  }
`;

const Qr = styled(Box)`
  padding: 20px;
  margin-top: 20px;
`;

const QrCodeImage = styled("img")({
  width: 264,
  height: 264,
});

const LoginDialog = () => {
  const context = useContext(AccountContext);
  if (!context) {
    throw new Error("LoginDialog must be used within an AccountProvider");
  }
  const { setAccount } = context;
  const onLoginSuccess = (res: CredentialResponse) => {
    if (res.credential) {
      const decode = jwtDecode(res.credential) as {
        sub: string;
        name: string;
        email: string;
        picture: string;
      };

      if (decode.sub && decode.name && decode.email && decode.picture) {
        setAccount({
          id: decode.sub,
          username: decode.name,
          email: decode.email,
          picture: decode.picture,
        });
        console.log("Login success:", decode);
      } else {
        console.error("Invalid token structure:", decode);
      }
    } else {
      console.error("Login error: No credential received.");
    }
  };

  const onLoginError = () => {
    console.log("Login error: An error occurred during login");
  };

  return (
    <LoginBox>
      <WrittenContent>
        <Box style={{ marginTop: 0, marginBottom: 10, fontSize: 32 }}>
          Log into WhatsApp Web
        </Box>
        <Box style={{ marginTop: 0, marginBottom: 32, fontSize: 18 }}>
          Message privately with friends and family using WhatsApp on your
          browser.
        </Box>
        <Box style={{ fontSize: 18 }}>1. Open WhatsApp on your phone</Box>
        <Box style={{ marginTop: 20, fontSize: 18 }}>
          2. Tap Menu on Android, or settings on iPhone
        </Box>
        <Box style={{ marginTop: 20, fontSize: 18 }}>
          3. Tap Linked devices and then Link a device
        </Box>
        <Box style={{ marginTop: 20, fontSize: 18 }}>
          4. Point your phone at this screen to scan the QR code
        </Box>
        <HelpBox style={{ marginTop: 44, marginBottom: 0 }}>
          Need help getting started
          <CallMadeIcon style={{ marginLeft: 8, fontSize: 14 }} />
        </HelpBox>
      </WrittenContent>
      <Qr style={{ position: "relative" }}>
        <QrCodeImage src={qrCodeImage} alt="QR Code" />
        <Box
          style={{
            position: "absolute",
            top: "40%",
            transform: "translateX(25%)",
          }}
        >
          <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
        </Box>
      </Qr>
    </LoginBox>
  );
};

export default LoginDialog;
