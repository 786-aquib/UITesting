import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ProgressProps {
  value: number;
}

const ProgressBar2: React.FC<ProgressProps> = ({ value }) => {
  return (
    <div style={{ width: 180, height: 180, padding:'6px' }}>
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

export default ProgressBar2;
export{};