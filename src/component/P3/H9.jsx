import { Col, Divider, Input, Row } from "antd";
import _ from "lodash";
import { useState } from "react";
 
const H9 = (props) => {
   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="1100px">
          <Row>
            <Col style={{ margin: "5px" }} span={24}>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  <p>Category</p>
                </Col>
                <Col offset={1} span={9}>
                  <p className="input-data-placeholder-heading">
                    FY Current Financial Year
                  </p>
                </Col>
                <Col offset={1} span={9}>
                  <p className="input-data-placeholder-heading">
                    FY Previous Financial Year{" "}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}></Col>
                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">Total</p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">No</p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">%</p>
                </Col>
                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">Total</p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">No</p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">%</p>
                </Col>
              </Row>
              <Divider orientation="left">Employees </Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Male
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
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Female
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
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Total
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
              <Divider orientation="left">Contractual </Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Male
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
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Female
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
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Total
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

export default H9;
