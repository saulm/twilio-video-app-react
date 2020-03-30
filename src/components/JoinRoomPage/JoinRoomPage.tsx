import React, { ChangeEvent, useState } from 'react';

import { useAppState } from '../../state';
import Button from '@material-ui/core/Button';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  joinRoomButtonContainer: {
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#F22F46',
    },
  },
});

export default function JoinRoomPage() {
  const classes = useStyles();
  let { URLRoomName, UserIdentifier } = useParams();
  const history = useHistory();

  const joinSession = () => {
    history.replace('/room/' + URLRoomName + '/user/' + UserIdentifier + '/session');
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.joinRoomButtonContainer}>
        <Button variant="contained" type="submit" onClick={joinSession}>
          Join Session
        </Button>
      </div>
    </ThemeProvider>
  );
}
