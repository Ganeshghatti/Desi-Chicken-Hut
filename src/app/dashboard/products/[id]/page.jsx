'use client'
import React, { useEffect } from 'react'
import { use } from "react";
import ProductForm from '@/components/dashboard/ProductForm'

const page = ({params}) => {
  const {id} = use(params);
  return (
    <div>
      <ProductForm productId={id} />
    </div>
  )
}

export default page