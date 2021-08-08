import PropTypes from "prop-types";
import Image from "next/image";

const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center m-2 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

SmallCard.propTypes = {
  img: PropTypes.string,
  location: PropTypes.string,
  distance: PropTypes.string,
};

export default SmallCard;
