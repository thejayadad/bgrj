import { Box, Stack, Typography, styled } from "@mui/material";
import React from "react";
import { Facebook, Instagram, Twitter } from "@mui/icons-material/";
const SocialBox = styled(Box)({
  display: "flex",
  gap: 10,
  color: "black",
});


const Footer = () => {
  return (
    <footer>

<Box sx={{background: "#F2F3EC",  height: "300px", marginTop:"40px" }}>
      <Stack direction={{ xs: "row", md: "row" }} p={7}>
        <Box flex={1}>
          <Typography color={"black"} align={"center"}>
            Contact Us
          </Typography>

          <Typography color={"black"} align={"center"}>
            ranging across
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color={"black"} align={"center"}>
            Data policy
          </Typography>
          <Typography color={"black"} align={"center"}>
            cookies
          </Typography>
          <Typography color={"black"} align={"center"}>
            Data Safety
          </Typography>
        </Box>
        <Box flex={1}>
          <Typography color={"black"} align={"center"}>
            Categories
          </Typography>
          <Typography color={"black"} variant={"body2"} align={"center"}>
            Kids
          </Typography>
          <Typography color={"black"} variant={"body2"} align={"center"}>
            Women
          </Typography>
          <Typography color={"black"} variant={"body2"} align={"center"}>
            Men
          </Typography>
        </Box>
        <Box>
          <Typography color={"black"} align={"center"}>
            Follow Us
          </Typography>
          <SocialBox>
            <Facebook />
            <Instagram />
            <Twitter />
          </SocialBox>
        </Box>
      </Stack>
    </Box>
    </footer>
  )
}

export default Footer