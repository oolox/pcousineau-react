import './topbar.css';
import classNames from 'classnames';
import {menuItem} from "../../App.types";

const topbar = (props:any) => {
    const handleClick  = (item:any) => {
        props.updatemenu(item);
    }

    const menuItems= props.menu.map((item:menuItem,idx:number) => {
        const btnClass = classNames({
            'menu-item': true,
            'selected': item.selected,
            'notselected': !item.selected,
        });
      return <div
          onClick={() => handleClick(item)}
          className={btnClass} key={item.id}>
          {item.label}
      </div>;
    });

    return <div className="header">
        <div className="title-bar">
            <div className="title-content">
                <div className="title">
                    Paul Cousineau
                </div>
                <div className="subtitle">
                    Web Applications Developer
                </div>
            </div>
            <div className="tools">
                <div className="link">
                    <a target="_blank" href="mailto:oolotronic@hotmail.com" rel="noreferrer">oolotronic&#64;hotmail.com</a>
                </div>
                <div className="link">
                    <a target="_blank" href="https://www.linkedin.com/in/paul-cousineau-b3319461" rel="noreferrer">LinkedIn</a>
                </div>
                <div className="link">
                    <a target="_blank" href="./assets/pcousineauResumeReact.pdf" rel="noreferrer">Resume</a>
                </div>
            </div>
        </div>
        <div className="topbar">
            <div className="menu-items">
                {menuItems}
            </div>
        </div>
    </div>
}

export default topbar;