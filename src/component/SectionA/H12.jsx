import { Col, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 import { SectionA_12 } from "./Type.ts";
 
const H12 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new SectionA_12( {}));

  const prepareData = ({ isCompleted, isValidated } = {}) => {
    const data = new SectionA_12(currentYearData);
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
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Name</p>
                </Col>
                <Col offset={1} span={8}>
                  <Input
                    size="medium"
                    type="text"
                    required
                    value={currentYearData.name}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        name: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Telephone / Mobile</p>
                </Col>
                <Col offset={1} span={8}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.mobile}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        mobile: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Email</p>
                </Col>
                <Col offset={1} span={8}>
                  <Input
                    size="medium"
                    type="email"
                    required
                    value={currentYearData.email}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        email: e.target.value,
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

export default H12;
