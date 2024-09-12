import React from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import { useTranslation } from 'next-i18next';
import logo from '~/public/images/unisex-logo.png';
import brand from '~/public/text/brand';
import { useText } from '~/theme/common';
import useStyles from './footer-style';
import ContactForm from '../Contact/Form';

function Footer() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className={classes.root}>
      <Container maxWidth="lg" component="footer">
        <Grid container spacing={6} direction={isMobile ? 'column-reverse' : 'row'}>
          <Grid item xs={12} md={5}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInLeftShort"
              offset={100}
              delay={200}
              duration={0.3}
            >
              <div>
                <div className={classes.logo}>
                  <img src={logo} alt="logo" />
                  <Typography variant="h3" className={text.title}>
                    {brand.unisex.name}
                  </Typography>
                  <Typography variant="h4" className={text.subtitle}>
                    {brand.unisex.title}
                  </Typography>
                </div>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.download}
                  component="a"
                  href="https://drive.usercontent.google.com/download?id=1r5dk2VMVlIWENQP2fyso4JKNe4GjwHQm&export=download&authuser=0&confirm=t&uuid=5fcac9f7-56f2-4c8b-bfce-957fbbd3c45d&at=AO7h07e5bu8wLGWEedAurYoJn1Bb:1726138408061"
                  download="Your_CV.pdf"
                >
                  Download CV
                </Button>
                <div className={classes.socmed}>
                  <IconButton href="https://www.facebook.com/MarketerSumon12" target="_blank" aria-label="Delete" className={classes.margin} size="small">
                    <i className="ion-logo-facebook" />
                  </IconButton>
                  <IconButton aria-label="Delete" className={classes.margin} size="small">
                    <i className="ion-logo-instagram" />
                  </IconButton>
                  <IconButton aria-label="Delete" className={classes.margin} size="small">
                    <i className="ion-logo-twitter" />
                  </IconButton>
                  <IconButton href="https://www.linkedin.com/in/marketersumon12/" target="_blank" aria-label="Delete" className={classes.margin} size="small">
                    <i className="ion-logo-linkedin" />
                  </IconButton>
                </div>
                <div className={classes.contact}>
                  <Divider className={classes.divider} />
                  <Typography className={text.paragraph}>
                    {t('unisex-landing.footer_hello')}
                    <br />
                    ssumoncd2017@gmail.com
                  </Typography>
                </div>
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid item xs={12} md={7}>
            <ScrollAnimation
              animateOnce
              animateIn="fadeInRightShort"
              offset={100}
              delay={200}
              duration={0.3}
            >
              <div>
                <ContactForm />
              </div>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
