import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import Navbar from "../Navbar";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import { ListItemText } from "@mui/material";
import { Divider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function DayOne() {
  const [exercise, setExercise] = useState([]);
  const [equipment, setEquipment] = useState("");

  // need name, bodypart, equipment, image,
  const foo = equipment;
  const x = "chest";
  useEffect(() => {
    // for demo purposes, hardcoded URL
    axios.get(`http://localhost:8080/api/chest/barbell`).then((res) => {
      console.log(res.data);
      setExercise(res.data);
    });
  }, []);
  console.log(equipment); ////////////

  const handleChange = (event) => {
    setEquipment(event.target.value);
  };

  const data = exercise.map((ex) => {
     return( <div key={ex.id} id={ex.id}><p>{ex.bodyPart} - {ex.name} - {ex.equipment}</p><img src={ex.gifUrl}/></div>
	)});


  


  return (
    <div>
      <Navbar />
      <Box>
        <Grid align="center" margin={2}>
          <FormControl>
            <strong>Please select one!</strong>
            <Select
              value={equipment}
              labelId="Select equipment"
              onChange={handleChange}
            >
              <MenuItem value="">Empty</MenuItem>
              <MenuItem value="barbell">Barbell</MenuItem>
              <MenuItem value="bands">Bands</MenuItem>
              <MenuItem value="body weight">Body Weight</MenuItem>
              <MenuItem value="dumbell">Dumbell</MenuItem>
            </Select>
          </FormControl>
        </Grid>
				<div>
				{data}
				</div>
        <Grid>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography align="center">Day 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <Divider />
                <ListItemText primary="Chest" />
                <Divider />
                <ListItemText primary="Chest" />
                <Divider />
                <ListItemText primary="Legs" />
                <Divider />
                <ListItemText primary="Legs" />
                <Divider />
                <ListItemText primary="Arms" />
                <Divider />
                <ListItemText primary="Arms" />
                <Divider />
                <ListItemText primary="Core" />
                <Divider />
              </List>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Box>
    </div>
  );
}
