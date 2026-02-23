import React from 'react'
import { useState, useEffect } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// import { products } from "@/data/product"

interface Product {
  id: number;
  title: string;
  description: string;
  image : string;
}

export default function SimpleTable() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/products");

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
          if (error instanceof Error) {
          console.log(error.message);
            }
      }
    };

    getProducts();
  }, []);


  return (
    <div>
       <Table className='m-3.5'>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Image</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">
                    {product.id}
                  </TableCell>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>
                    <img
                      src={`http://localhost:8000/storage/${product.image}`}
                      alt={product.title}
                      width="80"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
    </div>
  )
}
