import Modal from "../common/Modal";
import ConsultationRequest from "./ConsultationRequest";

export const Ask = () => {
  return (
    <>
      <Modal children={<ConsultationRequest />} />
    </>
  );
};
