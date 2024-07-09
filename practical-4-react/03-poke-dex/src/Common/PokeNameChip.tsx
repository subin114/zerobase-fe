import styled from "@emotion/styled";

interface PokeNameChipProps {
  name: string;
  id: number;
  color: string;
}

const PokeNameChip = ({ name, id, color }: PokeNameChipProps) => {
  const renderNumber = (id: number) => {
    const digits = 3;
    const numberString = id.toString();

    if (numberString.length >= digits) {
      return numberString;
    }

    let result = "";

    for (let i = 0; i < digits - numberString.length; i++) {
      result += "0";
    }

    return `${result}${numberString}`;
  };

  return (
    <Chip>
      <NumberChip color={color}>
        <Number>{renderNumber(id)}</Number>
      </NumberChip>
      <Text>{name}</Text>
    </Chip>
  );
};

const Chip = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c0c0c0;
  border-radius: 16px;
  font-size: 13px;
  font-weight: bold;
  box-shadow: 0.5px 0.5px 0 0 #eee;
`;

const NumberChip = styled.div<{ color: string }>`
  padding: 4px 6px;
  background-color: ${({ color }) => color};
  border-radius: 16px;
  opacity: 0.8px;
`;

const Number = styled.label`
  opacity: 1px;
`;

const Text = styled.label`
  margin: 0 8px;
`;

export default PokeNameChip;
