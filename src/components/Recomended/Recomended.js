import React from 'react'
import {Grid,Grow,Box,Typography,Tooltip,Rating} from '@mui/material'
import useStyles from './styles'
const Recomended = () => {
    const classes=useStyles();
    let i=1;
    const movies=[
        {'title':'I Am Legend','imgUrl':'https://m.media-amazon.com/images/I/61cKY6c1OtL.jpg','rating':7.2},
        {'title':'300','imgUrl':'https://c8.alamy.com/comp/2JH2PB7/gerard-butler-poster-300-2006-2JH2PB7.jpg','rating':7.7},
        {'title':'The Avengers','imgUrl':'https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg','rating':8.1},
        {'title':'The Wolf of Wall Street','imgUrl':'https://talenthouse-res.cloudinary.com/image/upload/c_fill,f_auto,h_914,w_640/v1597395923/user-1035451/profile/hr91nw7uzzizqqyirzlh.jpg','rating':8.2},
        {'title':'Interstellar','imgUrl':'https://img.fruugo.com/product/6/84/32299846_max.jpg','rating':8.6},
        {
            "title": "Dances with Wolves",
            "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbyRf4ZuWkhhFVKh--RI1FTMrzH4jBMYwcfw&usqp=CAU",
            "rating": 8.0
          },
          {
            "title": "The Last Samurai",
            "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS_ISM28_GOPTLVgAwklwRuyJMTwGdtOw8EQ&usqp=CAU",
            "rating": 7.7
          },
          {
            "title": "Atlantis: The Lost Empire",
            "imgUrl": "https://m.media-amazon.com/images/I/51IfUrAHkLL._AC_UF894,1000_QL80_.jpg",
            "rating": 6.3
          },
          {
            "title": "John Carter",
            "imgUrl": "https://i.pinimg.com/originals/09/4f/00/094f002c5b46039c661ff1e9a1723116.jpg",
            "rating": 6.2
          },
          {
            "title": "The 13th Warrior",
            "imgUrl": "https://i.pinimg.com/736x/d5/a7/d7/d5a7d76e1a7f4e931905fb47ba1ebfb2.jpg",
            "rating": 6.0
          },
          {
            "title": "Dune",
            "imgUrl": "https://imageio.forbes.com/specials-images/imageserve/61116cea2313e8bae55a536a/-Dune-/0x0.jpg?format=jpg&width=960",
            "rating": 5.8
          },
          {
            "title": "Jupiter Ascending",
            "imgUrl": "https://s-magazine.photography/ceemes/webfile/img/32698/Txtd-Channing-Bus-Shelter-JPTRA.jpg?y=1000",
            "rating": 5.3
          }
    ];
  return (
    <Grid container className={classes.movieContainer}>
        {
            movies.map((movie)=>(
                <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.movie}>
    <Grow in key={i} timeout={(i++)*250}>
    <Box className={classes.links}>
      <img alt={movie.title}
        className={classes.image}
        src={movie.imgUrl}
      />
    
    <Typography className={classes.title}> {movie.title} </Typography>
    <Tooltip disableTouchListener title={`${movie.rating/2}/5`}>
      <div>
      <Rating readOnly value={movie.rating/2} precision={0.1}/>
      </div>
    </Tooltip>
    </Box>
    </Grow>
     
    </Grid>
            ))
        }
    </Grid>
       
    
  )
}

export default Recomended