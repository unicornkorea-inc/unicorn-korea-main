import { useRecoilValue } from "recoil";
import { Footer, Header } from "..";
import mobileMenuOpenState from "../../store/atoms/mobileMenuOpenState";
import {
  currentModalState,
  modalOpenState
} from "../../store/atoms/modalOpenState";
import ImageContent from "../common/ImageContent";
import Modal from "../common/Modal";
import PersonalInfo from "../Footer/PersonalInfo";
import Terms from "../Footer/Terms";
import MobileMenu from "../Header/MobileMenu";
import { NewsSection } from "../News/NewsSection";
import "./styles.scss";
import MainSuccessStories from "./MainSuccessStories";

export const Main = () => {
  const modalOpen = useRecoilValue(modalOpenState);
  const currentModal = useRecoilValue(currentModalState);
  const mobileMenuOpen = useRecoilValue(mobileMenuOpenState);

  const getCurrentModalChildren = () => {
    switch (currentModal) {
      case "terms":
        return <Terms />;
      case "personalInfo":
        return <PersonalInfo />;
    }
  };

  return (
    <section className="main">
      <Header />
      <ImageContent
        src="/img/main/main_01.png"
        mobileSrc="/img/main/mobile/main_01.png"
        alt="메인 이미지"
        backgroundColor="#011221"
        isMain
      />
      <MainSuccessStories />
      <ImageContent
        src="/img/main/main_03.png"
        mobileSrc="/img/main/mobile/main_03.png"
        alt="메인 이미지"
        backgroundColor="#011633"
        isMain
      />
      <ImageContent
        src="/img/main/main_04.png"
        mobileSrc="/img/main/mobile/main_04.png"
        alt="메인 이미지"
        backgroundColor="#f1f4f6"
        isMain
      />
      <section className="main-news-section">
        <p className="section-title news-title">유니콘코리아 뉴스</p>
        <NewsSection />
      </section>
      <ImageContent
        src="/img/main/main_05.png"
        mobileSrc="/img/main/mobile/main_05.png"
        alt="메인 이미지"
        backgroundColor="#001A41"
        isMain
      />
      <ImageContent
        src="/img/main/main_06.png"
        mobileSrc="/img/main/mobile/main_06.png"
        alt="메인 이미지"
        backgroundColor="#FFFFFF"
        isMain
      />
      <ImageContent
        src="/img/main/main_07.png"
        mobileSrc="/img/main/mobile/main_07.png"
        alt="메인 이미지"
        backgroundColor="#00102e"
        isMain
      />
      <ImageContent
        src="/img/main/main_08.png"
        mobileSrc="/img/main/mobile/main_08.png"
        alt="메인 이미지"
        backgroundColor="#FFFFFF"
        isMain
      />
      <Footer />
      {modalOpen && <Modal children={getCurrentModalChildren()} />}
      {mobileMenuOpen && <MobileMenu />}
    </section>
  );
};
