import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Post from './Post';

const Category = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (e) => {
      setValue(value);
    };
  return (
  <Box>
<Stack

><Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" centered>
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