import HeaderProfileMenu from '../HeaderProfileMenu/HeaderProfileMenu';
import './HeaderNav.css';
import HeaderNavButton from './HeaderNavButton/HeaderNavButton';

function HeaderNav() {
  return (
    <div className="header__nav">
      <HeaderNavButton btnType="bookings" btnText="My Bookings"></HeaderNavButton>
      <HeaderNavButton btnType="notifications" btnText="Notifications"></HeaderNavButton>
      <HeaderNavButton btnType="profile" btnText="Profile"></HeaderNavButton>
      <HeaderProfileMenu></HeaderProfileMenu>
    </div>
  );
}

export default HeaderNav;
