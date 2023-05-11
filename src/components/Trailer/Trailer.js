import React from 'react';
import{Modal,Typography,Button,ButtonGroup,Grid,Box,CircularProgress,useMediaQuery,Rating,Divider} from '@mui/material'
import useStyles from './styles';
import movies from '../movieData/moviedata';
const Trailer = () => {
    const classes=useStyles();
    const movie=movies[0];
  return (
    <Grid container className={classes.containerSpaceAround}>
    <Grid item sm={12} lg={4}>
    
    <iframe width="100%" height="200" src="https://www.youtube.com/embed/5PSNL1qE6VY" title="Avatar | Official Trailer (HD) | 20th Century FOX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" style={{borderRadius:"10px"}} allowfullscreen></iframe>
    </Grid>
    <Grid item container direction='column' lg={7} style={{marginTop:'15px'}}>
      <Grid item container spacing={2}>
      {movie.Images.map((image,i)=>(
        <Grid key={i} item xs={4} md={2}>
          <img className={classes.images} src={image} alt='movieImages'/>
        </Grid>
      ))}
      </Grid>
    </Grid>
  </Grid>
  )
}

export default Trailer