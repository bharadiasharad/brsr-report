import { Col, Divider, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P6_13 } from "./Type.ts";

const H13 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P6_13({}));
  const [previousYearData, setPreviousYearData] = useState(new P6_13({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Divider orientation="left">From renewable sources</Divider>
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col style={{ padding: "6px" }} span={8}></Col>
                <Col offset={1} span={6}>
                  <p className="input-data-placeholder-heading">
                    Current Financial Year
                  </p>
                </Col>
                <Col offset={1} span={6}>
                  <p className="input-data-placeholder-heading">
                    Previous Financial Year
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Total electricity consumption</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalRenewableElectricity}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalRenewableElectricity: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.totalRenewableElectricity}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        totalRenewableElectricity: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Total fuel consumption</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalRenewableFuel}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalRenewableFuel: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.totalRenewableFuel}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        totalRenewableFuel: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Energy consumption through other sources</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.otherRenewableSources}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherRenewableSources: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.otherRenewableSources}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        otherRenewableSources: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Total energy consumed from renewable sources</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalRenewableEnergy}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalRenewableEnergy: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.totalRenewableEnergy}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        totalRenewableEnergy: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={8}></Col>
          </Row>
          <Divider orientation="left">From non-renewable sources</Divider>
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Total electricity consumption</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalNonRenewableElectricity}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalNonRenewableElectricity: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.totalNonRenewableElectricity}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        totalNonRenewableElectricity: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Total fuel consumption</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalNonRenewableFuel}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalNonRenewableFuel: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.totalNonRenewableFuel}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        totalNonRenewableFuel: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Energy consumption through other sources</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalNonRenewableSources}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalNonRenewableSources: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.totalNonRenewableSources}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        totalNonRenewableSources: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={8}></Col>
          </Row>
          <Divider />
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>
                    Indicate if any independent assessment/ evaluation/assurance
                    has been carried out by an external agency?
                  </span>
                </Col>
                <Col offset={1} span={13}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    value={currentYearData.independentAssesment}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        independentAssesment: e.target.value,
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

export default H13;
