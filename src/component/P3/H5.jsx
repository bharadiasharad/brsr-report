import { Col, Divider, Input, Row } from "antd";
import _ from "lodash";
import { useState } from "react";
 
const H5 = (props) => {
   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="1100px">
          <Row>
            <Col style={{ margin: "5px" }} span={24}>
              <Row>
                <Col style={{ padding: "6px" }} span={3}></Col>
                <Col offset={1} span={7}>
                  <p className="input-data-placeholder-heading">
                    Permanent employees
                  </p>
                </Col>
                <Col offset={0} span={9}>
                  <p className="input-data-placeholder-heading">Contractual</p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}></Col>
                <Col offset={2} span={3}>
                  <p className="input-data-placeholder-heading">
                    Retrun to work rate
                  </p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">
                    Retention rate
                  </p>
                </Col>

                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">
                    Retrun to work rate
                  </p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">
                    Retention rate
                  </p>
                </Col>
              </Row>
              <Divider orientation="left">Gender </Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Male
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Female
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Total
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
            </Col>
            <Col span={8}></Col>
          </Row>
        </Col>
        <Col flex="auto"></Col>
      </Row>

       
       
    </div>
  );
};

export default H5;
