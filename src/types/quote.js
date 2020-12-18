import PropTypes from "prop-types";

const quoteType = PropTypes.shape({
  quote: PropTypes.string.isRequired,

  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  characterDirection: PropTypes.oneOf(["Left", "Right"]).isRequired,
}).isRequired;

export default quoteType;
