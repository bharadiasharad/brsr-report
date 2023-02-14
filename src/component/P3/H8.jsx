import { Col, Divider, Input, Row } from "antd";
import _ from "lodash";
import { useState } from "react";
 
const H8 = (props) => {
   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="2000px">
          <Row>
            <Col style={{ margin: "5px" }} span={24}>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  <p>Category</p>
                </Col>
                <Col style={{ padding: "6px" }} border span={8}>
                  <p> FY Current Financial Year</p>
                </Col>
                <Col style={{ padding: "6px" }} border span={9}>
                  <p> FY Previous Financial Year</p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={2}></Col>
                <Col span={1}>
                  <p className="input-data-placeholder-heading">Total</p>
                </Col>
                <Col span={5}>
                  <p className="input-data-placeholder-heading">
                    On Health and safety measures
                  </p>
                </Col>
                <Col span={4}>
                  <p className="input-data-placeholder-heading">
                    On Skill upgradation
                  </p>
                </Col>
                <Col style={{ paddingLeft: "6px" }} span={3}>
                  <p className="input-data-placeholder-heading">Total</p>
                </Col>
                <Col span={4}>
                  <p className="input-data-placeholder-heading">
                    On Health and safety measures
                  </p>
                </Col>
                <Col span={4}>
                  <p className="input-data-placeholder-heading">
                    On Skill upgradation
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={2}></Col>
                <Col span={2}></Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">No.</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">%</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">No.</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">%</p>
                </Col>
                <Col span={3}></Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">No.</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">%</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">No.</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">%</p>
                </Col>
              </Row>
              <Divider orientation="center">Employees </Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={2}>
                  {" "}
                  Male
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2} style={{ paddingRight: "5px" }}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col offset={1} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={2}>
                  {" "}
                  Female
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col offset={1} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={2}>
                  Total
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col offset={1} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Divider orientation="center">Workers </Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={2}>
                  {" "}
                  Male
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col offset={1} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={2}>
                  {" "}
                  Female
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col offset={1} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={2}>
                  {" "}
                  Total
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col offset={1} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
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

export default H8;
