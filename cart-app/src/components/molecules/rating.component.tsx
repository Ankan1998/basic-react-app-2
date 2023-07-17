import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";

type RatingProps = {
  numberofstars: number;
  color?: string;
};

export const Rating: FC<RatingProps> = (props: RatingProps) => {
  let ratings: React.ReactNode[] = [];
  for (let i = 0; i < props.numberofstars; i++) {
    ratings.push(
      <FontAwesomeIcon icon={faStar} style={{ color: props.color ? props.color : "orange" }} />
    );
  }
  return <>{ratings}</>;
};
