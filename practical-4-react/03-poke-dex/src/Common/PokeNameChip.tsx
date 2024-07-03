import styled from "@emotion/styled";

const PokeNameChip = () => {
  return (
    <Chip>
      <NumberChip>
        <Number>001</Number>
      </NumberChip>
      <Text>이상해씨</Text>
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

const NumberChip = styled.div`
  padding: 4px 6px;
  background-color: orange;
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
