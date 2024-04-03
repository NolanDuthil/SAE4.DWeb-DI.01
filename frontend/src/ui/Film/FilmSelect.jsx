import React from "react"

export default function FilmSelect({ data }) {
  return (
    <>
      <div className="bg-bgSelectCat text-forground w-full h-[10rem] flex items-center p-5 rounded-md">
        <select id="category" name="category" className="mt-1 block w-1/5 h-2/3 py-2 px-3  bg-bgIcon rounded-md shadow-sm sm:text-sm text-center ">
          <option className="bg-bgSelectCat text-forground text-md" value="" hidden disabled selected>Catégories</option>
          {data.category.map((category, index) => (
            <option className="bg-bgSelectCat text-forground text-xl" key={index} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}