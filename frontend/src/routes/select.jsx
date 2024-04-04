import React from "react";
import { fetchCat } from "../lib/loaders";
import { useLoaderData } from "react-router-dom";
import FilmSelect from "../ui/Film/FilmSelect";
import List from "../ui/List/List";
import { useState } from 'react';

export async function loader(){
    return await fetchCat();
}

export default function Select() {
    const data = useLoaderData();
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };
  
    return (
      <>
        <section className="bg-background h-screen">
          <FilmSelect data={data} onCategoryChange={handleCategoryChange}/>
          <List data={data} selectedCategory={selectedCategory}/>
        </section>
      </>
    )
  }