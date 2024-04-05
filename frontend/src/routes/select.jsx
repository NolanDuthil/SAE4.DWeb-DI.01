import React, { useState } from "react";
import { fetchCat, fetchCatId } from "../lib/loaders";
import { Outlet, useLoaderData } from "react-router-dom";
import ListCategories from "../ui/List/ListCategories";
import FilmSelect from "../ui/Film/FilmSelect";

export async function loader() {
  return await fetchCat();
}

export default function Select() {
  const data = useLoaderData();

  return (
    <section className="bg-background h-screen">
      <FilmSelect data={data} />
      <Outlet/>
    </section>
  );
}