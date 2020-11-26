import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: 'tomato',
  },
  title: {
    fontSize: 14,
    color: 'white',
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <SentimentVeryDissatisfiedIcon style={{ color: 'white' }} />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Something went wrong, please try again
        </Typography>
      </CardContent>
    </Card>
  );
}
