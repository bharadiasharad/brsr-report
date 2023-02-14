import { BarChartOutlined } from '@ant-design/icons';
import { Alert, Card, Col, Collapse, Divider, Row, Space } from 'antd';
import { useState } from 'react';
import { P1Heading, SectionAHeading } from '../constants/Heading';
import { BRSRSchema } from '../constants/Principle';
import H1 from './SectionA/H1';
import H2 from './SectionA/H2';
import H3 from './SectionA/H3';
import H4 from './SectionA/H4';
import H5 from './SectionA/H5';
import H6 from './SectionA/H6';
import H7 from './SectionA/H7';
import H8 from './SectionA/H8';
import H9 from './SectionA/H9';
import H10 from './SectionA/H10';
import H11 from './SectionA/H11';
import H12 from './SectionA/H12';
import H13 from './SectionA/H13';
import H14 from './SectionA/H14';
import H15 from './SectionA/H15';
import H16 from './SectionA/H16';
import H17 from './SectionA/H17';
import H18 from './SectionA/H18';
import H19 from './SectionA/H19';
import H20 from './SectionA/H20';
import H21 from './SectionA/H21';
import H22 from './SectionA/H22';
import H23 from './SectionA/H23';
import H24 from './SectionA/H24';

const { Panel } = Collapse;
const { Meta } = Card;

const SectionA = () => {
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
      case SectionAHeading[0].definationId:
        return <H1 />;
      case SectionAHeading[1].definationId:
        return <H2 />;
      case SectionAHeading[2].definationId:
        return <H3 />;
      case SectionAHeading[3].definationId:
        return <H4 />;
      case SectionAHeading[4].definationId:
        return <H5 />;
      case SectionAHeading[5].definationId:
        return <H6 />;
      case SectionAHeading[6].definationId:
        return <H7 />;
      case SectionAHeading[7].definationId:
        return <H8 />;
      case SectionAHeading[8].definationId:
        return <H9 />;
      case SectionAHeading[9].definationId:
        return <H10 />;
      case SectionAHeading[10].definationId:
        return <H11 />;
      case SectionAHeading[11].definationId:
        return <H12 />;
      case SectionAHeading[12].definationId:
        return <H13 />;
      case SectionAHeading[13].definationId:
        return <H14 />;
      case SectionAHeading[14].definationId:
        return <H15 />;
      case SectionAHeading[15].definationId:
        return <H16 />;
      case SectionAHeading[16].definationId:
        return <H17 />;
      case SectionAHeading[17].definationId:
        return <H18 />;
      case SectionAHeading[18].definationId:
        return <H19 />;
      case SectionAHeading[19].definationId:
        return <H20 />;
      case SectionAHeading[20].definationId:
        return <H21 />;
      case SectionAHeading[21].definationId:
        return <H22 />;
      case SectionAHeading[22].definationId:
        return <H23 />;
      case SectionAHeading[23].definationId:
        return <H24 />;
      default:
        return <H1 />;
    }

  }

  return (
    <div>
      <Row >
        <Col offset={2} span={20}>
          <h2>SECTION A</h2>
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
              SectionAHeading.map((data, index) => {
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
export default SectionA;