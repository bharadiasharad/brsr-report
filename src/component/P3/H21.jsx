import { Col, Row, Select, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 
const H21 = (props) => {
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
                    Provide details of any corrective actions taken or underway
                    to address significant risks / concerns arising from
                    assessments of health and safety practices and working
                    conditions of value chain partners.{" "}
                  </p>
                </Col>
                <Col style={{ padding: "10px" }} offset={2} span={6}>
                  <TextArea
                    size="large"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 15 }}
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

export default H21;
