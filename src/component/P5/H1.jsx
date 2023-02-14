import { Col, Divider, Input, Row } from "antd";
import _ from "lodash";
import { useState } from "react";
 
import { P5_1 } from "./Type.ts";

const H1 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P5_1({}));
  const [previousYearData, setPreviousYearData] = useState(new P5_1({}));

  const onSaveAndNext = () => {
    console.log("h1 on save");
    console.log(currentYearData);
    console.log(previousYearData);

    props.callback();
  };

  const onSave = () => {
    console.log("h1 on cancel");
  };

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="1100px">
          <Row>
            <Col style={{ margin: "5px" }} span={24}>
              <Row>
                <Col style={{ padding: "6px" }} span={3}></Col>
                <Col offset={1} span={9}>
                  <p className="input-data-placeholder-heading">
                    Current Financial Year
                  </p>
                </Col>
                <Col offset={1} span={9}>
                  <p className="input-data-placeholder-heading">
                    Previous Financial Year
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}></Col>
                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">Total</p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">
                    No. of employees / workers covered
                  </p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">%</p>
                </Col>
                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">Total</p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">
                    No. of employees / workers covered
                  </p>
                </Col>
                <Col span={3}>
                  <p className="input-data-placeholder-heading">%</p>
                </Col>
              </Row>
              <Divider orientation="left">Employees </Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Permanent
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalPermanentEmployee}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalPermanentEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.coveredPermanentEmployee}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        coveredPermanentEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    value={currentYearData.percentagePermanentEmployee}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        percentagePermanentEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.totalPermanentEmployee}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        totalPermanentEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.coveredPermanentEmployee}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        coveredPermanentEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.percentagePermanentEmployee}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        percentagePermanentEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Other than Permanent
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalOtherThanPermanentEmployee}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalOtherThanPermanentEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.coveredOtherThanPermanentEmployee}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        coveredOtherThanPermanentEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.percentageOtherThanPermanentEmployee}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        percentageOtherThanPermanentEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.totalOtherThanPermanentEmployee}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        totalOtherThanPermanentEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.coveredOtherThanPermanentEmployee}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        coveredOtherThanPermanentEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={
                      previousYearData.percentageOtherThanPermanentEmployee
                    }
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        percentageOtherThanPermanentEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Total
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalTotalEmployee}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalTotalEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.coveredTotalEmployee}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        coveredTotalEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.percentageTotalEmployee}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        percentageTotalEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.totalTotalEmployee}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        totalTotalEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.coveredTotalEmployee}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        coveredTotalEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.percentageTotalEmployee}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        percentageTotalEmployee: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Divider orientation="left">Workers </Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Permanent
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalPermanentWorker}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalPermanentWorker: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.coveredPermanentWorker}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        coveredPermanentWorker: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.percentagePermanentWorker}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        percentagePermanentWorker: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.totalPermanentWorker}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        totalPermanentWorker: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.coveredPermanentWorker}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        coveredPermanentWorker: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.percentagePermanentWorker}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        percentagePermanentWorker: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Other than Permanent
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalOtherThanPermanentWorker}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalOtherThanPermanentWorker: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.coveredOtherThanPermanentWorker}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        coveredOtherThanPermanentWorker: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.percentageOtherThanPermanentWorker}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        percentageOtherThanPermanentWorker: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.totalOtherThanPermanentWorker}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        totalOtherThanPermanentWorker: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.coveredOtherThanPermanentWorker}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        coveredOtherThanPermanentWorker: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.percentageOtherThanPermanentWorker}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        percentageOtherThanPermanentWorker: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Total
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalTotalWorker}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalTotalWorker: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.coveredTotalWorker}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        coveredTotalWorker: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.percentageTotalWorker}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        percentageTotalWorker: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.totalTotalWorker}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        totalTotalWorker: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.coveredTotalWorker}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        coveredTotalWorker: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.percentageTotalWorker}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        percentageTotalWorker: e.target.value,
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

       
       
    </div>
  );
};

export default H1;
