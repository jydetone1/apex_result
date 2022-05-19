import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  carrerWrapper: {
    paddingRight: '0.5rem',
    [theme.breakpoints.down('xs')]: {
      paddingRight: '0',
    },
  },
  carrerContent: {
    background: '#F7F9FC',
  },

  openToNewPeople: {
    padding: '4rem 5rem',
    [theme.breakpoints.down('xs')]: {
      padding: '2rem 1.5rem',
    },
    '& > span': {
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '16px',
      color: '#295CD6',
      textTransform: 'uppercase',
    },
    '& > h4': {
      fontWeight: 500,
      fontSize: '36px',
      lineHeight: '48px',
      color: '#2E3A59',
      marginTop: '1.9rem',
      marginBottom: '2rem',
      [theme.breakpoints.down('xs')]: {
        maxWidth: '60%  ',
        marginTop: '1rem',
        marginBottom: '1rem',
      },
    },
  },

  carreerDesc: {
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '26px',
    color: '#2E3A59',
    maxWidth: '65%',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%  ',
      marginBottom: '2rem',
    },
  },

  btnContactUs: {
    backgroundColor: 'transparent',
    color: '#295CD6;',
    border: '1px solid #295CD6',
    textTransform: 'capitalize',
    boxShadow: 'none',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    padding: '0.7rem 3.5rem',
    marginTop: '1.5rem',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      margin: '0 auto',
    },
    '&:hover': {
      backgroundColor: 'transparent',
      opacity: '0.8',
      boxShadow: 'none',
    },
  },

  serviceWrapper: {
    backgroundColor: '#295CD6',
  },

  serviceInterest: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#ffffff',
    height: '30vh',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      height: '40vh',
      alignItems: 'unset',
      padding: '0 1rem',
    },
    '& > h4': {
      fontWeight: 500,
      fontSize: '36px',
      lineHeight: '48px',
      marginTop: '0',
      marginBottom: '1rem',
      [theme.breakpoints.down('xs')]: {
        maxWidth: '100%',
        textAlign: 'center',
      },
    },
    '& > span': {
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '24px',
      maxWidth: '30%',
      [theme.breakpoints.down('xs')]: {
        maxWidth: '100%',
        textAlign: 'center',
        marginBottom: '1rem',
      },
    },
  },

  btnLetsTalk: {
    backgroundColor: '#ffffff',
    color: '#2E3A59',
    textTransform: 'capitalize',
    boxShadow: 'none',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    padding: '0.7rem 3.5rem',
    marginTop: '1.5rem',
    [theme.breakpoints.down('xs')]: {
      width: '50%',
      margin: '0 auto',
    },
    '&:hover': {
      backgroundColor: '#ffffff',
      opacity: '0.8',
      boxShadow: 'none',
    },
  },

  informationAboutAPex: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '2rem',
  },

  IslandImg: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: '242px',
    },
  },
}));
