import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    backgroundColor: '#F0A2A8',
    marginBottom: 10,
    "&:hover":{
      background: "#F0A2A8",
    }
  },
  clearButton:{
    backgroundColor: '#62B3B0',
    "&:hover":{
      background: "#62B3B0",
    }
  }
}));
