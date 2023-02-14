import { Col, Divider, Input, Row } from "antd";
import _ from "lodash";
import { useState } from "react";
 
const H18 = (props) => {
   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="1100px">
          <Row>
            <Col style={{ margin: "5px" }} span={24}>
              <Row>
                <Col offset={1} style={{ padding: "6px" }} span={2}></Col>
                <Col offset={1} span={6}>
                  <p className="input-data-placeholder-heading">
                    Total no. of affected employees/ workers
                  </p>
                </Col>
                <Col offset={1} span={9}>
                  <p className="input-data-placeholder-heading">
                    No. of employees/workers that are rehabilitated and placed
                    in suitable employment or whose family members have been
                    placed in suitable employment
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}></Col>
                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">
                    FY Current Financial Year
                  </p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">
                    FY Previous Financial Year
                  </p>
                </Col>

                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">
                    FY Current Financial Year
                  </p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">
                    FY Previous Financial Year
                  </p>
                </Col>
              </Row>
              <Divider orientation="left"></Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Employees
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
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
                  Workers
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
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

export default H18;
