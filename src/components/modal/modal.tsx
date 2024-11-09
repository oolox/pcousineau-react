import React from 'react';
import "./modal.css"

const modal = (props: any) => {
    const handleClick = (item: any) => {
        props.close(item);
    }

    return <div className="modal fade-in" onClick={handleClick}>
        <div className="screenTitle">
            <b>{props.screen.company}: </b>{props.screen.description}
        </div>
        <img
            className="screenImg"
            src={require(`../../assets/img/${props.screen.fileName}`)} height={180} width={240}/>
    </div>
}

export default modal;