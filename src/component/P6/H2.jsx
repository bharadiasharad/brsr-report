import { Col, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 
import { P6_2 } from "./Type.ts";

const H2 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P6_2({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    Does the entity have any sites / facilities identified as
                    designated consumers (DCs) under the Performance, Achieve
                    and Trade (PAT) Scheme of the Government of India?{" "}
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={4}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isDesignatedConsumer: e.target.value,
                      });
                    }}
                    value={currentYearData.isDesignatedConsumer}
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
                    If yes, disclose whether targets set under the PAT scheme
                    have been achieved. In case targets have not been achieved,
                    provide the remedial action taken, if any
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={12}>
                  <TextArea
                    placeholder="Add details here.."
                    rows={3}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        targetAchieved: e.target.value,
                      });
                    }}
                    value={currentYearData.targetAchieved}
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

export default H2;
