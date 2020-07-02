import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      color: theme.palette.primary.main,
    },
  }),
);

const Index: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h3'>Welcome to Next.js!</Typography>
    </div>
  );
};
export default Index;
