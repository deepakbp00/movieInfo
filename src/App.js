import React from 'react';
import MovieInfo from './components/MovieInfo/MovieInfo';
import Trailer from './components/Trailer/Trailer';
import Recommended from './components/Recomended/Recomended';
import NavBar from './components/NavBar/NavBar';
import {Divider, Typography} from '@mui/material';
import { CssBaseline } from '@mui/material';
import useStyles from './styles';
function App() {
  const classes=useStyles();
  return (
    <div className={classes.root}>
     <CssBaseline />
    <NavBar />
    <main className={classes.content}>
      <div className={classes.toolbar}/>
     <MovieInfo />
     <Divider />
     <Trailer />
     <Divider />
     <Typography variant='h3' gutterBottom align='center' style={{marginTop:'20px'}}>You Might also Like</Typography>
     <Recommended />
     </main>
    </div>
  );
}

export default App;
