import { useEffect, useState } from "react";
import Template1 from "./Templates/Template1";
import Template2 from "./Templates/Template 2";
import Template3 from "./Templates/Template3";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from '@mui/material/FormControl'
import { InputLabel } from "@mui/material/InputLabel";
import Box from '@mui/material/Box'

export default function NewWorkout() {
  const [auth1, setAuth1] = useState(false);
  const [auth2, setAuth2] = useState(false);
  const [auth3, setAuth3] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (value === "") {
      setAuth2(false);
      setAuth3(false);
      setAuth1(false);
    }
    if (value === "one") {
      setAuth2(false);
      setAuth3(false);
      setAuth1(true);
    }
    if (value === "two") {
      setAuth1(false);
      setAuth3(false);
      setAuth2(true);
    }
    if (value === "three") {
      setAuth2(false);
      setAuth1(false);
      setAuth3(true);
    }
  }, [value]);

  return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
      <div className="box">
        <input type="text" placeholder="Enter workout name!"></input>
        <p>How many times do you want to work out a week?</p>
        <Select
        labelId="select day"
        onChange={handleChange}>
          <MenuItem value=''>Empty</MenuItem>
          <MenuItem value='one'>1</MenuItem>
          <MenuItem value='two'>2</MenuItem>
          <MenuItem value='three'>3</MenuItem>
        </Select>
        <br />
        {value && <p>Preview of workout plan.</p>}
      </div>
      {auth1 && <Template1 />}
      {auth2 && <Template2 />}
      {auth3 && <Template3 />}
      </FormControl>
      </Box>
  );
}
