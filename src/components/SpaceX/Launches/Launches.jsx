import React, {useState, useEffect} from 'react';

import {spacexService} from "../../../services/spacexService";
import Launch from "../Launche/Launch";
import css from "./Launches.module.css";

const Launches = () => {
    const [missions, setMissisions] = useState([])
    useEffect(() => {
        spacexService.getAll()
            .then(({data}) => setMissisions(data))
    }, []);

    return (
        <div className={css.launches}>
            {missions.filter(m => m.launch_year !== "2020")
                .map(mission => <Launch key={mission.flight_number} mission={mission}/>)}
        </div>
    );
};

export default Launches;