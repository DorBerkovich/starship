import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";

function StepProducerForm(props) {
  const [SPName, setSPName] = useState("");

  const handleSPNameChange = (event) => {
    setSPName(event.target.value);
  };
  console.log(props.nodeInfo.nodeId);

  let handleClick = () => {
    props.setChangesToApply({ newName: SPName, nodeId: props.nodeInfo.nodeId });
  };

  return (
    <div style={formStyle}>
      <form style={{ width: "100%" }}>
        <Grid container justifyContent="center" spacing={1}>
          <Grid xs={10} item>
            <TextField
              value={SPName}
              margin="normal"
              label={props.nodeInfo.nodeName}
              placeholder="Change step producer name"
              fullWidth
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleClick();
                }
              }}
              onChange={handleSPNameChange}
            ></TextField>
            <Grid xs={6} item>
              <Button onClick={handleClick} variant="contained">
                APPLY CHANGES
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

let formStyle = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

export default StepProducerForm;