import React from "react";

import {filterType} from "../../App.types";
import classNames from "classnames";
import {colorLut} from "../../services/colorLut";
import "./filterselect.css";

const FilterSelect = (props:any)  => {

    const handleClick = (item:filterType) => {
        if(props.filterupdate) {
            props.filterupdate(item);
        }
    }
    
    const filterItems= props.filters.map((item:filterType, idx:number) => {
        const btnClass = classNames({
            'menu-item': true,
            'selected': item.enabled,
            'notselected': !item.enabled,
        });

        return <div
            onClick={() => handleClick(item)}
            style={ item.enabled ? { backgroundColor: colorLut.highlight[idx] } : { backgroundColor: colorLut.lowlight[idx] }}
            className={btnClass}
            key={item.id}>
            {item.label}
        </div>;

    });

    return <div className="filter-items">
        {filterItems}
    </div>
}

export default FilterSelect;