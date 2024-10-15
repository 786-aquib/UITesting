import { Button, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProgressBar2 from "./ProgressBar2";
import DownloadIcon from '@mui/icons-material/Download';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import LinearProgress from '@mui/material/LinearProgress';
import { useState, useEffect } from "react";

export default function OverviewAndRepo() {
  const [flexDirection, setFlexDirection] = useState<'row' | 'column'>('row');

  const updateLayout = () => {
    if (window.innerWidth < 600) {
      setFlexDirection('column');
    } else {
      setFlexDirection('row');
    }
  };

  useEffect(() => {
    updateLayout(); // Set initial layout
    window.addEventListener('resize', updateLayout); // Update on resize

    return () => {
      window.removeEventListener('resize', updateLayout); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid size =  {{xs:12, md:7}} sx={{ minHeight: '380px', backgroundColor: 'white', height: 'fit-content', borderRadius: 6, border: '0.6px solid #BD7D4966' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontSize: '1.2rem', paddingTop: '18px', paddingLeft: '18px', fontFamily: 'unset' }}>
                Project Overview
              </Typography>
              <Typography sx={{ fontSize: '0.9em', paddingLeft: '18px' }}>
                You can Check your Project Overview here
              </Typography>
            </div>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: flexDirection,
            paddingLeft: '18px',
            marginTop: '49px',
            justifyContent: 'space-evenly',
          }}>
            <div style={{ display: 'flex', }}>
              <ProgressBar2 value={80} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginRight: '25px', flexWrap: 'wrap' }}>
                <Typography>
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
                  <span style={{ fontSize: '1.3rem', fontFamily: 'monospace', fontWeight: 700 }}> 26% </span>
                </Typography>

                <Typography>
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
                  <span style={{ fontSize: '1.3rem', fontFamily: 'monospace', fontWeight: 700 }}> 26% </span>
                </Typography>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginRight: '25px', flexWrap: 'wrap' }}>
     
                <Typography>
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
                  <span style={{ fontSize: '1.3rem', fontFamily: 'monospace', fontWeight: 700 }}> 5% </span>
                </Typography>
              
                <Typography>
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
                  <span style={{ fontSize: '1.3rem', fontFamily: 'monospace', fontWeight: 700 }}> 26% </span>
                </Typography>
             </div>

             <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', marginRight: '25px', flexWrap: 'wrap' }}>

                <Typography>
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
                  <span style={{ fontSize: '1.3rem', fontFamily: 'monospace', fontWeight: 700 }}> 26% </span>
                </Typography>

                <Typography>
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
                  <span style={{ fontSize: '1.3rem', fontFamily: 'monospace', fontWeight: 700 }}> 5% </span>
                </Typography>
              </div>
            </div>
          </div>
        </Grid>
        
        <Grid size =  {{xs:12, md:5}} sx={{ height:'fit-content', backgroundColor: 'white', minHeight: '380px', border: '0.6px solid #BD7D4966', borderRadius: 6 }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography sx={{ fontSize: '1.2rem', paddingTop: '18px', paddingLeft: '18px', fontFamily: 'unset' }}>
                Document Repository
              </Typography>
              <Typography sx={{ fontSize: '0.9em', paddingLeft: '18px' }}>
                You can check your Project Overview here
              </Typography>
            </div>

            <Button
              sx={{
                width: '90%',
                justifyContent: 'center',
                borderRadius: '8px',
                margin: '10px auto',
                border: '1px solid #D0D5DD',
                marginBottom: '25px',
                color:'black',
              }}
            >
              <DownloadIcon sx={{ marginRight: '2px', color:'black'}} />
              Upload Document
            </Button>

            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '17px', gap: '35px', overflowY: 'hidden', maxHeight: '200px', marginBottom: '16px' }}>
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
                      <div style={{ paddingTop: '5px', paddingBottom: '16px', paddingLeft: '10px' }}>
                        {file.name}
                      </div>
                      <p style={{ marginTop: '5px', fontSize: '0.8rem', color: file.color }}>{file.status}</p>
                    </div>

                    <Box sx={{ width: '96%', marginLeft: '10px', marginTop: '-7px' }}>
                      <LinearProgress variant="determinate" value={file.progress} sx={{ bgcolor: file.color }} />
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
