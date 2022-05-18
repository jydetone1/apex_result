import { makeStyles } from '@material-ui/styles';
import Headerbg from '../../assets/images/headerBg.jpg';

export const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    position: 'sticky',
    display: 'grid',
    gridTemplateColumns: '1fr 100px',
    alignItems: 'center',
    height: '96px',
    backgroundColor: '#295CD6',
    zIndex: '2',
    top: '0',
    left: '0',
    right: '0',
    [theme.breakpoints.down('xs')]: {
      padding: '0 5% ',
    },
  },
  menuItemBg: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    height: '100%',
  },

  menuItem: {
    '& ul': {
      display: 'flex',
      listStyle: 'none',
      alignItems: 'center',
      gap: '3rem',
      textTransform: 'capitalize',
      '& li': {
        color: '#ffffff',
      },
    },
  },
  burgerToggle: {
    backgroundColor: '#ffffff',
  },

  contactMenu: {
    color: '#ffffff',
    textTransform: 'capitalize',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 5rem',
    background: '#214AAD',
    height: '100%',
    cursor: 'pointer',
    '& > Button': {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '20px',
      color: '#FFFFFF',
    },
  },

  exploreDescription: {
    backgroundImage: `url(${Headerbg})`,
    backgroundPosition: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '93%',
    height: '50vh',
    [theme.breakpoints.down('xs')]: {
      height: '100vh',
      backgroundPosition: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover ',
      backgroundPosition: 'cover',
    },
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '93%',
      height: '50vh',
      display: 'block',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
  },

  exploreRef: {
    position: 'absolute',
    bottom: '-6%',
    zIndex: 1,
    padding: '30px 5%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      bottom: '-3%',
      padding: 'unset',
    },
  },

  exploreContent: {
    color: '#ffffff',
    fontWeight: 500,
    fontSize: '32px',
    lineHeight: '140%',
    maxWidth: '45%',
    marginBottom: '2rem',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  explore: {
    backgroundColor: '#214AAD',
    color: '#ffffff',
    textTransform: 'capitalize',
    width: '20%',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    padding: '2rem 1.5rem',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      width: '100%',
    },
    ' & > span': {
      marginBottom: '0',
    },
    '& > img': {
      marginLeft: '1rem',
    },
  },
}));
