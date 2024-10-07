import React from 'react'
import heroSectionImg from "../../assets/hero-img.png"
import { Box, Button, Typography } from '@mui/material'

export const HeroSection = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mx: "70px", mt: "140px" }}>
            {/* left hero section */}
            <box>
                <Typography sx={{ fontWeight: 'bold', fontSize: '60px', lineHeight: '45px' , color:"#4d4d4d" }}>
                    Lessons and insights <br /> <Typography sx={{ color: "#4caf4f", fontWeight: 'bold', fontSize: '50px' }}>from 8 years</Typography>
                </Typography>
                <Typography sx={{ my: "10px" , color:"#757575"}}>
                    Where to grow your business as a photographer: site or social media?
                </Typography>
                <Button
                    color="inherit"
                    variant="h6"
                    sx={{color:"white" , backgroundColor: "#4caf4f", fontWeight: '600', mt: "25px", px:'27px' , py:'10px' , textTransform: "capitalize" , }}>Register
                </Button>
            </box>
            {/* right hero section */}
            <box>
                <img src={heroSectionImg} alt="heroSectionImg" />
            </box>
        </Box>
    )
}
