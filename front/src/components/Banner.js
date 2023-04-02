import React from 'react'
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import bg from "../images/bg.png"

const Banner = () => {
  return (
    <Box
    sx={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: 400,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        borderBottom: "1px solid #ddd"
    }}
    >
 <Box sx={{  opacity: "1" }}>
            <Typography variant={"h6"} color="white" align="center" pt={14}>
              THE BLOG SPOT
            </Typography>
            <Typography color="white" variant="h4" align="center">
              THANKS FOR STOPPING BY
            </Typography>
            <Typography color="white" variant="body1" align="center">
              we love to change your style lorme ipsum
            </Typography>
          </Box>

    </Box>
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