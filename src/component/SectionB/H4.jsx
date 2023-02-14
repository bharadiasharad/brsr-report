import { Col, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import { useState } from "react";
 import { sectionB_4 } from "./Type.ts";

const H4 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new sectionB_4({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    Does the entity have a specified Committee of the Board/
                    Director responsible for decision making on sustainability
                    related issues?{" "}
                  </p>
                </Col>
                <Col offset={2} span={4}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isCommittee: e.target.value,
                      });
                    }}
                    value={currentYearData.isCommittee}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>If yes, provide details.</p>
                </Col>
                <Col offset={2} span={12}>
                  <TextArea
                    placeholder="Add details here.."
                    rows={3}
                    value={currentYearData.details}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        details: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={8}></Col>
          </Row>
        </Col>
        <Col flex="auto"></Col>
      </Row>

      <Row>
         
      </Row>
       
    </div>
  );
};

export default H4;
