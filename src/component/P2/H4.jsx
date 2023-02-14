import { Col, Row, Select, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 
const H4 = (props) => {
  const [entityValue, setEntityValue] = useState(undefined);
  const [disclosure, setDisclosure] = useState();

   

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
                    Whether Extended Producer Responsibility (EPR) is applicable
                    to the entity's ?{" "}
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={4}>
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
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    {" "}
                    If yes, whether the waste collection plan is in line with
                    Extended Producer Responsibility (EPR) plan submitted to
                    Pollution Control Boards ?{" "}
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={6}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                    disabled={!entityValue}
                    value={disclosure}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p> If not, provide steps taken to address the same. </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={6}>
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

export default H4;
