import React from 'react'
import { useFilterContext } from '../../context/filteredContext';
import GridView from '../GridView/GridView';
import ListView from '../ListView/ListView';

const MainProducts = () => {
    const { filter_products, isGridView } = useFilterContext();
  
    if(isGridView === true){
        return <GridView products={filter_products}/>
    }

    if(isGridView === false){
        return <ListView products={filter_products}/>
    }
}

export default MainProducts