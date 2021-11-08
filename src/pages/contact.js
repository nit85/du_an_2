import React from 'react';

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
import '../page_css/home.css';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from "react-icons/fi";
const Contact = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <div>
        <img src={image2} class="img-flui" alt="..." />

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
                  <b> Liên hệ</b>
                </div>

                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="hoten"
                    label="Họ tên"
                    name="hoten"
                    autoComplete="hoten"

                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="mail"
                    label="Email"
                    type="mail"
                    id="mail"
                    autoComplete="mail"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="phone"
                    label="Số điện thoại"
                    type="phone"
                    id="phone"
                    autoComplete="phone"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="mess"
                    label="Lời nhắn"
                    type="mess"
                    id="mess"
                    autoComplete="mess"
                  />
                  <iframe title="reCAPTCHA" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcQLnYUAAAAAMhMj1PkbR2aSkQlG2CJzhdBVSlr&amp;co=aHR0cHM6Ly93d3cub3JnYW5pY3RhdHR2YS5jb206NDQz&amp;hl=vi&amp;v=qljbK_DTcvY1PzbR7IG69z1r&amp;size=normal&amp;cb=pbcqbdbtbxf6" width="304" height="78" role="presentation" name="a-lr6zcsw1rrhd" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
                  
                  <button type="submit" class="btn btn-dark">Gửi</button>    
                </Box>
              </Box>
            </Container>
          </form>
        </div>
      </section>
<div className="footcontact">

      <div class="p-3 mb-2 bg-dark text-white">
        <div class="col">
          <p>
            <b>Tất cả sản phẩm</b>
          </p>
          <p>
            <a href="#" > Organic Rice </a>
            |
            <a href="#" > Organic Cereals & Grains </a>
            |
            <a href="#" > Organic Flours </a>
            |
            <a href="#" > Organic Pulses </a>
            |
            <a href="#" > Organic Sugar & Jaggery </a>
            |
            <a href="#" > Organic Whole Spices </a>
            |
            <a href="#" > Organic Masala Blends </a>
            |
            <a href="#" > Organic Super Foods & Health Foods </a>
            |
            <a href="#" > Organic Tea & Coffee </a>
            |
            <a href="#" > Organic Oils, Honey & Pastes </a>
            |
            <a href="#" > Natural Salts </a>
            |
            <a href="#" > Organic Ground Spices </a>
            |
            <a href="#" > Organic Dry Fruits </a>
            |
          </p>
        </div>

      <div >
          <hr />
          <div class="footer-top1 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <aside id="custom_html-5" class="widget_text widget widget_custom_html"><h5 class="wg-title">About Us</h5><div class="textwidget custom-html-widget">Mehrotra Consumer Products Pvt. Ltd. is a young and dynamic company aspiring to be a leader in the Organic food industry.

              <h5 class="wg-title two">Like &amp; Share</h5>

              <a class="navbar-brand" href="https://www.facebook.com/">
                <FaFacebookF />
              </a>
              <a class="navbar-brand" href="https://www.instagram.com/" >
                <FiInstagram />
              </a>
              <a class="navbar-brand" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJyZWRpcmVjdF9hZnRlcl9sb2dpbiI6Imh0dHBzOi8vZGV2ZWxvcGVyLnR3aXR0ZXIuY29tL2VuL2FwcHMifQ%3D%3D%22%7D" >
                <FaTwitter />
              </a>

            </div>
            </aside>
          </div>
          <div class="footer-top2 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <aside id="custom_html-4" class="widget_text widget widget_custom_html"><h5 class="wg-title">Get in Touch</h5><div class="textwidget custom-html-widget"><p>Mehrotra Consumer Products Pvt. Ltd.
              26G, Sector 31, Ecotech 1, <br />
              Greater Noida-201308, India</p>
              <br />
              <p><a href="mailto:customercare@organictattva.com" class="link-ho">customercare@organictattva.com</a></p>
              <p><a href="tel:+91 120 4260545" class="link-ho">+91 120 4260545</a></p></div></aside>
          </div>

          <div class="footer-top3 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <aside id="custom_html-3" class="widget_text widget widget_custom_html"><h5 class="wg-title">Quick Links</h5><div class="textwidget custom-html-widget"><p><a href="https://www.organictattva.com/">Trang chủ</a></p>
             
              <p><a href="/product">Sản Phẩm</a></p>
              <p><a href="/contact">Liên Hệ</a></p>
              <p><a href="/new">Tin Tức</a></p>

            </div>
            </aside>
          </div>

          <div class="footer-top4 col-lg-3 col-md-3 col-sm-3 col-xs-12">
            <aside id="custom_html-2" class="widget_text widget widget_custom_html"><h5 class="wg-title">Useful Links</h5><div class="textwidget custom-html-widget"><p><a href="https://www.organictattva.com/terms-conditions/">Terms &amp; Conditions</a></p>
              <p><a href="https://www.organictattva.com/privacy-policy/">Privacy Policy</a></p>
              <p><a href="https://www.organictattva.com/sitemap">Sitemap</a></p>
              <p><a href="https://www.organictattva.com/faqs/">FAQ's</a></p>
              <p><a href="https://www.organictattva.com/buy-now/">Buy Now</a></p></div></aside>
          </div>
</div>
        </div>
</div>
    </div>
  );
};

export default Contact;
