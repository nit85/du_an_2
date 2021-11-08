import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import image2 from '../images/slide2.jpg'


function Login()  {
  
    return (
      <div>
        <div>
        <img src={image2} class="img-flui" alt="..."/>
        
        </div>
        <section class="row">
            <div class="offset-3 col-6 mt-5">
      <form className="con">

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
         
          </Avatar> 
          <div >
                    <b> Đăng nhập</b>
                  </div>
          
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mật khẩu"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Nhớ tài khoản"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Đăng nhập
            </Button>
           
            <Grid container>
              <Grid item xs>
              <Link href="#" replace   variant="body2" >
                Quên mật khẩu?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Không có tài khoản? Đăng ký "}
                </Link>
              </Grid>
            </Grid>          
          </Box>
        </Box>
       
      </Container>
  </form> 
  </div>
  </section>
  </div>  

 
    );
}

export default Login ;