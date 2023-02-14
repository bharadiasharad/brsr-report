import { Col, Divider, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
const H20 = (props) => {
   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col style={{ padding: "6px" }} span={8}></Col>
                <Col offset={1} span={9}>
                  <p className="input-data-placeholder-heading">
                    % of value chain partners(by value of business done with
                    such partners) that were assessed
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Health & Saftey Practices</p>
                </Col>
                <Col offset={1} span={8}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={7}>
                  <p>Working Condition</p>
                </Col>
                <Col offset={2} span={8}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
            </Col>
            <Col span={8}></Col>
          </Row>
          <Divider />
        </Col>
        <Col flex="auto"></Col>
      </Row>

       
       
    </div>
  );
};

export default H20;
