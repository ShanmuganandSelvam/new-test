'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  sales: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

const products: Product[] = [
  { id: '1', name: 'Premium Wireless Headphones', category: 'Electronics', price: 199.99, stock: 45, sales: 128, status: 'In Stock' },
  { id: '2', name: 'Organic Cotton T-Shirt', category: 'Apparel', price: 29.99, stock: 120, sales: 89, status: 'In Stock' },
  { id: '3', name: 'Smart Watch Series 5', category: 'Electronics', price: 299.99, stock: 8, sales: 76, status: 'Low Stock' },
  { id: '4', name: 'Leather Wallet', category: 'Accessories', price: 59.99, stock: 35, sales: 65, status: 'In Stock' },
  { id: '5', name: 'Stainless Steel Water Bottle', category: 'Home & Kitchen', price: 24.99, stock: 0, sales: 54, status: 'Out of Stock' },
  { id: '6', name: 'Wireless Charging Pad', category: 'Electronics', price: 39.99, stock: 28, sales: 47, status: 'In Stock' },
  { id: '7', name: 'Bluetooth Speaker', category: 'Electronics', price: 89.99, stock: 5, sales: 42, status: 'Low Stock' },
];

export default function TopProducts() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="col-span-4 lg:col-span-2">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Top Products</CardTitle>
            <CardDescription>Your best selling products this month</CardDescription>
          </div>
          <div className="relative w-[200px]">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">Price</TableHead>
              <TableHead className="text-right">Sales</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell className="text-right">${product.price.toFixed(2)}</TableCell>
                <TableCell className="text-right">{product.sales}</TableCell>
                <TableCell className="text-right">
                  <Badge variant={
                    product.status === 'In Stock' ? 'default' : 
                    product.status === 'Low Stock' ? 'outline' : 'destructive'
                  }>
                    {product.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
            {filteredProducts.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4 text-muted-foreground">
                  No products found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
