import React from "react";

type ModalTestimonialProps = {
  isOpen: boolean;
  setOpenAndClose: () => void;
  testimonial: {
    name: string;
    description: string;
    quality: string;
    imageSrc: string;
  } | null;
};

export default function ModalTestimonial({
  isOpen,
  setOpenAndClose,
  testimonial,
}: ModalTestimonialProps) {
  if (isOpen && testimonial) {
    return (
      <div className="modal-bg-grey" onClick={setOpenAndClose}>
        <div className="modal-content">
          <div className="bar-modal">
            <img src={testimonial.imageSrc} alt={testimonial.name} />
          </div>
          <div className="internal-modal">
            <h2>{testimonial.name}</h2>
            <p>{testimonial.description}</p>

            <a href="">Fale com um atendente!</a>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
