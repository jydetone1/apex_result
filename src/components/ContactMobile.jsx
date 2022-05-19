import useResizeWidth from '../constant/useResizeWidth';
import { useStyles } from './ContactModalStyles';
import arrowRight from '../assets/images/arrowRight.svg';
import {
  Button,
  MenuItem,
  FormControl,
  TextField,
  Select,
} from '@material-ui/core';

const ContactMobile = () => {
  const { innerWidth } = useResizeWidth();
  const classes = useStyles();

  return (
    <>
      {innerWidth < 540 ? (
        <section className={classes.contactMobileWrapper}>
          <div className={classes.hereForYou}>
            <h4>We’re here for you</h4>
          </div>
          <p>
            Send us a message through our form and someone from our team will
            get in touch with you shortly.
          </p>

          <div className={classes.contactTextFieldMobile}>
            <span>Full Name</span>
            <TextField
              autoComplete={'off'}
              fullWidth
              variant='outlined'
              id='standard-basic'
              size='small'
              name='name'
              type='text'
            />
          </div>

          <div className={classes.contactTextFieldMobile}>
            <span>Company</span>
            <TextField
              autoComplete={'off'}
              fullWidth
              variant='outlined'
              id='standard-basic'
              size='small'
              name='name'
              type='text'
              InputProps={{
                classes: { input: classes.input },
              }}
            />
          </div>

          <div className={classes.contactTextFieldMobile}>
            <span>Email</span>
            <TextField
              autoComplete={'off'}
              fullWidth
              variant='outlined'
              id='standard-basic'
              size='small'
              name='name'
              type='text'
            />
          </div>

          <div className={classes.contactTextFieldMobile}>
            <span>Phone</span>
            <TextField
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

          <div className={classes.contactTextFieldMobile}>
            <span>Full Name</span>

            <FormControl fullWidth>
              <Select variant='outlined' labelId='demo-simple-select-label'>
                <MenuItem value={10}> Multifamily</MenuItem>
                <MenuItem value={20}>Land Development</MenuItem>
                <MenuItem value={30}>Office</MenuItem>
                <MenuItem value={30}>Industrial</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className={classes.contactTextFieldMobile}>
            <span>Message</span>
            <textarea
              className={classes.textArea}
              rows='8'
              cols='46'
            ></textarea>
          </div>
          <Button
            className={classes.ContactSubmitBtnMobile}
            variant='contained'
          >
            Submit
            <img src={arrowRight} alt='arrowRight' />
          </Button>

          <div className={classes.contactInformationMobile}>
            <h5>Our contacts</h5>
            <p>
              APEX Capital Realty 901 NE 79 ST Miami, FL 33138 (305) 570-2600
            </p>
            <span>info@apexcapitalrealty.com </span>
            <span>Press inquiries contact:</span>
            <span> info@apexcapitalrealty.com</span>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default ContactMobile;
