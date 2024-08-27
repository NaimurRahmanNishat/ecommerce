import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);
    
    return (
        <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
            <div className="overflow-hidden">
                <img src={image[0]} alt={name} className="hover:scale-110 transition ease-in-out" />
            </div>
            <p className="pt-3 pl-1 text-sm">{name}</p>
            <p className="text-sm font-medium">{currency}{price}</p>
        </Link>
    );
}

ProductItem.propTypes = {
    id: PropTypes.string.isRequired,          // Assuming 'id' is a string, change if it's a different type
    image: PropTypes.arrayOf(PropTypes.string).isRequired, // Assuming 'image' is an array of strings
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,       // Assuming 'price' is a number
};

export default ProductItem;