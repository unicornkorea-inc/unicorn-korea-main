import ImageContent from "../common/ImageContent";
import "./news.scss";
import { NewsSection } from "./NewsSection";
import { PolicyNews } from "./PolicyNews";

export const News = () => {
  return (
    <section className="news">
      <p className="section-title">유니콘코리아 성공사례</p>
      <section className="success">
        <div className="success-stories">
          <ImageContent
            alt="success story"
            backgroundColor=""
            src="/img/news/success/success_01.png"
            mobileSrc="/img/news/success/mobile/success_01.png"
          />
          <ImageContent
            alt="success story"
            backgroundColor=""
            src="/img/news/success/success_02.png"
            mobileSrc="/img/news/success/mobile/success_02.png"
          />
          <ImageContent
            alt="success story"
            backgroundColor=""
            src="/img/news/success/success_03.png"
            mobileSrc="/img/news/success/mobile/success_03.png"
          />
          <ImageContent
            alt="success story"
            backgroundColor=""
            src="/img/news/success/success_04.png"
            mobileSrc="/img/news/success/mobile/success_04.png"
          />
        </div>
      </section>
      <p className="section-title news-title">유니콘코리아 뉴스</p>
      <NewsSection />
      <PolicyNews />
    </section>
  );
};
