import React, { Fragment, useState, useEffect } from 'react';
import Lightbox from 'react-18-image-lightbox';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import ImageThumbCard from '../Cards/ImageThumb';
import Title from '../Title';
import useStyle from './gallery-style';

const portfolio = [
  {
    img: 'https://www.seoclerk.com/pics/000/894/128/3dd67f9bc22f13b4db45285910d10e62.gif',
    title: 'On Page SEO',
    link: 'https://www.seoclerk.com/SEO-Reports/732286/I-will-provide-wordpress-onpage-SEO-services-perfectly',
    size: 'short',
    category: 'cat1'
  },
  {
    img: 'https://www.seoclerk.com/pics/000/894/128/41a703a11874c7f1b10c8917feba09ac.gif',
    title: 'Local SEO',
    link: 'https://www.seoclerk.com/local-seo/733371/I-will-create-amp-manage-local-SEO-google-my-business',
    size: 'short',
    category: 'cat1'
  },
  {
    img: 'https://www.seoclerk.com/pics/000/894/128/10a02bdb257a8fa71343e68f4a9ff368.gif',
    title: 'Youtube Seo',
    link: 'https://www.seoclerk.com/youtube/737635/I-will-do-YouTube-SEO-optimization-and-will-be-manager',
    size: 'short',
    category: 'cat2'
  },
  {
    img: 'https://www.seoclerk.com/pics/000/894/128/6e88aeff82b89528142aaea62529acf4.gif',
    title: 'Create YouTube account',
    link: 'https://www.seoclerk.com/social-posts-management/791706/I-will-create-brand-YouTube-account-optimize-amp-full-setup',
    size: 'short',
    category: 'cat2'
  },
  {
    img: 'https://www.seoclerk.com/pics/000/894/128/64af3102310af4a2fe8c076c6e5b21aa.gif',
    title: 'Build Your Email',
    link: 'https://www.seoclerk.com/email-newsletters/825260/I-will-deliver-5k-USA-active-email-list-for-email-marketing',
    size: 'short',
    category: 'cat3'
  } 
];

function Gallery() {
  const { classes } = useStyle();
  const { t } = useTranslation('common');
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('all');

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));

  // Image Gallery
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setData(portfolio);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    arrows: false
  };

  const filterChildren = name => {
    setData([]);
    setTimeout(() => {
      if (name !== 'all') {
        const filteredData = portfolio.filter(item => item.category === name);
        setData(filteredData);
        setFilter(name);
      } else {
        setData(portfolio);
        setFilter('all');
      }
    }, 1);
  };

  function onMovePrevRequest() {
    setPhotoIndex((photoIndex + data.length - 1) % data.length);
  }

  function onMoveNextRequest() {
    setPhotoIndex((photoIndex + data.length + 1) % data.length);
  }

  function showPopup(index) {
    setOpen(true);
    setPhotoIndex(index);
  }

  return (
    <div className={classes.root}>
      {open && (
        <Lightbox
          mainSrc={data[photoIndex].img}
          nextSrc={data[(photoIndex + 1) % data.length].bg || data[(photoIndex + 1) % data.length].logo}
          prevSrc={data[(photoIndex + 1) % data.length].logo || null}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={onMovePrevRequest}
          onMoveNextRequest={onMoveNextRequest}
        />
      )}
      <Container>
        <Title>
          {t('unisex-landing.gallery_title')}
          <strong>
            {t('unisex-landing.gallery_titleBold')}
          </strong>
        </Title>
        <div className={classes.filter}>
          <Button
            onClick={() => filterChildren('all')}
            className={filter === 'all' ? classes.selected : ''}
          >
            All
          </Button>
          <Button
            onClick={() => filterChildren('cat1')}
            className={filter === 'cat1' ? classes.selected : ''}
          >
            SEO
          </Button>
          <Button
            onClick={() => filterChildren('cat2')}
            className={filter === 'cat2' ? classes.selected : ''}
          >
            Youtube
          </Button>
          <Button
            onClick={() => filterChildren('cat3')}
            className={filter === 'cat3' ? classes.selected : ''}
          >
            Marketing
          </Button>          
        </div>
        {!isMobile ? (
          <Fragment>
            <div className={classes.massonry}>
              {data.map((item, index) => (
                <div
                  className={classes.item}
                  key={index.toString()}
                  id={index.toString()}
                >
                  <ScrollAnimation
                    animateOnce
                    animateIn="fadeInUpShort"
                    offset={-50}
                    delay={200 + (100 * index)}
                    duration={0.3}
                  >
                    <ImageThumbCard
                      img={item.img}
                      title={item.title}
                      link={item.link}
                      size={item.size}
                      openPopup={() => showPopup(index)}
                    />
                  </ScrollAnimation>
                </div>
              ))}
            </div>
            {data.length < 1 && <Typography variant="button" component="p" align="center">{t('unisex-landing.gallery_nodata')}</Typography>}
          </Fragment>
        ) : (
          <Carousel {...settings}>
            {data.map((item, index) => (
              <div
                className={classes.itemCarousel}
                key={index.toString()}
              >
                <ImageThumbCard
                  img={item.img}
                  title={item.title}
                  link={item.link}
                  size={item.size}
                  openPopup={() => showPopup(index)}
                />
              </div>
            ))}
          </Carousel>
        )}
      </Container>
    </div>
  );
}

export default Gallery;
