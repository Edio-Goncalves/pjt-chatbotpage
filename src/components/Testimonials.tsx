import { TiStarFullOutline } from "react-icons/ti";
export default function Testimonials() {
  return (
    <div className="section-testimonials">
      <div className="testimonials-img-wr">
        <img className="wr-1  wr" src="/favicon.ico" alt="" />
        <img className="wr-2  wr" src="/favicon.ico" alt="" />
        <img className="wr-3  wr" src="/favicon.ico" alt="" />
        <img className="wr-4  wr" src="/favicon.ico" alt="" />
        <img className="wr-5  wr" src="/favicon.ico" alt="" />
        <img className="wr-6  wr" src="/favicon.ico" alt="" />
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
    </div>
  );
}
