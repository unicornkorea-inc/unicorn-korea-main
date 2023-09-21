import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  successStoriesState,
  successStoryState
} from "../../store/atoms/successStoriesState";
import "./main-success-stories.scss";

const MainSuccessStories = () => {
  const successStories = useRecoilValue(successStoriesState);
  const setSuccessStory = useSetRecoilState(successStoryState);

  const MainSuccessStory = ({
    img,
    name,
    tags,
    representative,
    subtitle,
    content
  }: {
    img: string;
    name: string;
    tags: string[];
    representative: string;
    subtitle: string;
    content: string;
  }) => {
    const onClickSuccessStory = () => {
      setSuccessStory({ img, name, tags, representative, subtitle, content });
      window.location.href = "/success-story";
    };
    return (
      <button className="main-success-story" onClick={onClickSuccessStory}>
        <img src={`/img/success/${img}`} alt={name} />
        <p className="name">{name}</p>
        <p className="representative">{representative}</p>
        <p className="subtitle">{subtitle}</p>
      </button>
    );
  };
  return (
    <div className="main-success-stories-wrapper">
      <section className="main-success-stories">
        <p className="success-section-title">
          유니콘코리아와 함께한 대표님들의 성공사례
        </p>
        <p className="bold">
          유니콘코리아도 선택과 집중을 위하여, 혁신성장이 가능한 기업만을
          선별하고 선택하고 자문합니다.
        </p>
        <p className="normal">
          이외에도 많은 사례들이 있습니다. 상담 시 보여드립니다.
        </p>
        <section className="main-success-stories-list">
          {successStories.map(
            ({ img, name, tags, representative, subtitle, content }) => (
              <MainSuccessStory
                img={img}
                name={name}
                tags={tags}
                representative={representative}
                subtitle={subtitle}
                content={content}
              />
            )
          )}
        </section>
      </section>
    </div>
  );
};

export default MainSuccessStories;
