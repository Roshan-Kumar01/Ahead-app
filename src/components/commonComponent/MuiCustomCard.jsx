import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { List, ListItem, Stack } from '@mui/material';
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  card: {
    position: "relative",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  button: {
    position: "absolute",
    bottom: "20px",
    // left: "50%",
    // transform: "translateX(-50%)",
    opacity: 0,
    transition: "opacity 2s",
  },
  showButton: {
    opacity: 1,
  },
}));

function MuiCustomCard(props) {
  
  const classes = useStyles();
  const {
    title,
    points,
  } = props
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setIsButtonVisible(false);
  };

  return (
    <Card
      className={`${classes.card} ${isButtonVisible ? classes.showButton : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography >
        <List sx={{ listStyleType: 'disc', marginLeft: '6%' }}>
          {
            points?.map((point, idx) => {
              return (
                <ListItem key={idx} sx={{ display: 'list-item' }}>
                  {point}
                </ListItem>
              )
            })
          }
        </List>
        <Stack marginTop='10%'>
          {isButtonVisible && <Button
            className={`${classes.button} ${isButtonVisible ? classes.showButton : ""}`}
            variant="contained"
            color="primary"
            sx={{ backgroundColor: 'black', borderRadius: '20px', marginLeft: '4%', textTransform: 'capitalize', }}
          >
            See Details
          </Button>}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default MuiCustomCard;