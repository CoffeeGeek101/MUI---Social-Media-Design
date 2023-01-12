import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import { MoreVert,Favorite, Share, BookmarkBorder, Bookmark, FavoriteBorder} from '@mui/icons-material';

export default function Post() {
  return (
    <Card  sx={{padding:"15px", 
                mb:"30px"}}>
      <CardHeader
        avatar={
          <Avatar
          src="https://pbs.twimg.com/media/FmN9h6GagAA2qCS?format=jpg&name=large"  
          sx={{objectPosition:"contain"}}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
        }
        title="shoumya_deep"
        subheader="January 12, 2023"
      />
      <CardMedia
        component="img"
        height="450"
        width="300"
        image="https://pbs.twimg.com/media/FmOSb55WYAAs6G-?format=jpg&name=large"
        alt="Paella dish"
        sx={{borderRadius:"20px"}}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Lionel Messi has now scored a league goal in every calendar year since 2005.
        </Typography>
      </CardContent>
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />}/>
        <Checkbox
        icon={<BookmarkBorder />}
        checkedIcon={<Bookmark />}
        />
        <IconButton>
          <Share/>
        </IconButton> 
    </Card>
  )
}
