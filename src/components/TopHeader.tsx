

import { Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import NotificationAddSharpIcon from '@mui/icons-material/NotificationAddSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';



export default function TopHeader() {

    return(

        <div
           style={{width:'auto', height:'68px', left:'260px', borderBottom: '1px solid #EAECF0', display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center' }}
        >
            <div
                style={{ fontSize: '1.2rem', fontFamily:'inherit', fontWeight:400}}
            >
                    Green Building Monitoring
            </div>

            <div
               style={{ display: 'flex', flexDirection:'row', gap: '20px', marginRight: '100px'}}
            >
            <Typography>
                <AddIcon color='info'/>
            </Typography>
            <Typography>
                    <NotificationAddSharpIcon color='info'/>
            </Typography>
            <Typography>
                   <AccountCircleSharpIcon color='info'/>
            </Typography>
            </div>

        </div>

    );
}
export{};