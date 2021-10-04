import React from 'react';
import { Fade, TextField, Button } from "@material-ui/core"

import { useStyles } from "./AppCss";

function App() {

  const css = useStyles();

  return (
    <div className={css.wrapper}>
      <Fade in={true} timeout={2000}>
        <div className={css.container} >
          <h2 className={css.title}>Random Number Generator</h2>

          <div className={css.descriptionContainer}>
            <h4 className={css.description} >This little app is to help generate random number for whatever thing you are doing.
              Please, select a range (minimum and maximum) so that we can generate a random number for you. </h4>

            <div className={css.inputBoxes}>
              <TextField className={css.input} id="outlined-basic" label="maximum" variant="filled" type="number" />
              <TextField className={css.input} id="outlined-basic" label="minimum" variant="filled" type="number" />
            </div>

            <Button className={css.generateButton} variant="contained" >Generate</Button>

          </div>
        </div>
      </Fade>
    </div>
  );
}

export default App;
