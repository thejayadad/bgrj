import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Post from './Post';
import Typography from '@mui/material/Typography';


const Category = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (e) => {
      setValue(value);
    };
  return (
  <Box>
<Stack

>
<Typography mt="50px" mb="50px" variant="h2" align="center">
              THANKS FOR STOPPING BY
            </Typography>
    <Tabs  value={value} onChange={handleChange} aria-label="icon label tabs example" centered>
    <Tab icon={<PhoneIcon />} label="RECENTS" />
    <Tab icon={<FavoriteIcon />} label="FAVORITES" />
    <Tab icon={<PersonPinIcon />} label="NEARBY" />
    <Tab icon={<PhoneIcon />} label="RECENTS" />
    <Tab icon={<FavoriteIcon />} label="FAVORITES" />
    <Tab icon={<PersonPinIcon />} label="NEARBY" />
    <Tab icon={<PhoneIcon />} label="RECENTS" />
    <Tab icon={<FavoriteIcon />} label="FAVORITES" />
    <Tab icon={<PersonPinIcon />} label="NEARBY" />
  </Tabs>
  <Stack
  sx={{
    maxWidth: "900px",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  }}
  >
    <Post />
    <Post />
    <Post />
    <Post />

  </Stack>
  </Stack>
  </Box>
  )
}

export default Category