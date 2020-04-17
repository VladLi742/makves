import React, { PureComponent } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts';

import RenderDot from './RenderDot';
import data from './data';

export default class SimpleLineChart extends PureComponent {
    render() {
        return (
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                    dot={<RenderDot dataKey="pv" />}
                />
                <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#82ca9d"
                    dot={<RenderDot dataKey="pv" />}
                />
            </LineChart>
        );
    }
}
