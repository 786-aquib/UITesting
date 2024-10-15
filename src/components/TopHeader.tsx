import React from 'react';
import { Typography, useMediaQuery } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NotificationAddSharpIcon from '@mui/icons-material/NotificationAddSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

const Header = () => {
    const isSmallScreen = useMediaQuery('(max-width:680px)');

    return (
        <div
            style={{
                width: '100%', // Use full width
                height: '68px',
                borderBottom: '1px solid #EAECF0',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: isSmallScreen ? 'flex-end' : 'space-between',
                alignItems: 'center',
                paddingLeft: isSmallScreen ? '50px' : '0', // Add left padding on small screens
                paddingRight: '20px', // Ensure there's space on the right
                boxSizing: 'border-box' // Include padding in width calculations
            }}
        >
            <div
                style={{ fontSize: '1.2rem', fontFamily: 'inherit', fontWeight: 400 }}
            >
                Green Building Monitoring
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '20px',
                }}
            >
                <Typography>
                    <AddIcon color='info' />
                </Typography>
                <Typography>
                    <NotificationAddSharpIcon color='info' />
                </Typography>
                <Typography>
                    <AccountCircleSharpIcon color='info' />
                </Typography>
            </div>
        </div>
    );
};

export default Header;
