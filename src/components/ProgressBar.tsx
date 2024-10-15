import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ProgressProps {
  value: number;
}

const ProgressBar: React.FC<ProgressProps> = ({ value }) => {
  return (
    <div style={{ width: '70px', height: '70px', padding:'6px' }}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textColor: '#000',
          pathColor: '#17726D', 
          trailColor: '#d6d6d6',
        })}
      />
    </div>
  );
};

export default ProgressBar;
export{};