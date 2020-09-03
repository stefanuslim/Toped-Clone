import React, {useState} from 'react'
import StarRatings from 'react-star-ratings';
import './styles/Card.css'


const ProductCard = (props) => {
  const { productName, productImage, price, seller, sellerLocation, totalStar, totalReview } = props.product
  const [showSeller, setShowSeller] = useState(false)
  const [likeProduct, setLikeProduct] = useState(false)

  const handleShowHideSeller = () => {
    setShowSeller(!showSeller)
  }

  const handleLikeButton = () => {
    setLikeProduct(!likeProduct)
  }


  return (
    <div className="card">
    <div>
    <div onClick={() => handleLikeButton()} className="likeButton">
    {
      likeProduct === false ? (
        <i className="fa fa-heart-o" aria-hidden="true"></i>

      ) : (
        <i className="fa fa-heart" aria-hidden="true"></i>
      )
    }
    </div>
    </div>
    <img className="card-img-top" src={productImage} alt="Card cap"/>
    <div className="card-body">
      <h5 className="card-title">{productName}</h5>
      <p className="card-price">Rp {price.toLocaleString("id-ID")}</p>
      <p className="card-seller" onMouseEnter={() => handleShowHideSeller()} onMouseLeave={() => handleShowHideSeller()}>{showSeller === true ? seller : sellerLocation}</p>
      <div className="card-stars d-flex">
      <StarRatings
          rating={totalStar === 0 ? 0 : totalStar/totalReview}
          starRatedColor="yellow"
          numberOfStars={5}
          name='rating'
          starDimension="15px"
          starSpacing="0px"
      />
      <p className="card-reviews">({totalReview})</p>
      </div>
    </div>
  </div>
  )
}

export default ProductCard
