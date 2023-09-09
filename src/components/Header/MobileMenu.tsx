import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./mobile-menu.scss";

const MobileMenu = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const Element = ({ href, title }: { href: string; title: string }) => (
    <li className={pathname === href ? "selected" : ""}>
      <a href={href}>{title}</a>
    </li>
  );
  return (
    <ul className="mobile-menu">
      <Element href="/introduction" title="회사소개" />
      <Element href="/program" title="프로그램" />
      <Element href="/news" title="뉴스" />
      <Element href="/ask" title="문의하기" />
    </ul>
  );
};

export default MobileMenu;
