import React from 'react'
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const Banner = () => {
  return (
    <div>
        <Paper
        sx={{
            component: "img",
            height: 400,
            backgroundImage: "https://images.pexels.com/photos/1707819/pexels-photo-1707819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }}
        >

    <CardMedia
        sx={{ height: "100%", objectFit: "coover" }}
        image="https://images.pexels.com/photos/544115/pexels-photo-544115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="green iguana"
      />

        </Paper>

    </div>
  )
}

export default Banner


{/* <Box
      sx={{
        width: "100%",
        height: 400,
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

      <Box
      sx={{
        width: "350px",
        background: "orange",
        position: "absolute",
        padding: 3,
        top: 280,
        left: 420
      }}

      >
        HERE IS IT


      </Box>

    </Box> */}