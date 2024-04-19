import React, { useEffect } from "react";
import PageHeader from "../../components/PageHeader";
import { Component, Fragment, useState } from "react";
import Search from "./Search";
import Pagination from "./Pagination";
import ShopCategory from "./ShopCategory";
import Tags from "./Tags";
import ProductCards from "./ProductCards";
const showResult = "Pagina 01 - 12 de 139 Resultados";
import Data from "/src/products.json"

const Shop = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);

  //   categoría colores activos
const [selectedCategory, setSelectedCategory] = useState("All");

  // paginación
  // Obtener productos actuales para mostrar
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12; // Función para cambiar la página actual.

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Función para cambiar la página actual.
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // filtrado basado en categorías
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setSelectedCategory(curcat); 
    setProducts(newItem);
    // console.log(selectedCategory)
  };

  return (
    <div>
      <PageHeader title={"Nuestros Productos"} curPage={"Productos"} />

      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResult}</p>
                  <div
                    className={`product-view-mode ${
                      GridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
                <div>
                  <ProductCards
                    products={currentProducts}
                    GridList={GridList}
                  />
                </div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} GridList={GridList} />
                {/* <ShopCategory /> */}
                <ShopCategory
                  filterItem={filterItem}
                  setItem={setProducts}
                  menuItems={menuItems}
                  setProducts={setProducts}
                  selectedCategory={selectedCategory }
                />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
