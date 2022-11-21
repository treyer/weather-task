import ApiCalendar from "react-google-calendar-api";

const config = {
  clientId:
    "605086000408-gnjrojapsne8q3niape14favdboo9v7l.apps.googleusercontent.com",
  apiKey: "AIzaSyBfoOOjFR8Cf2FGaXqaQoHmY770KfgqYQA",
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};

const apiCalendar = new ApiCalendar(config);

export default apiCalendar;
