import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { FaRegCircleQuestion } from 'react-icons/fa6';
import { FiLogIn } from 'react-icons/fi';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <Link to="#!">
            <img src="../assets/images/LogoPreply.svg" alt="Preply" />
          </Link>

          <div className="header__navigation--items">
            <Link to="#!" className="header__navigation--item">
              Find tutors
            </Link>
            <Link to="#!" className="header__navigation--item">
              Corporate training
            </Link>
            <Link to="#!" className="header__navigation--item">
              Become a tutor
            </Link>
          </div>
        </div>

        <div className="header__right">
          <div className="header__language">
            <span>English, USD</span>
            <IoIosArrowDown />
          </div>

          <Link to="#!" className="header__help">
            <FaRegCircleQuestion />
          </Link>

          <Link to="#!" className="header__bta">
            <FiLogIn />
            <span>Log In</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
