import type { JSX } from "react";
import "./Card.css";

interface Props {
  readonly companyName: string;
  readonly ticker: string;
  readonly price: number 
}

const Card: React.FC<Props> = ({ companyName, ticker, price }: Props): JSX.Element => {
  return (
    <div className="card">
      <img
        src=""
        alt="Image"
      />
      <div className="details">
        <h2>{companyName} {ticker}</h2>
        <p>${price}</p>
      </div>
      <p className="info">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto sit
        et nesciunt odio libero quas quod alias ratione quam. Minima tenetur
        blanditiis excepturi quis, eum a debitis voluptatem aliquid aut.
      </p>
    </div>
  );
};

export default Card;
