import React, { useState } from 'react';

import { Link } from 'react-scroll';
import ContactModal from '../../components/ContactModal';
import logo from '../../assets/images/logo.png';
import arrowRight from '../../assets/images/arrowRight.svg';
import logoMobile from '../../assets/images/logo-mobile.svg';
import './header.css';
import useResizeWidth from '../../constant/useResizeWidth';
import { Typography, Button } from '@material-ui/core';

import { useStyles } from './HeaderStyles';

const Header = () => {
  const classes = useStyles();
  const { innerWidth } = useResizeWidth();

  const [openMenuNav, setOpenMenuNav] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleBurgerMenu = () => setOpenMenuNav(!openMenuNav);
  const toggleContactModalOPen = () => setIsModalOpen(true);
  const toggleContactModalClosed = () => setIsModalOpen(false);

  return (
    <div>
      {innerWidth && innerWidth > 540 ? (
        <header className={classes.headerWrapper}>
          <div className={classes.menuItemBg}>
            <img src={logo} alt='logo' />
            <nav className={classes.menuItem}>
              <ul>
                <li>
                  <Link
                    to='home'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={50}
                  >
                    home
                  </Link>{' '}
                </li>
                <li>
                  <Link
                    to='properties'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={50}
                  >
                    properties
                  </Link>
                </li>
                <li>
                  <Link
                    to='company'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={50}
                  >
                    company
                  </Link>
                </li>
                <li>
                  <Link
                    to='latest'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={50}
                  >
                    latest
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={classes.contactMenu}>
              <Button onClick={toggleContactModalOPen}> contact us</Button>
            </div>
          </div>

          <div
            onClick={toggleBurgerMenu}
            className={`burger_toggle ${openMenuNav ? 'active' : ''}`}
          >
            <div />
            <div />
            <div />
          </div>

          <div className={`toggle_menu_nav ${openMenuNav ? 'active' : ''}`}>
            <div className={'burger_nav_menu'}>
              <span>
                Home{' '}
                <img
                  src={arrowRight}
                  alt={'arrowRIght'}
                  className={'right_arrow'}
                />
              </span>
              <span>
                Capabilities{' '}
                <img
                  src={arrowRight}
                  alt={'arrowRight'}
                  className={'right_arrow'}
                />
              </span>
              <span>
                Properties
                <img
                  src={arrowRight}
                  alt={'arrowRight'}
                  className={'right_arrow'}
                />
              </span>
              <span>
                Company
                <img
                  src={arrowRight}
                  alt={'arrowRight'}
                  className={'right_arrow'}
                />
              </span>
              <span>
                Latest
                <img
                  src={arrowRight}
                  alt={'arrowRight'}
                  className={'right_arrow'}
                />
              </span>
              <span>
                Let's talk
                <img
                  src={arrowRight}
                  alt={'arrowRight'}
                  className={'right_arrow'}
                />
              </span>
            </div>
            <div className={'burger_block_menu'} />
          </div>
        </header>
      ) : (
        <header className={classes.headerWrapper}>
          <img src={logoMobile} alt='logo' />

          <div
            onClick={toggleBurgerMenu}
            className={`burger_toggle ${openMenuNav ? 'active' : ''}`}
          >
            <div />
            <div />
            <div />
          </div>

          <div className={`toggle_menu_nav ${openMenuNav ? 'active' : ''}`}>
            <div className={'burger_nav_menu'}>
              <span>
                Home{' '}
                <img
                  src={arrowRight}
                  alt={'arrowRIght'}
                  className={'right_arrow'}
                />
              </span>
              <span>
                Capabilities{' '}
                <img
                  src={arrowRight}
                  alt={'arrowRight'}
                  className={'right_arrow'}
                />
              </span>
              <span>
                Properties
                <img
                  src={arrowRight}
                  alt={'arrowRight'}
                  className={'right_arrow'}
                />
              </span>
              <span>
                Company
                <img
                  src={arrowRight}
                  alt={'arrowRight'}
                  className={'right_arrow'}
                />
              </span>
              <span>
                Latest
                <img
                  src={arrowRight}
                  alt={'arrowRight'}
                  className={'right_arrow'}
                />
              </span>
              <span>
                Let's talk
                <img
                  src={arrowRight}
                  alt={'arrowRight'}
                  className={'right_arrow'}
                />
              </span>
            </div>
            <div className={'burger_block_menu'} />
          </div>
        </header>
      )}

      <div className={classes.exploreDescription}>
        <div className={classes.exploreRef}>
          <Typography className={classes.exploreContent}>
            Breaking away from traditional commercial brokerage and bringing an
            edge to today’s market
          </Typography>
          <div className={classes.explore}>
            <span>explore</span>
            <img src={arrowRight} alt='arrowRight' />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ContactModal
          toggleContactModalOPen={toggleContactModalOPen}
          toggleContactModalClosed={toggleContactModalClosed}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default Header;
