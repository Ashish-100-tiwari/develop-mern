import React, { Fragment, useEffect, useState } from 'react'
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import {  getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import { useParams } from 'react-router-dom';
import Pagination from "react-js-pagination"

const Products = () => {

    const  dispatch = useDispatch()
    const [currentPage,setCurrentPage]=useState(1);

    const {products,loading,error,productsCount,resultPerPage}=useSelector((state)=>state.products)
    
    const setCurrentPageNo=(e)=>{
        setCurrentPage(e)
    }
    // const keyword=match.params.keyword;
    const {keyword} = useParams();
    useEffect(() => {
        dispatch(getProduct(keyword,currentPage));
    }, [dispatch,keyword,currentPage]);

      
  return <Fragment>
            {loading ? <Loader/> :
            <Fragment>
                <h2 className='productsHeading'>Product</h2>
                <div className='products'>
                    {products && products.map((product)=>(
                        <ProductCard key={product._id} product={product}/>
                    ))}
                </div>
            {/* <div className="filterBox">
                <Typography>Price</Typography>
                <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={25000}
                />
                <Typography>Categories</Typography>
                <ul className="categoryBox">
                {categories.map((category) => (
                    <li
                    className="category-link"
                    key={category}
                    onClick={() => setCategory(category)}
                    >
                    {category}
                    </li>
                ))}
            </ul>

            <fieldset>
              <Typography component="legend">Ratings Above</Typography>
              <Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
            </fieldset>
          </div> */}
            {resultPerPage < productsCount && (
                <div className="paginationBox">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  pageRangeDisplayed={5}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>
            )}

            </Fragment>
            }
        </Fragment>
  
};

export default Products