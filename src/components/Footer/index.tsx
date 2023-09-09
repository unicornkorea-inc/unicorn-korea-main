import { useSetRecoilState } from "recoil";
import {
  currentModalState,
  modalOpenState
} from "../../store/atoms/modalOpenState";
import { isMobile } from "../../utils/isMobile";
import "./footer.scss";

export const Footer = () => {
  const setModalOpen = useSetRecoilState(modalOpenState);
  const setCurrentModalState = useSetRecoilState(currentModalState);
  const isMobileDevice = isMobile();

  const handleTermsButtonClick = () => {
    setCurrentModalState("terms");
    setModalOpen(true);
  };

  const handlePersonalInfoButtonClick = () => {
    setCurrentModalState("personalInfo");
    setModalOpen(true);
  };

  const FooterMain = () => (
    <main>
      <p className="name">(주)유니콘코리아</p>
      <p>
        <span className="title">대표</span>
        <span className="content">김민수</span>
      </p>
      <p>
        <span className="title">사업자등록번호</span>
        <span className="content">795-86-02755</span>
      </p>
      <p className="buttons">
        <button onClick={handleTermsButtonClick}>이용약관</button>
        <img
          src="/img/common/divider.png"
          alt="디바이더"
          className="divider"
          width={2}
          height={12}
        />
        <button onClick={handlePersonalInfoButtonClick}>
          개인정보 처리방침
        </button>
      </p>
    </main>
  );

  return (
    <footer>
      <div className={isMobileDevice ? "mobile" : ""}>
        {isMobileDevice && (
          <img
            src="/img/common/footer_logo.png"
            width={80}
            height={54}
            alt="로고"
            className="logo mobile"
          />
        )}
        <FooterMain />
        {!isMobileDevice && (
          <img
            src="/img/common/footer_logo.png"
            width={216}
            height={146}
            alt="로고"
            className="logo"
          />
        )}
      </div>
    </footer>
  );
};
