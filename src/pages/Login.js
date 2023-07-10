import { Avatar, Grid, Paper, TextField, Button, Typography, Link} from '@mui/material';
import React from 'react';
import AdbIcon from '@mui/icons-material/Adb';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Login=()=>{
  const paperStyle={padding :30, height :'70vh', width:500, margin:"20px auto"}
  const avatarStyle={backgroundColor:'blue'}
  const btnStyle={margin: '8px 0'}
  const typoStyle={margin:'8px 0'}
    return (
        <Grid>
            <Paper elevation={10}style={paperStyle}>
            <Grid align='center'>
            <Avatar style={avatarStyle}> <AdbIcon/></Avatar>
            <h2>Sign In</h2>
            </Grid>
            <TextField style={typoStyle}label='Username' placeholder='Entername' fullWidth required/>
            <TextField label='Password' placeholder='EnterPassword' type='password' fullWidth required/>
            <FormControlLabel control ={<Checkbox />} label="Remember me"/>

            <Button type="submit" color="primary" variant="contained" style={btnStyle} fullWidth>Sign In</Button>
            <Typography>
                <Link to="#">Forgot Password</Link>
            </Typography>
            <Typography>Do You have an account?
            <Link to="/">Signup!</Link>
            </Typography>
            </Paper>
        </Grid>
    )
}

export default Login;

