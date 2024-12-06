import React from 'react';
import { ResponsiveContainer, BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SkillsChart = (props:any) => {
    return (
        <ResponsiveContainer>
            <BarChart
                width={500}
                layout="vertical"
                height={1000}
                data={props.data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" hide />
                <YAxis
                    tick={{fontSize: 10, color:'#808080'}}
                    tickLine={false}
                    tickMargin={20}
                    width={100}
                    type="category" dataKey="label" />
                <Tooltip />
                <Legend />
                <Bar dataKey="rating" fill="#4080B0" />
                <Bar dataKey="years" fill="#40b080" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default SkillsChart;