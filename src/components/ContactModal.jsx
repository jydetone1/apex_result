import close from '../assets/images/close.svg';
import arrowRight from '../assets/images/arrowRight.svg';

import {
  Button,
  MenuItem,
  FormControl,
  TextField,
  Grid,
  Modal,
  Card,
  CardContent,
  Select,
  Divider,
} from '@material-ui/core';
import { useStyles } from './ContactModalStyles';

const ContactModal = (props) => {
  const classes = useStyles();
  const { toggleContactModalClosed, isModalOpen, setIsModalOpen } = props;
  return (
    <div>
      <Modal
        open={isModalOpen}
        onClose={toggleContactModalClosed}
        aria-labelledby='logout-pop-title'
        aria-describedby='log out modal'
      >
        <Card className={classes.modalContent}>
          <CardContent className={classes.cardContentWrapper}>
            <Grid container>
              <Grid item xs={12} md={5}>
                <div className={classes.contactMessageInfo}>
                  <h4>We’re here for you</h4>
                  <span>
                    Send us a message through our form and someone from our team
                    will get in touch with you shortly.
                  </span>
                </div>
                <div className={classes.contactInformation}>
                  <h5>Our contacts</h5>
                  <p>
                    APEX Capital Realty 901 NE 79 ST Miami, FL 33138 (305)
                    570-2600
                  </p>
                  <span>info@apexcapitalrealty.com </span>
                  <span>Press inquiries contact:</span>
                  <span> info@apexcapitalrealty.com</span>
                </div>
              </Grid>
              <Grid item xs={12} md={7}>
                <div className={classes.contactFormField}>
                  <Button
                    className={classes.btnCloseModal}
                    onClick={() => setIsModalOpen(false)}
                  >
                    <img
                      src={close}
                      alt='close'
                      className={classes.closeIcon}
                    />
                  </Button>
                  <Grid container spacing={3} className={classes.ContactGrid}>
                    <Grid item xs={12} md={6}>
                      <div className={classes.contactTextField}>
                        <span>Full Name</span>
                        <TextField
                          autoComplete={'off'}
                          fullWidth
                          multiline={true}
                          rows={2}
                          variant='outlined'
                          id='standard-basic'
                          size='small'
                          name='name'
                          type='text'
                          className={classes.textField}
                        />
                      </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <div className={classes.contactTextField}>
                        <span>Company</span>
                        <TextField
                          multiline={true}
                          rows={2}
                          autoComplete={'off'}
                          fullWidth
                          variant='outlined'
                          id='standard-basic'
                          size='small'
                          name='name'
                          type='text'
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div className={classes.contactTextField}>
                        <span>Email</span>
                        <TextField
                          multiline={true}
                          rows={2}
                          autoComplete={'off'}
                          fullWidth
                          variant='outlined'
                          id='standard-basic'
                          size='small'
                          name='name'
                          type='text'
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div className={classes.contactTextField}>
                        <span>Phone</span>
                        <TextField
                          multiline={true}
                          rows={2}
                          autoComplete={'off'}
                          fullWidth
                          variant='outlined'
                          id='standard-basic'
                          size='small'
                          name='name'
                          placeholder='+4400000 000 00 00'
                          type='text'
                          InputProps={{
                            classes: { input: classes.input },
                          }}
                        />
                      </div>
                    </Grid>
                    <Divider style={{ marginBottom: '2rem' }} />
                    <Grid item xs={12} md={12}>
                      <div className={classes.contactTextField}>
                        <span>Full Name</span>

                        <FormControl className={classes.formControl} fullWidth>
                          <Select
                            className={classes.select}
                            variant='outlined'
                            labelId='demo-simple-select-label'
                          >
                            <MenuItem value={10}> Multifamily</MenuItem>
                            <MenuItem value={20}>Land Development</MenuItem>
                            <MenuItem value={30}>Office</MenuItem>
                            <MenuItem value={30}>Industrial</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                    </Grid>

                    <Grid item xs={12} md={12}>
                      <div className={classes.contactTextField}>
                        <span>Message</span>
                        <textarea
                          className={classes.textArea}
                          rows='6'
                          cols='61'
                        ></textarea>
                      </div>
                    </Grid>
                    <Button
                      className={classes.ContactSubmitBtn}
                      variant='contained'
                    >
                      Submit
                      <img src={arrowRight} alt='arrowRight' />
                    </Button>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
};

export default ContactModal;
