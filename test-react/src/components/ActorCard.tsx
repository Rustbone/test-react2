import { Link } from "react-router-dom";
import React from 'react'

export type TActorsCardProps = {
  id: string;
  imgSrc: string;
  name: string;
};

export function ActorCard({ id, imgSrc, name }: TActorsCardProps) {
  return (
    <Link to={`/test-react2/actor?id=${id}`} className="actor-card">
      <img
        alt={name}
        src={imgSrc === "" ? "./assets/images/actor-placeholder.jpg" : imgSrc}
        className="actor-card__cover"
        loading="lazy"
      />
      <p className="body-2-text text-nowrap">{name}</p>
    </Link>
  );
}
