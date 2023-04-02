import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const Create = () => {
  const [age, setAge] = React.useState('');


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
              <TextField
              sx={{
                margin: "20px 0"
              }}
              id="outlined-basic" label="Title" variant="outlined" fullWidth />
              <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              rows={6}
            />
             <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Category"
          fullWidth

        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>

              </form>

            </Box>

      </Box>
      <Footer />
      </div>
  )
}

export default Create