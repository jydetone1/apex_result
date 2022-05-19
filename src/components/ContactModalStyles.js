import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles((theme) => ({
  modalContent: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: '0.5s',
    borderRadius: '0.4rem',
    width: '428px',
    minWidth: 970,
    minHeight: 624,
  },
  contactMessageInfo: {
    backgroundColor: '#EDF1F7',
    padding: '2rem  2rem',
    '& > h4': {
      fontWeight: 400,
      fontSize: '36px',
      lineHeight: '48px',
      color: '#2E3A59',
      marginTop: 0,
      marginBottom: '1rem',
      fontFamily: 'FS Meridian',
    },
    '& > span': {
      fontWeight: 400,
      fontSize: '26px',
      lineHeight: '32px',
      color: '#2E3A59',
      fontFamily: 'FS Meridian',
    },
  },

  contactInformation: {
    backgroundColor: '#F7F9FC',
    padding: '2rem  2rem',
    height: '100%',
    '& > h5': {
      fontWeight: 700,
      fontSize: '16px',
      lineHeight: '22px',
      color: '#2E3A59',
      fontFamily: 'FS Meridian',
      margin: 0,
    },
    '& > p': {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '26px',
      color: '#2E3A59',
      maxWidth: '40%',
    },
    '& span:nth-child(3)': {
      color: '#295CD6',
      display: 'block',
      marginBottom: '1.5rem',
    },
    '& span:nth-child(4)': {
      color: '#2E3A59',
      display: 'block',
      fontSize: '16px',
      lineHeight: '22px',
      marginBottom: '1.5rem',
    },

    '& span:nth-child(5)': {
      color: '#295CD6',
      display: 'block',
      fontSize: '16px',
      lineHeight: '22px',
    },
  },

  cardContentWrapper: {
    padding: 0,
  },

  modalTitleMessage: {
    color: '#475569',
    fontSize: '1rem',
    fontWeight: '500',
    lineHeight: '2rem',
  },

  btnCloseModal: {
    display: 'block',
    marginLeft: ' auto',
  },

  contactFormField: {
    backgroundColor: '#FFFFFF',
  },

  ContactGrid: {
    padding: '2rem  2rem',
  },
  contactTextField: {
    '& span': {
      fontFamily: 'FS Meridian',
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '16px',
      color: '#2E3A59',
    },
  },

  textArea: {
    border: '1px solid #C5CEE0',
    marginBottom: '2rem',
  },

  ContactSubmitBtn: {
    display: 'block',
    marginLeft: ' auto',
    color: '#ffffff',
    background: '#295CD6;',
    padding: '0.8rem 2.5rem',
    boxShadow: 'none',
    textTransform: 'capitalize',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
    '&:hover': {
      boxShadow: 'none',
      opacity: '0.8',
      backgroundColor: '#295CD6',
    },
    '& img': {
      marginLeft: '1rem',
    },
  },

  input: {
    '&::placeholder': {
      padding: '0.5rem 0',
    },
  },

  contactMobileWrapper: {
    [theme.breakpoints.down('xs')]: {
      ' & > p': {
        fontWeight: 400,
        fontSize: '22px',
        lineHeight: '32px',
        color: '#2E3A59',
        fontFamily: 'FS Meridian',
        marginTop: 0,
        padding: '0 1rem',
      },
    },
  },

  hereForYou: {
    [theme.breakpoints.down('xs')]: {
      background: '#EDF1F7',
      margin: '0',
      '& > h4': {
        fontWeight: 400,
        fontSize: '36px',
        lineHeight: '48px',
        padding: '3rem 1rem',
        fontFamily: 'FS Meridian',
        marginTop: 0,
        marginBottom: '1rem',
      },
    },
  },

  ContactSubmitBtnMobile: {
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      width: '90%',
      margin: '0.5rem auto',
      color: '#ffffff',
      background: '#295CD6',
      boxShadow: 'none',
      textTransform: 'capitalize',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '20px',
      padding: '1rem 1rem',
      '&:hover': {
        boxShadow: 'none',
        opacity: '0.8',
        backgroundColor: '#295CD6',
      },
      '& img': {
        marginLeft: '1rem',
      },
    },
  },

  contactTextFieldMobile: {
    [theme.breakpoints.down('xs')]: {
      padding: '0.5rem 1rem',
      '& span': {
        fontFamily: 'FS Meridian',
        fontWeight: 400,
        fontSize: '12px',
        lineHeight: '16px',
      },
    },
  },

  contactInformationMobile: {
    [theme.breakpoints.down('xs')]: {
      backgroundColor: '#F7F9FC',
      padding: '2rem  2rem',
      height: '100%',
      '& > h5': {
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '22px',
        color: '#2E3A59',
        fontFamily: 'FS Meridian',
        margin: 0,
      },
      '& > p': {
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '26px',
        color: '#2E3A59',
        maxWidth: '40%',
      },
      '& span:nth-child(3)': {
        color: '#295CD6',
        display: 'block',
        marginBottom: '1.5rem',
      },
      '& span:nth-child(4)': {
        color: '#2E3A59',
        display: 'block',
        fontSize: '16px',
        lineHeight: '22px',
        marginBottom: '1.5rem',
      },

      '& span:nth-child(5)': {
        color: '#295CD6',
        display: 'block',
        fontSize: '16px',
        lineHeight: '22px',
      },
    },
  },
}));
