import styled from "styled-components";
import Ammount from "../Amount";
import Button from "../Button";

const Wrapper = styled.div`
  width: 125px;
  height: 225px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  gap: 9px;
`;

const ImageFrame = styled.div`
  width: 92px;
  height: 92px;
  border: 1.18px #f3f0fe solid;
  border-radius: 12px;
  padding: 16px;
`;

type ImageProps = {
  src?: string,
}

const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  background-color: #c4c4c4;
`;

const Name = styled.div`
  font-weight: 800;
  font-size: 14px;
`;

const ProductAmmount = styled(Ammount)`
  color: #1ea4ce;
`;

type ProductProps = {
  name?: string,
  price?: number,
  image?: string,
}

export default function Product({
  name = "Product name",
  price = 1.99,
  image = undefined
}: ProductProps) {
  return (
    <Wrapper>
      <ImageFrame>
        <Image src={image} />
      </ImageFrame>
      <ProductAmmount price={price} />
      <Name>{name}</Name>
      <Button>Add</Button>
    </Wrapper>
  );
}
