import { useRecoilValue } from "recoil";
import { successStoriesState } from "../../store/atoms/successStoriesState";
import SuccessStory from "../Main/SuccessStory";
import { NewsSection } from "./NewsSection";
import { PolicyNews } from "./PolicyNews";
import "./news.scss";

export const News = () => {
  const successStories = useRecoilValue(successStoriesState);
  return (
    <section className="news">
      <p className="section-title">유니콘코리아 성공사례</p>
      <section className="success">
        <div className="success-stories">
          {successStories.map(
            ({ img, name, tags, representative, subtitle, content }) => (
              <SuccessStory
                img={img}
                name={name}
                tags={tags}
                representative={representative}
                subtitle={subtitle}
                content={content}
                hasButton={false}
              />
            )
          )}
        </div>
      </section>
      <p className="section-title news-title">유니콘코리아 뉴스</p>
      <NewsSection />
      <p className="section-title news-title policy-news">정책 뉴스</p>
      <PolicyNews />
    </section>
  );
};
