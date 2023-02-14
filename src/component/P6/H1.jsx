import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Col, Divider, Input, Row, Tooltip } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P6_1 } from "./Type.ts";

const H1 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P6_1({}));
  const [previousYearData, setPreviousYearData] = useState(new P6_1({}));

   

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
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Total Electricity Consumption</p>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.electicictyConsumption}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        electicictyConsumption: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.electicictyConsumption}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        electicictyConsumption: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Total Fuel Consumption</p>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.fuelConsumption}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        fuelConsumption: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.fuelConsumption}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        fuelConsumption: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Energy Consumption Through other sources</p>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.energyOtherSource}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        energyOtherSource: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.energyOtherSource}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        energyOtherSource: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Total Energy Consumed</p>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    disabled
                    required
                    value={currentYearData.totalEnergy}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalEnergy: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    disabled
                    required
                    value={previousYearData.totalEnergy}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        totalEnergy: e.target.value,
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
                <Col style={{ padding: "6px" }} span={8}>
                  <span>Energy intensity per rupee of turnover</span>
                  <Tooltip
                    placement="right"
                    title={"Total energy consumption/ turnover in rupees"}
                  >
                    <ExclamationCircleOutlined
                      style={{ color: "gray", paddingLeft: "5px" }}
                    />
                  </Tooltip>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.energyIntesity}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        energyIntesity: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.energyIntesity}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        energyIntesity: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <span>
                    Energy intensity (optional) – the relevant metric may be
                    selected by the entity
                  </span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.energyIntensityOptional}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        energyIntensityOptional: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.energyIntensityOptional}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        energyIntensityOptional: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Divider />
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <span>
                    Indicate if any independent assessment/ evaluation/assurance
                    has been carried out by an external agency?
                  </span>
                </Col>
                <Col offset={1} span={13}>
                  <TextArea
                    placeholder="Add details here.."
                    rows={4}
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

export default H1;
