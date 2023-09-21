import "./news-section.scss";
import { NewsContent } from "./NewsContent";

export const PolicyNews = () => {
  const articles = [
    {
      imgSrc: "article2.png",
      title: "서울특별시, 시공자 선정기준 개정해 신속한 정비사업 지원",
      link: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T157C158/AU/112/view.do?article_seq=78572"
    },
    {
      imgSrc: "article3.png",
      title: "중소기업중앙회, 민생경제 활력 회복 위해 두 팔 걷어",
      link: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T157C158/AU/112/view.do?article_seq=78571"
    },
    {
      imgSrc: "article1.png",
      title: "다함께 손잡고 중견기업 기술보호 강화",
      link: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T157C158/AU/112/view.do?article_seq=78558"
    },
    {
      imgSrc: "article3.png",
      title:
        "소상공인시장진흥공단, 부산ㆍ울산ㆍ경남 지역 8개 대학과 업무협약 체결",
      link: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T157C158/AU/112/view.do?article_seq=78555"
    },
    {
      imgSrc: "article2.png",
      title: "대기업ㆍ공공기관 등 특허 593건 무료 나눔",
      link: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T157C158/AU/112/view.do?article_seq=78567"
    },
    {
      imgSrc: "article1.png",
      title: "중소벤처기업진흥공단, 공공데이터 누구나 이용 가능해요!",
      link: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T157C158/AU/112/view.do?article_seq=78538"
    },
    {
      imgSrc: "article2.png",
      title:
        "서울특별시, 소공인 제조역량 키운다, 700억 투입해 수작업 → 자동화, 숙련인재 육성",
      link: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T157C158/AU/112/view.do?article_seq=78547"
    },
    {
      imgSrc: "article3.png",
      title: "총 상금 15억원, 창업기업(스타트업) '진검승부' 이제부터",
      link: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T157C158/AU/112/view.do?article_seq=78533"
    },
    {
      imgSrc: "article2.png",
      title: "소상공인도 7백만원까지 재난피해 지원금 선지급 받는다",
      link: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T157C158/AU/112/view.do?article_seq=78544"
    },
    {
      imgSrc: "article3.png",
      title:
        "과학기술정보통신부, 「정보보호산업의 글로벌 경쟁력 확보 전략」 발표",
      link: "https://www.bizinfo.go.kr/web/lay1/bbs/S1T157C158/AU/112/view.do?article_seq=78535"
    }
  ];
  return (
    <section className="news-section-wrapper">
      <section className="news-section">
        {articles.map(({ imgSrc, title, link }, index) => (
          <NewsContent imgSrc={imgSrc} title={title} link={link} />
        ))}
      </section>
    </section>
  );
};
