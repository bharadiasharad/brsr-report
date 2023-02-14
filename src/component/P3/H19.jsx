import { Col, Row, Select, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 
const H19 = (props) => {
  const [entityValue, setEntityValue] = useState(undefined);

   

  const onEntityChange = (data) => {
    setEntityValue(data);
  };

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    Does the entity provide transition assistance programs to
                    facilitate continued employability and the management of
                    career endings resulting form retirement or termination of
                    employment ? (Yes/No){" "}
                  </p>
                </Col>
                <Col offset={2} span={4}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    onChange={(value) => onEntityChange(value)}
                    defaultValue={entityValue}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
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

export default H19;
