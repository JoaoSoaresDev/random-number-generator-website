
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  wrapper: {
    backgroundColor: "#212121",
    width: "100vw",
    height: "100vh",
  },
  container: {
    textAlign: "center",
    position: "absolute",
    margin: 'auto',
    right: "0",
    left: "0",
    width: "70vw",
    height: "100vh",
  },
  title: {
    color: "#D9CAB3",
    margin: "auto",
    marginTop: "20vh",
    fontSize: "2vw",
  },
  description: {
    color: "#D9CAB3",
    margin: "auto",
    marginTop: "5vh",
  },
  descriptionContainer: {
    width: "40vw",
    margin: "auto",
    right: "0",
    left: "0",
  },
  inputBoxes: {
    marginTop: "10vh",
    display: "flex",
    justifyContent: "space-around",
  },
  input: {
    backgroundColor: "#F6F6F6",
  },
  generateButton: {
    marginTop: "8vh",
    backgroundColor: "#F6F6F6",
  }


});


