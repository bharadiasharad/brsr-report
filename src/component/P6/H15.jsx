import { Col, Divider, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P6_15 } from "./Type.ts";

const H15 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P6_15({}));
  const [previousYearData, setPreviousYearData] = useState(new P6_15({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
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
                  <span>Name of the area</span>
                </Col>
                <Col offset={1} span={6}>
                  <TextArea
                    style={{ marginBottom: "10px" }}
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    value={currentYearData.area}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        area: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <TextArea
                    style={{ marginBottom: "10px" }}
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    value={previousYearData.area}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        area: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Nature of operations</span>
                </Col>
                <Col offset={1} span={6}>
                  <TextArea
                    style={{ marginBottom: "10px" }}
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    value={currentYearData.natureOfOperation}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        natureOfOperation: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <TextArea
                    style={{ marginBottom: "10px" }}
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    value={previousYearData.natureOfOperation}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        natureOfOperation: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>
                    Water withdrawal, consumption and discharge in the following
                    format
                  </span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.waterWithdrawal}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        waterWithdrawal: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.waterWithdrawal}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        waterWithdrawal: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={8}></Col>
          </Row>
          <Divider orientation="left">
            Water withdrawal by source (in kiloliters)
          </Divider>
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Surface water</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.surface}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        surface: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.surface}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        surface: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Groundwater</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.ground}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        ground: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.ground}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        ground: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Third party water</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.thirdParty}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        thirdParty: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.thirdParty}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        thirdParty: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Seawater / desalinated water</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.seaDesalinated}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        seaDesalinated: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.seaDesalinated}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        seaDesalinated: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Others</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.otherSource}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherSource: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.otherSource}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        otherSource: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Total volume of water withdrawal</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalWithdrawal}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalWithdrawal: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.totalWithdrawal}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        totalWithdrawal: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Total volume of water consumption</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalConsumption}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalConsumption: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.totalConsumption}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        totalConsumption: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>
                    Water intensity per rupee of turnover (Water consumed /
                    turnover)
                  </span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.waterIntensity}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        waterIntensity: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.waterIntensity}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        waterIntensity: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>
                    Water intensity (optional) – the relevant metric may be
                    selected by the entity
                  </span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.waterIntensityOptional}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        waterIntensityOptional: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.waterIntensityOptional}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        waterIntensityOptional: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={8}></Col>
          </Row>
          <Divider orientation="left">
            Water discharge by destination and level of treatment (in
            kiloliters)
          </Divider>
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>To Surface water</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.surfaceDischarge}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        surfaceDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.surfaceDischarge}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        surfaceDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  style={{ marginBottom: "14px", padding: "6px" }}
                  offset={1}
                  span={7}
                >
                  <span>No treatment</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.surfaceNoTreatmentDischarge}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        surfaceNoTreatmentDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.surfaceNoTreatmentDischarge}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        surfaceNoTreatmentDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  style={{ marginBottom: "14px", padding: "6px" }}
                  offset={1}
                  span={7}
                >
                  <span>With Treatment</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.surfaceWithTreatmentDischarge}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        surfaceWithTreatmentDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.surfaceWithTreatmentDischarge}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        surfaceWithTreatmentDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  style={{ marginBottom: "14px", padding: "6px" }}
                  offset={2}
                  span={6}
                >
                  <span>Specify level of treatment</span>
                </Col>
                <Col offset={1} span={13}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    value={currentYearData.levelOfTreatementGroundwater}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        levelOfTreatementGroundwater: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Divider />
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>To Groundwater</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.groundwaterDischarge}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        groundwaterDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.groundwaterDischarge}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        groundwaterDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  style={{ marginBottom: "14px", padding: "6px" }}
                  offset={1}
                  span={7}
                >
                  <span>No treatment</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.groundwaterNoTreatmentDischarge}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        groundwaterNoTreatmentDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.groundwaterNoTreatmentDischarge}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        groundwaterNoTreatmentDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  style={{ marginBottom: "14px", padding: "6px" }}
                  offset={1}
                  span={7}
                >
                  <span>With Treatment</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.groundwaterWithTreatmentDischarge}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        groundwaterWithTreatmentDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.groundwaterWithTreatmentDischarge}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        groundwaterWithTreatmentDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  style={{ marginBottom: "14px", padding: "6px" }}
                  offset={2}
                  span={6}
                >
                  <span>Specify level of treatment</span>
                </Col>
                <Col offset={1} span={13}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    value={currentYearData.levelOfTreatementGroundwater}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        levelOfTreatementGroundwater: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Divider />
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>To Seawater</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.seawaterDischarge}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        seawaterDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.seawaterDischarge}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        seawaterDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  style={{ marginBottom: "14px", padding: "6px" }}
                  offset={1}
                  span={7}
                >
                  <span>No treatment</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.seawaterNoTreatmentDischarge}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        seawaterNoTreatmentDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.seawaterNoTreatmentDischarge}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        seawaterNoTreatmentDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  style={{ marginBottom: "14px", padding: "6px" }}
                  offset={1}
                  span={7}
                >
                  <span>With Treatment</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.seawaterWithTreatmentDischarge}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        seawaterWithTreatmentDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.seawaterWithTreatmentDischarge}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        seawaterWithTreatmentDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  style={{ marginBottom: "14px", padding: "6px" }}
                  offset={2}
                  span={6}
                >
                  <span>Specify level of treatment</span>
                </Col>
                <Col offset={1} span={13}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    value={currentYearData.levelOfTreatementSeawater}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        levelOfTreatementSeawater: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Divider />
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Sent to Third Parties</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.thirdPartyDischarge}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        thirdPartyDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.thirdPartyDischarge}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        thirdPartyDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  style={{ marginBottom: "14px", padding: "6px" }}
                  offset={1}
                  span={7}
                >
                  <span>No treatment</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.thirdPartyNoTreatmentDischarge}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        thirdPartyNoTreatmentDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.thirdPartyNoTreatmentDischarge}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        thirdPartyNoTreatmentDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  style={{ marginBottom: "14px", padding: "6px" }}
                  offset={1}
                  span={7}
                >
                  <span>With Treatment</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.thirdPartyWithTreatmentDischarge}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        thirdPartyWithTreatmentDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.thirdPartyWithTreatmentDischarge}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        thirdPartyWithTreatmentDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  style={{ marginBottom: "14px", padding: "6px" }}
                  offset={2}
                  span={6}
                >
                  <span>Specify level of treatment</span>
                </Col>
                <Col offset={1} span={13}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    value={currentYearData.levelOfTreatementThirdParty}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        levelOfTreatementThirdParty: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Divider />
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Others</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.othersDischarge}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        othersDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.othersDischarge}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        othersDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  style={{ marginBottom: "14px", padding: "6px" }}
                  offset={1}
                  span={7}
                >
                  <span>No treatment</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.othersNoTreatmentDischarge}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        othersNoTreatmentDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.othersNoTreatmentDischarge}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        othersNoTreatmentDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  style={{ marginBottom: "14px", padding: "6px" }}
                  offset={1}
                  span={7}
                >
                  <span>With Treatment</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.othersWithTreatmentDischarge}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        othersWithTreatmentDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.othersWithTreatmentDischarge}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        othersWithTreatmentDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col
                  style={{ marginBottom: "14px", padding: "6px" }}
                  offset={2}
                  span={6}
                >
                  <span>Specify level of treatment</span>
                </Col>
                <Col offset={1} span={13}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    value={currentYearData.levelOfTreatementOther}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        levelOfTreatementOther: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Divider />
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Total water discharge</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalWaterDischarge}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalWaterDischarge: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.totalWaterDischarge}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        totalWaterDischarge: e.target.value,
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

export default H15;
