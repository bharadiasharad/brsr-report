import { Col, Divider, Input, Row } from "antd";
import _ from "lodash";
import { useState } from "react";
import { P1_1 } from "./Type.ts";

const H1 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P1_1({}));

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="auto">
          <Row>
            <Col style={{ margin: "5px" }} span={24}>
              <Row>
                <Col style={{ padding: "6px" }} span={3}></Col>
                <Col offset={1} span={4}>
                  <p className="input-data-placeholder-heading">
                    Total number of training and awarness programmes held
                  </p>
                </Col>
                <Col offset={1} span={4}>
                  <p className="input-data-placeholder-heading">
                    Topics/ Principles covered under the training and its impact
                  </p>
                </Col>
                <Col offset={1} span={6}>
                  <p className="input-data-placeholder-heading">
                    %age of persons in respective category covered by the
                    awerness programmes
                  </p>
                </Col>
                <Divider orientation="left">Segments</Divider>
              </Row>

              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Board Of Directors
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.boardTotal}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        boardTotal: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.boardPrinciple}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        boardPrinciple: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.boardPercentage}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        boardPercentage: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <br></br>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Key Managerial Personnel
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.kmpTotal}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        kmpTotal: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.kmpPrinciple}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        kmpPrinciple: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.kmpPercentage}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        kmpPercentage: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Employees other than BoD and KMPs
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.employeeTotal}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        employeeTotal: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.employeePrinciple}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        employeePrinciple: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.employeePercentage}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        employeePercentage: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Contractual
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.contractualTotal}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        contractualTotal: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.contractualPrinciple}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        contractualPrinciple: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.contractualPercentage}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        contractualPercentage: e.target.value,
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

export default H1;
