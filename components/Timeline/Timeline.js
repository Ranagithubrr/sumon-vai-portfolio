import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './timeline-style';
import brand from '~/public/text/brand';

function Timeline() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();

  const { t } = useTranslation('common');

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const [play, setPlay] = useState(false);

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };

  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12}>
            {!isTablet && (
              <Typography variant="h2" className={classes.nameDeco}>
                {brand.unisex.name}
              </Typography>
            )}
          </Grid>
          <Grid item container spacing={3} md={12} lg={10}>
            <Grid item md={5} sm={6} xs={12}>
              <div className={classes.history}>
                <Typography variant="h5" className={cx(classes.title, text.subtitle)}>
                  {t('unisex-landing.timeline_experience')}
                </Typography>
                <ul>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      delay={200}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Head of Digital Marketer</Typography>
                        <Typography gutterBottom>at Nifty IT Solution Ltd</Typography>
                        <Typography className={classes.time}>July 2023 - Present</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={100}
                      delay={300}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Digital Marketer</Typography>
                        <Typography gutterBottom>at Nifty Bookkeepers LLC</Typography>
                        <Typography className={classes.time}>June 2023 -  Present </Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={200}
                      delay={400}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Digital Marketing Consultant</Typography>
                        <Typography gutterBottom>at SEOClerks</Typography>
                        <Typography className={classes.time}>January 2018 - Present</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={300}
                      delay={500}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Digital Marketer</Typography>
                        <Typography gutterBottom>at Fiverr</Typography>
                        <Typography className={classes.time}>October 2020 - Present</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={300}
                      delay={500}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Digital Marketing Executive</Typography>
                        <Typography gutterBottom>at Picasa Limited</Typography>
                        <Typography className={classes.time}>November 2022 - August 2023</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={300}
                      delay={500}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Chief of Digital Marketer</Typography>
                        <Typography gutterBottom>at Solution Flows</Typography>
                        <Typography className={classes.time}>May 2020 - September 2022</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={300}
                      delay={500}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Digital Marketing Trainer</Typography>
                        <Typography gutterBottom>at Genius Computer & Technology</Typography>
                        <Typography className={classes.time}>March 2019 - January 2020</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={300}
                      delay={500}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Teacher Assistant</Typography>
                        <Typography gutterBottom>at FAME- Academy School & College</Typography>
                        <Typography className={classes.time}>January 2017 - December 2019</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.progress}>
                <Typography variant="h5" className={cx(classes.title, text.subtitle)}>
                  {t('unisex-landing.timeline_skill')}
                </Typography>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeIn"
                  delay={400}
                  duration={0.3}
                  afterAnimatedIn={handlePlay}
                >
                  <ul>
                    <li>
                      <div className={classes.textIcon}>
                        {/* <i className="ion-ios-color-wand" /> */}
                        <Typography variant="h6" className={text.subtitle2}>Social Media Marketer</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 85 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        {/* <i className="ion-logo-dribbble" /> */}
                        <Typography variant="h6" className={text.subtitle2}>Social Ads</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 87 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        {/* <i className="ion-ios-globe" /> */}
                        <Typography variant="h6" className={text.subtitle2}>Google Ads</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 75 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        {/* <i className="ion-ios-camera" /> */}
                        <Typography variant="h6" className={text.subtitle2}>Email Marketing</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 90 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        {/* <i className="ion-ios-snow" /> */}
                        <Typography variant="h6" className={text.subtitle2}>On-Page SEO (WordPress)</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 87 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        {/* <i className="ion-ios-snow" /> */}
                        <Typography variant="h6" className={text.subtitle2}>Local SEO</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 65 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        {/* <i className="ion-ios-snow" /> */}
                        <Typography variant="h6" className={text.subtitle2}>Youtube SEO</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 80 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        {/* <i className="ion-ios-snow" /> */}
                        <Typography variant="h6" className={text.subtitle2}>Keyword Research</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 92 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        {/* <i className="ion-ios-snow" /> */}
                        <Typography variant="h6" className={text.subtitle2}>Lead Generation</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 95 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                  </ul>
                </ScrollAnimation>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Timeline;
