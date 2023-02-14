import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Col, Divider, Input, Row, Tooltip } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 
import { P6_8 } from "./Type.ts";

const H8 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P6_8({}));
  const [previousYearData, setPreviousYearData] = useState(new P6_8({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Divider orientation="left">Total Waste generated</Divider>
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  In Metric Tonnes
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
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Plastic waste</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.plastic}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        plastic: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.plastic}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        plastic: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>E-waste</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.ewaste}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        ewaste: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.ewaste}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        ewaste: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Bio-medical waste</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.bioMedical}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        bioMedical: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.bioMedical}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        bioMedical: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Construction and demolition waste</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.construction}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        construction: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.construction}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        construction: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Battery waste</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.battery}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        battery: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    value={previousYearData.battery}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        battery: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Radioactive waste</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.radioActive}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        radioActive: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.radioActive}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        radioActive: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Other Hazardous waste. Please specify, if any.</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.otherHazardous}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherHazardous: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.otherHazardous}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        otherHazardous: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>

              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span style={{ paddingBottom: "0" }}>
                    Other Non-hazardous waste generated. Please specify
                  </span>
                  <Tooltip
                    placement="right"
                    title={
                      "Break-up by composition i.e. by materials relevant to the sector"
                    }
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
                    value={currentYearData.otherNonHazardous}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherNonHazardous: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.otherNonHazardous}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        otherNonHazardous: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Total</p>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    disabled
                    required
                    value={currentYearData.total}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        total: e.target.value,
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
                    value={previousYearData.total}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        total: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={8}></Col>
          </Row>
          <Divider orientation="left">
            Total waste recovered
            <Tooltip
              placement="right"
              title={
                "For each category of waste generated, total waste recovered through recycling, re-using or other recovery operations (in metric tonnes)"
              }
            >
              <ExclamationCircleOutlined
                style={{ color: "gray", paddingLeft: "5px" }}
              />
            </Tooltip>
          </Divider>
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Recycled</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.recycled}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        recycled: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.recycled}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        recycled: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Re-used</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.reused}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        reused: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.reused}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        reused: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Other recovery operations</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.otherRecoveryOption}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherRecoveryOption: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.otherRecoveryOption}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        otherRecoveryOption: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Total</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    disabled
                    required
                    value={currentYearData.total}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        total: e.target.value,
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
                    value={previousYearData.total}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        total: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={8}></Col>
          </Row>
          <Divider orientation="left">
            Total waste disposed
            <Tooltip
              placement="right"
              title={
                "For each category of waste generated, total waste disposed by nature of disposal method (in metric tonnes)"
              }
            >
              <ExclamationCircleOutlined
                style={{ color: "gray", paddingLeft: "5px" }}
              />
            </Tooltip>
          </Divider>
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Incineration</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.incineration}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        incineration: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.incineration}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        incineration: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Landfilling</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.landfilling}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        landfilling: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.landfilling}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        landfilling: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Other disposal operations</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.otherDisposal}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherDisposal: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.otherDisposal}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        otherDisposal: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span>Total</span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    disabled
                    required
                    value={currentYearData.totalDisposal}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalDisposal: e.target.value,
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
                    value={previousYearData.totalDisposal}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        totalDisposal: e.target.value,
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

export default H8;
