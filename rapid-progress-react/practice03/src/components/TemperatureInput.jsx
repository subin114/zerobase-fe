import BoilingVerdict from "./BoilingVerdict";
import PropTypes from "prop-types";

const scaleNames = {
  c: "Celsius", // 섭씨
  f: "Fahrenheit", // 화씨
};

const TemperatureInput = (props) => {
  function handleChange(e) {
    props.onTemperatureChange({
      scale: props.scale,
      temperature: e.target.value,
    });
  }

  const scale = scaleNames[props.scale];
  const temperature = props.temperature;

  return (
    <fieldset>
      <legend>Enter temperature in {scale}:</legend>
      <input value={props.temperature} onChange={handleChange} />
      <BoilingVerdict
        scale={props.scale}
        temperature={parseFloat(temperature)}
      />
    </fieldset>
  );
};

TemperatureInput.propTypes = {
  temperature: PropTypes.number.isRequired,
  scale: PropTypes.oneOf(["c", "f"]).isRequired,
  onTemperatureChange: PropTypes.func.isRequired,
};

export default TemperatureInput;
