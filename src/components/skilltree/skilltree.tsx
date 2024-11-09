import React from "react";
import {useAppSelector } from '../../store/hooks';
import { skillTreeType} from '../../App.types';
import './skilltree.css';
import {selectSkilltree} from "../../store/skilltreeSlice";

const Skilltree = () => {

    const [showBranch, setShowBranch ] = React.useState<String[]>([]);
    const skilltreeData: skillTreeType[] = useAppSelector(selectSkilltree);

    const toggleBranch = ( node: skillTreeType ) => {
            showBranch.includes(node.name) ?
                setShowBranch(showBranch.filter( (name) => node.name !== name)) :
                setShowBranch([...showBranch,node.name]);
    }

    const RenderTree = (data:skillTreeType[]) => {
        return (
            <div className="tree">
                {data.map((node:skillTreeType) => {
                    return (
                        <div key={node.name} style={{ 'cursor': (node.children && node.children.length>0) ? 'pointer' : 'default'}}>
                            <div
                                className="node"
                                onClick={() =>  (node.children && node.children.length>0) && toggleBranch(node) }>
                                    <div className="node-name">
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
        {RenderTree(skilltreeData)}
    </div>;
}

export default Skilltree;


