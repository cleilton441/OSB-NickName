import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  buttonsWrapper: {
    display: "flex",
    justifyContent: "center",
    padding:16,
    paddingBottom:24,
    
    "& .MuiButton-root": {
      width: 120,
      height: 40,
      borderRadius: 4,   
    },

    "& .MuiButton-label": {
      display: "block",
      position: "relative",
     
    },  

    "& .MuiButton-startIcon, & .MuiButton-endIcon": {
      display: "block",
      position: "absolute",
    },
    "& .MuiButton-startIcon": {
      top: 0,
      right: 68,
      marginRight: 0,
    },
    "& .MuiButton-endIcon": {
      marginLeft: 8,
      top: 0,
      right: 0,
    },
  },

  nextlogo:{
    marginTop: '-2px',
    width: 22,
    height: 22,

  }
});
