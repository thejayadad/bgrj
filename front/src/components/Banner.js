import React from 'react'
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';


const Banner = () => {
  return (
    <div>
 <Box
      sx={{
        width: "100%",
        height: 700,
        // backgroundImage: 'image="https://images.pexels.com/photos/1707819/pexels-photo-1707819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        // '&:hover': {
        //   backgroundColor: 'primary.main',
        //   opacity: [0.9, 0.8, 0.7],
        // },
      }}
    >
    <CardMedia
        sx={{ height: "100%", objectFit: "coover" }}
        image="https://images.pexels.com/photos/544115/pexels-photo-544115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="green iguana"
      />

    </Box>

    </div>
  )
}

export default Banner