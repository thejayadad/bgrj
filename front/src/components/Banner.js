import React from 'react'
import Box from '@mui/material/Box';


const Banner = () => {
  return (
    <div>
 <Box
      sx={{
        width: "100%",
        height: 500,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />

    </div>
  )
}

export default Banner