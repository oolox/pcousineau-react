import React from "react";
import { skillTree, skillTreeType } from '../../services/skillTreeData';


const Skilltree = () => {

    console.log('skilltree => ',skillTree);

    const RenderTree = (data:skillTreeType[]) => {
        return (
            <div style={{ paddingLeft: "20px" }}>
                {data.map((node:skillTreeType) => {
                    return (
                        <div key={node.name}> {node.name}
                            {(node.children && node.children.length > 0) ? RenderTree(node.children)  : ''}
                        </div>
                    );
                })}
            </div>
        );
    };

    return <div className="skilltree">
        {RenderTree(skillTree)}
    </div>;
}

export default Skilltree;


