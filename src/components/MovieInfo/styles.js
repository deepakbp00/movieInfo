import {makeStyles} from '@mui/styles';
export default makeStyles((theme)=>({
    containerSpaceAround:{
        display:'flex',
        justifyContent:'space-around',
        margin:'10px 0 !important',
        [theme.breakpoints.down('sm')]:{
       flexDirection:'column',
       flexWrap:'wrap',
        }
    },
    poster:{
        borderRadius:'20px',
        boxShadow:'0.5em 1em 1em rgb(64,64,70)',
        width:'80%',
        justifySelf:'center',
        cursor:'pointer',
        [theme.breakpoints.down('md')]:{
            margin:'0 auto',
            width:'50%',
          },
        [theme.breakpoints.down('sm')]:{
            margin:'0 auto',
            width:'100%',
            height:'350px',
            marginBottom:'30px',
             },
       
    },
    genreContainer:{
        margin:'10px 0 !important',
        display:'flex',
        justifyContent:'space-around',
        flexWrap:'wrap',
    },
    genres:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        [theme.breakpoints.down('sm')]:{
           padding:'0.5rem 1rem'
             },
    },
    genreImage:{
       width:'60px',
       marginRight:'10px'
    },
    images:{
        width:'100%',
        maxWidth:'9em',
        height:'10em',
        objectFit:'cover',
        borderRadius:'10px'
    },
    castCard:{
        transition:'0.5s',
        cursor:'pointer',
        '&:hover':{
            transform:'scale(1.08)',
        }
    }
   
}))