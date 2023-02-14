import { BarChartOutlined } from '@ant-design/icons';
import { Alert, Card, Col, Collapse, Divider, Row, Space } from 'antd';
import { useState } from 'react';
import { P8Heading } from '../constants/Heading';
import { BRSRSchema } from '../constants/Principle';
import H1 from './P8/H1';
import H2 from './P8/H2';
import H3 from './P8/H3';
import H4 from './P8/H4';
import H5 from './P8/H5';
import H6 from './P8/H6';
import H7 from './P8/H7';
import H8 from './P8/H8';
import H9 from './P8/H9';
import H10 from './P8/H10';

const { Panel } = Collapse;
const { Meta } = Card;

const Principle8 = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const genExtra = () => (
    <BarChartOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );

  const getHeadingData = (definationId) => {
    switch (definationId) {
      case P8Heading[0].definationId:
        return <H1 />;
      case P8Heading[1].definationId:
        return <H2 />;
      case P8Heading[2].definationId:
        return <H3 />;
      case P8Heading[3].definationId:
        return <H4 />;
      case P8Heading[4].definationId:
        return <H5 />;
      case P8Heading[5].definationId:
        return <H6 />;
      case P8Heading[6].definationId:
        return <H7 />;
      case P8Heading[7].definationId:
        return <H8 />;
      case P8Heading[8].definationId:
        return <H9 />;
      case P8Heading[9].definationId:
        return <H10 />;
      default:
        return <H1 />;
    }

  }

  return (
    <div>
      <Row >
        <Col offset={2} span={20}>
          <h2>PRINCIPLE 8</h2>
        </Col>
      </Row>
      <Row style={{ paddingBottom: "10px" }}>
        <Col offset={2} span={20}>
          {/* <Card style={{ width: "100%", backgroundImage: "url('https://picsum.photos/1200/350')" }}> */}
          <Card style={{ width: "100%", background: "green" }}>
            <h1 style={{ color: "white" }}>Environment</h1>
            <p style={{ color: "white" }}>{BRSRSchema[0].description}</p>
          </Card>
        </Col>
      </Row>
      <Row style={{ paddingBottom: "10px" }}>
        <Col offset={2} span={3}>
          <Card style={{ height: "240px", background: "gray" }} >
          </Card>
        </Col>
        <Col span={17} style={{ marginLeft: "10px" }}>
          <Card style={{ height: "240px" }}>
            <Meta title="Executive Director & CFOs Message" description="Road Towards a Sustainable Future The world we live in today is radically impacted by climate change and irresponsible consumption leading to resource scarcity. This is the time to act responsibly and embed sustainability into the way of doing business. We have set ambitious Environment, Social and Governance (ESG) goals towards water and carbon neutrality, zero waste to landfill, green chemistry and well-being of employees and partners and have already made significant progress. We articulated our ESG framework as Championing." />
            <Divider />
            <Meta title="Ritech Tiwari" description="Executive Director & CFO" />
          </Card>
        </Col>
      </Row>
      <Row >
        <Col offset={2} span={20}>
          <h3>Essential Indicators</h3>
          <Collapse
            defaultActiveKey={['1']}
            onChange={onChange}
            ghost
          >
            {
              P8Heading.map((data, index) => {
                return (
                  <>
                    <Panel header={(++index) + ". " + data.title} key={data.title} extra={genExtra()}>
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Alert message={data.description} type="info" />
                        <Card>{getHeadingData(data.definationId)}</Card>
                      </Space>
                    </Panel>
                    <Divider />
                  </>
                )
              })
            }

          </Collapse>
        </Col>
      </Row>
    </div>
  );
};
export default Principle8;