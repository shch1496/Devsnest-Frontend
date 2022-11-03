import React, { useState, useEffect } from 'react'

function Products() {
  
  console.log("Products component called")
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null)

  function getProductByCategory() {
    fetch(`https://fakestoreapi.com/products/category/${selectedCategory}`)
            .then(res=>res.json())
            .then(products=> {
                console.log("Products fetched", products);
                setProducts(products);
                
            })
  }

  function getAllCategories() {
    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(json=> {
        setCategories(json);
        console.log(json)
    })
  }

  useEffect(() => {
    console.log("Without dependency")
    getAllCategories();
  }, [])

  useEffect(() => {
       console.log("Use effect will be called when the category is modified", selectedCategory)
       if(selectedCategory){
        getProductByCategory()
       }
  }, [selectedCategory])


  function handleChange(e) {
     setSelectedCategory(e.target.value);
  }


  return (
    <div>
        <select name="categories" id="categories" onChange={handleChange}>
            {categories.map((category) => <option id={category} key={category} value={category}>{category}</option>)}
        </select>
        <h1>{selectedCategory}</h1>
        <section className="product">
         
            {products.map(product =>{ 
             return <section className="product-item" key={product.id}>
               <img style={{height: 200, width:200, objectFit: "contain" }} src={product.image} alt={product.title} />
               <section>
                  <h2>{product.title}</h2>
                  {/* <h3>{product.description}</h3> */}
               </section>
            </section>
            })
            
            }
        </section>

    </div>
  )
}

export default Products