import React from 'react';
import { nanoid } from 'nanoid';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: '30px 0',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

const MaterialGrid = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={1} alignContent="space-around">
      {React.Children.toArray(children).map((child) => (
        <Grid item key={nanoid()} xs={12} sm={6} md={4} lg={3} xl={2}>
          {child}
        </Grid>
      ))}
    </Grid>
  );
};

export default MaterialGrid;
