import React from "react";
import {useAppSelector } from '../../store/hooks';
import { skillTreeType} from '../../App.types';
import './skilltree.css';
import {selectSkilltree} from "../../store/skilltreeSlice";
import {ForceGraph2D} from "react-force-graph"; // Or ForceGraph3D for 3D graphs
import {colorLut} from "../../services/colorLut";

interface treeNodeType {
    id: string;
    name: string;
    color?: string;
}

interface treeLinkType {
    source: string;
    target: string;
}

interface graphMapType {
    nodes: treeNodeType[];
    links: treeLinkType[];
}


const Skilltree = () => {
    const [showBranch, setShowBranch ] = React.useState<String[]>([]);
    const skilltreeData: skillTreeType[] = useAppSelector(selectSkilltree);

    const [displayWidth, setDisplayWidth] = React.useState(window.innerWidth - 360);
    const [displayHeight, setDisplayHeight] = React.useState(window.innerHeight-260);

    const fgRef= React.useRef();

    window.addEventListener('resize', () => {
        setDisplayWidth(window.innerWidth-400);
        setDisplayHeight(window.innerHeight-260);
    });


    const getBranchColor= (( depth:number, id:number ): string => {
        switch (depth) {
            case 0: return '#202020';
            case 1: return colorLut.highlight[id+1];
            case 2: return colorLut.color[id];
            case 3: return colorLut.lowlight[id];
        }
        return '#808080';
    })

    const treeToGraph = (tree:skillTreeType[]):graphMapType => {
        let graph:graphMapType = {
            nodes: [],
            links: [],
        }

        const parseGraph = ( tree: skillTreeType[], depth:number) =>
        {   depth++;
            tree.forEach( (node:skillTreeType,id:number) => {
                    graph.nodes.push({id: node.name, name: node.name, color: getBranchColor(depth,id)});
                    if (!showBranch.includes(node.name)) {
                    if (node.children) {
                        node.children.forEach((child: skillTreeType) => {
                            graph.links.push({source: node.name, target: child.name});
                        })
                        parseGraph(node.children, depth);
                    }
                }
            });

        }
        parseGraph(tree,-1);
        console.log(graph);
        return graph;
    }

    const graphData = treeToGraph(skilltreeData);

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
        <div className="tree">
            {RenderTree(skilltreeData)}
        </div>
        <div className="forceGraph">
            <ForceGraph2D
                ref={fgRef}
                graphData={graphData}
                nodeLabel="name"
                width={displayWidth}
                height={displayHeight}
                linkDirectionalArrowLength={3.5}
                linkDirectionalArrowRelPos={1}
                linkCurvature={0}
                minZoom={1.75}


                nodeCanvasObject={(node, ctx, globalScale) => {
                    const label = node.name;
                    const fontSize = 4;
                    ctx.font = `${fontSize}px Sans-Serif`;
                    if(node.x && node.y) {
                        ctx.beginPath();
                        ctx.strokeStyle = '#404040';
                        ctx.fillStyle= `${node.color}`;
                        ctx.arc(node.x,node.y,14,0, Math.PI * 2, true);
                        ctx.fill();
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.textAlign = 'center';
                        ctx.strokeStyle = 'black';
                        ctx.lineWidth=0.5;
                        ctx.fillStyle = '#f0f0f0';
                        ctx.textBaseline = 'middle';
                        ctx.fillText(label, node.x, node.y);
                        ctx.stroke();
                    }
                }}
                nodePointerAreaPaint={(node, color, ctx) => {
                    if(node.x && node.y) {
                        ctx.fillStyle = color;
                    }
                }}
            />
        </div>
    </div>
}

export default Skilltree;


