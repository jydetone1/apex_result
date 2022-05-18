import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  capabilities: {
    fontWeight: 500,
    fontSize: '36px',
    lineHeight: '48px',
    color: '#2E3A59',
    marginBottom: '2rem',
    textTransform: 'capitalize',
    marginTop: '5rem',
  },

  gridImg: {
    width: '606px',
    height: '250px',
    objectFit: 'cover',
  },

  cabilitiesSectionWrapper: {
    padding: '0 5%',
  },

  creativeLeasing: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: '1rem',
    gap: '0.5rem',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '28px',
  },

  groupImgCreative: {
    display: 'flex',
    gap: '3rem',
  },

  creative: {
    fontWeight: 500,
    fontsize: '26px',
    lineHeight: '32px',
    color: '#2E3A59',
  },

  btnAgile: {
    backgroundColor: '#ffffff',
    color: ' #295CD6;',
    textTransform: 'capitalize',
    boxShadow: 'none',
    fontWeight: 500,
    fontSize: ' 26px',
    lineHeight: '32px',
    position: 'relative',
    top: '-20%',
    left: 0,

    padding: '1rem 7rem',
    [theme.breakpoints.down('xs')]: {
      top: '0',
      padding: '1rem 2rem ',
    },
    '&:hover': {
      backgroundColor: '#ffffff',
      opacity: '0.8',
      boxShadow: 'none',
    },
  },

  btnAgileGroup: {
    backgroundColor: '#ffffff',
    color: ' #295CD6;',
    textTransform: 'capitalize',
    boxShadow: 'none',
    fontWeight: 500,
    fontSize: ' 26px',
    lineHeight: '32px',
    position: 'relative',
    top: '-20%',
    left: 0,
    padding: '1rem 6.3rem',
    '&:hover': {
      backgroundColor: '#ffffff',
      opacity: '0.8',
      boxShadow: 'none',
    },
  },
  btnAgileDiscussion: {
    backgroundColor: '#ffffff',
    color: ' #295CD6;',
    textTransform: 'capitalize',
    boxShadow: 'none',
    fontWeight: 500,
    fontSize: ' 26px',
    lineHeight: '32px',
    position: 'relative',
    top: '-20%',
    left: 0,
    padding: '1rem 3rem',
    '&:hover': {
      backgroundColor: '#ffffff',
      opacity: '0.8',
      boxShadow: 'none',
    },
  },

  aboutInvestment: {
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      fontWeight: 400,
      fontSize: '26px',
      lineHeight: '32px',
      color: '#295CD6',
      textAlign: 'center',
      margin: '1rem auto',
    },
  },

  divider: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '2rem',
      marginBottom: '2rem',
    },
  },
}));
