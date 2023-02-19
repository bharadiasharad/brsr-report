import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/plots';

export const PiePlot = (props) => {
  const config = {
    appendPadding: 5,
    data: props.data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'inner',
      offset: '-30%',
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-single-selected',
      },
    ],
  };
  return <Pie {...config} />;
};