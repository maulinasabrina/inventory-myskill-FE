import React from 'react'
import { useState, useEffect } from "react";
import {  useNavigate } from 'react-router-dom';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from './button';
import { Pencil, Trash2 } from 'lucide-react';

// import { products } from "@/data/product"

interface Product {
  id: number;
  title: string;
  description: string;
  image : string;
}



export default function SimpleTable() {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate()


   const handleDelete = async (id: number) => {
      const confirmed = window.confirm("Are you sure you want to delete this product?")

      if (!confirmed) return

      try {
        await fetch(`http://localhost:8000/api/products/${id}`, {
          method: "DELETE",
        })

        setProducts((prev) => prev.filter((p) => p.id !== id))
      } catch (error) {
        console.error(error)
      }
    }
    
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
       <Table className='m-3.5 table-fixed w-full'>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[20px]">ID</TableHead>
                <TableHead className="w-[70px]">Title</TableHead>
                <TableHead className="w-[250px]">Description</TableHead>
                <TableHead className="w-[50px]">Image</TableHead>
                <TableHead className="w-[70px]">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="">
                    {product.id}
                  </TableCell>
                  <TableCell className='max-w-[50px] break-words whitespace-normal'>{product.title}</TableCell>
                  <TableCell className='max-w-[220px] break-words whitespace-normal '>{product.description}</TableCell>
                  <TableCell>
                    <img
                      src={`http://localhost:8000/storage/${product.image}`}
                      alt={product.title}
                      width="80"
                    />
                  </TableCell>
                   <TableCell className="flex gap-2">

                      {/* EDIT BUTTON */}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => navigate(`/edit-product/${product.id}`)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>

                      {/* DELETE BUTTON */}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(product.id)}
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>

                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
    </div>
  )
}
