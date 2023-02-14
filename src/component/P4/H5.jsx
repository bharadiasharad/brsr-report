import { Col, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P4_5 } from "./Type.ts";

const H3 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P4_5({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    Provide details of instances of engagement with, and actions
                    taken to, address the concerns of vulnerable/ marginalized
                    stakeholder groups
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={12}>
                  <TextArea
                    placeholder="Add details here.."
                    rows={3}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        instancesOfEngagement: e.target.value,
                      });
                    }}
                    value={currentYearData.instancesOfEngagement}
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

export default H3;
