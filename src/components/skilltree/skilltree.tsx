import React from "react";
import { skillTree, skillTreeType } from '../../services/skillTreeData';
import './skilltree.css';

const Skilltree = () => {

    const [showBranch, setShowBranch ] = React.useState<String[]>([]);

    const toggleBranch = ( node: skillTreeType ) => {
            showBranch.includes(node.name) ?
                setShowBranch(showBranch.filter( (name) => node.name !== name)) :
                setShowBranch([...showBranch,node.name]);
    }

    const RenderTree = (data:skillTreeType[]) => {
        return (
            <div style={{ paddingLeft: "20px" }}>
                {data.map((node:skillTreeType) => {
                    return (
                        <div key={node.name} style={{ 'cursor': (node.children && node.children.length>0) ? 'pointer' : 'default'}}>
                            <div
                                style={ { display: 'inline-flex'}}
                                onClick={() =>  (node.children && node.children.length>0) && toggleBranch(node) }>
                                    <div style={{ width: '1rem' }}>
                                        {node.children ?  showBranch.includes(node.name) ? "+" :'-' : '' }
                                    </div>
                                    <div>
                                        {node.name}
                                    </div>
                            </div>
                            <div style={{ 'display': showBranch.includes(node.name) ? "none" :'inline' }}>
                                { node.children  && RenderTree(node.children) }
                            </div>
                        </div>
                )
                    ;
                })}
            </div>
        );
    };

    return <div className="skilltree">
        {RenderTree(skillTree)}
    </div>;
}

export default Skilltree;


