import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import PublishRoundedIcon from "@material-ui/icons/PublishRounded";
export default function WorkForm() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  const [hours, setHours] = useState("");
  const [level, setLevel] = useState("");
  const [selectedDate, setSelectedDate] = React.useState("");
  const handleHours = (event) => {
    setHours(event.target.value);
  };
  const handleLevel = (event) => {
    setLevel(event.target.value);
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  function findFileName(e) {
    const lastBackSlash = e.target.value.lastIndexOf("\\") + 1;
    const fileName = e.target.value.substring(lastBackSlash, 50);
    document.querySelector(".WorkForm > .upload-wrapper > label > div > p").textContent = fileName;
  }

  console.log(hours);
  console.log(level);
  console.log(selectedDate);
  return (
    <fieldset name="Work" className="WorkForm hide">
      <h2>WORK</h2>
      <div className="input-wrapper">
        <TextField name="Position" className="position" label="Position" required />
      </div>
      <div className="input-wrapper">
        <TextField name="Division" className="division" label="Division" required />
      </div>
      <div className="input-wrapper">
        <TextField name="Email" className="email" type="email" label="Email" required />
      </div>
      <div className="input-wrapper">
        <FormControl error>
          <InputLabel id="hours">Work hours</InputLabel>
          <Select name="Work hours" labelId="hours" value={hours} onChange={handleHours} required>
            <MenuItem value="full time">Full time</MenuItem>
            <MenuItem value="part time">Part time</MenuItem>
            <MenuItem value="hourly">Hourly</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="input-wrapper">
        <TextField
          name="Start date"
          id="date"
          label="On board since"
          type="date"
          defaultValue={`${yyyy}-${mm}-${dd}`}
          onChange={handleDateChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div className="input-wrapper">
        <FormControl>
          <InputLabel htmlFor="level">User level</InputLabel>
          <Select name="User level" id="level" value={level} onChange={handleLevel} required>
            <MenuItem value="admin">Administrator</MenuItem>
            <MenuItem value="regular">Regular user</MenuItem>
            <MenuItem value="board">Board member</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="upload-wrapper">
        <label className="custom-upload" htmlFor="pdf-upload">
          <div className="flex-wrapper">
            <button className="upload-image float-btn">
              <PublishRoundedIcon />
            </button>
            <p>Upload contract (.pdf)</p>
          </div>
          <input id="pdf-upload" type="file" name="image" onChange={findFileName} />
        </label>
      </div>
    </fieldset>
  );
}
