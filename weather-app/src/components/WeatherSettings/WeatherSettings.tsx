import { useState } from "react";
import { CoverLayer, SettingsIcon } from "./components";
import WeatherModal from "./WeatherModal";

function WeatherSettings() {
  const [isModalShow, setIsModalShow] = useState(false);

  const toggleModal = () => {
    setIsModalShow((prev) => !prev);
  };

  return (
    <>
      <SettingsIcon title="Weather settings" onClick={toggleModal} />
      {isModalShow && <CoverLayer onClick={toggleModal} />}
      {isModalShow && <WeatherModal closeCallback={toggleModal} />}
    </>
  );
}

export default WeatherSettings;
