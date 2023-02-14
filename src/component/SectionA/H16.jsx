import { Col, Input, Row } from "antd";
import _ from "lodash";
import { useState } from "react";
 import { SectionA_16 } from "./Type.ts";
 
const H16 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new SectionA_16( {}));

  const prepareData = ({ isCompleted, isValidated } = {}) => {
    const data = new SectionA_16(currentYearData);
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
                  <p className="input-data-placeholder-heading">Location</p>
                </Col>
                <Col offset={1} span={5}>
                  <p className="input-data-placeholder-heading">
                    Number of Plants
                  </p>
                </Col>
                <Col offset={1} span={5}>
                  <p className="input-data-placeholder-heading">
                    Number of Offices
                  </p>
                </Col>
                <Col offset={1} span={5}>
                  <p className="input-data-placeholder-heading">Total</p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  <p className="input-data-placeholder-heading">National</p>
                </Col>
                <Col offset={1} span={5}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        nationalPlant: e.target.value,
                      });
                    }}
                    value={currentYearData.nationalPlant}
                  />
                </Col>
                <Col offset={1} span={5}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        nationalOffice: e.target.value,
                      });
                    }}
                    value={currentYearData.nationalOffice}
                  />
                </Col>
                <Col offset={1} span={5}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        nationalTotal: e.target.value,
                      });
                    }}
                    value={currentYearData.nationalTotal}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  <p className="input-data-placeholder-heading">
                    International
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
                        internationalPlant: e.target.value,
                      });
                    }}
                    value={currentYearData.internationalPlant}
                  />
                </Col>
                <Col offset={1} span={5}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        internationalOffice: e.target.value,
                      });
                    }}
                    value={currentYearData.internationalOffice}
                  />
                </Col>
                <Col offset={1} span={5}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        internationalTotal: e.target.value,
                      });
                    }}
                    value={currentYearData.internationalTotal}
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

export default H16;
