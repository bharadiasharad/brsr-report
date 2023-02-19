import { BarChartOutlined } from '@ant-design/icons';
import { Alert, Card, Col, Collapse, Divider, Modal, Row, Space } from 'antd';
import { useState } from 'react';
import { P1Heading, P6Heading } from '../constants/Heading';
import { BRSRSchema } from '../constants/Principle';
import H1 from './P6/H1';
import H2 from './P6/H2';
import H3 from './P6/H3';
import H4 from './P6/H4';
import H5 from './P6/H5';
import H6 from './P6/H6';
import H7 from './P6/H7';
import H8 from './P6/H8';
import H9 from './P6/H9';
import H10 from './P6/H10';
import H11 from './P6/H11';
import H12 from './P6/H12';
import H13 from './P6/H13';
import H14 from './P6/H14';
import H15 from './P6/H15';
import H16 from './P6/H16';
import H17 from './P6/H17';
import H18 from './P6/H18';
import H19 from './P6/H19';
import H20 from './P6/H20';
import H21 from './P6/H21';
import H1Graph from './P6/H1Graph';

const { Panel } = Collapse;
const { Meta } = Card;

const Principle6 = () => {
  const [selectedGraphDefinationId, setSelectedGraphDefinationId] = useState("");

  const genExtra = (definationId) => {
    switch (definationId) {
      case P6Heading[0].definationId:
      case P6Heading[1].definationId:
        return (<BarChartOutlined style={{
          zIndex: "9999", color: "blue", padding:"5px", background: "light-gray"
        }} id= {definationId} onClick = {(event) => {
          // If you don't want click extra trigger collapse, you can prevent this:
          debugger;
          
          event.stopPropagation();
          showModal(event.target.parentNode.parentNode.id || event.target.parentNode.id);
        }}
      />)
      default:
        return <></>
    }
  };

  const getGraphData = () => {
    switch (selectedGraphDefinationId) {
      case P6Heading[0].definationId:
        return <H1Graph />
      default:
        return "";
    }
  }

  const getHeadingData = (definationId) => {
    switch (definationId) {
      case P6Heading[0].definationId:
        return <H1 />;
      case P6Heading[1].definationId:
        return <H2 />;
      case P6Heading[2].definationId:
        return <H3 />;
      case P6Heading[3].definationId:
        return <H4 />;
      case P6Heading[4].definationId:
        return <H5 />;
      case P6Heading[5].definationId:
        return <H6 />;
      case P6Heading[6].definationId:
        return <H7 />;
      case P6Heading[7].definationId:
        return <H8 />;
      case P6Heading[8].definationId:
        return <H9 />;
      case P6Heading[9].definationId:
        return <H10 />;
      case P6Heading[10].definationId:
        return <H11 />;
      case P6Heading[11].definationId:
        return <H12 />;
      case P6Heading[12].definationId:
        return <H13 />;
      case P6Heading[13].definationId:
        return <H14 />;
      case P6Heading[14].definationId:
        return <H15 />;
      case P6Heading[15].definationId:
        return <H16 />;
      case P6Heading[16].definationId:
        return <H17 />;
      case P6Heading[17].definationId:
        return <H18 />;
      case P6Heading[18].definationId:
        return <H19 />;
      case P6Heading[19].definationId:
        return <H20 />;
      case P6Heading[20].definationId:
        return <H21 />;
      default:
        return <H1 />;
    }

  }

  const showModal = (definationId) => {
    setSelectedGraphDefinationId(definationId);
  };

  const handleCancel = () => {
    setSelectedGraphDefinationId("");
  };

  return (
    <div>
      <Row >
        <Col offset={2} span={20}>
          <h2>PRINCIPLE 6</h2>
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
      <Row offset={2} justify={"center"} style={{ paddingBottom: "10px" }}>
        <Col xs={12} sm={10} md={3} lg={3} xl={3}>
          <Card style={{ height: "240px", background: "gray" }} >
          </Card>
        </Col>
        <Col xs={20} sm={20} md={17} lg={17} xl={17} style={{ marginLeft: "10px" }}>
          <Card style={{ height: "max-content" }}>
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
            onChange={() => {}}
            ghost
          >
            {
              P6Heading.map((data, index) => {
                return (
                  <>
                    <Panel header={(++index) + ". " + data.title} key={data.title} extra={genExtra(data.definationId)}>
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
      <Modal open={!!selectedGraphDefinationId} title={"Graphical Representation"} onCancel={handleCancel} width={"70%"} style={{ top: 20 }}>
          {getGraphData()}
      </Modal>
    </div>
  );
};
export default Principle6;