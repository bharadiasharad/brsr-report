import { Col, Input, Row } from "antd";
import _ from "lodash";
import { useState } from "react";
 
import { P5_3 } from "./Type.ts";

const H3 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P5_3({}));
  const [previousYearData, setPreviousYearData] = useState(new P5_3({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="1100px">
          <Row>
            <Col style={{ margin: "5px" }} span={24}>
              <Row>
                <Col style={{ padding: "6px" }} span={3}></Col>
                <Col offset={1} span={9}>
                  <h3 className="input-data-placeholder-heading">Male</h3>
                </Col>
                <Col offset={1} span={9}>
                  <h3 className="input-data-placeholder-heading">Female</h3>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}></Col>
                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">No.</p>
                </Col>
                <Col span={6}>
                  <p className="input-data-placeholder-heading">
                    Median remuneration/ salary/ wages of respective category
                  </p>
                </Col>
                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">No.</p>
                </Col>
                <Col span={6}>
                  <p className="input-data-placeholder-heading">
                    Median remuneration/ salary/ wages of respective category
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Board of Directors
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        maleNumberBoardOfDirector: e.target.value,
                      });
                    }}
                    Value={setCurrentYearData.maleNumberBoardOfDirector}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        maleMedianSalaryBoardOfDirector: e.target.value,
                      });
                    }}
                    Value={setCurrentYearData.maleMedianSalaryBoardOfDirector}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        femaleNumberBoardOfDirector: e.target.value,
                      });
                    }}
                    Value={previousYearData.femaleNumberBoardOfDirector}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        femaleMedianSalaryBoardOfDirector: e.target.value,
                      });
                    }}
                    Value={previousYearData.femaleMedianSalaryBoardOfDirector}
                  />
                </Col>
              </Row>
              <Row style={{ paddingTop: "18px" }}>
                <Col style={{ padding: "6px" }} span={3}>
                  Key Managerial Personnel
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        maleNumberKeyManagerialPerson: e.target.value,
                      });
                    }}
                    Value={setCurrentYearData.maleNumberKeyManagerialPerson}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        maleMedianSalaryKeyManagerialPerson: e.target.value,
                      });
                    }}
                    Value={
                      setCurrentYearData.maleMedianSalaryKeyManagerialPerson
                    }
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        femaleNumberKeyManagerialPerson: e.target.value,
                      });
                    }}
                    Value={previousYearData.femaleNumberKeyManagerialPerson}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        femaleMedianSalaryKeyManagerialPerson: e.target.value,
                      });
                    }}
                    Value={
                      previousYearData.femaleMedianSalaryKeyManagerialPerson
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Employees other than BoD & KMP
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        maleNumberEmployee: e.target.value,
                      });
                    }}
                    Value={setCurrentYearData.maleNumberEmployee}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        maleMedianSalaryEmployee: e.target.value,
                      });
                    }}
                    Value={setCurrentYearData.maleMedianSalaryEmployee}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        femaleNumberEmployee: e.target.value,
                      });
                    }}
                    Value={previousYearData.femaleNumberEmployee}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        femaleMedianSalaryEmployee: e.target.value,
                      });
                    }}
                    Value={previousYearData.femaleMedianSalaryEmployee}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Workers
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        maleNumberWorker: e.target.value,
                      });
                    }}
                    Value={setCurrentYearData.maleNumberWorker}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        maleMedianSalaryWorker: e.target.value,
                      });
                    }}
                    Value={setCurrentYearData.maleMedianSalaryWorker}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        femaleNumberWorker: e.target.value,
                      });
                    }}
                    Value={previousYearData.femaleNumberWorker}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        femaleMedianSalaryWorker: e.target.value,
                      });
                    }}
                    Value={previousYearData.femaleMedianSalaryWorker}
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

export default H3;
