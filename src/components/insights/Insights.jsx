import React, { useState } from 'react';

import habitant from '../../assets/images/habitant.png';
import art from '../../assets/images/art.png';
import create from '../../assets/images/create.png';
import building from '../../assets/images/building.png';
import earth from '../../assets/images/earth.png';

import { Button, TextField, Grid } from '@material-ui/core';

import { useStyles } from './InsightsStyles';

const clickOnActiveMenu = ['press', 'blog', 'video', 'news'];

const Insights = () => {
  const [addActiveInsights, setAddActiveInsights] = useState(null);
  const classes = useStyles();

  return (
    <>
      <section className={classes.insightWrapper}>
        <h4>insights</h4>
        <Grid container>
          <Grid item xs={12} md={6} className={classes.contentDesc}>
            <div className={classes.insightMenuItems}>
              {clickOnActiveMenu.map((item, index) => (
                <span
                  key={index}
                  onClick={() => setAddActiveInsights(item)}
                  className={` ${
                    addActiveInsights == item ? classes.addActive : ''
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>

            <img
              src={earth}
              alt={'earth'}
              className={classes.insightRandomImg}
            />
            <div>
              <div className={classes.PostDateDesc}>
                <small>
                  Sep 11, 2020 <span>BLOG</span>
                </small>
                <p>Lacinia laoreet metus sed magna sapien sodales consequat</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className={classes.borderInsights}></div>
            <div className={classes.blogPostDisplay}>
              <img src={habitant} alt={'habitant'} />
              <div>
                <p className={classes.contentAndDate}>
                  Interdum vel aliquet viverra habitant purus tempus, sagittis
                </p>
                <small className={classes.datePosted}>
                  17.02.2021 <span>Blog</span>
                </small>
              </div>
            </div>

            <div className={classes.blogPostDisplay}>
              <img src={building} alt={'building'} />
              <div>
                <p className={classes.contentAndDate}>
                  Interdum vel aliquet viverra habitant purus tempus, sagittis
                </p>
                <small className={classes.datePosted}>
                  17.02.2021 <span>Blog</span>
                </small>
              </div>
            </div>

            <div className={classes.blogPostDisplay}>
              <img src={art} alt={'art'} />
              <div>
                <p className={classes.contentAndDate}>
                  Interdum vel aliquet viverra habitant purus tempus, sagittis
                </p>
                <small className={classes.datePosted}>
                  17.02.2021 <span>Blog</span>
                </small>
              </div>
            </div>

            <div className={classes.blogPostDisplay}>
              <img src={create} alt={'habitant'} />
              <div>
                <p className={classes.contentAndDate}>
                  Interdum vel aliquet viverra habitant purus tempus, sagittis
                </p>
                <small className={classes.datePosted}>
                  17.02.2021 <span>Blog</span>
                </small>
              </div>
            </div>

            <Button className={classes.btnInsight} variant='contained'>
              view more
            </Button>
          </Grid>
        </Grid>
      </section>

      <section className={classes.subscribeWrapper}>
        <div className={classes.subscribeNewsLetter}>
          <h4>Subscribe to our newsletter</h4>
          <span>Keep up with our latest news</span>
          <div className={classes.textFieldBtn}>
            <TextField
              autoComplete={'off'}
              variant='outlined'
              id='standard-basic'
              size='small'
              name='name'
              placeholder='Email Address'
              type='text'
            />
            <Button className={classes.btnSubscribe} variant='contained'>
              subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
export default Insights;
