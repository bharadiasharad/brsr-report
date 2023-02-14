import { Col, Divider, Input, Row } from "antd";
import _ from "lodash";
import { useState } from "react";
 
const H2 = (props) => {
   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="1100px">
          <Row>
            <Col style={{ margin: "5px" }} span={24}>
              <Row>
                <Col style={{ padding: "6px" }} span={3}></Col>
                <Col offset={1} span={9}>
                  <p className="input-data-placeholder-heading">FY 21</p>
                </Col>
                <Col offset={1} span={9}>
                  <p className="input-data-placeholder-heading">FY 20</p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}></Col>
                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">
                    No. of employees covered as a % of total empolyees
                  </p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">
                    No. of workers covered as a % of total workers
                  </p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">
                    Deducted and deposited with the authority (Y/N/N.A)
                  </p>
                </Col>
                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">
                    No. of employees covered as a % of total empolyees
                  </p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">
                    No. of workers covered as a % of total workers
                  </p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">
                    Deducted and deposited with the authority (Y/N/N.A)
                  </p>
                </Col>
              </Row>
              <Divider orientation="left">Benefits </Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  PF
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={3}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <br />
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Grauity
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={3}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <br />
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  ESI
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={3}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <br />
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Others - please specify
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={3}>
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

export default H2;
