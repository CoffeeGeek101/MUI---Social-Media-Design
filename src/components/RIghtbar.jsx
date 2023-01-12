import { SignLanguageRounded } from '@mui/icons-material'
import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
// import { display } from '@mui/system';
import React from 'react'


function srcset(image, size, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }
  

export default function Rightbar() {

    const itemData = [
        {
          img: 'https://i.pinimg.com/564x/b0/63/c5/b063c5345fbc368c68d0ee73ff2e6bf6.jpg',
          title: 'Breakfast',
          rows: 2,
          cols: 2,
        },
        {
          img: 'https://i.pinimg.com/564x/67/3e/83/673e837eef3ac93eb546cdac0c6d061d.jpg',
          title: 'Burger',
        },
        {
          img: 'https://i.pinimg.com/564x/7e/ad/80/7ead80e6d86a6ec213a99339d7193400.jpg',
          title: 'Camera',
        },
        {
          img: 'https://i.pinimg.com/564x/2c/0b/39/2c0b39faad0948cd2072ca100b4a97a6.jpg',
          title: 'Coffee',
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
          author: '@arwinneil',
          rows: 2,
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
        },
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
        },
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Mushrooms',
          rows: 2,
          cols: 2,
        },
        {
          img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
          title: 'Tomato basil',
        },
        {
          img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
          title: 'Sea star',
        },
        {
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
          cols: 2,
        },
      ];

  return (
    <Box flex="2" p={2}
    sx={{display:{xs: "none", sm: "block"}}}
    >
        <Box position="fixed" sx={{padding:"10px"}} width="350px">
            <Typography variant='h6' fontWeight={600}>
                Drop a Hi <SignLanguageRounded/>
            </Typography>
            <AvatarGroup max={9} sx={{marginTop:"10px"}}>
                <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/2d/a9/1f/2da91f1bd3f14c51ea25a7cd63ff410f.jpg" />
                <Avatar alt="Travis Howard" src="https://i.pinimg.com/564x/cc/57/5d/cc575dd645a465ff6c53b6617874890f.jpg" />
                <Avatar alt="Cindy Baker" src="https://i.pinimg.com/564x/5e/20/86/5e2086e5dee8c302858674b8cf8d0ae4.jpg" />
                <Avatar alt="Agnes Walker" src="https://i.pinimg.com/564x/12/78/02/1278028532e996c082880a66013f1146.jpg" />
                <Avatar alt="Trevor Henderson" src="https://i.pinimg.com/564x/b5/35/54/b535541b249ddabf04b2f0b97c30064a.jpg" />
                <Avatar alt="Trevor Henderson" src="https://i.pinimg.com/564x/1f/ad/0a/1fad0acc202a00f57d046bd0dbd5bfa8.jpg" />
                <Avatar alt="Trevor Henderson" src="https://i.pinimg.com/564x/7b/5a/33/7b5a33e314cc8f4bafca7d038ae0ebde.jpg" />
                <Avatar alt="Trevor Henderson" src="https://i.pinimg.com/564x/0a/91/2c/0a912cdcceb72cba05a77613b84f0137.jpg" />
                <Avatar alt="Trevor Henderson" src="https://i.pinimg.com/564x/02/82/16/0282169c381b431b955a160862fb06cf.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
            </AvatarGroup>

            <Typography variant='h6' fontWeight={600} sx={{mt:"15px"}}>
                Trending Now
            </Typography>

            <ImageList
                sx={{ width:320, height: 230, mt:"10px",
                 borderRadius:"20px"}}
                variant="quilted"
                cols={4}
                rowHeight={121}
                >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
            </ImageList>

            <Typography variant='h6' fontWeight={600} sx={{mt:"20px"}}>
                Hot Opinions!
            </Typography>

                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://i.pinimg.com/564x/02/82/16/0282169c381b431b955a160862fb06cf.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Brunch this weekend?"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Travis Howard" src="https://i.pinimg.com/564x/12/78/02/1278028532e996c082880a66013f1146.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Summer BBQ"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="https://i.pinimg.com/564x/2d/a9/1f/2da91f1bd3f14c51ea25a7cd63ff410f.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Oui Oui"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                    </React.Fragment>
                }
                />
            </ListItem>
            </List>
        </Box>
    </Box>
  )
}
