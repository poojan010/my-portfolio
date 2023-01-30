import React from "react";
import Typewriter from "typewriter-effect";

import constants from "../../constants";
const { softwareDev, rnDev, enthusiaticDev, openSourceDev } = constants


const strings = [
    softwareDev,
    rnDev,
    enthusiaticDev,
    openSourceDev
]

const Type = () => {
    return (
        <Typewriter
            options={{
                strings,
                loop: true,
                autoStart: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Type;
