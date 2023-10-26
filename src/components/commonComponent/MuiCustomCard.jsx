import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { List, ListItem } from '@mui/material';

export default function MuiCustomCard(props) {
  const {
    title,
    points,
  } = props
  const [buttonStyle, setButtonStyle] = React.useState({display: 'none'})
  return (
    <Card sx={{ 
      maxWidth: 345, 
      backgroundColor: 'rgb(254,251,235)', 
      transition: "display ease 3s",
      "&:hover": {
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      },
    }}
      onMouseEnter={e => {
        setButtonStyle({ display: 'block' });
      }}
      onMouseLeave={e => {
        setButtonStyle({ display: 'none' })
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           {title}
        </Typography > 
            <List sx={{ listStyleType: 'disc', marginLeft: '6%' }}>
              {
                points?.map((point, idx) => {
                  return(
                    <ListItem key={idx} sx={{ display: 'list-item' }}>
                      {point}
                    </ListItem>
                  )
                })
              }
            </List>
      </CardContent>
      <CardActions>
        <Button variant="contained"
          sx={{ backgroundColor: 'black', borderRadius: '20px', marginLeft: '4%', textTransform: 'capitalize', ...buttonStyle}}>
          See Details
        </Button>
      </CardActions>
    </Card>
  );
}