import { isMobile } from "../../utils/isMobile";
import "./image-content.scss";

const ImageContent = ({
  src,
  mobileSrc,
  alt,
  backgroundColor,
  mobileBackgroundColor,
  isMain = false
}: {
  src?: string;
  mobileSrc?: string;
  alt: string;
  backgroundColor: string;
  mobileBackgroundColor?: string;
  isMain?: boolean;
}) => {
  const isMobileDevice = isMobile();
  return (
    <div
      className="image-content"
      style={{
        backgroundColor:
          isMobileDevice && mobileBackgroundColor
            ? mobileBackgroundColor
            : backgroundColor
      }}
    >
      {mobileSrc && <img src={mobileSrc} alt={alt} className="mobile" />}
      {src && (
        <img
          src={src}
          alt={alt}
          className={`desktop ${isMain ? "main" : ""}`}
        />
      )}
    </div>
  );
};

export default ImageContent;
