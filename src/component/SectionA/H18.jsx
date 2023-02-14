import { Col, Divider, Input, Row } from "antd";
import _ from "lodash";
import { useState } from "react";
 import { SectionA_18 } from "./Type.ts";
 
const H18 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new SectionA_18( {}));

  const prepareData = ({ isCompleted, isValidated } = {}) => {
    const data = new SectionA_18(currentYearData);
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
                <Col span={3}>
                  <p className="input-data-placeholder-heading">Total</p>
                </Col>
                <Col span={6}>
                  <p className="input-data-placeholder-heading">Male</p>
                </Col>
                <Col span={6}>
                  <p className="input-data-placeholder-heading">Female</p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={4}></Col>
                <Col span={3}></Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">No.</p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">%</p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">No.</p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">%</p>
                </Col>
              </Row>
              <Divider orientation="left">
                Employees (including differently abled){" "}
              </Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  Permanent
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
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
                    value={Number(currentYearData.permanentEmployeeTotal)}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentEmployeeNumberMale: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.permanentEmployeeNumberMale)}
                  />
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentEmployeePercentageMale: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.permanentEmployeePercentageMale)}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentEmployeeNumberFemale: e.target.value,
                      });
                    }}
                    value={currentYearData.permanentEmployeeNumberFemale}
                  />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentEmployeePercentageFemale: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.permanentEmployeePercentageFemale)}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  Other than Permanent (Contractual)
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherThanOtherThanPermanentEmployeeTotal:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.otherThanOtherThanPermanentEmployeeTotal)
                    }
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherThanOtherThanPermanentEmployeeNumberMale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.otherThanOtherThanPermanentEmployeeNumberMale)
                    }
                  />
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherThanOtherThanPermanentEmployeePercentageMale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.otherThanOtherThanPermanentEmployeePercentageMale)
                    }
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherThanOtherThanPermanentEmployeeNumberFemale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.otherThanOtherThanPermanentEmployeeNumberFemale)
                    }
                  />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherThanOtherThanPermanentEmployeePercentageFemale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.otherThanOtherThanPermanentEmployeePercentageFemale)
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  Total
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalEmployeeTotal: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.totalEmployeeTotal)}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalEmployeeNumberMale: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.totalEmployeeNumberMale)}
                  />
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalEmployeePercentageMale: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.totalEmployeePercentageMale)}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalEmployeeNumberFemale: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.totalEmployeeNumberFemale)}
                  />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalEmployeePercentageFemale: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.totalEmployeePercentageFemale)}
                  />
                </Col>
              </Row>
              <Divider orientation="left">
                Workers (including differently abled){" "}
              </Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  Permanent
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentWorkerTotal: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.permanentWorkerTotal)}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentWorkerNumberMale: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.permanentWorkerNumberMale)}
                  />
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentWorkerPercentageMale: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.permanentWorkerPercentageMale)}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentWorkerNumberFemale: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.permanentWorkerNumberFemale)}
                  />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentWorkerPercentageFemale: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.permanentWorkerPercentageFemale)}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  Other than Permanent
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherThanOtherThanPermanentWorkerTotal: e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.otherThanOtherThanPermanentWorkerTotal)
                    }
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherThanOtherThanPermanentWorkerNumberMale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.otherThanOtherThanPermanentWorkerNumberMale)
                    }
                  />
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherThanOtherThanPermanentWorkerPercentageMale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.otherThanOtherThanPermanentWorkerPercentageMale)
                    }
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherThanOtherThanPermanentWorkerNumberFemale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.otherThanOtherThanPermanentWorkerNumberFemale)
                    }
                  />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherThanOtherThanPermanentWorkerPercentageFemale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.otherThanOtherThanPermanentWorkerPercentageFemale)
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  Total
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalWorkerTotal: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.totalWorkerTotal)}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalWorkerNumberMale: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.totalWorkerNumberMale)}
                  />
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalWorkerPercentageMale: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.totalWorkerPercentageMale)}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalWorkerNumberFemale: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.totalWorkerNumberFemale)}
                  />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalWorkerPercentageFemale: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.totalWorkerPercentageFemale)}
                  />
                </Col>
              </Row>
              <Divider orientation="left">Differently abled Employees </Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  Permanent
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentDifferentlyAbledEmployeesTotal: e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.permanentDifferentlyAbledEmployeesTotal)
                    }
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentDifferentlyAbledEmployeesNumberMale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.permanentDifferentlyAbledEmployeesNumberMale)
                    }
                  />
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentDifferentlyAbledEmployeesPercentageMale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.permanentDifferentlyAbledEmployeesPercentageMale)
                    }
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentDifferentlyAbledEmployeesNumberFemale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.permanentDifferentlyAbledEmployeesNumberFemale)
                    }
                  />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentDifferentlyAbledEmployeesPercentageFemale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.permanentDifferentlyAbledEmployeesPercentageFemale)
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  Other than Permanent (Contractual)
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherThanOtherThanPermanentDifferentlyAbledEmployeesTotal:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.otherThanOtherThanPermanentDifferentlyAbledEmployeesTotal)
                    }
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherThanOtherThanPermanentDifferentlyAbledEmployeesNumberMale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.otherThanOtherThanPermanentDifferentlyAbledEmployeesNumberMale)
                    }
                  />
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherThanOtherThanPermanentDifferentlyAbledEmployeesPercentageMale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.otherThanOtherThanPermanentDifferentlyAbledEmployeesPercentageMale)
                    }
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherThanOtherThanPermanentDifferentlyAbledEmployeesNumberFemale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.otherThanOtherThanPermanentDifferentlyAbledEmployeesNumberFemale)
                    }
                  />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherThanOtherThanPermanentDifferentlyAbledEmployeesPercentageFemale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.otherThanOtherThanPermanentDifferentlyAbledEmployeesPercentageFemale)
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  Total
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalDifferentlyAbledEmployeesTotal: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.totalDifferentlyAbledEmployeesTotal)}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalDifferentlyAbledEmployeesNumberMale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.totalDifferentlyAbledEmployeesNumberMale)
                    }
                  />
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalDifferentlyAbledEmployeesPercentageMale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.totalDifferentlyAbledEmployeesPercentageMale)
                    }
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalDifferentlyAbledEmployeesNumberFemale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.totalDifferentlyAbledEmployeesNumberFemale)
                    }
                  />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalDifferentlyAbledEmployeesPercentageFemale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.totalDifferentlyAbledEmployeesPercentageFemale)
                    }
                  />
                </Col>
              </Row>
              <Divider orientation="left">Differently abled Workers </Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  Permanent
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentDifferentlyAbledWorkerTotal: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.permanentDifferentlyAbledWorkerTotal)}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentDifferentlyAbledWorkerNumberMale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.permanentDifferentlyAbledWorkerNumberMale)
                    }
                  />
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentDifferentlyAbledWorkerPercentageMale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.permanentDifferentlyAbledWorkerPercentageMale)
                    }
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentDifferentlyAbledWorkerNumberFemale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.permanentDifferentlyAbledWorkerNumberFemale)
                    }
                  />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        permanentDifferentlyAbledWorkerPercentageFemale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.permanentDifferentlyAbledWorkerPercentageFemale)
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  Other than Permanent
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherThanOtherThanPermanentDifferentlyAbledWorkerTotal:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.otherThanOtherThanPermanentDifferentlyAbledWorkerTotal)
                    }
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherThanOtherThanPermanentDifferentlyAbledWorkerNumberMale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.otherThanOtherThanPermanentDifferentlyAbledWorkerNumberMale)
                    }
                  />
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherThanOtherThanPermanentDifferentlyAbledWorkerPercentageMale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.otherThanOtherThanPermanentDifferentlyAbledWorkerPercentageMale)
                    }
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherThanOtherThanPermanentDifferentlyAbledWorkerNumberFemale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.otherThanOtherThanPermanentDifferentlyAbledWorkerNumberFemale)
                    }
                  />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherThanOtherThanPermanentDifferentlyAbledWorkerPercentageFemale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.otherThanOtherThanPermanentDifferentlyAbledWorkerPercentageFemale)
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  Total
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalDifferentlyAbledWorkerTotal: e.target.value,
                      });
                    }}
                    value={Number(currentYearData.totalDifferentlyAbledWorkerTotal)}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalDifferentlyAbledWorkerNumberMale: e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.totalDifferentlyAbledWorkerNumberMale)
                    }
                  />
                </Col>
                <Col style={{ paddingRight: "8px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalDifferentlyAbledWorkerPercentageMale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.totalDifferentlyAbledWorkerPercentageMale)
                    }
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalDifferentlyAbledWorkerNumberFemale: e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.totalDifferentlyAbledWorkerNumberFemale)
                    }
                  />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalDifferentlyAbledWorkerPercentageFemale:
                          e.target.value,
                      });
                    }}
                    value={
                      Number(currentYearData.totalDifferentlyAbledWorkerPercentageFemale)
                    }
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col flex="auto"></Col>
      </Row>

      <Row>
         
      </Row>
       
    </div>
  );
};

export default H18;
