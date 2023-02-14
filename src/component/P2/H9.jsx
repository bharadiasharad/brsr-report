import { Col, Divider, Input, Row } from "antd";
import _ from "lodash";
import { useState } from "react";
 
const H9 = (props) => {
   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="1200px">
          <Row>
            <Col style={{ margin: "5px" }} span={24}>
              <Row>
                <Col style={{ padding: "" }} span={2}></Col>
                <Col span={4}>
                  <p
                    className="input-data-placeholder-heading"
                    paddingRight="10px"
                  >
                    Indicate Product Category
                  </p>
                </Col>

                <Col offset={1} span={9}>
                  <p className="input-data-placeholder-heading">
                    Reclaimed products and their packaging materials as % of
                    total products sold in respective category
                  </p>
                </Col>
              </Row>
              <Row>
                <Col offset={2} span={4}>
                  <Input size="medium" type="text" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={6}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>{" "}
              <br />
              <Row>
                <Col offset={2} span={4}>
                  <Input size="medium" type="text" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={6}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <br />
              <Row>
                <Col offset={2} span={4}>
                  <Input size="medium" type="text" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={6}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <br />
              <Row>
                <Col style={{ paddingRight: "2px" }} offset={2} span={4}>
                  <Input size="medium" type="text" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={6}>
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
