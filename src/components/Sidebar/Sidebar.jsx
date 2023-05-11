import React from 'react';
import {Divider,List,ListItem,ListItemText,ListSubheader,Box} from '@mui/material';
import { ClassNames } from '@emotion/react';
import useStyles from './styles'
import blueLogo from '../../assets/blueLogo.png';

const categories =[{label:'Popular',value:'popular'},
{label:'Top Rated',value:'top rated'},
{label:'Upcoming',value:'upcoming'}]
const demoCat=[{label:'Comedy',value:'comedy'},
{label:'Horror',value:'horror'},
{label:'Action',value:'action'},
{label:'Animation',value:'animation'}];
const Sidebar = ({setMobileOpen}) => {
    const classes=useStyles();
  return (
    <>
        <Box className={ClassNames.imageLink}>
     <img className={classes.image} src={blueLogo}
        alt='deeflix logo'
     />
        </Box>
        <Divider />
        <List>
            <ListSubheader>
                Categories
            </ListSubheader>
            {
                categories.map(({label,value})=>(
                    <Box key={value} className={classes.links} to='/'>
                     <ListItem onClick={()=>{}} button>
                     <ListItemText primary={label}/>
                     </ListItem>
                    </Box>
                )
                )
            }
        </List>
        <Divider />
        <List>
            <ListSubheader>
                Genres
            </ListSubheader>
            {
                demoCat.map(({label,value})=>(
                    <Box key={value} className={classes.links} to='/'>
                     <ListItem onClick={()=>{}} button>
                     <ListItemText primary={label}/>
                     </ListItem>
                    </Box>
                )
                )
            }
        </List>

    </>
  )
}

export default Sidebar