import { BarChartOutlined } from '@ant-design/icons';
import { Alert, Card, Col, Collapse, Divider, Row, Space } from 'antd';
import { useState } from 'react';
import { P3Heading } from '../constants/Heading';
import { BRSRSchema } from '../constants/Principle';
import H1 from './P3/H1';
import H2 from './P3/H2';
import H3 from './P3/H3';
import H4 from './P3/H4';
import H5 from './P3/H5';
import H6 from './P3/H6';
import H7 from './P3/H7';
import H8 from './P3/H8';
import H9 from './P3/H9';
import H10 from './P3/H10';
import H11 from './P3/H11';
import H12 from './P3/H12';
import H13 from './P3/H13';
import H14 from './P3/H14';
import H15 from './P3/H15';
import H16 from './P3/H16';
import H17 from './P3/H17';
import H18 from './P3/H18';
import H19 from './P3/H19';
import H20 from './P3/H20';
import H21 from './P3/H21';
import H22 from './P3/H22';

const { Panel } = Collapse;
const { Meta } = Card;

const Principle3 = () => {
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
      case P3Heading[0].definationId:
        return <H1 />;
      case P3Heading[1].definationId:
        return <H2 />;
      case P3Heading[2].definationId:
        return <H3 />;
      case P3Heading[3].definationId:
        return <H4 />;
      case P3Heading[4].definationId:
        return <H5 />;
      case P3Heading[5].definationId:
        return <H6 />;
      case P3Heading[6].definationId:
        return <H7 />;
      case P3Heading[7].definationId:
        return <H8 />;
      case P3Heading[8].definationId:
        return <H9 />;
      case P3Heading[9].definationId:
        return <H10 />;
      case P3Heading[10].definationId:
        return <H11 />;
      case P3Heading[11].definationId:
        return <H12 />;
      case P3Heading[12].definationId:
        return <H13 />;
      case P3Heading[13].definationId:
        return <H14 />;
      case P3Heading[14].definationId:
        return <H15 />;
      case P3Heading[15].definationId:
        return <H16 />;
      case P3Heading[16].definationId:
        return <H17 />;
      case P3Heading[17].definationId:
        return <H18 />;
      case P3Heading[18].definationId:
        return <H19 />;
      case P3Heading[19].definationId:
        return <H20 />;
      case P3Heading[20].definationId:
        return <H21 />;
      case P3Heading[21].definationId:
        return <H22 />;
      default:
        return <H1 />;
    }

  }

  return (
    <div>
      <Row >
        <Col offset={2} span={20}>
          <h2>PRINCIPLE 3</h2>
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
              P3Heading.map((data, index) => {
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
export default Principle3;