import React from 'react'
import axios from 'axios';
import{Modal,Typography,Button,ButtonGroup,Grid,Box,CircularProgress,useMediaQuery,Rating,Divider} from '@mui/material'
import {Movie as MovieIcon,Theatres,Language,PlusOne,Favorite,FavoriteBorderOutlined,Remove,ArrowBack} from '@mui/icons-material';
import Action from '../../assets/action.png';
import Adventure from '../../assets/adventure.png';
import Fantasy from '../../assets/fantasy.png';
import movieData from '../movieData/moviedata';
import useStyles from './styles';
const MovieInfo = () => {
  const classes=useStyles();
  const movie=movieData[0];
  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4} style={{ marginBottom:'30px'}}>
        <img className={classes.poster} src={movie.Poster} alt='poster'/>
      </Grid>
      <Grid item container direction='column' lg={7}>
        <Typography variant='h3' align='center' gutterBottom> {movie.Title} ({movie.Year})</Typography>
        <Typography variant='h5' align='center' gutterBottom>A {movie.Writer}'s Film</Typography>
        <Grid item className={classes.containerSpaceAround}>
          <Box display='flex' align='center'>
            <Rating readOnly value={movie.imdbRating/2}/>
            <Typography variant='subtitle1' gutterBottom style={{marginLeft:'10px'}}>{movie.imdbRating}/10</Typography>
          </Box>
          <Typography variant='h6' align='center' gutterBottom>{movie.Runtime} | Language: {movie.Language}</Typography>
        </Grid>
        <Grid item className={classes.genreContainer}>
          <Box className={classes.genres}>
          <img src={Fantasy} alt="genre" className={classes.genreImage}/>
          <Typography color='textPrimary' variant='subtitle1'>Fantasy</Typography>
          </Box>
          <Box className={classes.genres}>
          <img src={Action} alt="genre" className={classes.genreImage}/>
          <Typography color='textPrimary' variant='subtitle1'>Action</Typography>
          </Box>
          <Box className={classes.genres}>
          <img src={Adventure} alt="genre" className={classes.genreImage}/>
          <Typography color='textPrimary' variant='subtitle1'>Adventure</Typography>
          </Box>
        </Grid>
        <Divider />
        <Typography variant='h5' gutterBottom style={{marginTop:'10px'}}>Overview</Typography>
        <Typography style={{marginBottom:'2rem'}}>{movie.Plot}</Typography>
        <Divider />
        <Typography variant='h5' gutterBottom style={{marginTop:'15px'}}>Main Cast</Typography>
        <Grid item container spacing={2}>
        {movie.Actors.map((image,i)=>(
          <Grid key={i} item xs={4} md={2} className={classes.castCard}>
            <img className={classes.images} src={image.imgUrl} alt='castImages'/>
            <Typography variant='h6'>{image.name}</Typography>
            <Typography>{image.character}</Typography>
          </Grid>
        ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default MovieInfo