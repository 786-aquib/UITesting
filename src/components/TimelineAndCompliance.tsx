import { Grid2, Typography, Box, Button } from "@mui/material";
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HalfCutProgressBar from "./HalfCutProgressBar";
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';

export default function TimelineAndCompliance() {
    return (
        <Grid2 container spacing={2}>
            <Grid2
                size={{ xs: 12, md: 5, sm: 12 }}
                sx={{
                    backgroundColor: 'white',
                    height: 'auto',
                    borderRadius: 6,
                    border: '0.6px solid #BD7D4966',
                    padding: '16px',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography
                            sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, pt: 2, fontFamily: 'unset' }} 
                        >
                            Project Timeline
                        </Typography>
                        <Typography
                            sx={{ fontSize: { xs: '0.75rem', md: '0.9rem' } }} 
                        >
                            You can check the timeline of the project here
                        </Typography>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center' }}>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    width: '94%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    border: '2px solid #17726D26',
                                    marginTop: '15px',
                                    padding: '8px',
                                    position: 'relative',
                                }}
                            >
                                <div style={{ position: 'relative' }}>
                                    <FlagCircleIcon
                                        fontSize="large"
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            marginTop: '2px',
                                            fontSize: '3rem',
                                            color: '#17726D',
                                            position: 'relative',
                                            zIndex: 1,
                                        }}
                                    />
                                    {index < 3 && (
                                        <div style={{
                                            position: 'absolute',
                                            left: '50%',
                                            top: '117%',
                                            width: '2px',
                                            height: '15px',
                                            backgroundColor: '#17726D',
                                            transform: 'translateX(-50%)',
                                        }} />
                                    )}
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '8px' }}>
                                    <Typography sx={{ fontSize: '0.9rem' }}>
                                        Milestone Name
                                    </Typography>
                                    <Typography sx={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center' }}> 
                                        <EventAvailableIcon sx={{ fontSize: '1rem', marginRight: '2px' }} />
                                        25 Aug 2022 - 11:30 AM
                                    </Typography>
                                </div>
                            </Box>
                        ))}
                    </div>
                    <Button
                        sx={{
                            marginTop: '12px',
                            borderRadius: '10px',
                            border: '0.6px solid #0000002E',
                            fontSize: '14px',
                            lineHeight: '20px',
                            width: '20%',
                            position: 'relative',
                            zIndex: 2,
                            alignContent: 'start',
                            marginLeft: '9px'
                        }}
                    >
                        Click more
                    </Button>
                </div>
            </Grid2>
            
            <Grid2 size={{ xs: 12, sm: 12, md: 7 }} sx={{
                backgroundColor: 'white',
                height: 'auto',
                borderRadius: 6,
                border: '0.6px solid #BD7D4966',
                padding: '16px',
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' }, paddingTop: '18px', paddingLeft: '18px', fontFamily: 'unset' }}>
                            Compliance Section
                        </Typography>
                        <Typography sx={{ fontSize: { xs: '0.8rem', md: '1rem' }, paddingLeft: '18px' }}> 
                            You can check an overview of the project here
                        </Typography>
                    </div>
                    <span
                        style={{
                            backgroundColor: '#b3d3b3',
                            borderRadius: '16px',
                            marginTop: '14px',
                            padding: '8px',
                            marginRight: '12px',
                            height: 'fit-content',
                            fontSize:'0.9rem',
                        }}
                    >
                        Non-compliant
                    </span>
                </div>

                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, sm: 6, md: 6 }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '214px' }}>
                            <HalfCutProgressBar value={100} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-24px' }}>
                            <Typography variant="h6" sx={{fontSize: { xs: '0.9rem', md: '1rem' }}}>Water Efficiency is Low</Typography>
                            <Typography sx={{ textAlign: 'center', color: 'gray', fontSize: { xs: '0.8rem', md: '0.9rem' } }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </Typography>
                        </div>
                    </Grid2>

                    <Grid2 size={{ xs: 12, sm: 6, md: 6 }} sx={{ marginTop: '49px' }}>
                        <Typography  sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}>
                            AI-powered compliance check assistant to Improve Water Efficiency Level
                        </Typography>

                        <Box
                            sx={{
                                width: '93%',
                                borderRadius: '8px',
                                border: '2px solid #17726D26',
                                marginTop: '15px',
                                background: '#BD7D4929',
                                padding: '8px',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <OfflineBoltIcon fontSize="large" sx={{ marginRight: '8px', color: '#17726D' }} />
                                <Typography sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}>
                                    Follow these steps to fix water efficiency
                                </Typography>
                            </div>
                        </Box>

                        <Box
                            sx={{
                                width: '94%',
                                borderRadius: '8px',
                                border: '2px solid #17726D26',
                                marginTop: '15px',
                                background: '#BD7D4929',
                                padding: '8px',
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <OfflineBoltIcon fontSize="large" sx={{ marginRight: '8px', color: '#17726D' }} />
                                <Typography sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}>
                                    Prevent Water Efficiency in Future
                                </Typography>
                            </div>
                        </Box>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
    );
}
