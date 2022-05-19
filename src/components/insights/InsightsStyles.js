import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  insightWrapper: {
    padding: '2rem 5%',
    '& > h4': {
      fontWeight: 500,
      fontSize: '48px',
      lineHeight: '48px',
      color: '#2E3A59',
      textTransform: 'capitalize',
      marginBottom: '2rem',
    },
  },

  insightMenuItems: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '1rem',
    fontWeight: 400,
    fontSize: '26px',
    lineHeight: '32px',
    color: '#8F9BB3',
    textTransform: 'capitalize',
    marginBottom: '2rem',
    cursor: 'pointer',
  },

  borderInsights: {
    borderBottom: '1px solid #E4E9F2',
    marginTop: '1rem',
    marginBottom: '3rem',
    [theme.breakpoints.down('xs')]: {
      borderBottom: 'none',
    },
  },
  blogPostDisplay: {
    display: 'flex',
    gap: '2rem',
    marginBottom: '2rem',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  contentDesc: {
    position: 'relative',
  },

  PostDateDesc: {
    background: '#ffffff',
    position: 'absolute',
    bottom: '15%',
    left: 0,
    width: '80%',
    paddingLeft: '2rem',
    paddingTop: '1rem',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      position: 'static',
    },

    '& > small': {
      fontWeight: 500,
      fontSize: '15px',
      lineHeight: '24px',
      color: '#8F9BB3',
    },
    '& span': {
      color: '#295CD6',
    },
    '& > p': {
      fontWeight: 500,
      fontSize: '26px',
      lineHeight: '32px',
      color: '#2E3A59',
    },
  },

  contentAndDate: {
    fontWeight: 500,
    fontSize: '22px',
    linHeight: '32px',
    color: '#2E3A59',
    marginBottom: '1.3rem',
    marginTop: '0',
  },

  datePosted: {
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '.3px',
    color: '#8F9BB3',
    '& span': {
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '16px',
      color: '#295CD6',
    },
  },
  btnInsight: {
    backgroundColor: '#ffffff',
    color: ' #295CD6',
    border: '1px solid #295CD6',
    textTransform: 'capitalize',
    boxShadow: 'none',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    padding: '0.7rem 3rem',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      margin: '0 auto',
    },
    '&:hover': {
      backgroundColor: '#ffffff',
      opacity: '0.8',
      boxShadow: 'none',
    },
  },

  subscribeWrapper: {
    background: '#ffffff',
  },

  subscribeNewsLetter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40vh',
    '& > h4': {
      fontWeight: 500,
      fontSize: '32px',
      lineHeight: '40px',
      color: '#2E3A59',
      marginBottom: '1.5rem',
      [theme.breakpoints.down('xs')]: {
        maxWidth: '60%',
        textAlign: 'center',
      },
    },
    '& > span': {
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '24px',
      color: '#8F9BB3',
      marginBottom: '1.5rem',
    },
  },

  btnSubscribe: {
    backgroundColor: '#295CD6;',
    color: ' #ffffff',
    textTransform: 'capitalize',
    boxShadow: 'none',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    padding: '0.7rem 3.5rem',
    '&:hover': {
      backgroundColor: '#ffffff',
      opacity: '0.8',
      boxShadow: 'none',
    },
  },

  textFieldBtn: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      padding: '0 1rem',
    },
  },
  insightRandomImg: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '204px',
    },
  },
  addActive: {
    color: '#295CD6',
    borderBottom: '2px solid #295CD6',
  },
}));
