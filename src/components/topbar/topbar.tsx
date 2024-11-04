import './topbar.css';
import classNames from 'classnames';

const topbar = (props:any) => {
    const handleClick  = (item:any) => {
        props.updatemenu(item);
    }

    const menuItems= props.menu.map((item:any) => {
        const btnClass = classNames({
            'menu-item': true,
            'selected': item.selected,
            'notselected': !item.selected,
        });
      return <div
          onClick={() => handleClick(item)}
          className={btnClass} key={item.key}>
          {item.label}
      </div>;
    });

    return <div className="topbar">
        <div className="menu-items">
          {menuItems}
        </div>
    </div>
}

export default topbar;