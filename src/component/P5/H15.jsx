import { Col, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P5_15 } from "./Type.ts";

const H15 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P5_15({}));
   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    {" "}
                    Provide details of any corrective actions taken or underway
                    to address significant risks / concerns arising from the
                    assessments of Value Chain.
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={12}>
                  <TextArea
                    placeholder="Add details here.."
                    rows={4}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        correctiveAction: e.target.value,
                      });
                    }}
                    value={currentYearData}
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

export default H15;
