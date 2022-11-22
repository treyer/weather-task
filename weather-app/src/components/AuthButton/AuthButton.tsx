import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import apiCalendar from "api/ApiCalendar/ApiCalendar";
import { selectIsSignedIn } from "store/selectors/selectors";
import { RootState } from "store";
import {
  clearCalendarEvents,
  fetchCalendarEvents,
  setIsSignedIn,
} from "store/actions";
import LoginButton from "./components";

function AuthButton() {
  const dispatch = useDispatch();
  const isSignedIn = useSelector((state: RootState) => selectIsSignedIn(state));

  useEffect(() => {
    apiCalendar.setSignInCallback(() => {
      dispatch(setIsSignedIn(true));
      dispatch(fetchCalendarEvents());
    });
    apiCalendar.setSignOutCallback(() => {
      dispatch(setIsSignedIn(false));
      dispatch(clearCalendarEvents());
    });
    return () => {
      apiCalendar.setSignInCallback(null);
      apiCalendar.setSignOutCallback(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleButtonClick = async () => {
    if (!isSignedIn) {
      apiCalendar.handleAuthClick();
    }
    if (isSignedIn) {
      apiCalendar.handleSignoutClick();
    }
  };

  return (
    <LoginButton
      size="large"
      variant="text"
      style={{ color: "white" }}
      startIcon={<CalendarMonthIcon />}
      onClick={handleButtonClick}
    >
      {isSignedIn ? "Sign Out" : "Sign In"}
    </LoginButton>
  );
}

export default AuthButton;
