import { ReactPropTypes } from "react";
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

function Product(props) {
    const {
        name,
        price,
        image,
        id
    }  = props

    return (
        <>
                <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                    <div className="featured__item">
                        <div className="featured__item__pic set-bg" data-setbg="img/featured/feature-3.jpg">
                            <NavLink to={`/Detail/${id}`}>
                            <img src = {image}/>
                            </NavLink>
                            <ul className="featured__item__pic__hover">
                                <li><a href="#"><i className="fa fa-heart" key={1}></i></a></li>
                                <li><a href="#"><i className="fa fa-retweet" key={2}></i></a></li>
                                <li><a href="#"><i className="fa fa-shopping-cart" key={3}></i></a></li>
                            </ul>
                        </div>
                        <div className="featured__item__text">
                            <h6><a href="#">{name}</a></h6>
                            <h5>${price}</h5>
                        </div>
                    </div>
                </div>
        </>
    );
}

// Product.propTypes = {
//     productName: PropTypes.string.isRequired,
//     productPrice: PropTypes.number.isRequired,
//     productImage: PropTypes.string
// }

export default Product;
