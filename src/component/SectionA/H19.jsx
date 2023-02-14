import { Col, Input, Row } from "antd";
import _ from "lodash";
import { useState } from "react";
 import { SectionA_19 } from "./Type.ts";
 
const H19 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new SectionA_19( {}));

  const prepareData = ({ isCompleted, isValidated } = {}) => {
    const data = new SectionA_19(currentYearData);
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
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col offset={1} span={5}></Col>
                <Col offset={1} span={11}>
                  <p className="input-data-placeholder-heading">
                    No. of Females
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col offset={1} span={5}>
                  <p className="input-data-placeholder-heading">Total</p>
                </Col>
                <Col offset={1} span={5}>
                  <p className="input-data-placeholder-heading">No.</p>
                </Col>
                <Col offset={1} span={5}>
                  <p className="input-data-placeholder-heading">%</p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  <p className="input-data-placeholder-heading">
                    Board of Directors
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
                        boardTotal: e.target.value,
                      });
                    }}
                    value={currentYearData.boardTotal}
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
                        boardNumberFemale: e.target.value,
                      });
                    }}
                    value={currentYearData.boardNumberFemale}
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
                        boardPercentageFemale: e.target.value,
                      });
                    }}
                    value={currentYearData.boardPercentageFemale}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  <p className="input-data-placeholder-heading">
                    Key Management Personnel
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
                        kmpTotal: e.target.value,
                      });
                    }}
                    value={currentYearData.kmpTotal}
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
                        kmpNumberFemale: e.target.value,
                      });
                    }}
                    value={currentYearData.kmpNumberFemale}
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
                        kmpPercentageFemale: e.target.value,
                      });
                    }}
                    value={currentYearData.kmpPercentageFemale}
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

export default H19;
