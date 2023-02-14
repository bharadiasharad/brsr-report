import { Col, Input, Row } from "antd";
import { useState } from "react";
 import { SectionA_8 } from "./Type.ts";
 
const H8 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new SectionA_8( {}));
  const prepareData = ({ isCompleted, isValidated } = {}) => {
    const data = new SectionA_8(currentYearData);
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
                  <p>Website</p>
                </Col>
                <Col offset={2} span={12}>
                  <Input
                    type="text"
                    required
                    style={{ marginTop: "10px" }}
                    value={currentYearData.website}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        website: e.target.value,
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

export default H8;
