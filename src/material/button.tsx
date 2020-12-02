import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

interface MaterialButtonProps {
  value: string;
  clickHandler: () => void;
  isLoading: boolean;
}

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: '700px',
  },
}));

const MaterialButton: React.FC<MaterialButtonProps> = ({
  value, clickHandler, isLoading,
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
      {isLoading && <CircularProgress color="inherit" size={22} />}
      {!isLoading && value.toUpperCase()}
    </Button>
  );
};

export default MaterialButton;
