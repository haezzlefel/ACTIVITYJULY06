import { Avatar, Grid, Paper, TextField, Button, Link, Typography } from '@mui/material';
import React from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';




const Signup=()=>{
    const paperStyle={padding :30, height :'70vh', width:500, margin:"20px auto"}
    const avatarStyle={backgroundColor:'blue'}
    const btnStyle={margin: '8px 0'}
    const typoStyle={margin:'8px 0'}
    return (
        <Grid>
            <Paper elevation={10}style={paperStyle}>
            <Grid align='center'>
            <Avatar style={avatarStyle}> <AccountBoxIcon/></Avatar>
            
            <h2>Create Account</h2>
            </Grid>
            <TextField style={typoStyle}label='Username' placeholder='Username' fullWidth required/>
            <TextField label='Password' placeholder='EnterPassword' type='password' fullWidth required/>
            <TextField style={typoStyle}label='First Name' placeholder='First Name' fullWidth required/>
            <TextField style={typoStyle}label='Last Name' placeholder='Last Name' fullWidth required/>
            <TextField style={typoStyle}label='Email' placeholder='Email' fullWidth required/>
            
            <Typography>Do You have an account?
                <Link to='./components/login'>Login</Link>
            </Typography>
            <Button type="submit" color="primary" variant="contained" style={btnStyle} fullWidth>Sign Up</Button>
            
            </Paper>
        </Grid>
    )
}

export default Signup;