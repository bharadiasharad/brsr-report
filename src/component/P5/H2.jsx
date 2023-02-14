import { Col, Divider, Input, Row } from "antd";
import _ from "lodash";
import { useState } from "react";
 
import { P5_2 } from "./Type.ts";

const H2 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P5_2({}));
  const [previousYearData, setPreviousYearData] = useState(new P5_2({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="2000px">
          <Row>
            <Col style={{ margin: "5px" }} span={24}>
              <Row>
                <Col style={{ padding: "6px" }} span={3}></Col>
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
                <Col style={{ padding: "6px" }} span={3}></Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">Total</p>
                </Col>
                <Col span={4}>
                  <p className="input-data-placeholder-heading">
                    Equal to Minimum
                  </p>
                </Col>
                <Col span={4}>
                  <p className="input-data-placeholder-heading">More than</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">Total</p>
                </Col>
                <Col span={4}>
                  <p className="input-data-placeholder-heading">
                    Equal to Minimum
                  </p>
                </Col>
                <Col span={4}>
                  <p className="input-data-placeholder-heading">More than</p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}></Col>
                <Col span={2}></Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">No.</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">%</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">No.</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">%</p>
                </Col>
                <Col span={2}></Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">No.</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">%</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">No.</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">%</p>
                </Col>
              </Row>
              <Divider orientation="left">Permanent Employees </Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  {" "}
                  Male
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalPermanentMaleEmployee}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalPermanentMaleEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={2}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={
                      currentYearData.equalToMinimumPermanentMaleEmployeeNumber
                    }
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        equalToMinimumPermanentMaleEmployeeNumber:
                          e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={
                      currentYearData.equalToMinimumPermanentMaleEmployeePercentage
                    }
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        equalToMinimumPermanentMaleEmployeePercentage:
                          e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={2}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={
                      currentYearData.moreThanMinimumPermanentMaleEmployeeNumber
                    }
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        moreThanMinimumPermanentMaleEmployeeNumber:
                          e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={
                      currentYearData.moreThanMinimumPermanentMaleEmployeePercentage
                    }
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        moreThanMinimumPermanentMaleEmployeePercentage:
                          e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.totalPermanentMaleEmployee}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        totalPermanentMaleEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={2}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={
                      previousYearData.equalToMinimumPermanentMaleEmployeeNumber
                    }
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        equalToMinimumPermanentMaleEmployeeNumber:
                          e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={
                      previousYearData.equalToMinimumPermanentMaleEmployeePercentage
                    }
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        equalToMinimumPermanentMaleEmployeePercentage:
                          e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={2}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={
                      previousYearData.moreThanMinimumPermanentMaleEmployeeNumber
                    }
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        moreThanMinimumPermanentMaleEmployeeNumber:
                          e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={2}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={
                      previousYearData.moreThanMinimumPermanentMaleEmployeePercentage
                    }
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        moreThanMinimumPermanentMaleEmployeePercentage:
                          e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  {" "}
                  Female
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalPermanentFemaleEmployee}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalPermanentFemaleEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={2}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={
                      currentYearData.equalToMinimumPermanentFemaleEmployeeNumber
                    }
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        equalToMinimumPermanentFemaleEmployeeNumber:
                          e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={
                      currentYearData.equalToMinimumPermanentFemaleEmployeePercentage
                    }
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        equalToMinimumPermanentFemaleEmployeePercentage:
                          e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={2}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={
                      currentYearData.moreThanMinimumPermanentFemaleEmployeeNumber
                    }
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        moreThanMinimumPermanentFemaleEmployeeNumber:
                          e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={
                      currentYearData.moreThanMinimumPermanentFemaleEmployeePercentage
                    }
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        moreThanMinimumPermanentFemaleEmployeePercentage:
                          e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.totalPermanentFemaleEmployee}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        totalPermanentFemaleEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={2}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={
                      previousYearData.equalToMinimumPermanentFemaleEmployeeNumber
                    }
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        equalToMinimumPermanentFemaleEmployeeNumber:
                          e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={
                      previousYearData.equalToMinimumPermanentFemaleEmployeePercentage
                    }
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        equalToMinimumPermanentFemaleEmployeePercentage:
                          e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={2}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={
                      previousYearData.moreThanMinimumPermanentFemaleEmployeeNumber
                    }
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        moreThanMinimumPermanentFemaleEmployeeNumber:
                          e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={2}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={
                      previousYearData.moreThanMinimumPermanentFemaleEmployeePercentage
                    }
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        moreThanMinimumPermanentFemaleEmployeePercentage:
                          e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Divider orientation="left">
                Other than Permanent Employees{" "}
              </Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  {" "}
                  Male
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  {" "}
                  Female
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Divider orientation="left">Permanent Workers </Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  {" "}
                  Male
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  {" "}
                  Female
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Divider orientation="left">
                Other than Permanent Workers{" "}
              </Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  {" "}
                  Male
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  {" "}
                  Female
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
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

export default H2;
