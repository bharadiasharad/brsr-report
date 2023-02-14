import { Col, Input, Row, Select } from "antd";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 import { SectionA_22 } from "./Type.ts";
 
const H22 = (props) => {
  console.log( {});
  const [currentYearData, setCurrentYearData] = useState(new SectionA_22( {}));

  const prepareData = ({ isCompleted, isValidated } = {}) => {
    const data = new SectionA_22(currentYearData);
    const obj = {
      data: data,
      isCompleted: isCompleted,
      isValidated: isValidated,
    };
    return {
      data: obj,
      definationId: props.headingData.definationId,
      unitId: props.unitId,
    };
  };

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={24}>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Whether CSR is applicable as per section 135:</p>
                </Col>
                <Col offset={1} span={6}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        iscsrApplicable: e,
                      });
                    }}
                    value={currentYearData.iscsrApplicable}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Turnover (in Rs.)</p>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        turnover: e.target.value,
                      });
                    }}
                    value={currentYearData.turnover}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Net Worth (in Rs.)</p>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        netWorth: e.target.value,
                      });
                    }}
                    value={currentYearData.netWorth}
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

export default H22;
