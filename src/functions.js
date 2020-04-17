import React from 'react';

const setCircleDot = data => {
    const {
        cx,
        cy,
        width,
        height,
        stroke,
        strokeWidth,
        fill,
    } = data;
    return (
        <circle
            r="3"
            stroke={stroke}
            stroke-width={strokeWidth}
            fill={fill}
            width={width}
            height={height}
            cx={cx}
            cy={cy}>
        </circle>
    );
};

const getAverageValue = data => {
    const sum = data.reduce((acc, curVal) => acc + curVal);
    return sum / data.length;
};

const getSQRTValue = (data, avgValue) => {
    const sum = data.reduce((acc, curVal) => acc + Math.pow(curVal - avgValue, 2), 0);
    return sum / data.length;
};

const getStdDevValue = (data, key) => {
    const valArray = data.map(el => el[key]);
    const avgValue = getAverageValue(valArray);
    const sqrtValue = getSQRTValue(valArray, avgValue);
    return Math.sqrt(sqrtValue);
};

export {
    setCircleDot,
    getAverageValue,
    getStdDevValue,
    getSQRTValue,
};
