import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Detail = () => {
  return (
    <div>
      <Navbar />
      <Typography mt="50px" mb="50px" variant="h2" align="center">
              Post Detail
      </Typography>
      <Box
           sx={{
            maxWidth: "700px",
            margin: "auto",
            padding: "20px"
          }}
      >
        content
      </Box>

      <Footer />
      </div>
  )
}

export default Detail