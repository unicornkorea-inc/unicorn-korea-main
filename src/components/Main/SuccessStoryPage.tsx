import { useRecoilValue } from "recoil";
import { successStoryState } from "../../store/atoms/successStoriesState";
import Modal from "../common/Modal";
import SuccessStory from "./SuccessStory";
import "./success-story.scss";

const SuccessStoryPage = () => {
  const { img, name, subtitle, representative, tags, content } =
    useRecoilValue(successStoryState);

  return (
    <Modal
      children={
        <SuccessStory
          img={img}
          name={name}
          tags={tags}
          representative={representative}
          subtitle={subtitle}
          content={content}
        />
      }
    />
  );
};

export default SuccessStoryPage;
