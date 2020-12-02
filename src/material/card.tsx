import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface MaterialCardProps {
  image: string;
  header: string;
  buttonText: string;
  linkAddress: string;
  buttonClickHandler: () => void;
  isButtonDisabled: boolean;
}

const MaterialCard: React.FC<MaterialCardProps> = ({
  image, header, buttonText, linkAddress, buttonClickHandler, isButtonDisabled,
}: MaterialCardProps) => (
  <Card>
    <Link
      style={{ textDecoration: 'none', color: 'inherit' }}
      to={linkAddress}
    >
      <CardActionArea>
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
        </CardContent>
      </CardActionArea>
    </Link>
    <CardActions>
      <Button
        variant="contained"
        size="small"
        color="secondary"
        onClick={buttonClickHandler}
        disabled={isButtonDisabled}
      >
        {buttonText}
      </Button>
    </CardActions>
  </Card>
);

export default MaterialCard;
