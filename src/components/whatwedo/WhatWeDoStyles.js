import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  whatWeDo: {
    padding: '2rem 2rem',
    [theme.breakpoints.down('xs')]: {
      padding: '1.5rem 0.5rem',
    },
    '& > h4': {
      fontWeight: 500,
      fontSize: '32px',
      lineHeight: '40px',
      color: '#2E3A59',
      marginTop: '0',
    },
  },
  whatWeOffer: {
    background: '#F7F9FC',
    padding: '0 5%',
    marginTop: '0',
  },

  aboutActivities: {
    border: '1px solid #E4E9F2',
    [theme.breakpoints.down('xs')]: {
      border: 'none',
    },
    minHeight: '100%',
    '& :nth-child(2)': {
      border: '1px solid ##295CD6',
    },
  },
  activitiesBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem 3rem',
    [theme.breakpoints.down('xs')]: {
      padding: '1rem 0.2rem',
    },
    '& > h5': {
      minWidth: '100%',
      marginBottom: '0.5rem',
      marginTop: '0.5rem',
      fontWeight: 400,
      fontSize: '64px',
      color: '#295CD6',
    },
    '& > p': {
      fontWeight: 500,
      fontSize: '15px',
      lineHeight: '24px',
      color: '#2E3A59',
      minWidth: '100%',
    },
  },
  topRank: {
    backgroundColor: '#214AAD',
  },

  topContent: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    color: '#ffffff',
    padding: '2rem 4rem',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      alignItems: 'unset',
      flexDirection: 'column',
      padding: '1rem 2rem',
      gap: 'unset',
    },
    '& > h4': {
      fontWeight: 500,
      fontSize: '72px',
      margin: '0 ',
      lineHeight: '88px',
      textTransform: 'uppercase',
    },
    '& > p': {
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '32px',
      maxWidth: '60%',
      [theme.breakpoints.down('xs')]: {
        maxWidth: '100%',
      },
    },
  },
}));
