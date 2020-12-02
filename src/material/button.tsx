import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface MaterialButtonProps {
  value: string;
  clickHandler: () => void;
}

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '700px',
  },
}));

const MaterialButton: React.FC<MaterialButtonProps> = ({
  value, clickHandler,
}: MaterialButtonProps) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.root}
      variant="contained"
      color="primary"
      size="large"
      fullWidth
      onClick={clickHandler}
    >
      {value.toUpperCase()}
    </Button>
  );
};

export default MaterialButton;
