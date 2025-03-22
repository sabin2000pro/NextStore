import React, {useState, useEffect} from 'react'

const ProductCreate = () => {
    const [productCreatePageMounted, setProductCreatePageMounted] = useState(false);
    const [productName, setProductName] = useState('');
    const [isProductCreated, setIsProductCreated] = useState(false);

    useEffect(() => {
        setProductCreatePageMounted(true);
    }, [productCreatePageMounted])

  return (

    <>
      <div>
         <h1>Create Product</h1>
      </div>

    </>
  )
}

export default ProductCreate
