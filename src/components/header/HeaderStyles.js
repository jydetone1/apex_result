import { makeStyles } from '@material-ui/styles';
import Headerbg from '../../assets/images/headerBg.jpg';

export const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    position: 'fixed',
    display: 'grid',
    gridTemplateColumns: '1fr 100px',
    alignItems: 'center',
    height: '96px',
    backgroundColor: '#295CD6',
    zIndex: '2',
    top: '0',
    left: '0',
    right: '0',
    padding: '0 0 0 5% ',
    [theme.breakpoints.down('xs')]: {},
  },
  menuItemBg: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
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
    backgroundImage: `url(${Headerbg})  `,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '93%',
    height: '50vh',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      height: '100vh',
      //   height: '100vh',
      backgroundPosition: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  },

  exploreRef: {
    position: 'absolute',
    height: '50vh',
    width: '93%',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    zIndex: 1,
    padding: '0 5%',
    backgroundColor: 'rgba(0,0,0,0.5)',

    [theme.breakpoints.down('xs')]: {
      bottom: '-3%',
      padding: 'unset',
      height: '100vh',
      width: '100%',
    },
  },

  exploreContent: {
    color: '#ffffff',
    fontWeight: 500,
    fontSize: '32px',
    lineHeight: '140%',
    maxWidth: '45%',
    marginBottom: '2.5rem',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  explore: {
    backgroundColor: '#214AAD',
    color: '#ffffff',
    textTransform: 'capitalize',
    width: '30%',
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
