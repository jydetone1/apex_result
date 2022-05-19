import React from 'react';

import debt from '../../assets/images/debt.png';
import { Grid } from '@material-ui/core';

import { useStyles } from './CompanyStyles';
const Company = () => {
  const classes = useStyles();

  return (
    <section id={'company'} className={classes.companyWrapper}>
      <h4 className={classes.companyRef}>company</h4>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className={classes.item1}>
          <article className={classes.aboutCompany}>
            <p>
              APEX Capital Realty is an independent commercial real estate
              brokerage firm like no other. We specialize in finding and
              creating South Florida’s most unique and lucrative opportunities
              in the market. APEX Capital Realty is composed of industry experts
              and disruptors which possess an unparalleled understanding of the
              unique dynamics and trends that drive our local real estate
              market.
            </p>
            <p>
              We believe in having a transformative impact in our industry
              through leadership and advocacy which helps push the creative
              boundary of what can be achieved. With collaboration engrained in
              our company culture, we seek to develop each of our advisors’
              specialty which in turn helps our clients reach optimal results.{' '}
            </p>
            <p>
              Our focused range of services speaks to our extensive breadth of
              industry knowledge. We provide services within the traditional
              asset classes but also seek to integrate the new generation of
              specialized concepts including co-working, co-living, short-term
              rentals, last-mile distribution, senior living, and student
              housing. By applying future trends into our process, we can
              uncover additional value for our clients that realize the full
              potential of their properties.
            </p>
          </article>
        </Grid>

        <Grid item xs={12} md={6} className={classes.item2}>
          <img src={debt} alt={'debt'} className={classes.companyImg} />
          <div className={classes.aboutCommercials}>
            <p>
              WE LOOK AT COMMERCIAL REAL ESTATE THROUGH A DIFFERENT LENS THAN
              THE REST
            </p>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default Company;
