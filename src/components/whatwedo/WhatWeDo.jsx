import { Grid } from '@material-ui/core';

import { useStyles } from './WhatWeDoStyles';

const WhatWeDo = () => {
  const classes = useStyles();
  return (
    <>
      <section className={classes.whatWeOffer}>
        <div className={classes.whatWeDo}>
          <h4>This is what we do</h4>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <div className={classes.aboutActivities}>
                <div className={classes.activitiesBox}>
                  <h5>$331+</h5>
                  <p>Million in Transactional Volume Since our Inception</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.aboutActivities}>
                <div className={classes.activitiesBox}>
                  <h5>$60+</h5>
                  <p>Years of combined market experience</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.aboutActivities}>
                <div className={classes.activitiesBox}>
                  <h5>$275+</h5>
                  <p>Commercial Real Estate Transactions</p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>

      <section className={classes.topRank}>
        <div className={classes.topContent}>
          <h4> top25</h4>
          <p>
            APEX Capital RealtySouth Florida Commercial Real Estate
            BrokeragesRanked by Sum dollar volume sales/leases
          </p>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
