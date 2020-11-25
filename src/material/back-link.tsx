import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const MaterialBackLink = ({ linkAddress }) => {
  const classes = useStyles();

  return (
    <Link
      style={{ textDecoration: 'none', color: 'inherit' }}
      to={linkAddress}
    >
      <Button
        size="large"
        color="primary"
        className={classes.button}
        startIcon={<ChevronLeftIcon />}
      >
        Back
      </Button>
    </Link>
  );
};

export default MaterialBackLink;
