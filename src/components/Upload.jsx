import { Add, Navigation, Photo, Tag, Telegram, VideoCall } from '@mui/icons-material'
import { Avatar, Fab, Modal, styled, TextField, Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'


const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
});

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    padding:"25px"
});

export default function Upload() {
    const [open, setOpen] = useState(false);
  return (
    <>
    <Tooltip onClick={(e) => setOpen(true)} 
    title="Post" sx={{position:"fixed", bottom:"20px", 
    left:{xs:"calc(50% - 25px)", md:"30px"}}}>
    <Fab color="primary">
        <Add />
    </Fab>
    </Tooltip>
    <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        >
        <Box width={500} height={300} 
        bgcolor={"background.default"} 
        color={"text.primary"} p={4}
        borderRadius="30px" 
        sx={{borderStyle:"none"}}
        > 
        <Typography variant='h5' color="grey" textAlign="center" fontWeight={600}>
            Create Post
        </Typography>
        <UserBox>
            <Avatar
            src="https://pbs.twimg.com/media/FmN9h6GagAA2qCS?format=jpg&name=large"  
            sx={{objectPosition:"contain"}}>
            </Avatar>
            <Typography fontWeight={600} variant='span'>Shoumya Deep</Typography>
        </UserBox>
        <TextField
          multiline
          rows={3}
          placeholder="What's popping?"
          variant="standard"
          sx={{ml:"30px", mt:"0", width:"80%"}}
        />
        <Box sx={{ '& > :not(style)': { m: 1 }, m:"25px" }}>
            <Fab color="primary" aria-label="add">
                <Photo />
            </Fab>
            <Fab color="primary" aria-label="add">
                <VideoCall />
            </Fab>
            <Fab color="primary" aria-label="add">
                <Tag />
            </Fab>
            <Fab color="success" variant="extended">
            <Telegram sx={{ mr: 3 }} />
            Share
            </Fab>
        </Box>
        </Box>
    </StyledModal>
    </>
  )
}
