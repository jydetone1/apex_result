import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  companyRef: {
    fontWeight: '500',
    fontSize: '48px',
    lineHeight: '48px',
    color: '#2E3A59',
    marginBottom: '12px',
    textTransform: 'capitalize',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.8rem',
    },
  },
  companyWrapper: {
    padding: '0 5%',
  },

  aboutCompany: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '26px',
    color: '#2E3A59',
    maxWidth: '95%',
    '& > p': {
      paddingBottom: '2rem',
    },
  },

  aboutCommercials: {
    backgroundColor: '#295CD6',
    position: 'relative',
    top: '-25%',
    left: '-5%',
    width: '85%',
    [theme.breakpoints.down('xs')]: {
      left: '0',
      width: '100%',
      right: ' 0',
      bottom: '0',
      top: '-6.9%',
    },
    '& > p': {
      color: '#ffffff',
      padding: '1rem 2.6rem',
      fontWeight: 500,
      fontSize: '32px',
      lineHeight: '40px',
    },
  },

  item1: {
    order: 1,
    [theme.breakpoints.down('xs')]: {
      order: 2,
    },
  },

  item2: {
    order: 2,
    [theme.breakpoints.down('xs')]: {
      order: 1,
    },
  },

  companyImg: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '193px',
      bjectFit: 'cover',
    },
  },
}));
