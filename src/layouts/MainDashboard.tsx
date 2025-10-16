import React, { useState } from "react";
import { AppBar, Box, Divider, Stack, Toolbar, Typography , Menu , MenuItem , ListItemIcon ,Button } from "@mui/material";
import { Link } from 'react-router-dom'

import ThemeToggleButton from "../components/ui/ThemeToggleButton";
import useGlobalStore from "../store/GlobalStore";
import profileImage from '../assets/images/profile.png';
import MainSideBar from "../components/ui/mainDashboard/MainSideBar";

// ICONS
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';

const MainDashboard = () => {
const { isDarkMode , toggleDarkMode } = useGlobalStore();
const [ anchorEl , setAnchorEl ] = useState<null | HTMLElement>(null);
const open = Boolean(anchorEl);

const handleMenuClick = (event : React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
}
const handleMenuClose = () => {
    setAnchorEl(null);
}

    return(
        <>
        <div className="grid grid-rows-2">
            <AppBar color="secondary" position="fixed" sx={{ zIndex : 3 }}>
                <Toolbar>
                    <Stack direction="row" sx={{ flexGrow : "1"}}>
                        <Button 
                            color="inherit" 
                            id="resources-button" 
                            onClick={handleMenuClick} 
                            aria-controls={ open ? 'resources-menu' : undefined} 
                            aria-haspopup = 'true'
                            aria-expanded = {open ? 'true' : undefined}>
                            <Box>
                            <img className="object-fill w-10 h-10 mr-2" src={profileImage} alt="Profile-Image" />
                            </Box>
                            <Typography variant="body1"> امیررضا جهانی </Typography>
                        </Button>
                    </Stack>
                    <Stack direction="row">
                        <ThemeToggleButton onToggle={() => toggleDarkMode()} isDark={isDarkMode} className="pr-5"></ThemeToggleButton>
                        <Divider orientation="vertical" flexItem sx={{borderColor : "#ffffff"}}></Divider>
                        <Typography variant="h6" className="pl-5"> Viraco </Typography>
                    </Stack>
                    <Menu id="resources-menu" dir="rtl" anchorEl={anchorEl} open={open} aria-labelledby="resources-button" onClose={handleMenuClose}>
                        <MenuItem onClick={handleMenuClose}>
                            <Link to='/selectCompany' className="flex">
                                <ListItemIcon>
                                    <ApartmentIcon fontSize="small" />
                                </ListItemIcon> 
                                <Typography>اطلاعات شرکت</Typography>
                            </Link>
                        </MenuItem> 
                        <MenuItem onClick={handleMenuClose}>
                            <Link to='/register' className="flex">
                                <ListItemIcon>
                                    <PersonIcon fontSize="small" />
                                </ListItemIcon> 
                                <Typography>بروفایل من</Typography>
                            </Link>
                        </MenuItem>                        
                        <Divider />
                        <MenuItem onClick={handleMenuClose}>
                            <Link to='/login' className="flex">
                                <ListItemIcon>
                                    <ExitToAppIcon fontSize="small" color="error"/>
                                </ListItemIcon> 
                                <Typography color="error">خروج</Typography>
                            </Link>
                        </MenuItem>                  
                    </Menu>
                </Toolbar>
            </AppBar>
            <MainSideBar />
        </div>
        </>
    )
}

export default MainDashboard;