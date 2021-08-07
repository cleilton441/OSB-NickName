import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./ProcessDescriptionHeader.style";
import cancel from '../../_assets/img/Close.svg'
import {Button} from '../Button/Button'

interface TitleAndDescritionProps {
  title: string;
  subtitle?: string;
  description?: string;
  name?: string;

}

export const ProcessDescriptionHeader = ({
  title,

}: TitleAndDescritionProps) => {
  const styles = useStyles();
  return (
    <Box>
      <Typography id="pd-title" variant="h6" className={styles.title}>
        {title}
        <div className={styles.but}>
          <Button
                  palette="secondary"
                  size="small"
                  startIcon={<img src={cancel} alt="cancel"/>}
                  onClick={()=> console.log("Cancelar")}
                >
                  <div className={styles.cancel}>
                  Cancelar
                  </div>
          </Button>
          </div>
      </Typography>
    </Box>
    
  );
};