import './HeaderProfileMenu.css';
import ButtonSecondary from '../../UI/Buttons/ButtonSecondary';

function HeaderProfileMenu() {
  return (
    <div className="header__profile-menu">
      <ButtonSecondary btnText="Login"></ButtonSecondary>
      <ButtonSecondary btnText="Signup"></ButtonSecondary>
    </div>
  );
}

export default HeaderProfileMenu;
