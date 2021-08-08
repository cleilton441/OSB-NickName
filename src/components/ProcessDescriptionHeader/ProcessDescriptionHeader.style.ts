import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  title: {
    fontWeight: 600,
    fontSize: 20,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cancel:{
   width: 40,
   height: 12,
   textAlign: 'center',
   display: 'flex',
   alignItems: 'center',
   color: '#555555',
  },
  but:{
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    marginRight: 12
  }
});