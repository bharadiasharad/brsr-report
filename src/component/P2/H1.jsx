import { Col, Divider, Input, Row } from "antd";
import _ from "lodash";
import { useState } from "react";
 import TextArea from "antd/lib/input/TextArea";

const H1 = (props) => {
   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="1100px">
          <Row>
            <Col style={{ margin: "5px" }} span={24}>
              <Row>
                <Col style={{ padding: "6px" }} span={3}></Col>
                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">
                    Current Financial Year
                  </p>
                </Col>
                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">
                    Previous Financial Year
                  </p>
                </Col>
                <Col offset={1} span={6}>
                  <p className="input-data-placeholder-heading">
                    Details of Improvements in environmental and social impacts
                  </p>
                </Col>
              </Row>

              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  R&D
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col offset={1} span={8}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                  />
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Capex
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col offset={1} span={8}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                  />
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

export default H1;
