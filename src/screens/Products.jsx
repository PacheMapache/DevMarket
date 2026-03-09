/*
- useState([])          -> aqui guardar los productos
- useEffect()           -> se ejecuta una sola vez al cargar la pagina
- fetch(url)            -> llama a la API
- then()                -> convierte la respuesta en JSON
- setProducts(data)     -> guarda los productos en el estado
*/ 
import {useEffect, useState} from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);



  return (
    <div className="pt-24 px-6">
      <h1 className="text-4xl font-bold text-gray-900">Productos</h1>
      {/*GRID RESPONSIVE*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map(product =>(
          <div
            key={product.id}
            className="bg-white shadow rounded-xl p-4 hover:shadow-lg" 
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto object-contain"
            /> 

            <div className="flex justify-between items-center mt-4">
              <h3 className="font-semibold text-sm line-clamp-1">
                {product.title}
              </h3>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                {product.category}
              </span>
            </div>
            
            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
              {product.description}
            </p>

            <div className="flex justify-between text-sm mt-3">
              <span>
                ⭐ {product.rating.rate}
              </span>
              <span className="text-gray-500">
                ({product.rating.count} reviews)
              </span>
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="text-blue-600 font-bold text-lg">
                ${product.price}
              </p>
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                Comprar
              </button>
            </div>
            
          </div>
        ))}



      </div>
    </div>
  );
}