import React, { useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-slick';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import Title from '../Title';
import BlogPostCard from '../Cards/BlogPost';
import useStyle from './blog-style';

const blogData = [
  {
    img: 'https://neilpatel.com/wp-content/uploads/2015/06/how-to-reduce-bounce-rate-001-700x420.webp',
    title: 'How to Reduce Bounce Rate and Focus on Increasing Conversions',
    desc: 'Most people define bounce rate as the…',
    url: 'https://neilpatel.com/blog/13-ways-to-reduce-bounce-rate-and-increase-your-conversions/'
  },
  {
    img: 'https://neilpatel.com/wp-content/uploads/2022/08/SEO-vs-SEM-003-700x420.webp',
    title: 'SEO vs. SEM: What’s the Difference?',
    desc: 'Let’s talk SEO vs. SEM. These terms are key parts of the digital marketing world…',
    url: 'https://neilpatel.com/blog/seo-vs-sem/'
  },
  {
    img: 'https://neilpatel.com/wp-content/uploads/2017/05/SEO-Friendly-URLs-006-700x420.webp',
    title: 'How to Create SEO-Friendly URLs',
    desc: 'Did you know incorporating SEO in a URL is one of the most basic elements of online optimization…',
    url: 'https://neilpatel.com/blog/seo-urls/'
  },
  {
    img: 'https://neilpatel.com/wp-content/uploads/2022/04/link-bait-002-700x420.webp',
    title: 'Link Bait: Everything You Need to Know',
    desc: 'Are you looking to improve your search engine rankings? Getting backlinks…',
    url: 'https://neilpatel.com/blog/13-efficient-link-building-strategies-for-busy-marketers/'
  },
  {
    img: 'https://neilpatel.com/wp-content/uploads/2024/08/18-Mobile-SEO-700x420.jpg',
    title: 'A Complete Guide to Mobile SEO',
    desc: 'It could have something to do with whether you have gone all in on mobile SEO...',
    url: 'https://neilpatel.com/blog/mobile-seo/'
  },
  {
    img: 'https://neilpatel.com/wp-content/uploads/2016/05/Broken-Link-Building-001-700x420.webp',
    title: 'Broken Link Building Strategies',
    desc: 'Do you realize you might have potential traffic your site is missing out on? It’s all…',
    url: 'https://neilpatel.com/blog/dont-let-it-rot-5-strategies-to-leverage-broken-links/'
  },
];

function Blog() {
  const slider = useRef(null);
  const { t } = useTranslation('common');

  const lastSlide = Math.floor(blogData.length - 2);

  const theme = useTheme();
  const { classes: text } = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const { classes, cx } = useStyle();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    arrows: false,
    pauseOnHover: true,
    variableWidth: true,
    responsive: [{
      breakpoint: 1080,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };

  if (theme.direction === 'rtl') {
    slider.current.slickGoTo(lastSlide);
  }

  return (
    <div className={classes.root}>
      <div className={classes.floatingTitle}>
        <Title>
          {t('unisex-landing.blog_title')}
          &nbsp;
          <strong>
            {t('unisex-landing.blog_titlebold')}
          </strong>
        </Title>
        <Typography gutterBottom className={text.paragraph}>
          {/* {t('unisex-landing.blog_desc')} */}
        </Typography>
        {/* <Button className={classes.link} color="primary" href="#">luxi-theme.blog.com</Button> */}
      </div>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <IconButton
            className={cx(classes.nav, classes.prev)}
            onClick={() => slider.current.slickPrev()}
            size="large"
          >
            <i className="ion-ios-arrow-back" />
          </IconButton>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={cx(classes.item, classes.itemPropsFirst)}>
                <div />
              </div>
            )}
            {blogData.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <BlogPostCard
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  url={item.url}
                />
              </div>
            ))}
            {isDesktop && (
              <div className={cx(classes.item, classes.itemPropsLast)}>
                <div />
              </div>
            )}
          </Carousel>
          <IconButton
            className={cx(classes.nav, classes.next)}
            onClick={() => slider.current.slickNext()}
            size="large"
          >
            <i className="ion-ios-arrow-forward" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Blog;
