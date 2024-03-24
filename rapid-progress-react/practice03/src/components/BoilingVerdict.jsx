import PropTypes from "prop-types";

const BoilingVerdict = (props) => {
  // 섭씨
  if (props.scale === "c") {
    if (props.temperature >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }

  // 화씨
  if (props.temperature >= 212) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
};

BoilingVerdict.propTypes = {
  temperature: PropTypes.number.isRequired,
  scale: PropTypes.oneOf(["c", "f"]).isRequired,
};

export default BoilingVerdict;
