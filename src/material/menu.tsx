import React from 'react';
import { nanoid } from 'nanoid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

interface MaterialMenuProps {
  options: string[];
  clickHandler: (option: string) => void;
  selectedOption: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const MaterialMenu: React.FC<MaterialMenuProps> = ({
  options,
  clickHandler,
  selectedOption,
}: MaterialMenuProps) => {
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
