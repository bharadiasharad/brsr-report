import { Col, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 
import { P6_19 } from "./Type.ts";

const H19 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P6_19({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    Does the entity have a business continuity and disaster
                    management plan?{" "}
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={4}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.is}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        is: e.target.value,
                      });
                    }}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>Give details in 100 words/ web link.</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={12}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add details here.."
                    rows={3}
                    value={currentYearData.link}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        link: e.target.value,
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

       
       
    </div>
  );
};

export default H19;
