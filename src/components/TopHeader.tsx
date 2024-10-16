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
                width: '100%', 
                height: '68px',
                borderBottom: '1px solid #EAECF0',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: isSmallScreen ? 'flex-end' : 'space-between',
                alignItems: 'center',
                paddingLeft: isSmallScreen ? '50px' : '0', 
                paddingRight: '20px', 
                boxSizing: 'border-box' 
            }}
        >
            <Typography
                sx={{ fontSize: { xs: '0.9rem', md: '1rem' }, fontFamily: 'inherit', fontWeight: 400 }}
            >
                Green Building Monitoring
            </Typography>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '20px',

                }}
            >
                <Typography sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                    <AddIcon  sx={{color:'#5C5F62'}}/>
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }} >
                    <NotificationAddSharpIcon sx={{color:'#5C5F62'}} />
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }} >
                    <AccountCircleSharpIcon sx={{color:'#5C5F62'}} />
                </Typography>
            </div>
        </div>
    );
};

export default Header;
