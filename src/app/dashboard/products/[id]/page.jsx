'use client'
import React, { useEffect } from 'react'
import { use } from "react";
import ProductForm from '@/components/dashboard/ProductForm'

const page = ({params}) => {
  const resolvedParams = use(params);
  return (
    <div>
      <ProductForm productId={resolvedParams.id} />
    </div>
  )
}

export default page