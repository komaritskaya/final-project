import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '40px 0',
  },
});

const MaterialContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container className={classes.root} maxWidth="xl">
        {children}
      </Container>
    </>
  );
};

export default MaterialContainer;
