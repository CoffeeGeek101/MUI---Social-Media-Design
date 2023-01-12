import {Box} from '@mui/material'
import React from 'react'
import Post from './Post';
export default function Feed() {
  return (
    <Box flex="4" p={3}>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
    </Box>
  )
}
