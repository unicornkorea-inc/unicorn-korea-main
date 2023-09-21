import { useRecoilValue } from "recoil";
import {
  currentNewsState,
  currentNewsTitleState
} from "../../store/atoms/currentNewsState";
import Modal from "../common/Modal";

const NewsDetail = () => {
  const currentNews = useRecoilValue(currentNewsState);
  const currentNewsTitle = useRecoilValue(currentNewsTitleState);
  const Content = () => (
    <div className="news-detail">
      <button onClick={() => window.history.back()}>
        <img src="/img/common/close.png" alt="close" />
      </button>
      <h1>{currentNewsTitle}</h1>
      <p>{currentNews}</p>
    </div>
  );
  return <Modal children={<Content />} />;
};

export default NewsDetail;
