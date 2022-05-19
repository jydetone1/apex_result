import book from '../../assets/images/book.png';
import creative from '../../assets/images/creative.png';
import discussion from '../../assets/images/discussion.png';
import agile from '../../assets/images/agile.png';
import writter from '../../assets/images/writter.png';
import laptop from '../../assets/images/laptop.png';
import brief from '../../assets/images/brief.png';
import house from '../../assets/images/house.png';
import useResizeWidth from '../../constant/useResizeWidth';

import { Typography, Button, Grid, Divider } from '@material-ui/core';

import { useStyles } from './CapabilitiesStyles';

const Capabilities = () => {
  const { innerWidth } = useResizeWidth();

  const classes = useStyles();

  return (
    <>
      {innerWidth && innerWidth >= 540 ? (
        <section className={classes.capabilitiesSectionWrapper}>
          <Typography className={classes.capabilities} variant='h4'>
            capabilities
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <img className={classes.gridImg} src={agile} alt={'agile'} />
              <Button className={classes.btnAgile} variant='contained'>
                agile investment sales
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <div className={classes.groupImgCreative}>
                <img src={creative} alt={'creative'} />
                <div className={classes.creativeLeasing}>
                  <Typography className={classes.creative} variant='h4'>
                    Creative leasing & Consulting
                  </Typography>
                  <span>- Destination Retail / F&B Curation </span>
                  <span>- Regional Tenant Representation </span>
                  <span>- Landlord Representation</span>
                  <span> -Industrial/Last Mile Logistics </span>
                  <span>- Creative Office / Co-Working </span>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} md={6}>
              <img
                className={classes.gridImg}
                src={discussion}
                alt={'discussion'}
              />
              <Button className={classes.btnAgileGroup} variant='contained'>
                debt & advisory services
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <img className={classes.gridImg} src={book} alt={'debt'} />
              <Button
                className={classes.btnAgileDiscussion}
                variant='contained'
              >
                marketing & concept developement
              </Button>
            </Grid>
          </Grid>
        </section>
      ) : (
        <section className={classes.capabilitiesSectionWrapper}>
          <Typography className={classes.capabilities} variant='h4'>
            capabilities
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <img
                src={house}
                alt='house'
                className={classes.descriptionPropertiesImg}
              />
              <span className={classes.aboutInvestment}>
                Agile Investment Sales
              </span>
              <Divider className={classes.divider} />
            </Grid>

            <Grid item xs={12} md={6}>
              <img
                src={writter}
                alt='house'
                className={classes.descriptionPropertiesImg}
              />
              <span className={classes.aboutInvestment}>
                Debt & Advisory Services
              </span>
              <Divider className={classes.divider} />
            </Grid>

            <Grid item xs={12} md={6}>
              <img
                src={laptop}
                alt='laptop'
                className={classes.descriptionPropertiesImg}
              />
              <span className={classes.aboutInvestment}>
                Marketing & Concept Development
              </span>
              <Divider className={classes.divider} />
            </Grid>

            <Grid item xs={12} md={6}>
              <img
                src={brief}
                alt='laptop'
                className={classes.descriptionPropertiesImg}
              />
              <div className={classes.creativeLeasing}>
                <Typography className={classes.creative} variant='h4'>
                  Creative leasing & Consulting
                </Typography>
                <span>- Destination Retail / F&B Curation </span>
                <span>- Regional Tenant Representation </span>
                <span>- Landlord Representation</span>
                <span> -Industrial/Last Mile Logistics </span>
                <span>- Creative Office / Co-Working </span>
              </div>
              <Divider className={classes.divider} />
            </Grid>
          </Grid>
        </section>
      )}
    </>
  );
};

export default Capabilities;
