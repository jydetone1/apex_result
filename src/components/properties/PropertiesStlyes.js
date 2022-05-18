import { makeStyles } from '@material-ui/styles';
import map from '../../assets/images/map.jpg';

export const useStyles = makeStyles((theme) => ({
  proptertiesText: {
    fontWeight: 500,
    fontSize: '36px',
    lineHeight: '48px',
    color: '#2E3A59',
    textTransform: 'capitalize',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.5rem',
    },
  },

  PropertiesDescription: {
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '26px',
    color: '#222B45',
    maxWidth: '45%',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
    },
  },

  propertiesContentWrapper: {
    padding: '80px 5% 25px 5%',
  },

  geoLocation: {
    backgroundImage: `url(${map})`,
    backgroundPosition: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '50vh',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      backgroundImage: 'none',
      height: '30vh',
    },
  },

  formControl: {
    minWidth: 230,
  },

  select: {
    maxHeight: 40,
  },

  selectPropertiesAndLocation: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    left: '4%',
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    padding: '2rem 2rem',
    [theme.breakpoints.down('xs')]: {
      left: '15%',
    },
  },
  btnGroup: {
    padding: '0 4.1%',
    marginBottom: '4rem',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  searchProperties: {
    backgroundColor: '#214AAD',
    color: '#ffffff',
    textTransform: 'capitalize',
    boxShadow: 'none',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    padding: '1rem 2.6rem',
    borderRadius: 'none',
    '&:hover': {
      backgroundColor: '#295CD6',
      opacity: '0.8',
      boxShadow: 'none',
    },
    '& img': {
      paddingLeft: '0.2rem',
    },
  },
  viewMoreProperties: {
    backgroundColor: '#295CD6',
    color: '#ffffff',
    textTransform: 'capitalize',
    boxShadow: 'none',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    padding: '1rem 2.6rem',
    '&:hover': {
      backgroundColor: '#295CD6',
      opacity: '0.8',
      boxShadow: 'none',
    },
  },
}));
