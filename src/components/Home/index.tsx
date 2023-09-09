import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Ask, Footer, Header, Introduction, News, Program } from "..";
import mobileMenuOpenState from "../../store/atoms/mobileMenuOpenState";
import {
  currentModalState,
  modalOpenState
} from "../../store/atoms/modalOpenState";
import Modal from "../common/Modal";
import PersonalInfo from "../Footer/PersonalInfo";
import Terms from "../Footer/Terms";
import MobileMenu from "../Header/MobileMenu";

export const Home = () => {
  const { pathname } = useLocation();
  const modalOpen = useRecoilValue(modalOpenState);
  const currentModal = useRecoilValue(currentModalState);
  const mobileMenuOpen = useRecoilValue(mobileMenuOpenState);

  const getContent = () => {
    switch (pathname) {
      case "/introduction":
        return <Introduction />;
      case "/program":
        return <Program />;
      case "/news":
        return <News />;
      case "/ask":
        return <Ask />;
    }
  };

  const getCurrentModalChildren = () => {
    switch (currentModal) {
      case "terms":
        return <Terms />;
      case "personalInfo":
        return <PersonalInfo />;
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <Header />
      {getContent()}
      {modalOpen && <Modal children={getCurrentModalChildren()} />}
      {mobileMenuOpen && <MobileMenu />}
      <Footer />
    </div>
  );
};
