import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

export const GroupedColumnPlot = (props) => {
  const config = {
    data: props.data,
    isGroup: true,
    xField: 'xField',
    yField: 'yField',
    seriesField: 'name',

    //color: ['#1ca9e6', '#f88c24'],

    // marginRatio: 0.1,
    label: {
      position: 'middle',
      // 'top', 'middle', 'bottom'
      layout: [
        {
          type: 'interval-adjust-position',
        }, 
        {
          type: 'interval-hide-overlap',
        }, 
        {
          type: 'adjust-color',
        },
      ],
    },
  };
  return <Column {...config} />;
};
