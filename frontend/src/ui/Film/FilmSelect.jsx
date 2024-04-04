import React from "react"

export default function FilmSelect({ data, onCategoryChange }) {
  const handleCategoryChange = (event) => {
    onCategoryChange(event.target.value);
  };

  return (
    <div className="pt-28">
      <div className="bg-bgSelectCat text-forground w-full h-[10rem] flex items-center p-5 rounded-md">
        <select id="category" name="category" onChange={handleCategoryChange} className="mt-1 block w-1/5 h-2/3 py-2 px-3 bg-bgIcon rounded-md shadow-sm sm:text-sm text-center hover:bg-bgIcon/90">
          <option className="bg-bgSelectCat text-forground text-md" value="" hidden disabled selected>Catégories</option>
          {data.map((category, index) => (
            <option className="bg-bgSelectCat text-forground text-xl" key={index} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}