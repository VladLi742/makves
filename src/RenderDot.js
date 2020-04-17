import { PureComponent } from 'react';

import data from './data';
import {
    getAverageValue,
    getStdDevValue,
    setCircleDot,
} from "./functions";

export default class RenderDot extends PureComponent {
    render() {
        const { value: curVal, dataKey } = this.props;
        const dot = Object.assign({}, this.props);
        const valArray = data.map(el => el[dataKey]);
        const avgValue = getAverageValue(valArray);
        const stdDevValue = getStdDevValue(data, dataKey);
        const valNotInInterval = curVal <= avgValue - stdDevValue || curVal >= avgValue + stdDevValue;

        if (valNotInInterval) {
            dot.fill = "red";
        }

        return setCircleDot(dot);
    }
}