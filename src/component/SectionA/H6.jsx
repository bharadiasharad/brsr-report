import { Col, Input, Row } from "antd";
import _ from "lodash";
import { useState } from "react";
 import { SectionA_6 } from "./Type.ts";
 
const H6 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new SectionA_6( {}));
  const prepareData = ({ isCompleted, isValidated } = {}) => {
    const data = new SectionA_6(currentYearData);
    const obj = {
      data: data,
      isCompleted: isCompleted,
      isValidated: isValidated,
    };
    return {
      data: obj,
      definationId: props.headingData.definationId,
      unitId: props.unitId,
    };
  };

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>Email Address</p>
                </Col>
                <Col offset={2} span={12}>
                  <Input
                    type="email"
                    required
                    style={{ marginTop: "10px" }}
                    value={currentYearData.email}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        email: e.target.value,
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

export default H6;
