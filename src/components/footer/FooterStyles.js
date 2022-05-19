import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  informationAboutAPex: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '2rem',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },

  footerWrapper: {
    padding: '0 5%',
    '& > span': {
      fontWeight: '500',
      fontSize: '12px',
      lineHeight: '16px',
      color: '#8F9BB3',
      textTransform: 'uppercase',
      [theme.breakpoints.down('xs')]: {
        display: 'block',
        margin: '1rem auto',
        textAlign: 'center',
      },
    },
  },

  footerLinkLabel: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    '& > h4': {
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: '24px',
      color: '#151A30',
      marginBottom: '0.4rem',
      textTransform: 'uppercase',
    },
    '& > span': {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '26px',
      color: '#2E3A59',
      textTransform: 'capitalize',
    },
  },
  footerBorder: {
    width: '100%',
    marginTop: '2rem',
    position: 'relative',
    border: '1px solid #E4E9F2',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },

  footerIcons: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '1rem',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },

  logoAndEstablishment: {
    marginTop: '1rem',
    marginBottom: '1rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1.5rem',
    },

    '& > span': {
      fontWeight: 400,
      fontSize: '15px',
      lineHeight: '24px',
      color: '#8F9BB3',
      flex: 1,
    },
  },
}));
