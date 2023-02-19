import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Card, Col, Divider, Input, Modal, Row, Tooltip } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
import { GroupedColumnPlot } from "../../charts/GroupedColumnPlot";
import { PiePlot } from "../../charts/PiePlot";
 
import { P6_1 } from "./Type.ts";

const H1Graph = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P6_1({}));
  const [previousYearData, setPreviousYearData] = useState(new P6_1({}));

  const data = [
    {
      name: 'Current Year',
      xField: 'Total Electricity Consumption',
      yField: 18.9,
    },
    {
      name: 'Current Year',
      xField: 'Total Fuel Consumption',
      yField: 28.8,
    },
    {
      name: 'Current Year',
      xField: 'Energy Consumption Through other sources',
      yField: 39.3,
    },
    
    {
      name: 'Previous Year',
      xField: 'Total Electricity Consumption',
      yField: 12.4,
    },
    {
      name: 'Previous Year',
      xField: 'Total Fuel Consumption',
      yField: 23.2,
    },
    {
      name: 'Previous Year',
      xField: 'Energy Consumption Through other sources',
      yField: 34.5,
    },
  ];

  const pieData1 = [
    {
      type: 'Total Electricity Consumption',
      value: 27,
    },
    {
      type: 'Total Fuel Consumption',
      value: 25,
    },
    {
      type: 'Energy Consumption Through other sources',
      value: 18,
    },
  ];

  const pieData2 = [
    {
      type: 'Total Electricity Consumption',
      value: 27,
    },
    {
      type: 'Total Fuel Consumption',
      value: 25,
    },
    {
      type: 'Energy Consumption Through other sources',
      value: 18,
    },
  ];


  return (
    <div>
          <Row style={{paddingBottom:"20px", paddingTop: "10px"}}>
            <Col span={24}>
              <Card>
                <GroupedColumnPlot data={data} />
              </Card>
            </Col>
          </Row>
          <Row >
            <Col style={{paddingRight:"10px"}} span={12}>
              <Card>
                <PiePlot data={pieData1} />
              </Card>
            </Col>
            <Col style={{paddingLeft:"10px"}} span={12}>
              <Card>
                <PiePlot data={pieData2} />
              </Card>
            </Col>
          </Row>
    </div>
  );
};

export default H1Graph;
