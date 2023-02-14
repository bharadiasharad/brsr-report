import { Col, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P4_1 } from "./Type.ts";

const H1 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P4_1({}));

   
  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    Describe the processes for identifying key stakeholder
                    groups of the entity
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={12}>
                  <TextArea
                    placeholder="Add details here.."
                    rows={3}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        mechanism: e.target.value,
                      });
                    }}
                    value={currentYearData.mechanism}
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

export default H1;
