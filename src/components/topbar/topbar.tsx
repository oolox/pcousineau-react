import './topbar.css';
import classNames from 'classnames';
import {colorLut} from "../../services/colorLut";

const topbar = (props:any) => {
    const handleClick  = (item:any) => {
        props.updatemenu(item);
    }
    let idx=-1;

    const menuItems= props.menu.map((item:any) => {
        idx++;
        const btnClass = classNames({
            'menu-item': true,
            'selected': item.selected,
            'notselected': !item.selected,
        });
      return <div
          onClick={() => handleClick(item)}
          style={ item.selected ? { backgroundColor: colorLut.highlight[idx] } : { backgroundColor: colorLut.color[idx] }}
          className={btnClass} key={item.id}>
          {item.label}
      </div>;
    });

    return <div>
        <div>
            Paul Cousineau (v0.1)
        </div>
        <div className="topbar">
            <div className="menu-items">
                {menuItems}
            </div>
        </div>
    </div>
}

export default topbar;