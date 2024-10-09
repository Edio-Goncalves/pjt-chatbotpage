// Testimonial.tsx
import { TiStarFullOutline } from "react-icons/ti";
import { useState } from "react";
import ModalTestimonial from "./ModalTestimonial";
import testimonialsData, { TestimonialData } from "../data/testimonial";

type TestimonialsProps = {
  setOpenModal: () => void; // Recebendo a função como prop
};

export default function Testimonials({ setOpenModal }: TestimonialsProps) {
  const [selectedTestimonial, setSelectedTestimonial] =
    useState<TestimonialData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (testimonial: TestimonialData) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
    setIsModalOpen(false);
  };

  return (
    <div className="section-testimonials">
      <div className="testimonials-img-wr">
        {testimonialsData.map((testimonial, index) => (
          <img
            key={index}
            className={`wr-${index + 1} wr`}
            src={testimonial.imageSrc}
            alt={`Testemunho ${index + 1}`}
            onClick={() => openModal(testimonial)}
          />
        ))}
      </div>
      <div className="client-star">
        <div className="star-wr">
          <TiStarFullOutline className="star" />
          <TiStarFullOutline className="star" />
          <TiStarFullOutline className="star" />
          <TiStarFullOutline className="star" />
          <TiStarFullOutline className="star" />
        </div>
        <span>Clientes satisfeitos</span>
      </div>
      <ModalTestimonial
        isOpen={isModalOpen}
        setOpenAndClose={closeModal}
        testimonial={selectedTestimonial}
      />
    </div>
  );
}
