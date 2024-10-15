import { Button, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProgressBar2 from "./ProgressBar2";
import DownloadIcon from '@mui/icons-material/Download';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import LinearProgress from '@mui/material/LinearProgress';
import { useState, useEffect } from "react";

export default function OverviewAndRepo() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 7 }} sx={{
          minHeight: '380px',
          backgroundColor: 'white',
          height: 'fit-content',
          borderRadius: 6,
          border: '0.6px solid #BD7D4966',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '-30px' }}>
              <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, paddingTop: '18px', paddingLeft: '18px', fontFamily: 'unset' }}>
                Project Overview
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.8rem', md: '0.9em' }, paddingLeft: '18px' }}>
                You can check your Project Overview here
              </Typography>
            </div>
          </div>

          <Grid container spacing={2} sx={{
            marginTop: '49px',
            justifyContent: 'space-evenly',
          }}>
            <Grid size={{ xs: 12, sm: 6, md: 6 }}>
              <div style={{ display: 'flex', justifyContent: isSmallScreen ? 'center' : 'start', alignItems: 'center' }}>
                <ProgressBar2 value={80} />
              </div>
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginRight: '25px', flexWrap: 'wrap' }}>
                <Typography sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}>
                  <span style={{
                    display: 'inline-block',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#2E90FA',
                    marginRight: '5px',
                    verticalAlign: 'middle',
                  }}></span>
                  Ground Floor
                  <br />
                  <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' }, fontFamily: 'monospace', fontWeight: 700 }}>
                    26%
                  </Typography>
                </Typography>

                <Typography sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}>
                  <span style={{
                    display: 'inline-block',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#F79009',
                    marginRight: '5px',
                    verticalAlign: 'middle',
                  }}></span>
                  First Floor
                  <br />
                  <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' }, fontFamily: 'monospace', fontWeight: 700 }}>
                    26%
                  </Typography>
                </Typography>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginRight: '25px', flexWrap: 'wrap' }}>
                <Typography sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}>
                  <span style={{
                    display: 'inline-block',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#12B76A',
                    marginRight: '5px',
                    verticalAlign: 'middle',
                  }}></span>
                  Second Floor
                  <br />
                  <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' }, fontFamily: 'monospace', fontWeight: 700 }}>
                    5%
                  </Typography>
                </Typography>

                <Typography sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}>
                  <span style={{
                    display: 'inline-block',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#EE46BC',
                    marginRight: '5px',
                    verticalAlign: 'middle',
                  }}></span>
                  Third Floor
                  <br />
                  <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' }, fontFamily: 'monospace', fontWeight: 700 }}>
                    26%
                  </Typography>
                </Typography>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginRight: '25px', flexWrap: 'wrap' }}>
                <Typography sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}>
                  <span style={{
                    display: 'inline-block',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#6172F3',
                    marginRight: '5px',
                    verticalAlign: 'middle',
                  }}></span>
                  Kitchen
                  <br />
                  <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' }, fontFamily: 'monospace', fontWeight: 700 }}>
                    26%
                  </Typography>
                </Typography>

                <Typography sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}>
                  <span style={{
                    display: 'inline-block',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#4E5BA6',
                    marginRight: '5px',
                    verticalAlign: 'middle',
                  }}></span>
                  Other
                  <br />
                  <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' }, fontFamily: 'monospace', fontWeight: 700 }}>
                    5%
                  </Typography>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }} sx={{
          height: 'fit-content',
          backgroundColor: 'white',
          minHeight: '380px',
          border: '0.6px solid #BD7D4966',
          borderRadius: 6,
          overflowX: 'hidden'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', overflowX: 'hidden' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '6px' }}>
              <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, paddingTop: '18px', paddingLeft: '18px', fontFamily: 'unset' }}>
                Document Repository
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.8rem', md: '0.9em' }, paddingLeft: '18px' }}>
                You can check your Project Overview here
              </Typography>
            </div>

            <Button
              sx={{
                width: '91%',
                justifyContent: 'center',
                borderRadius: '8px',
                margin: '10px auto',
                border: '1px solid #D0D5DD',
                marginBottom: '25px',
                color: 'black',
                fontSize: { xs: '0.8rem', md: '1rem' }
              }}
            >
              <DownloadIcon sx={{ marginRight: '2px', color: 'black',  }} />
               Upload Document
            </Button>

            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '17px', gap: '32px', overflowX: 'hidden', overflowY: 'hidden', minHeight: '224px', marginBottom: '16px' }}>
              {[
                { name: "First Floor Plan.doc", status: "In Progress", color: 'brown', progress: 50 },
                { name: "Ground Floor Plan.doc", status: "Rejected", color: 'pink', progress: 100 },
                { name: "Building Overall Plan.doc", status: "Approved", color: 'green', progress: 100 }
              ].map((file, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                  <Avatar sx={{ bgcolor: file.color }}>
                    <FolderIcon />
                  </Avatar>

                  <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 0.9 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography sx={{ paddingTop: '5px', paddingBottom: '16px', paddingLeft: '10px', fontSize: { xs: '0.8rem', md: '1rem' } }}>
                            {file.name}
                          </Typography>
                          <Typography sx={{ marginTop: '5px', fontSize: '0.8rem', color: file.color }}>
                            {file.status}
                          </Typography>
                        </div>

                    <Box sx={{ width: '96%', marginLeft: '10px', marginTop: '-7px' }}>
                      <LinearProgress variant="determinate" value={file.progress} sx={{ backgroundColor: file.color }} />
                    </Box>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
