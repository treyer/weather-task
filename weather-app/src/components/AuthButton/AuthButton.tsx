import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useState } from "react";

import apiCalendar from "api/ApiCalendar/ApiCalendar";
import LoginButton from "./components";

function AuthButton() {
  const [isSignIn, setIsSignIn] = useState(false);

  const handleButtonClick = async () => {
    if (!isSignIn) {
      apiCalendar.handleAuthClick();
    }
    if (isSignIn) {
      apiCalendar.handleSignoutClick();
    }
    setIsSignIn((prev) => !prev);
  };

  return (
    <LoginButton
      size="large"
      variant="text"
      style={{ color: "white" }}
      startIcon={<CalendarMonthIcon />}
      onClick={handleButtonClick}
    >
      {isSignIn ? "Sign Out" : "Sign In"}
    </LoginButton>
  );
}

export default AuthButton;
