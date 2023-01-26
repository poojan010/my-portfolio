import React from "react";

const preLoadKey = "preloader"
const nonPreLoadKey = "preloader-none"

function Pre({ isPreLoading }) {

    const divId = isPreLoading ? preLoadKey : nonPreLoadKey

    return <div id={divId} />;
}

export default Pre;
