import { useSetRecoilState } from "recoil";
import {
  currentNewsState,
  currentNewsTitleState
} from "../../store/atoms/currentNewsState";

export const NewsContent = ({
  imgSrc,
  title,
  content,
  link
}: {
  imgSrc: string;
  title: string;
  content?: string;
  link: string;
}) => {
  const setCurrentNewsTitle = useSetRecoilState(currentNewsTitleState);
  const setCurrentNews = useSetRecoilState(currentNewsState);

  const onClickSeeDetail = async () => {
    if (link === "" || link === "/") {
      if (content) {
        setCurrentNews(content);
      }
      setCurrentNewsTitle(title);
    }
    window.location.href = link === "" ? "/news-detail" : link;
  };

  return (
    <div className="news-content">
      <img src={`/img/news/articles/${imgSrc}`} alt="article" />
      <p className="title">{title}</p>
      {content && <p className="content">{content}</p>}{" "}
      <button onClick={onClickSeeDetail}>자세히 보기</button>
    </div>
  );
};
