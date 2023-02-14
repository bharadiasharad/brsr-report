import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Col, Divider, Input, Select, Row, Tooltip } from "antd";
import { Option } from "antd/lib/mentions";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
const H16 = (props) => {
  const [entityValue, setEntityValue] = useState(undefined);
   
  const onEntityChange = (data) => {
    setEntityValue(data);
  };

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col offset={2} span={6}></Col>
                <Col style={{ paddingLeft: "10px" }} span={6}>
                  {" "}
                  <p>(A) Employees (Y/N).</p>
                </Col>
                <Col>
                  {" "}
                  <p>(B) Workers (Y/N).</p>
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <p style={{ paddingBottom: "0" }}>
                    Does the entity extend any life insurance or any
                    compensatory package in the event of death of
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={1} span={4}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    onChange={(value) => onEntityChange(value)}
                    defaultValue={entityValue}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={1} span={4}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    onChange={(value) => onEntityChange(value)}
                    defaultValue={entityValue}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
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

export default H16;
