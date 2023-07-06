import React, { useState } from 'react'
import Input from '../../components/Input/Input'
import Catalogue from '../../components/Catalogue/Catalogue'
import ProCard from '../../components/ProCard/ProCard'

import Filter from '../../components/Filter/Filter'
import books from '../../db/data'
// import Categories from '../../components/Categories/Categories'
// import Contact from '../../components/Contact/Contact'
// import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
// import Slider from '../../components/Slider/Slider'
// import "./Home.scss"
const Search = () => {
  const[selectedCategory,setSelectedCategory]=useState(null)
  const [query,setQuery]= useState("")
  const handleInputChange= event =>{
    setQuery(event.target.value)
  }
  const filterditems = books.filter(book => book.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==-1);
  const handleClick = (event) => {setSelectedCategory(event.target.value)
  console.log(event.target.value)}
  function filteredData(books,selected,query){
    let filteredBooks = books

    if(query){
      filteredBooks = filterditems
    }

    if(selected){
      filteredBooks = filteredBooks.filter(
        ({category,title}) =>
        category === selected||title === selected
      );
    }
    return filteredBooks.map(
      ({ image, title,id, rating, price, category }) => (
        <ProCard
          key={Math.random()}
          image={image}
          id={id}
          title={title}
         
          rating={rating}
         
          price={price}
          category ={category}

        />
      )
    );

  }

  const result = filteredData(books,selectedCategory,query);

  return (
    <div className='home'>
    <h1></h1>
    <Input query={query} handleInputChange={handleInputChange} />
    <Filter handleClick={handleClick} />
    <Catalogue result={result}/>

    </div>
  )
}
export default Search;