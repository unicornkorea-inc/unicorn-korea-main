import "./text-section.scss";

const TextSection = ({
  title,
  content
}: {
  title?: string;
  content: string;
}) => {
  return (
    <section className="text-section">
      {title && <p className="title">{title}</p>}
      <p className="content">{content}</p>
    </section>
  );
};

export default TextSection;
