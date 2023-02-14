import { Col, Input, Row } from "antd";
import _ from "lodash";
import { useState } from "react";
 import { SectionA_20 } from "./Type.ts";
 
const H20 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new SectionA_20( {}));
  const [previousYearData, setPreviousYearData] = useState(new SectionA_20( {}));

  const prepareData = ({ isCompleted, isValidated } = {}) => {
    const data = new SectionA_20(currentYearData);
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
        <Col flex="1200px">
          <Row>
            <Col style={{ margin: "5px" }} span={24}>
              <Row>
                <Col style={{ padding: "6px" }} span={4}></Col>
                <Col border span={9}>
                  <p className="input-data-placeholder-heading">
                    Current Financial Year
                  </p>
                </Col>
                <Col span={9}>
                  <p className="input-data-placeholder-heading">
                    Previous Financial Year
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={4}></Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">Male</p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">Female</p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">Total</p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">Male</p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">Female</p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">Total</p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  Permanent Employees
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentEmployeeMale: e.target.value,
                      });
                    }}
                    value={currentYearData.permanentEmployeeMale}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentEmployeeFemale: e.target.value,
                      });
                    }}
                    value={currentYearData.permanentEmployeeFemale}
                  />
                </Col>
                <Col style={{ paddingRight: "6px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentEmployeeTotal: e.target.value,
                      });
                    }}
                    value={currentYearData.permanentEmployeeTotal}
                  />
                </Col>
                <Col
                  style={{ paddingRight: "2px", paddingLeft: "6px" }}
                  span={3}
                >
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        permanentEmployeeMale: e.target.value,
                      });
                    }}
                    value={previousYearData.permanentEmployeeMale}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        permanentEmployeeFemale: e.target.value,
                      });
                    }}
                    value={previousYearData.permanentEmployeeFemale}
                  />
                </Col>
                <Col style={{ paddingRight: "6px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        permanentEmployeeTotal: e.target.value,
                      });
                    }}
                    value={previousYearData.permanentEmployeeTotal}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  Contractual
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        contractualEmployeeMale: e.target.value,
                      });
                    }}
                    value={currentYearData.contractualEmployeeMale}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        contractualEmployeeFemale: e.target.value,
                      });
                    }}
                    value={currentYearData.contractualEmployeeFemale}
                  />
                </Col>
                <Col style={{ paddingRight: "6px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        contractualEmployeeTotal: e.target.value,
                      });
                    }}
                    value={currentYearData.contractualEmployeeTotal}
                  />
                </Col>
                <Col
                  style={{ paddingRight: "2px", paddingLeft: "6px" }}
                  span={3}
                >
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        contractualEmployeeMale: e.target.value,
                      });
                    }}
                    value={previousYearData.contractualEmployeeMale}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        contractualEmployeeFemale: e.target.value,
                      });
                    }}
                    value={previousYearData.contractualEmployeeFemale}
                  />
                </Col>
                <Col style={{ paddingRight: "6px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        contractualEmployeeTotal: e.target.value,
                      });
                    }}
                    value={previousYearData.contractualEmployeeTotal}
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

export default H20;
