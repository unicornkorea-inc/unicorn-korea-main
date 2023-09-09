import "./styles.scss";

// TODO: 반응형 대응
export const Introduction = () => {
  return (
    <section className="introduction">
      <div>
        <h1>
          Nevertheless,
          <br />
          Make It Happen
        </h1>
        <img
          src="/img/common/double-quote-start.png"
          className="double-quote"
          alt="쌍따옴표 아이콘"
        />
        <p>
          <span className="bold">
            (주)유니콘코리아는 “그럼에도 불구하고 해낸다”라는 기업 이념을 가지고
            있습니다.
          </span>
          <br />
          <span>
            도전과 혁신을 기회로 승화시키며, 내실을 강화하면서 최고의 가치를
            끊임없이
            <br />
            창조하고 노력하고 있습니다.
          </span>
        </p>
        <p>
          <span className="bold">
            유니콘코리아는 자금조달(대출,지원,투자)을 기반으로 고객사의 성장에
            필요한
            <br /> 핵심요소를 제공하며, 함께합니다.
          </span>
        </p>
        <p>
          <span>
            “No pain, No gain” 고통이 없으면 얻는 것도 없다라는 단순한 의미가
            아닌,
            <br />
            “가치가 큰 보상을 얻는 데에는 그만큼의 어려움과 고통이 따른다”라는
            의미입니다.
          </span>
          <br />
          <span className="bold">
            저희 유니콘코리아와 함께하시면 그 어려움과 고통도 덜어드리고 함께
            나아가겠습니다.
          </span>
        </p>
        <img
          src="/img/common/double-quote-end.png"
          className="double-quote"
          alt="쌍따옴표 아이콘"
        />
        <section className="name-card">
          <img src="/img/common/logo.png" alt="로고" className="logo" />
          <p className="job-title">(주)유니콘코리아 대표이사</p>
          <p className="email">7026kms@hanmail.net</p>
          <p className="name">김민수</p>
        </section>
      </div>
    </section>
  );
};
