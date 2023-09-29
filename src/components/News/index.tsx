import Slider from "react-slick";
import { useRecoilValue } from "recoil";
import { successStoriesState } from "../../store/atoms/successStoriesState";
import { NewsSection } from "./NewsSection";
import { PolicyNews } from "./PolicyNews";
import "./news.scss";
import SuccessStory from "../Main/SuccessStory";

export const News = () => {
  const successStories = useRecoilValue(successStoriesState);
  const settings = {
    dots: false,
    infinite: false,
    // slidesToShow: 1,
    slidesToScroll: 1,
    style: { width: "100%" }
  };
  return (
    <section className="news">
      <p className="section-title">유니콘코리아 성공사례</p>
      <Slider {...settings}>
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
      </Slider>

      <section className="success">
      </section>
      <p className="section-title news-title">유니콘코리아 뉴스</p>
      <NewsSection />
      <p className="section-title news-title policy-news">정책 뉴스</p>
      <PolicyNews />
    </section>
  );
};
