import React from "react";
import { useParams } from "react-router-dom";

const Cards: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div>
      <h1>Cards</h1>
    </div>
  );
};

export default Cards;
