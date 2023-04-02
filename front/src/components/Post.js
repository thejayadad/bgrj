import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LiveTvIcon from '@mui/icons-material/LiveTv';

import Button from '@mui/material/Button';




const Post = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  return (
    <div>
  <Card sx={{ maxWidth: 365, margin: 3, height: 705 }}>

      <CardMedia
        component="img"
        height="504"
        image="https://images.pexels.com/photos/1707819/pexels-photo-1707819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Paella dish"
      />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }

        title="Username"
        subheader="September 14, 2016"

      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Title of Post asrhadgn adfbn adb
        </Typography>

      </CardContent>

      <CardActions

      sx={{
        color: "#222"
      }}
      disableSpacing>
        <IconButton
             sx={{
                display: "flex",
                flexDirection: "column",
                fontSize: "10px"
            }}
        aria-label="add to favorites">
              <Typography variant="body8">
                0
            </Typography>
          <FavoriteIcon />
        </IconButton>
        <IconButton
         sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: "10px"
        }}
        aria-label="share">
            <Typography variant="body8">
                0
            </Typography>
          <LiveTvIcon label="view" />
        </IconButton>

      </CardActions>
    </Card>


    </div>
  )
}

export default Post