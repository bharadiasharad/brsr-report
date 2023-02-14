import { Col, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
const H13 = (props) => {
   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="1200px">
          <Row>
            <Col style={{ margin: "5px" }} span={23}>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col offset={1} span={8}>
                  <p className="input-data-placeholder-heading">
                    FY Current Financial Year
                  </p>
                </Col>
                <Col offset={1} span={8}>
                  <p className="input-data-placeholder-heading">
                    FY Previous Financial Year
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col offset={1} span={4}>
                  <p className="input-data-placeholder-heading">
                    Filed during the year
                  </p>
                </Col>
                <Col span={4}>
                  <p className="input-data-placeholder-heading">
                    Pending resolution at the end of year
                  </p>
                </Col>
                <Col offset={1} span={4}>
                  <p className="input-data-placeholder-heading">
                    Filed during the year
                  </p>
                </Col>
                <Col span={4}>
                  <p className="input-data-placeholder-heading">
                    Pending resolution at the end of year
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  Working Conditions
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input size="medium" type="number" required />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={8}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    autoSize={{ minRows: 2, maxRows: 4 }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={8}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    autoSize={{ minRows: 2, maxRows: 4 }}
                  />
                </Col>
              </Row>
              <Row style={{ paddingTop: "12px" }}>
                <Col style={{ padding: "6px" }} span={6}>
                  Health & Safety
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input size="medium" type="number" required />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={8}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    autoSize={{ minRows: 2, maxRows: 4 }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={8}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    autoSize={{ minRows: 2, maxRows: 4 }}
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

export default H13;
