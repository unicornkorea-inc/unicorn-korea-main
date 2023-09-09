import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./modal.scss";

const Modal = ({ children }: { children: any }) => {
  const { pathname } = useLocation();
  const Dimmed = () => {
    useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }, []);

    return <div className="dim" />;
  };
  console.log(children.type.name);

  return (
    <div className="modal-wrapper">
      <Dimmed />
      <section className={`modal ${pathname === "/ask" ? "ask" : ""}`}>
        {children}
      </section>
    </div>
  );
};

export default Modal;
