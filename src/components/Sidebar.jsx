import { Switch, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { AccountCircle, Home, Telegram, Group, Pages, ShoppingBag,Contacts, DarkMode } from '@mui/icons-material'

export default function Sidebar({mode, setMode}) {

  return (
    <Box flex="1" p={2}
        sx={{display:{xs: "none", sm: "block"}}}
    >
        <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Telegram/>
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Contacts/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Group/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Pages/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingBag/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircle/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
            <ListItemIcon>
            <DarkMode/>
              </ListItemIcon>
              <Switch 
              onChange={(e) =>(setMode(mode === "light" ? "dark" : "light"))}/>
              </ListItemButton>
          </ListItem>
        </List>
        </Box>
    </Box>
  )
}
