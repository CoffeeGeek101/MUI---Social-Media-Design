
import { AppBar, InputBase, Toolbar, Typography, Box, styled, Badge, Avatar, MenuItem, Menu } from '@mui/material'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React, { useState } from 'react'

const Styledtoolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-around",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "5px 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

const Icon = styled(Box)(({theme}) => ({
    display:"none",
    gap:"25px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]: {
        display:"flex",
    }
}));  

const Userbox = styled(Box)(({theme}) =>({
    display:"none",
    gap:"25px",
    alignItems:"center",
    [theme.breakpoints.down("sm")]:{
        display: "flex",
    }
}));
export default function Header() {
    const [open, SetOpen] = useState(false);
  return (

    <AppBar position='sticky' sx={{padding:"10px"}}>
       <Styledtoolbar>
            <Typography variant='h6' sx={{display:{xs: "none", sm: "block"}}}>
                SNS
            </Typography>
                <ConnectWithoutContactIcon sx={{display:{xs:"block", sm:"none"}}} />
            <Search>
                <InputBase placeholder='search..'/>
            </Search>
            <Icon>
                <Badge badgeContent={1} color="error">
                    <MailIcon color="white" />
                </Badge> 
                <Badge badgeContent={2} color="error">
                    <NotificationsIcon/>
                </Badge>
                    <Avatar src="https://pbs.twimg.com/media/FmN9h6GagAA2qCS?format=jpg&name=large" 
                sx={{objectPosition:"cover"}}
                    onClick={(e) => SetOpen(true)}></Avatar>
            </Icon>
            <Userbox onClick={(e) => SetOpen(true)}>
                <Avatar
                src="https://pbs.twimg.com/media/FmN9h6GagAA2qCS?format=jpg&name=large" 
                sx={{objectPosition:"cover"}}
                ></Avatar>
            </Userbox>
            <Menu
        id="demo-positioned-menu"
        open={open}
        onClose={(e)=> SetOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </Styledtoolbar> 
    </AppBar>
  )
}
