import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';
import linkedin from '../../assets/images/linkedin.svg';
import footerLogo from '../../assets/images/footer_logo.svg';

import { useStyles } from './FooterStyles';
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footerWrapper}>
      <div className={classes.informationAboutAPex}>
        <div className={classes.footerLinkLabel}>
          <h4>apex</h4>
          <span>legal</span>
          <span>privacy policy</span>
        </div>

        <div className={classes.footerLinkLabel}>
          <h4>company</h4>
          <span>about</span>
          <span>listing</span>
          <span>careers</span>
        </div>

        <div className={classes.footerLinkLabel}>
          <h4>support</h4>
          <span>contact us</span>
          <span>media</span>
        </div>

        <div className={classes.footerLinkLabel}>
          <h4>contact us</h4>
          <span>APEX Capital Realty</span>
          <span> 901 NE 79 ST Miami, FL 33138 </span>
          <span>(305) 570-2600 </span>
          <span>info@apexcapitalrealty.com</span>
        </div>
      </div>

      <span>follow us in social medias</span>

      <div className={classes.footerIcons}>
        <img src={linkedin} alt={'twitter'} />
        <img src={facebook} alt={'facebook'} />
        <img src={linkedin} alt={'twitter'} />
        <img src={instagram} alt={'instagram'} />
      </div>
      <div className={classes.footerBorder}></div>

      <div className={classes.logoAndEstablishment}>
        <img src={footerLogo} alt='footerLogo' />
        <span>© 2018 APEX Capital Realty</span>
      </div>
    </footer>
  );
};

export default Footer;
