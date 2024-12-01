import React from 'react';
import "./samples.css";
import {screenshotType, timelineItemType} from "../../App.types";
import {useAppSelector} from "../../store/hooks";
import {selectTimeline} from "../../store/timelineSlice";
import Modal from "../modal/modal";
import Cats from "../cats/cats";



const Samples = () => {
    const timeline: timelineItemType[] = useAppSelector(selectTimeline);
    let shots: screenshotType[] = [];

    timeline.map((item: timelineItemType): any => {
        shots = [...shots, ...item.screenshots ?
            item.screenshots.map((ss: screenshotType): screenshotType => {
                return {...ss, company: item.company}
            }) : []]
    });

    const screenshots: screenshotType[] = shots;
    const [modalScreen, setModalScreen] = React.useState<screenshotType>({});

    const selectImg = (img: screenshotType): void => {
        setModalScreen(img);
    }

    const onClose = (): void => {
        setModalScreen({});
    }

    const imgTiles = screenshots.map((img: any, index: number) => {
        return <div key={`${img.company}${index}`} className="screenshot">
            <img
                className="screen-image"
                alt={`${img.description}`}
                onClick={() => selectImg(img)}
                src={require(`../../assets/img/${img.fileName}`)}
                width={240}
                height={180}
            />
            <div className="screen-company">
                {img.company}
            </div>
            <div className="screen-description">
                {img.description}
            </div>

        </div>
            ;
    });

    return <div className="samples">
        {modalScreen.fileName && <Modal close={() => onClose()} screen={modalScreen}/>}

        {/*<Cats></Cats>*/}

        <div className="screenshot-container">
            {imgTiles}
        </div>
    </div>;
}

export default Samples;