import { Col, Row, Select, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 
const H10 = (props) => {
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
                    a. Whether an occupational health and safety management
                    system has been implemented by the entity?{" "}
                  </p>
                </Col>
                <Col offset={2} span={4} style={{ paddingTop: "15px" }}>
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
                  <p> If yes, the coverage such system? </p>
                </Col>
                <Col style={{ paddingTop: "15px" }} offset={2} span={6}>
                  <TextArea
                    disabled={!entityValue}
                    value={disclosure}
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    b. What are the processes used to identify work-related
                    hazards and assess risks on a routine and non-routine basis
                    by the entity?{" "}
                  </p>
                </Col>
                <Col style={{ paddingTop: "15px" }} offset={2} span={6}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    c. Whether you have processes for workers to report the work
                    related hazards and to remove themselves from such risks.
                    (Y/N){" "}
                  </p>
                </Col>
                <Col offset={2} span={4} style={{ paddingTop: "15px" }}>
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
                    d. Do the employees/ worker of the entity have access to
                    non-occupational medical and healthcare services? (Yes/ No){" "}
                  </p>
                </Col>
                <Col offset={2} span={4} style={{ paddingTop: "15px" }}>
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
        </Col>
        <Col flex="auto"></Col>
      </Row>

       
       
    </div>
  );
};

export default H10;
