import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Col, Divider, Input, Row, Tooltip } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
const H14 = (props) => {
   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col offset={2} span={6}></Col>
                <Col offset={1} span={12}>
                  <p className="input-data-placeholder-heading">
                    % of your plants and offices that were assessed (by entity
                    or statutory authorities or third parties)
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <p style={{ paddingBottom: "0" }}>
                    Health and safety practices
                  </p>
                </Col>
                <Col offset={1} span={9}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span style={{ paddingBottom: "0" }}>Working Conditions</span>
                </Col>
                <Col offset={1} span={9}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
            </Col>
            <Col span={8}></Col>
          </Row>

          <Row>
            <Col style={{ margin: "5px" }} span={18}></Col>
            <Col span={8}></Col>
          </Row>
        </Col>
        <Col flex="auto"></Col>
      </Row>

       
       
    </div>
  );
};

export default H14;
