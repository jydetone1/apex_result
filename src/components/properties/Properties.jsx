import arrowRight from '../../assets/images/arrowRight.svg';

import {
  Typography,
  Button,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';

import { useStyles } from './PropertiesStlyes';

const Properties = () => {
  const classes = useStyles();
  return (
    <section id={'properties'}>
      <div className={classes.propertiesContentWrapper}>
        <Typography className={classes.propertiesText} variant='h4'>
          properties
        </Typography>
        <Typography className={classes.PropertiesDescription} variant='body1'>
          Check out our affordable deals. Whatever your needs, from home to
          office, we'll find the best and at the best prices
        </Typography>
      </div>

      <div className={classes.geoLocation}>
        <div className={classes.selectPropertiesAndLocation}>
          <FormControl className={classes.formControl}>
            <Select className={classes.select} variant='outlined' displayEmpty>
              <MenuItem value=''>Property</MenuItem>
              <MenuItem value={10}> Multifamily</MenuItem>
              <MenuItem value={20}>Land Development</MenuItem>
              <MenuItem value={30}>Office</MenuItem>
              <MenuItem value={30}>Industrial</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <Select className={classes.select} variant='outlined' displayEmpty>
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}> Multifamily</MenuItem>
              <MenuItem value={20}>Land Development</MenuItem>
              <MenuItem value={30}>Office</MenuItem>
              <MenuItem value={30}>Industrial</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <Select className={classes.select} variant='outlined' displayEmpty>
              <MenuItem value=''>Keyword</MenuItem>
              <MenuItem value={10}> Multifamily</MenuItem>
              <MenuItem value={20}>Land Development</MenuItem>
              <MenuItem value={30}>Office</MenuItem>
              <MenuItem value={30}>Industrial</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl} variant='standard'>
            <Select fullWidth className={classes.select} variant='outlined'>
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}> Multifamily</MenuItem>
              <MenuItem value={20}>Land Development</MenuItem>
              <MenuItem value={30}>Office</MenuItem>
              <MenuItem value={30}>Industrial</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className={classes.btnGroup}>
        <Button className={classes.searchProperties} variant='contained'>
          search
          <img src={arrowRight} alt='arrowRight' />
        </Button>
        <Button className={classes.viewMoreProperties} variant='contained'>
          view more
        </Button>
      </div>
    </section>
  );
};

export default Properties;
