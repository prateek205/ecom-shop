import React from 'react'
import "./MainProducts.css"
import { useFilterContext } from '../../context/filteredContext';
import GridView from '../GridView/GridView';
// import ListView from '../ListView/ListView';

const MainProducts = () => {
    const { filter_products, isGridView } = useFilterContext();
  
    if(isGridView === true){
        return <GridView products={filter_products}/>
    }

    // if(setGridView === false){
    //     return <ListView products={filter_products}/>
    // }
}

export default MainProducts