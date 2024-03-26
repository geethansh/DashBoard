import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const bull = (
  <Box
    component="span"
    sx={{ display: 'flex', mx: '2px', transform: 'scale(0.8)'}}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Revenue
      </Typography>
      <Typography variant="h5" component="div">
        <b>$56,945</b>
      </Typography>
    </CardContent>
    <CardActions>
      
        <Typography sx={{fontSize:14}} color="green" marginLeft={1} className=' box-content rounded-xl bg-green-300'>+45%</Typography>
        <Typography sx={{fontSize:14}}>From 4.6%</Typography>
      
    </CardActions>
  </React.Fragment>
);
const card2 = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Users
        </Typography>
        <Typography variant="h5" component="div">
          <b>76.8%</b>
        </Typography>
      </CardContent>
      <CardActions>
        
          <Typography sx={{fontSize:14}} color="red" marginLeft={1} className=' box-content rounded-xl bg-red-300'>-1.7%</Typography>
          <Typography sx={{fontSize:14}}>From 4.6%</Typography>
        
      </CardActions>
    </React.Fragment>
  );
  const card3 = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          New Signups
        </Typography>
        <Typography variant="h5" component="div">
          <b>116</b>
        </Typography>
      </CardContent>
      <CardActions>
        
          {/* <Typography sx={{fontSize:14}} color="green">+54</Typography> */}
          <Typography sx={{fontSize:14}} marginLeft={1}>0.00</Typography>
        
      </CardActions>
    </React.Fragment>
  );
  const card4 = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Retention
        </Typography>
        <Typography variant="h5" component="div">
          <b>12.67%</b>
        </Typography>
      </CardContent>
      <CardActions>
        
          <Typography sx={{fontSize:14}} color="green" marginLeft={1} className=' box-content rounded-xl bg-green-300'>+0.6%</Typography>
          <Typography sx={{fontSize:14}} >From 4.6%</Typography>
        
      </CardActions>
    </React.Fragment>
  );

export default function OutlinedCard() {
  return (
    <Box className="flex space-x-32 ml-14 mt-12 " >
      <Card variant="outlined" className=' w-80'>{card}</Card>
      <Card variant="outlined" className=' w-80'>{card2}</Card>
      <Card variant="outlined" className=' w-80'>{card3}</Card>
      <Card variant="outlined" className=' w-80'>{card4}</Card>
    </Box>
  );
}