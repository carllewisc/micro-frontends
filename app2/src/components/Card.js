import { Card as CardStyle, CardImage, CardBody, CardDescription } from "./../styles";

export default function Card({ item }) {
  const { name, image } = item;

  return (
    <CardStyle>
      <CardImage src={image} alt={name} />
      <CardBody>
        <CardDescription>{name}</CardDescription>
      </CardBody>
    </CardStyle>
  );
}
