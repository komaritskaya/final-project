import React from 'react';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

interface MaterialExtendedCardProps {
  image: string;
  header: string;
  description: string;
}

const MaterialExtendedCard: React.FC<MaterialExtendedCardProps> = ({
  image, header, description,
}: MaterialExtendedCardProps) => (
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
