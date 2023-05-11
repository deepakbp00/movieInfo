import {makeStyles} from '@mui/styles';

export default makeStyles(()=>({
    root:{
     display:'flex',
     height:'100%',
    },
    toolbar:{
     height:'70px',
    },
    content:{
        width:'95%',
        flexGrow:'1',
        padding:'2em',
    }
}))