import React from 'react';
import "./samples.css";
import {screenshotType} from "../../App.types";
import {useAppSelector} from "../../store/hooks";
import {selectScreenshots, selectTimeline} from "../../store/timelineSlice";

const Samples = () => {
    const screenshots: screenshotType[] = useAppSelector(selectScreenshots);
    const imgTiles = screenshots.map((img: any, index:number) => {
        return <div key={`${img.company}${index}`}>
            <img
                alt={`${img.description}`}
                src={require(`../../assets/img/${img.fileName}`)} height={64} width={100}/>
            {img.company}
            {img.description}
        </div>;
    });
    return <div className="samples">
        {imgTiles}
    </div>;
}

export default Samples;