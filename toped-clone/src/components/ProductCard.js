import React, {useState} from 'react'
import StarRatings from 'react-star-ratings';


const ProductCard = (props) => {
  const { productName, productImage, price, seller, sellerLocation, totalStar, totalReview } = props.product
  const [showSeller, setShowSeller] = useState(false)

  const starsStyle = {
    textAlign:'left'
  }

  const cardTitleStyle = {
    fontFamily: `"open-sans",tahoma,sans-serif`,
    fontSize:14,
    fontWeight:"650",
    textAlign:"Left",
    marginBottom:"0px",
  }

  const cardPriceStyle = {
    fontFamily: `"open-sans",tahoma,sans-serif`,
    fontSize:14,
    fontWeight:"650",
    textAlign:"Left",
    color:"#FA591D",
    marginBottom:"0px",
  }
  const cardLocationStyle = {
    fontFamily: `"open-sans",tahoma,sans-serif`,
    fontSize:12,
    fontWeight:"Light",
    textAlign:"Left",
    color:"black",
    marginBottom:"0px"
  }

  const reviewStyle = {
    fontFamily: `"open-sans",tahoma,sans-serif`,
    fontSize:12,
    fontWeight:"Light",
    textAlign:"Left",
    color:"black",
    marginTop:"8px",
    marginBottom:"0px"
  }

  const cardStyle = {
    width:"200px",
    height:"200px",
    borderRadius:"10px",
    marginRight: "20px",
  }

  const cardBodyStyle = {
    paddingTop:"0px",
    paddingLeft:"7px",
    paddingRight:"7px",
    paddingBottom: "0px"
  }

  const imageStyle = {
    width: " 200px",
    height: "200px",
    paddingLeft: "0px",
    paddingRight:"0px",
  }

  const handleShowSeller = () => {
    setShowSeller(true)
  }

  const handleCloseSeller = () => {
    setShowSeller(false)
  }


  return (
    <div class="card" style={cardStyle}>
    <img class="card-img-top" src={productImage} alt="Card cap" style={imageStyle}/>
    <div class="card-body" style ={cardBodyStyle}>
      <h5 class="card-title" style={cardTitleStyle}>{productName}</h5>
      <p style={cardPriceStyle}>Rp.{price}</p>
      <div style={cardLocationStyle} onMouseEnter={() => handleShowSeller()} onMouseOver={() => handleCloseSeller()}>{showSeller === true ? seller : sellerLocation}</div>
      <div style={starsStyle} className="d-flex">
      <StarRatings
          rating={totalStar === 0 ? 0 : totalStar/totalReview}
          starRatedColor="yellow"
          numberOfStars={5}
          name='rating'
          starDimension="15px"
          starSpacing="0px"
      />
      <p style={reviewStyle}>({totalReview})</p>
      </div>
    </div>
  </div>
  )
}

export default ProductCard
