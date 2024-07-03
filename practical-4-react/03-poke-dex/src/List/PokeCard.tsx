import styled from "@emotion/styled";
import PokeNameChip from "../Common/PokeNameChip";
import PokeMarkChip from "./../Common/PokeMarkChip";
import { useNavigate } from "react-router";

const TempimgUrl =
  "https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800";

const PokeCard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/pokemon/피카츄`);
  };

  return (
    <Item onClick={handleClick}>
      <Header>
        <PokeNameChip />
      </Header>
      <Body>
        <Image src={TempimgUrl} alt="피카츄" />
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Item>
  );
};

const Item = styled.li`
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 250px;
  height: 300px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    background-color: yellow;
    opacity: 0.8;
    transition: background-color 0s;
  }
`;

const Header = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

const Body = styled.section`
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
`;

const Footer = styled.section`
  display: flex;
  flex-direction: row;
  margin: 8px 0;
`;

export default PokeCard;
