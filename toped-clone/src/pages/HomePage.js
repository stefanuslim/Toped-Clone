import React from 'react'
import Navbar from '../components/Navbar'
import data from '../DummyData/products.json'
import ProductCard from '../components/ProductCard'
import ScrollMenu from 'react-horizontal-scrolling-menu';

const HomePage = () => {
  return (
    <div>
    <Navbar/>
    <div className="container">
    <ScrollMenu
      data={
        data.map((item,idx) => (
          <ProductCard product={item} key={idx}/>
        ))
      }
    />
    </div>
    </div>
  )
}

export default HomePage
