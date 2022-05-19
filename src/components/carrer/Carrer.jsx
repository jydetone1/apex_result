import { Button, Grid } from '@material-ui/core';
import island from '../../assets/images/island.png';

import { useStyles } from './CarrerStyles';

const Carrer = () => {
  const classes = useStyles();

  return (
    <>
      <section className={classes.carrerWrapper}>
        <Grid container>
          <Grid item xs={12} md={7} className={classes.carrerContent}>
            <div className={classes.openToNewPeople}>
              <span>career opportunities</span>
              <h4>Open to new people</h4>
              <article>
                <p className={classes.carreerDesc}>
                  We’re always looking for hardworking, focused, determined
                  individuals who want to add value to our team. If you feel
                  you’re in a position to contribute meaningfully to our
                  company, the communities we work with and the clients we
                  serve, then we encourage you to reach out!
                </p>
              </article>
              <Button className={classes.btnContactUs} variant='contained'>
                contact us
              </Button>
            </div>
          </Grid>

          <Grid item xs={12} md={5}>
            <img src={island} alt={'island'} className={classes.IslandImg} />
          </Grid>
        </Grid>
      </section>

      <section className={classes.serviceWrapper}>
        <div className={classes.serviceInterest}>
          <h4>Interested in our service ?</h4>
          <span>
            Take the next step of your South Florida and Miami commercial real
            estate journey with us
          </span>
          <Button className={classes.btnLetsTalk} variant='contained'>
            Let’s talk
          </Button>
        </div>
      </section>
    </>
  );
};

export default Carrer;
