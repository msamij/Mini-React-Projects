import './HeaderNavButton.css';

function HeaderNavButton(props: { btnType: 'bookings' | 'notifications' | 'profile'; btnText: string }) {
  return (
    <button className={`btn btn-primary btn__${props.btnType}`}>
      {props.btnText}
      <svg className="btn__icon">
        <use xlinkHref=""></use>
      </svg>
    </button>
  );
}

export default HeaderNavButton;
