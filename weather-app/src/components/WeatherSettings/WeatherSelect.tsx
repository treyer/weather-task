import { InputLabel, MenuItem, Select } from "@mui/material";
import { ShowWeatherType, WeatherSource } from "constants/common";

import { WeatherFormControl } from "./components";

type Props = {
  id: string;
  value: ShowWeatherType | WeatherSource;
  label: string;
  menuItems: Array<ShowWeatherType | WeatherSource>;
  callback: (event: any) => void;
};

function WeatherSelect({ id, value, label, menuItems, callback }: Props) {
  return (
    <WeatherFormControl variant="standard">
      <InputLabel id={id}>Forecast type</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={value}
        onChange={callback}
        label={label}
      >
        {menuItems.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </WeatherFormControl>
  );
}

export default WeatherSelect;
