import React from 'react';
import "./samples.css";
import {screenshotType, timelineItemType} from "../../App.types";
import {useAppSelector} from "../../store/hooks";
import {selectTimeline, selectScreenshots} from "../../store/timelineSlice";

const Samples = () => {
    const samplesData: timelineItemType[] = useAppSelector(selectTimeline);
    const screenshots: screenshotType[] = useAppSelector(selectScreenshots)
    console.log(screenshots);



    return <div className="samples">
        SAMPLES PAGE
    </div>;
}

export default Samples;