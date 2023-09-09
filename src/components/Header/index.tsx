import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import mobileMenuOpenState from "../../store/atoms/mobileMenuOpenState";
import "./styles.scss";

export const Header = () => {
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] =
    useRecoilState(mobileMenuOpenState);
  const handleMenuButtonClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const Element = ({ href, title }: { href: string; title: string }) => (
    <li className={pathname === href ? "selected" : ""}>
      <a href={href}>{title}</a>
    </li>
  );

  return (
    <header>
      <div className="link-and-menu">
        <a href="/" className="logo-button">
          <img
            src="/../img/common/logo.png"
            className="logo-img"
            alt="로고"
            width={190}
            height={42}
          />
        </a>
        <button className="menu-button mobile" onClick={handleMenuButtonClick}>
          <img
            src={`/img/common/${mobileMenuOpen ? "close" : "menu"}.png`}
            alt="메뉴"
            width={24}
            height={24}
          />
        </button>
        <ul className="desktop">
          <Element href="/introduction" title="회사소개" />
          <Element href="/program" title="프로그램" />
          <Element href="/news" title="뉴스" />
          <Element href="/ask" title="문의하기" />
        </ul>
      </div>
    </header>
  );
};
