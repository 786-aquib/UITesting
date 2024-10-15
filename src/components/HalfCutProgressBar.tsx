import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Typography } from '@mui/material';

interface HalfCutProgressBarProps {
    value: number;
}

const HalfCutProgressBar: React.FC<HalfCutProgressBarProps> = ({ value }) => {
    const halfValue = value / 2 ;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '214px', height: '107px', overflow: 'hidden', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '0', left: '0' }}>
                    <CircularProgressbar
                        value={halfValue}
                        styles={buildStyles({
                            textColor: '#000',
                            pathColor: '#BD7D49',
                            trailColor: '#d6d6d6',
                            strokeLinecap: 'round',
                            rotation: 0.5, 
                            pathTransitionDuration: 1000, 
                        })}
                    />
                </div>
            </div>
            <Typography sx={{ marginTop: '-50px', fontSize: '2rem' }}>
                {value/2}%
            </Typography>
        </div>
    );
};

export default HalfCutProgressBar;
