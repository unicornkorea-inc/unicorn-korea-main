import React, { useRef, useState } from "react";
import "./consultation-request.scss";

interface FormData {
  companyName: string;
  name: string;
  position: string;
  phoneNumber: string;
  revenue: string;
  details: string;
  interests: string[];
}

const ConsultationRequest: React.FC = () => {
  const initialFormData: FormData = {
    companyName: "",
    name: "",
    position: "",
    phoneNumber: "",
    revenue: "",
    details: "",
    interests: []
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const formRef = useRef(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    console.log(value, checked);
    setFormData((prevData) => {
      if (checked) {
        // 선택된 관심사를 배열에 추가
        return {
          ...prevData,
          interests: [...prevData.interests, value]
        };
      } else {
        // 선택 해제된 관심사를 배열에서 제거
        return {
          ...prevData,
          interests: prevData.interests.filter((interest) => interest !== value)
        };
      }
    });
  };

  const data = {
    service_id: "service_sp6f4m2",
    template_id: "template_5mft7ha",
    user_id: "hupyz5A1UBVqGkIun",
    template_params: formData
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (formData.interests.length === 0) {
      alert("관심 항목을 선택해주세요!");
      return;
    }
    e.preventDefault();

    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.ok) {
          alert("상담신청이 완료되었습니다!");
        } else {
          response.json().then((error) => {
            alert("상담신청에 실패했습니다." + JSON.stringify(error));
          });
        }
      })
      .catch((error) => {
        alert("상담신청에 실패했습니다.");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="consultation-request"
      ref={formRef || null}
    >
      <div className="title-and-button">
        <h1>상담신청</h1>
        <a href="/">
          <img src="/img/common/close.png" alt="close-button" />
        </a>
      </div>
      <p className="description">
        상담을 통해 대표님의 막막함을 풀어드리겠습니다.
        <br />
        문의를 남겨주시면 빠른 시간 내에 연락드리겠습니다.
      </p>
      <div className="interests-form">
        <label>
          <p className="interest-question">어떤 파트에 관심 있으신가요?</p>
          <p className="interest-description">(중복 선택 가능)</p>
        </label>
        <div className="labels">
          <div
            className={`custom-checkbox ${
              formData.interests.includes("자금조달(대출)") ? "checked" : ""
            }`}
          >
            <label>
              <input
                type="checkbox"
                name="interests"
                value="자금조달(대출)"
                onChange={handleCheckboxChange}
              />
              자금조달(대출)
            </label>
          </div>
          <div
            className={`custom-checkbox ${
              formData.interests.includes("자금조달(지원사업)") ? "checked" : ""
            }`}
          >
            <label>
              <input
                type="checkbox"
                name="interests"
                value="자금조달(지원사업)"
                onChange={handleCheckboxChange}
              />
              자금조달(지원사업)
            </label>
          </div>
          <div
            className={`custom-checkbox ${
              formData.interests.includes("자금조달(투자)") ? "checked" : ""
            }`}
          >
            <label>
              <input
                type="checkbox"
                name="interests"
                value="자금조달(투자)"
                onChange={handleCheckboxChange}
              />
              자금조달(투자)
            </label>
          </div>
          <div
            className={`custom-checkbox ${
              formData.interests.includes("벤처인증") ? "checked" : ""
            }`}
          >
            <label>
              <input
                type="checkbox"
                name="interests"
                value="벤처인증"
                onChange={handleCheckboxChange}
              />
              벤처인증
            </label>
          </div>
          <div
            className={`custom-checkbox ${
              formData.interests.includes("브랜딩&마케팅") ? "checked" : ""
            }`}
          >
            <label>
              <input
                type="checkbox"
                name="interests"
                value="브랜딩&마케팅"
                onChange={handleCheckboxChange}
              />
              브랜딩&마케팅
            </label>
          </div>
        </div>
      </div>
      <section className="contact-form">
        <div>
          <label htmlFor="companyName">회사명</label>
          <br />
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            placeholder="회사명을 입력해주세요."
          />
        </div>
        <div>
          <label htmlFor="name">이름</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="이름을 입력해주세요."
          />
        </div>
        <div>
          <label htmlFor="position">직위</label>
          <br />
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
            placeholder="직위를 입력해주세요."
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">연락처</label>
          <br />
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            placeholder="핸드폰 번호를 입력해주세요."
          />
        </div>
        <div>
          <label htmlFor="revenue">매출</label>
          <br />
          <input
            type="text"
            id="revenue"
            name="revenue"
            value={formData.revenue}
            onChange={handleChange}
            required
            placeholder="대략적인 매출을 입력해주세요."
          />
        </div>
        <div>
          <label htmlFor="details">상세 내용</label>
          <br />
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            required
            placeholder="상세 내용을 입력해주세요."
          />
        </div>
      </section>
      <div className="buttons">
        <a href="/" className="button">
          취소
        </a>
        <button type="submit" className="button submit">
          제출
        </button>
      </div>
    </form>
  );
};

export default ConsultationRequest;
