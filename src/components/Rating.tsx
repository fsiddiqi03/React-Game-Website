import { Badge } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface Props {
  rating: number;
}

const Rating = ({ rating }: Props) => {
  let color = rating > 90 ? "green" : rating > 80 ? "orange" : "red";
  return <Badge colorScheme={color}>{rating}</Badge>;
};

export default Rating;
