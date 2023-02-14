import { Col, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P6_17 } from "./Type.ts";

const H17 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P6_17({}));
  const [previousYearData, setPreviousYearData] = useState(new P6_17({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={22}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    With respect to the ecologically sensitive areas reported at
                    Question 10 of Essential Indicators above, provide details
                    of significant direct & indirect impact of the entity on
                    biodiversity in such areas along-with prevention and
                    remediation activities
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={1} span={13}>
                  <TextArea
                    placeholder="Add details here.."
                    rows={5}
                    value={currentYearData.biodiversity}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        biodiversity: e.target.value,
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

export default H17;
