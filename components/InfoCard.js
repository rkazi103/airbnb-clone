import PropTypes from "prop-types";

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat,
}) => {
  return <div></div>;
};

InfoCard.propTypes = {
  img: PropTypes.string,
  location: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  star: PropTypes.number,
  price: PropTypes.string,
  total: PropTypes.string,
  long: PropTypes.number,
  lat: PropTypes.number,
};

export default InfoCard;
