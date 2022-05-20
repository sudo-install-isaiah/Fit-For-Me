import { useContext ,useEffect, useState } from "react";
import Template1 from "./Templates/Template1";
import Template2 from "./Templates/Template 2";
import Template3 from "./Templates/Template3";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { InputLabel } from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import NavBar from "./Navbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { WorkoutContext } from "./providers/WorkoutFormProvider";
import { Typography } from "@mui/material";

// link to at the bottom needs changed for how many days are choosen 
export default function NewWorkout() {
  const [auth1, setAuth1] = useState(false);
  const [auth2, setAuth2] = useState(false);
  const [auth3, setAuth3] = useState(false);
  // const [value, setValue] = useState("");
  // const [title, setTitle] = useState("");
  const [exercise, setExercise] = useState([]);
  const [test, setTest] = useState([])
  const { cookies, title, setTitle, value, setValue } = useContext(WorkoutContext)
  

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  

  console.log(value)
  useEffect(() => {
    if (value === "") {
      setAuth2(false);
      setAuth3(false);
      setAuth1(false);
    }
    if (value === "1") {
      setAuth2(false);
      setAuth3(false);
      setAuth1(true);
    }
    if (value === '2') {
      setAuth1(false);
      setAuth3(false);
      setAuth2(true);
    }
    if (value === "3") {
      setAuth2(false);
      setAuth1(false);
      setAuth3(true);
    }
  }, [value]);

  return (
    <Box sx={{ minWidth: 120 }}>
      <NavBar />
      <Grid align="center" margin={1}>
        <FormControl>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            variant="standard"
            label="Workout Name!"
          />
          <Typography>How many times do you want to work out a week?</Typography>
          <Select
            value={value}
            labelId="Select Number of Days"
            onChange={handleChange}
          >
            <MenuItem value="">Empty</MenuItem>
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
            <MenuItem value="3">3</MenuItem>
          </Select>
          <br />
          {value && <Typography>Preview of workout plan.</Typography>}
          <Grid container align="center">
            {auth1 && <Template1 />}
          </Grid>
          <Grid container align="center">
            {auth2 && <Template2 />}
          </Grid>
          <Grid container align="center" margin={2}>
            {auth3 && <Template3 />}
          </Grid>
          <Link to={value}>
          <Button variant="contained" >
            Submit
          </Button>
          </Link>
        </FormControl>
      </Grid>
    </Box>
  );
}
