import React from 'react';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const MaterialExtendedCard = ({
  image, header, description,
}) => (
  <Paper elevation={3}>
    <CardMedia
      component="img"
      alt={header}
      image={image}
      title={header}
    />
    <CardContent>
      <Typography
        gutterBottom
        variant="h5"
        component="p"
      >
        {header.toUpperCase()}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {description}
      </Typography>
    </CardContent>
  </Paper>
);

export default MaterialExtendedCard;
