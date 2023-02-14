import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Col, Divider, Input, Row, Tooltip } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P6_16 } from "./Type.ts";

const H16 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P6_16({}));
  const [previousYearData, setPreviousYearData] = useState(new P6_16({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  Metric Ton of Co2 equivalent
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
                  <span style={{ paddingBottom: "0" }}>
                    Total Scope 3 emissions
                  </span>
                  <Tooltip
                    placement="right"
                    title={
                      "Break-up of the GHG into CO2, CH4, N2O, HFCs, PFCs, SF6, NF3, if available"
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
                    value={currentYearData.scope3}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        scope3: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.scope3}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        scope3: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span style={{ paddingBottom: "0" }}>
                    Total Scope 3 emissions per rupee of turnover
                  </span>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.turnover}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        turnover: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.turnover}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        turnover: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>
                    Total Scope 3 emission intensity (optional) – the relevant
                    metric may be selected by the entity
                  </p>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.relevantMetric}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        relevantMetric: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.relevantMetric}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        relevantMetric: e.target.value,
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

export default H16;
