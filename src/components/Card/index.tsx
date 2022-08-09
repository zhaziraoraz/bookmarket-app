import { FC } from "react";

type CardProps = {
  idx: number;
  image: string;
  title: string;
  price: string;
};

const Card: FC<CardProps> = ({ idx, image, title, price }) => {
  return (
    <div
      className="card border-0 shadow p-3 mb-5 bg-white rounded m-4"
      style={{ width: "18rem", height: "28rem" }}
      key={`${idx}`}
    >
      <img src={image} className="card-img-top" alt="..." />
      <div className="row">
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">
              {title.length >= 24 ? title.substring(0, 20) + "..." : title}
            </h5>
            <div className="card-bottom d-flex justify-content-between">
              <span>{price}</span>
            </div>
          </div>
        </div>
        <div className="col d-flex justify-content-center">
          <i className="bi bi-cart"></i>
        </div>
      </div>
    </div>
  );
};
export default Card;
