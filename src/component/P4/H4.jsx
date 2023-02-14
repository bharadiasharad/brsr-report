import { Col, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 
import { P4_4 } from "./Type.ts";

const H4 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P4_4({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    Whether stakeholder consultation is used to support the
                    identification and management of environmental, and social
                    topics{" "}
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={4}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isSupportIdentification: e.target.value,
                      });
                    }}
                    value={currentYearData.isSupportIdentification}
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
                    provide details of instances as to how the inputs received
                    from stakeholders on these topics were incorporated into
                    policies and activities of the entity
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={12}>
                  <TextArea
                    placeholder="Add details here.."
                    rows={3}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        details: e.target.value,
                      });
                    }}
                    value={currentYearData.details}
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
