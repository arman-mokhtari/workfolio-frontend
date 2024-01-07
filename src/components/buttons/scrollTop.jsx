"use client";
import { KeyboardArrowUp } from "@mui/icons-material";
import { Box, Fab, Fade, Tooltip, useScrollTrigger } from "@mui/material";
import Link from "next/link";

const ScrollTop=(props)=> {
  const { window } = props;
  
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

 

  return (
    <Fade in={trigger}>
      <Tooltip title="پیمایش به بالا" placement="top" arrow>
      <Box
      component={Link}
      href="#"
        role="presentation"
        sx={{ position: 'fixed', bottom: 70, left: 16 }}
      >
      <Fab
         
         size="small" aria-label="scroll back to top">
           <KeyboardArrowUp />
         </Fab>
      </Box>
      </Tooltip>
    </Fade>
  );
}
export default ScrollTop;
