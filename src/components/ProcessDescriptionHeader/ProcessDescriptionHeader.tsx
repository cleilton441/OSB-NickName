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
  subtitle,
  description,
  name,

}: TitleAndDescritionProps) => {
  const styles = useStyles();
  return (
    <Box>
      <Typography id="pd-title" variant="h6" className={styles.title}>
        {title}
          <Button
                  palette="secondary"
                  size="small"
                  startIcon={<img src={cancel} alt="cancel"/>}
                  onClick={()=> console.log("Cancelar")}
                >
                  Cancelar
          </Button>
      </Typography>
      {subtitle && (
        <Typography
          id="pd-subtitle"
          variant="subtitle1"
          className={styles.subtitle}
        >
          <strong>{subtitle}</strong>
        </Typography>
      )}
      {description && (
        <Typography
          id="pd-description"
          variant="body1"
          className={styles.description}
        >
          <Typography className={styles.desc}>{description}</Typography>
          <Typography className={styles.name}>{name}</Typography>
        </Typography>
      )}
       
    </Box>
    
  );
};