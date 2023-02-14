import { Col, Input, Row } from "antd";
import _ from "lodash";
import { useState } from "react";
 import { SectionA_17 } from "./Type.ts";
 
const H17 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new SectionA_17( {}));

  const prepareData = ({ isCompleted, isValidated } = {}) => {
    const data = new SectionA_17(currentYearData);
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
            <Col style={{ margin: "5px" }} span={24}>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  <p className="input-data-placeholder-heading">Locations</p>
                </Col>
                <Col offset={1} span={5}>
                  <p className="input-data-placeholder-heading">Number</p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  <p className="input-data-placeholder-heading">
                    National (No. of States)
                  </p>
                </Col>
                <Col offset={1} span={5}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        national: e.target.value,
                      });
                    }}
                    value={currentYearData.national}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  <p className="input-data-placeholder-heading">
                    International (No. of States)
                  </p>
                </Col>
                <Col offset={1} span={5}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        international: e.target.value,
                      });
                    }}
                    value={currentYearData.international}
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

export default H17;
