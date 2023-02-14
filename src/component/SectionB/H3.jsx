import { Col, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { useState } from "react";
 import { sectionB_3 } from "./Type.ts";

const H3 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new sectionB_3({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    Details of the highest authority responsible for
                    implementation and oversight of the Business Responsibility
                    policy (ies)
                  </p>
                </Col>
                <Col offset={2} span={12}>
                  <TextArea
                    placeholder="Add statement here.."
                    rows={4}
                    value={currentYearData.authority}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        authority: e.target.value,
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

export default H3;
