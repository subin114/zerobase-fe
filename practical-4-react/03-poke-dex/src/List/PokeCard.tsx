import styled from "@emotion/styled";
import PokeNameChip from "../Common/PokeNameChip";
import PokeMarkChip from "./../Common/PokeMarkChip";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import {
  fetchPokemonDetail,
  PokemonDetailType,
} from "../Service/pokemonService";
import { PokeImageSkeleton } from "../Common/PokeImageSkeletion";

interface PokeCardProps {
  name: string;
}

const PokeCard = ({ name }: PokeCardProps) => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<PokemonDetailType | null>(null);

  const handleClick = () => {
    navigate(`/pokemon/${name}`);
  };

  useEffect(() => {
    (async () => {
      const detail = await fetchPokemonDetail(name);
      setPokemon(detail);
    })();
  }, [name]);

  if (!pokemon) {
    return (
      <Item color={"#fff"}>
        <Header>
          <PokeNameChip name={"포켓몬"} color={"#ffca09"} id={0} />
        </Header>
        <Body>
          <PokeImageSkeleton />
        </Body>
        <Footer>
          <PokeMarkChip />
        </Footer>
      </Item>
    );
  }

  return (
    <Item onClick={handleClick} color={pokemon.color}>
      <Header>
        <PokeNameChip
          name={pokemon.koreanName}
          color={pokemon.color}
          id={pokemon.id}
        />
      </Header>
      <Body>
        <Image src={pokemon.images.dreamWorldFront} alt={pokemon.name} />
      </Body>
      <Footer>
        <PokeMarkChip />
      </Footer>
    </Item>
  );
};

const Item = styled.li<{ color: string }>`
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
    background-color: ${({ color }) => color};
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
