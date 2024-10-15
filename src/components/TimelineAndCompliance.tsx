import { Grid2, Typography , Box, Button} from "@mui/material";

import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import HalfCutProgressBar from "./HalfCutProgressBar";
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';




export default function TimelineAndCompliance (){
       
    return(
         <Grid2 container spacing={2}>
              <Grid2
    size={{ xs: 12, md: 5, sm: 12 }}
    sx={{
        backgroundColor: 'white',
        height: 'auto', // Allow height to adjust automatically
        borderRadius: 6,
        border: '0.6px solid #BD7D4966',
        padding: '16px',
    }}
>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography
                sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, pt: 2, fontFamily: 'unset' }} // Responsive font size
            >
                Project Timeline
            </Typography>
            <Typography
                sx={{ fontSize: { xs: '0.8rem', md: '0.9em' } }} // Responsive font size
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
                                zIndex: 1, // Keep the icon on top
                            }}
                        />
                        {index < 3 && ( // Only add line if not the last icon
                            <div style={{
                                position: 'absolute',
                                left: '50%',
                                top: '100%', // Position below the icon
                                width: '2px',
                                height: '15px', // Adjust height as needed
                                backgroundColor: '#17726D',
                                transform: 'translateX(-50%)',
                            }} />
                        )}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '8px' }}>
                        <Typography sx={{ fontSize: '0.9rem' }}>
                            Milestone Name
                        </Typography>
                        <Typography sx={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center' }}>
                            <EventAvailableIcon sx={{ fontSize: '1rem', marginRight: '2px' }} />
                            25 Aug 2022 - 11:30 AM
                        </Typography>
                    </div>
                </Box>
            ))}
        </div>
        <Button
                sx={{
                    marginTop: '10px',
                    borderRadius: '10px',
                    border: '0.6px solid #0000002E',
                    fontSize: '14px',
                    lineHeight: '20px',
                    width: '20%', // Full width for the button
                    position: 'relative',
                    zIndex: 2, // Ensure the button is above the line
                    alignContent:'start',
                    marginLeft:'9px'
                }}
            >
                Click more
            </Button>
    </div>
</Grid2>
      <Grid2 size = {{xs:12, sm:12, md:7}} sx={{
        backgroundColor: 'white',
        height: 'auto', // Allow height to adjust automatically
        borderRadius: 6,
        border: '0.6px solid #BD7D4966',
        padding: '16px',
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sx={{ fontSize: '1.2rem', paddingTop: '18px', paddingLeft: '18px', fontFamily: 'unset' }}>
              Compliance Section
            </Typography>
            <Typography sx={{ fontSize: '0.9em', paddingLeft: '18px' }}>
              You can check an overview of the project here
            </Typography>
          </div>
          <span
            style={{
              backgroundColor: '#b3d3b3',
              borderRadius: '4px',
              marginTop: '14px',
              padding: '8px',
              marginRight: '12px',
              height:'fit-content'
            }}
          >
            Non-compliant
          </span>
        </div>

        <Grid2 container spacing={2}>
          {/* First Part: Compliance Overview */}
          <Grid2  size = {{xs:12, sm:6, md:6}}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '214px' }}>
              <HalfCutProgressBar value={25} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '-24px' }}>
              <Typography variant="h6">Water Efficiency is Low</Typography>
              <Typography sx={{ textAlign: 'center', color: 'gray' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
              </Typography>
            </div>
          </Grid2>

          {/* Second Part: AI-powered Assistant */}
          <Grid2  size = {{xs:12, sm:6, md:6}}>
            <Typography>
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
                <Typography sx={{ fontSize: '0.9rem' }}>
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
                <Typography sx={{ fontSize: '0.9rem' }}>
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

