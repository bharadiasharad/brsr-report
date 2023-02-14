import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Col, Divider, Input, Row, Tooltip } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P6_6 } from "./Type.ts";

const H6 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P6_6({}));
  const [previousYearData, setPreviousYearData] = useState(new P6_6({}));

   

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
                    Total Scope 1 emissions
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
                    value={currentYearData.scope1}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        scope1: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.scope1}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        scope1: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span style={{ paddingBottom: "0" }}>
                    Total Scope 2 emissions
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
                    value={currentYearData.scope2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        scope2: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.scope2}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        scope2: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>
                    Total Scope 1 and Scope 2 emissions per rupee of turnover
                  </p>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
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

export default H6;
