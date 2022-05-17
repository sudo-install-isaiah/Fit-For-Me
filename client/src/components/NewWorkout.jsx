import { useEffect, useState } from "react";
import Template1 from "./Templates/Template1";
import Template2 from "./Templates/Template 2";
import Template3 from "./Templates/Template3";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from '@mui/material/FormControl'
import { InputLabel } from "@mui/material/InputLabel";
import Box from '@mui/material/Box'
import TextField  from "@mui/material/TextField";
import NavBar from './Navbar'
import Grid from '@mui/material/Grid'

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
    <Box sx={{ minWidth: 120,
    }}>
      <NavBar/>
      <Grid align='center' margin={1}>
        <FormControl >
       <TextField variant='standard' label='Workout Name!'/>
        <p>How many times do you want to work out a week?</p>
        <Select
        value={value}
        labelId="Select Number of Days"
        onChange={handleChange}>
          <MenuItem value=''>Empty</MenuItem>
          <MenuItem value='one'>1</MenuItem>
          <MenuItem value='two'>2</MenuItem>
          <MenuItem value='three'>3</MenuItem>
        </Select>
        <br />
        {value && <p>Preview of workout plan.</p>}
      <Grid container align='center' >
      {auth1 && <Template1 />}
      </Grid>
      <Grid container align='center' >
      {auth2 && <Template2 />}
      </Grid>
      <Grid container align='center' >
      {auth3 && <Template3 />}
      </Grid>
      </FormControl>
      </Grid>
      </Box>
  );
}