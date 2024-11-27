'use client'
import React, { useEffect } from 'react'
import ProductForm from '@/components/dashboard/ProductForm'

const page = ({params}) => {
    useEffect(() => {
        console.log(params.id);
      }, [params.id]);
  return (
    <div>
      <ProductForm productId={params.id} />
    </div>
  )
}

export default page