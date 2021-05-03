import React from 'react'
import { Tabs, Tab } from "react-bootstrap"
import MeditationGuide from "./MeditationGuide"
import MusicTherapy from "./MusicTherapy"

function Therapy() {
    return (
        <div>
            <Tabs defaultActiveKey="meditation">
                <Tab eventKey="meditation" title="Meditation Guide">
                    <MeditationGuide />
                </Tab>
                <Tab eventKey="music" title="Music Therapy">
                    <MusicTherapy />
                </Tab>
            </Tabs>
        </div>
    )
}

export default Therapy
