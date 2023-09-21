const SuccessStory = ({
  img,
  name,
  tags,
  representative,
  subtitle,
  content,
  hasButton = true
}: {
  img: string;
  name: string;
  tags: string[];
  representative: string;
  subtitle: string;
  content: string;
  hasButton?: boolean;
}) => (
  <section className="success-story-page">
    {hasButton && (
      <button onClick={() => window.history.back()}>
        <img src="/img/common/close.png" alt="close" />
      </button>
    )}
    <div className="success-story">
      <div className="success-header">
        <img src={`/img/success/${img}`} alt={name} />
        <aside>
          <p className="name">{name}</p>
          <p className="representative">{representative}</p>
          <p className="subtitle">{subtitle}</p>
        </aside>
      </div>
      <div className="tags">
        {tags.map((tag) => (
          <span className="tag">{tag}</span>
        ))}
      </div>
      <div className="content">{content}</div>
    </div>
  </section>
);

export default SuccessStory;
