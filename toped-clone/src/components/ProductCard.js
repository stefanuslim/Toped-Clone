import React, {useState} from 'react'
import StarRatings from 'react-star-ratings';


const ProductCard = (props) => {
  const { productName, productImage, price, seller, sellerLocation, totalStar, totalReview } = props.product
  const [showSeller, setShowSeller] = useState(false)
  const [likeProduct, setLikeProduct] = useState(false)

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
    marginBottom:"0px",
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
    height:"350px",
    borderRadius:"10px",
    border:"solid 1px grey",
    marginRight: "20px",
    marginBottom: "20px"
  }

  const cardBodyStyle = {
    paddingTop:"0px",
    paddingLeft:"7px",
    paddingRight:"7px",
    paddingBottom: "0px"
  }

  const imageStyle = {
    width: " 195px",
    height: "200px",
    paddingLeft: "0px",
    paddingRight:"0px",
  }

  const likeStyle = {
    position:"absolute",
    top: "8px",
    right:"16px",
    border:"solid 1px black",
    paddingLeft:"5px",
    paddingRight:"5px",
    borderRadius:"50%",
    backgroundColor:"white"
  }

  const handleShowSeller = () => {
    setShowSeller(true)
  }

  const handleCloseSeller = () => {
    setShowSeller(false)
  }

  const handleLikeButton = () => {
    setLikeProduct(!likeProduct)
  }


  return (
    <div className="card" style={cardStyle}>
    <div style={{"position":"relative"}}>
    <div onClick={() => handleLikeButton()} style={likeStyle}>
    {
      likeProduct === false ? (
        <i className="fa fa-heart-o" aria-hidden="true"></i>

      ) : (
        <i className="fa fa-heart" aria-hidden="true"></i>
      )
    }
    </div>
    </div>
    <img className="card-img-top" src={productImage} alt="Card cap" style={imageStyle}/>
    <div className="card-body" style ={cardBodyStyle}>
      <h5 className="card-title" style={cardTitleStyle}>{productName}</h5>
      <p style={cardPriceStyle}>Rp {price.toLocaleString("id-ID")}</p>
      <p style={cardLocationStyle} onMouseEnter={() => handleShowSeller()} onMouseLeave={() => handleCloseSeller()}>{showSeller === true ? seller : sellerLocation}</p>
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
