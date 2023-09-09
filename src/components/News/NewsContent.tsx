export const NewsContent = ({
  imgSrc,
  title,
  content,
  link
}: {
  imgSrc: string;
  title: string;
  content: string;
  link: string;
}) => {
  return (
    <div className="news-content">
      <img src={`/img/news/articles/${imgSrc}`} alt="article" />
      <p className="title">{title}</p>
      <p className="content">{content}</p>
      <a href={link}>자세히 보기</a>
    </div>
  );
};
