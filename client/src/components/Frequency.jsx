import { useEffect, useState } from "react";
import Template1 from "./Templates/Template1";
import Template2 from "./Templates/Template 2";
import Template3 from "./Templates/Template3";

export default function Frequency() {
  const [auth1, setAuth1] = useState(false);
  const [auth2, setAuth2] = useState(false);
  const [auth3, setAuth3] = useState(false);
  const [value, setValue] = useState("");

  const handleSelect = (e) => {
    setValue(e.target.value);
  };
  
  useEffect(() => {
    if (value === "-") {
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
    <div>
      <div className="box">
        <p>How many times do you want to work out a week?</p>
        <select onChange={handleSelect}>
          <option value="-">-</option>
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
        </select>
        <br />
        {value && <p>Preview of workout plan.</p>}
      </div>
      {auth1 && <Template1 />}
      {auth2 && <Template2 />}
      {auth3 && <Template3 />}
    </div>
  );
}
