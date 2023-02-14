import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Col, Divider, Input, Row, Tooltip } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P6_3 } from "./Type.ts";

const H3 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P6_3({}));
  const [previousYearData, setPreviousYearData] = useState(new P6_3({}));

   

  // let x, y;
  // debugger;

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row style={{ paddingBottom: "5px" }}>
                <Col style={{ padding: "6px" }} span={8}>
                  Water withdrawal (in kilolitres)
                </Col>
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
                  <p>Surface Water</p>
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
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Ground Water </p>
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
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Third Party Water</p>
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
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Sea/Desalinated Water</p>
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
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Others</p>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.other}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        other: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.other}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        other: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <span>Total Volume of Water Withdrawal</span>
                  <Tooltip placement="right" title={"In Kiloliters"}>
                    <ExclamationCircleOutlined
                      style={{ color: "gray", paddingLeft: "5px" }}
                    />
                  </Tooltip>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    disabled
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
                    disabled
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
            </Col>
            <Col span={8}></Col>
          </Row>
          <Divider />
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <span>Total Volumne of Water Consumption</span>
                  <Tooltip placement="right" title={"In Kiloliters"}>
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
                <Col style={{ padding: "6px" }} span={8}>
                  <span>Water intensity per rupee of turnover</span>
                  <Tooltip
                    placement="right"
                    title={"Water consumed / turnover"}
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
                <Col style={{ padding: "6px" }} span={8}>
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

      <Row>
        <div style={{ padding: "40px" }}></div>
      </Row>
       
    </div>
  );
};

export default H3;
