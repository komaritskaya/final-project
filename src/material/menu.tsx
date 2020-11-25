import React from 'react';
import { nanoid } from 'nanoid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const MaterialMenu = ({
  options,
  clickHandler,
  selectedOption,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        options.map((option) => (
          <Button
            key={nanoid()}
            size="large"
            variant={option === selectedOption ? 'contained' : 'outlined'}
            color="primary"
            disableElevation
            onClick={() => clickHandler(option)}
          >
            {option}
          </Button>
        ))
      }
    </div>
  );
};

export default MaterialMenu;
