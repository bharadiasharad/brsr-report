import { Col, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 import { Divider } from "antd";
const H11 = (props) => {
   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="1200px">
          <Row>
            <Col style={{ margin: "5px" }} span={23}>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col offset={2} span={4}>
                  <p className="input-data-placeholder-heading">Category</p>
                </Col>
                <Col span={6}>
                  <p className="input-data-placeholder-heading">FY 20</p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">FY 21</p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  Lost Time Injury Frequency Rate (LTIFR) (per one
                  million-person hours worked)
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <p>Employees</p>
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input size="medium" type="number" required />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={3} span={4}>
                  <p> Workers </p>
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Divider></Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  Total recordable work-related injuries
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <p>Employees</p>
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input size="medium" type="number" required />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={3} span={4}>
                  <p>Workers</p>
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Divider></Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  No. of fatalities
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <p>Employees</p>
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input size="medium" type="number" required />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={3} span={4}>
                  <p>Workers</p>
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Divider />
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  High consequence work-related injury or ill-health (excluding
                  fatalities)
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <p>Employees</p>
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input size="medium" type="number" required />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={3} span={4}>
                  <p>Workers</p>
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
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

export default H11;
