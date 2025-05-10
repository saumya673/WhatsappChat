import { useContext } from "react";

import { styled, Box, Typography, Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { AccountContext } from "../context/AccountContext.tsx";

//component
import LoginDialog from "./account/LoginDialog.tsx";
import ChatDialog from "./chat/ChatDialog.tsx";

// Styled components
const Component = styled(Box)`
  padding: 3px 42px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  background: #fcf5eb;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 76px;
  margin-bottom: 15px;
  background-color: #fcf5eb;
  box-shadow: none;
`;

const HeaderContent = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Adjust items like title and icon */
  width: 100%;
`;

const IconWrapper = styled(Box)`
  display: flex;
  align-items: center;
  font-weight: 500;
  gap: 8px; /* Adds spacing between the icon and text */
`;

const CustomButton = styled(Button)`
  background-color: #25d366;
  color: black;
  border-radius: 30px;
  padding: 8px 20px;
  height: 52px;
  width: 162px;
  border: 1px solid black;
  text-transform: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; /* Adds space between text and icon */
  &:hover {
    background-color: rgb(0, 0, 0);
    color: #f7f5f3;
    box-shadow: none;
  }
  box-shadow: none;
`;

const Messenger = () => {
  const context = useContext(AccountContext);

  if (!context) {
    throw new Error("Messenger must be used within an AccountProvider");
  }

  const { account } = context;

  return (
    <Component>
      {account ? (
        <ChatDialog />
      ) : (
        <>
          <Header>
            <HeaderContent>
              <IconWrapper>
                <WhatsAppIcon style={{ fontSize: 35, color: "#25d366" }} />
                <Typography
                  variant="h6"
                  color="#25d366"
                  sx={{ fontWeight: 550 }}
                >
                  WhatsApp
                </Typography>
              </IconWrapper>
              <CustomButton sx={{ fontSize: 15 }}>
                Download
                <ArrowDownwardIcon style={{ fontSize: 20 }} />
              </CustomButton>
            </HeaderContent>
          </Header>
          <LoginDialog />
        </>
      )}
    </Component>
  );
};

export default Messenger;
