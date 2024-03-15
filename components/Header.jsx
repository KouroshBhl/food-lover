import logoImg from '@/public/images/logo.png';
function Header() {
  return (
    <div>
      <img src={logoImg.src} alt='logo' />
      <p>Food Lover</p>
    </div>
  );
}

export default Header;
