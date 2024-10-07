import { AppBar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import webLogo from "../../assets/website-logo.png"

export const Header = () => {
    return (
        // header-section
        <Box>
            <AppBar sx={{ px: "60px", py: "20px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", background: "none" }}>
                <Box component="div">
                    <img src={webLogo} alt="" />
                </Box>
                <Box sx={{ display: "flex" }} component="div">
                    <Typography variant="h6" sx={{ color: "black", mx: "17px", fontSize :"15px"}}>
                        News
                    </Typography>
                    <Typography variant="h6" sx={{ color: "black", mx: "17px" , fontSize :"15px"}}>
                        Services
                    </Typography>
                    <Typography variant="h6" sx={{ color: "black", mx: "17px" , fontSize :"15px"}}>
                        Features
                    </Typography>
                    <Typography variant="h6" sx={{ color: "black", mx: "17px" , fontSize :"15px"}}>
                        Product
                    </Typography>
                    <Typography variant="h6" sx={{ color: "black", mx: "17px" , fontSize :"15px"}}>
                        Testimonial
                    </Typography>
                    <Typography variant="h6" sx={{ color: "black", mx: "17px" , fontSize :"15px"}}>
                        FAQ
                    </Typography>
                </Box>
                <Box component="div">
                    <Button color="inherit" sx={{ color: "#4caf4f" , fontWeight: '500' , textTransform: 'capitalize'}}>Login</Button>
                    <Button color="inherit" variant="h6" sx={{ backgroundColor:"#4caf4f" , textTransform: 'lowercase' , fontWeight: '500' , mx:'20px'}}>Sign Up</Button>
                </Box>
            </AppBar>
        </Box>

    )
}
