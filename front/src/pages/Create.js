import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';


const Create = () => {
  return (
    <div>
      <Navbar />
      <Box
      sx={{
        maxWidth:"900px",
        margin: "auto",
        height: "100vh"
      }}>
<Typography mt="50px" mb="50px" variant="h2" align="center">
              New Post
            </Typography>
            <Box
            sx={{
              maxWidth: "700px",
              margin: "auto",
              padding: "20px"
            }}
            >
              <form>
              <TextField mb="20px" id="outlined-basic" label="Title" variant="outlined" fullWidth />
              <TextField
              fullWidth
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue="Default Value"
        />

              </form>

            </Box>

      </Box>
      <Footer />
      </div>
  )
}

export default Create