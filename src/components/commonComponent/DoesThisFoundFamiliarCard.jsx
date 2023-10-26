import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function DoesThisFoundFamiliarCard(props) {
  const {
    title,
    description,
    style,
    titleIcon,
  } = props;

  return (
    <Card sx={{ maxWidth: 345, margin: '5% 0px', padding: '2% 0px', ...style }}>
      <CardMedia
        sx={{ height: '40px', width: '40px', marginLeft: '3%' }}
        image={titleIcon}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
