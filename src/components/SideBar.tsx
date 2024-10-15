import { useState } from "react";
import { Button, Card, Typography } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import TocIcon from '@mui/icons-material/Toc';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import GroupIcon from '@mui/icons-material/Group';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import ProgressBar from "./ProgressBar";
import MenuIcon from '@mui/icons-material/Menu'; // Icon to open sidebar
import CloseIcon from '@mui/icons-material/Close'; // Icon to close sidebar
import { useMediaQuery } from '@mui/material';

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:680px)');

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div style={{ position: 'relative' }}>
            {isMobile && !isOpen && (
                <Button onClick={toggleSidebar} sx={{ position: 'absolute', marginTop:'12px', marginLeft:'-3px' }}>
                    <MenuIcon />
                </Button>
            )}

            {(isOpen || !isMobile) && (
                <div style={{
                    width:'fit-content',
                    maxWidth: '280px',
                    height: 'fit-content',
                    borderRight: '1px solid #EAECF0',
                    position: isMobile ? 'absolute' : 'static', // Use absolute positioning only on mobile
                    top: 0,
                    left: 0,
                    backgroundColor: '#FFFAF5',
                    boxShadow: isMobile ? '2px 0 5px rgba(0,0,0,0.2)' : 'none',
                    zIndex: 1000, // Ensure it stays on top
                    transition: 'transform 0.3s ease',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', marginTop:'20px' }}>
                        <Typography
                            sx={{ display: 'flex', justifyContent: 'start', flexDirection: 'row', height: '68px' }}
                        >
                            <OfflineBoltIcon fontSize="large" sx={{ marginRight: '7px', color:'#17726D', marginTop:'-4px' }} />
                            <span style={{ fontSize: '1.2rem', fontFamily: 'sans-serif', fontWeight: '600', lineHeight:'22.4px' }}>Sample Work</span>
                        </Typography>
                        {isMobile && (
                            <Button onClick={toggleSidebar}>
                                <CloseIcon />
                            </Button>
                        )}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: '10px', flexGrow: 1 }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                            gap: '16px',
                            padding: '16px'
                        }}>
                            {[
                                { icon: <HomeIcon sx={{color: '#667085'}}/>, label: "Home" },
                                { icon: <SignalCellularAltIcon sx={{color: '#667085'}} />, label: "Dashboard" },
                                { icon: <TocIcon sx={{color: '#667085'}} />, label: "Projects" },
                                { icon: <AssignmentTurnedInIcon sx={{color: '#667085'}} />, label: "Tasks" },
                                { icon: <PieChartOutlineIcon sx={{color: '#667085'}} />, label: "Reporting" },
                                { icon: <GroupIcon sx={{color: '#667085'}} />, label: "Users" }
                            ].map((item, index) => (
                                <Typography key={index} sx={{ display: 'flex', alignItems: 'center', fontWeight: '500' }}>
                                    {item.icon}
                                    <span style={{ marginLeft: '4px' }}>{item.label}</span>
                                </Typography>
                            ))}
                        </div>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            flexWrap: 'wrap',
                            gap: '16px',
                            padding: '16px',
                            paddingTop: '224px',
                        }}>
                            <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: '500' }}>
                                <HelpOutlineIcon fontSize='medium' sx={{ marginRight: '4px', paddingLeft: '2px', color: '#667085' }} />
                                Support
                            </Typography>

                            <Typography sx={{ display: 'flex', alignItems: 'center', fontWeight: '500' }}>
                                <SettingsIcon fontSize='medium' sx={{ marginRight: '4px', paddingLeft: '2px', color: '#667085' }} />
                                Setting
                            </Typography>

                            <Card sx={{ backgroundColor: '#aa9b9b17', height: 'max-content', flexWrap: 'wrap' }}>
                                <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'start' }}>
                                    <ProgressBar value={80} />
                                    <Typography sx={{ display: 'flex', justifyContent: 'start', paddingLeft: '7px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                        Used Space
                                    </Typography>
                                    <Typography sx={{ display: 'flex', justifyContent: 'start', paddingLeft: '7px', fontSize: '0.8rem' }}>
                                        Your Team has used 80% of your available space. Need more?
                                    </Typography>
                                </div>

                                <div>
                                    <Button sx={{ fontWeight: '0.9rem', color: 'grey' }}>Dismiss</Button>
                                    <Button sx={{ fontWeight: '0.9rem', color: 'purple' }}>Upgrade Plan</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}