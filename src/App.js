import React, { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";
import { PiLessThanThin } from "react-icons/pi";
import { PiGreaterThanThin } from "react-icons/pi";
import { FaAngleDown } from "react-icons/fa";

import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

const SAMPLE = [
  {
    id: 1,
    title: "Recycled Backpack",
    price: 49.99,
    image: "/assets/backpack.jpg",
    category: "bags",
  },
  {
    id: 2,
    title: "Yellow Toy",
    price: 12.99,
    image: "/assets/toy.jpg",
    category: "toys",
  },
  {
    id: 3,
    title: "White Hat",
    price: 19.99,
    image: "/assets/hat.jpg",
    category: "accessories",
  },
];

function App() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebar, setSidebar] = useState(false);
  const [filters, setFilters] = useState({ search: "", category: "all" });

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setFiltered(res.data);
      })
      .catch((err) => {
        console.warn("API failed, using sample data", err);
        setProducts(SAMPLE);
        setFiltered(SAMPLE);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let res = products;
    if (filters.category !== "all") {
      res = res.filter((p) =>
        (p.category || "")
          .toLowerCase()
          .includes(filters.category.toLowerCase())
      );
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      res = res.filter((p) => (p.title || "").toLowerCase().includes(q));
    }
    setFiltered(res);
  }, [filters, products]);

  return (
    <div className="app-root">
      <Helmet>
        <title>Discover Our Products — Appscrip PLP</title>
        <meta
          name="description"
          content="Browse our collection of products with filters and responsive layout"
        />
      </Helmet>

      <Header />
      <main className="main-container">
        <div className="mobile-home-shop-button">
          <button className="home-btn">HOME</button>
          <span>|</span>
          <button className="shop-btn">SHOP</button>
        </div>
        <div className="page-heading">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus{" "}
            <br /> scelerisque. Dolor integer scelerisque nibh amet mi ut
            elementum dolor..
          </p>
        </div>
        <div className="mobile-filter-recommended-container">
          <hr />
          <div className="filter-recom-flex">
            <button className="filter-recom-btn">FILTER</button>
            <span>|</span>
            <button className="filter-recom-btn">
              RECOMMENDED <FaAngleDown />
            </button>
          </div>
          <hr />
        </div>
        <hr className="mobile-hr-hide" />
        <div className="filter-show-hide-container">
          <div className="filter-show-hide-container">
            <span>{products.length} ITEMS</span>
            {sidebar ? (
              <span
                onClick={() => setSidebar(false)}
                className="filter-hide-show"
              >
                <PiGreaterThanThin />
                SHOW FILTER
              </span>
            ) : (
              <span
                onClick={() => setSidebar(true)}
                className="filter-hide-show"
              >
                <PiLessThanThin /> HIDE FILTER{" "}
              </span>
            )}
          </div>
          <select>
            <option>Recommended</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE: HIGH TO LOW</option>
            <option>PRICE: LOW TO HIGH</option>
          </select>
        </div>
        <hr className="mobile-hr-hide" />
        <div className="product-filter-container">
          {!sidebar && (
            <aside className="sidebar">
              <Filters
                filters={filters}
                setFilters={setFilters}
                products={products}
              />
            </aside>
          )}
          <section className="content">
            {loading ? (
              <div className="loading">Loading products…</div>
            ) : (
              <ProductGrid products={filtered} />
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
