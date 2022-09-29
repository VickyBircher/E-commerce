import { shape, number, string } from "prop-types";

export const ComidaShape = shape({
  name: string.isRequired,
  price: number.isRequired,
  image: string.isRequired,
  id: string.isRequired,
});

export const ProductoShape = shape({
  id: string,
  name: string.isRequired,
  image: string.isRequired,
  price: number.isRequired,
  desc: string,
}).isRequired;

export const ComidaTableShape = shape({
  id: string,
  name: string,
  image: string,
  price: number,
  desc: string,
});

export const ComidaResumeShape = shape({
  id: string,
  name: string,
  image: string,
  price: number,
  desc: string,
});
