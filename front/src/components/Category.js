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
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SportsFootballIcon from '@mui/icons-material/SportsFootball';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FeedIcon from '@mui/icons-material/Feed';
import PetsIcon from '@mui/icons-material/Pets';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

const Category = () => {
    const [value, setValue] = React.useState(0);

    const categories =  [
      {name: "All", icon: <FormatListBulletedIcon /> },
      {name: "Sports", icon: <SportsFootballIcon /> },
      {name: "Stocks", icon: <AttachMoneyIcon /> },
      {name: "News", icon: <FeedIcon /> },
      {name: "Pets", icon: <PetsIcon /> },
      {name: "Venting", icon: <RecordVoiceOverIcon /> },

]



  const handleChange = (e, newValue: number) => {
    setValue(newValue);
  };

  return (
  <Box

  >
<Stack

>
<Typography mt="50px" mb="50px" variant="h2" align="center">
              Check Out Our Categories
            </Typography>
            <Tabs  value={value} onChange={handleChange} aria-label="icon label tabs example" centered>

            {
              categories.map((category) => (
                <Tab
                key={crypto.randomUUID()}
                icon={category.icon} label={category.name} />

              ))
            }

  </Tabs>
  <Stack
  sx={{
    maxWidth: "900px",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    background: "#FDF1D3",
    borderRadius: "9px",
    marginTop: "30px"
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