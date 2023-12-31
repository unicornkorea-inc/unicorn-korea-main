import "./news-section.scss";
import { NewsContent } from "./NewsContent";

export const NewsSection = () => {
  const articles = [
    {
      imgSrc: "article1.png",
      title:
        "“중소기업 매출 증대를 위한 온라인 쇼핑몰 (주)유니콘코리아 단독 런칭”",
      content:
        "(주)유니콘코리아의 자금조달 컨설팅을 받고 있는 회원사의 매출 증대를 위하여, 당사는 메이져 신규 온라인 쇼핑몰 3개사와 MOU를 체결하였으며, 이를 토대로 회원사의 매출 증대가 이뤄지고 있습니다. 향후 (주)유니콘코리아는 회원사의 판로 확보를 위하여, 다양한 채널을 확보하여 회원사에게 제공할 것이며, 함께 Win-Win 할 수 있도록 이바지 할 것입니다.",
      link: ""
    },
    {
      imgSrc: "article2.png",
      title: "“(주)한국방염기술 MOU체결 완료”",
      content:
        "㈜한국방염기술의 약 30년 연구 끝에 비로소 이루어낸 침윤 소화약제의 기술로 무색 무향 무취의 독성이 없고 안전한 친환경 물질로 제작되었습니다. 세계 최초! 친환경 침윤소화약재를 개발하고, 국내 및 미국 특허 보유, 유럽특허 출원 중입니다. 한국방염기술의 혁신기술로 제품의 안정성과 고객만족은 일반 제품과는 비교할 수 없습니다. ㈜한국방염기술은 국내에서 유일하게 침윤 소화약제에 대한 특허를 취득하여 다른 업체들과의 경쟁에서 우위를 점하고 있으며 성장 가능성도 가장 높다는 평가를 받고 있습니다. 2023년 8월 (주)유니콘코리아와 MOU를 체결하였으며, (주)한국방염기술의 제품판매에 관한 경쟁력 있는 영업권 및 판매권을 부여받았으며, 이를 토대로 관공서 납품에 적극적인 영업활동을 진행하기로 했으며, 글로벌 시장 확보 및 판로 확대를 적극적으로 검토하기로 하였습니다. 또한 (주)유니콘코리아는 벤처인증 확인 및 투자, 자가공장 매입 등 자금조달에 관한 전문컨설팅 서비스를 진행하고, 이를 통하여, (주)한국방염기술의 성장에 큰 힘이 될 것을 약속하였습니다.",
      link: ""
    },
    {
      imgSrc: "article3.png",
      title: "“국내 최초 산업용 안전센서 개발 본격화”",
      content:
        "산업재해란 노무를 제공하는 자가 업무와 관계되는 “건설물, 설비 등에 의하거나 작업 또는 업무로 인하여 발생한 사망, 부상, 질병을 의미합니다. 산업재해로 노동자들이 큰 피해를 격고 있는 상황에서 이를 줄이기 위하여, 중대재해처벌법이 강화, 신설되었습니다. 이에 (주)유니콘코리아는 노동자와 사업자를 동시에 보호하고, 산업재해를 현격히 줄이고자, 산업용 안전센서 개발을 하게 되었으며, 이를 (주)유니콘코리아가 직접 개발, 제조, 상용화하게 되었습니다. 2023년도에는 센서 개발 완료 후 충분한 상품 테스트를 마치고, 2024년 대기업 납품을 확정지었습니다. 연간 예상 매출 규모는 2024년도 20억, 2025년도 50억, 2026년도 70억을 예상하고 있습니다.(주)유니콘코리아는 단순 자금조달 컨설팅뿐만 아니라, 다양한 사업화를 시도하고, 이를 성장시켜나갈 것입니다.",
      link: ""
    },
    {
      imgSrc: "article2.png",
      title:
        "“락스 대체 친환경 소독 이산화염소수, 전문 제조회사 (주)이염 MOU 체결”",
      content:
        "이산화염소수는 WHO가 최고 등급인 A-1로 분류한 가장 안전하고, 친환경적인 소독제입니다. 이를 바탕으로 현재 학교 및 급식소에서 사용하고 있는 락스(차아염소산나트륨)를 대체할 수 있는 친환경 소독제 이산화염소수를 널리 보급하고자 (주)유니콘코리아와 MOU를 체결하였습니다. 이를 토대로 (주)이염에 전국적인 영업망 구축, 지자체 조례안 발의, 전국 상하수도처리장 안내 등 양사가 적극적으로 판로확보를 하기로 협의하였습니다.",
      link: ""
    },
    {
      imgSrc: "article3.png",
      title: "“신개념 복합놀이 문화시설인 댄싱스타, 가맹사업 본격화 ”",
      content:
        "(주)굿타임엔터테인먼트는 댄싱스타를 통하여 전세계에 K-문화를 알릴 것입니다. 세계적인 K-POP 열풍으로 국내는 물론 전 세계에서 우리나라 가수에 열광하고 그 음악성과 춤이 세계적으로 인정받고 있습니다. 그 열풍에 힘입어 한국 아이돌을 모델로 하는 K-POP 컨텐츠들이 우후죽순 쏟아져 나오는 현실에서 유소년 및 청소년들이 춤과 노래를 따라하며 배울 수 있는 컨텐츠는 온라인에 많이 오픈 되어 있지만 그것을 즐길 수 있는 장소는 상당히 제한적인 것이 현실입니다.이에 따라서 K-POP 스타들의 노래와 춤을 따라하며 그것을 영상에 담아 서로 공유하고 추억하며 다 같이 즐길 수 있는 새로운 공간을 제공하므로 이전에는 쉽게 접근하지 못한 새롭고 건전한 문화 컨텐츠를 만들고자 함에 목적을 두고 있습니다.굿타임 엔터테인먼트(댄싱스타)는 가맹점 모집을 기본으로 하는 프랜차이즈 사업입니다.가맹점 모집을 통해 사업수익을 극대화 합니다.(가맹비, 인테리어, 기계, 각종 간식등…)2023년 9월 직영1호점 댄싱스타를 시작으로 전국 가맹사업을 시작합니다. (주)유니콘코리아와 MOU를 통하여, 마케팅, 가맹점 모집, 전국단위 슈퍼바이져 운영, 현장체험학습, 해외시장진출 등을 함께 고민하고, 이뤄나갈 것입니다. ",
      link: ""
    },
    {
      imgSrc: "article1.png",
      title: "“(주)유니콘코리아 사업 다각화 추진”",
      content:
        "주)유니콘코리아는 대한민국 최고의 인재로 구성되어 있는 중소기업의 자금조달 컨설팅(대출, 정부지원, 투자) 회사입니다. 풍부한 경험과 레퍼런스를 바탕으로 실질적인 중소기업을 도와, 성장할 수 있는 기틀을 마련하였고, 지금도 진행중이며 큰 성장과 성과를 내고 있습니다. 이를 바탕으로 기존에 법인사업자 위주의 컨설팅을 벗어나, 병원 등 특수 사업자 및 소상공인 등의 자영업을 하는 개인사업자들도 자금조달 컨설팅을 서비스를 받으실 수 있습니다.타 회사와의 차별화를 기반으로 실질적인 도움을 줄 수 있는 (주)유니콘코리아!자세한 컨설팅 내용은 오프라인 상담을 통하여, 자세하게 설명드리도록 하겠습니다.시도하지 않으면, 아무 변화도 생기지 않습니다. 시행착오 없는 시도를 위해 (주)유니콘코리아와 함께하시길 바랍니다. ",
      link: ""
    }
  ];
  return (
    <section className="news-section-wrapper">
      <section className="news-section">
        {articles.map(({ imgSrc, title, content, link }, index) => (
          <NewsContent
            imgSrc={imgSrc}
            title={title}
            content={content}
            link={link}
          />
        ))}
      </section>
    </section>
  );
};
