import React from 'react'
import Navbar from '../components/Navbar'
import data from './DataProducts/dummy.json'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
  return (
    <div>
    <Navbar/>
    <div className="container d-flex">
    <div className="row mt-3">
    {
      data.map((item,idx) => (
        <ProductCard product={item} key={idx}/>
      ))
    }
    </div>
    </div>
    </div>
  )
}

export default HomePage
