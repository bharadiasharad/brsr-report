import { Col, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
  import { SectionA_4 } from "./Type.ts";

const H4 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new SectionA_4( {}));

  const prepareData = ({ isCompleted, isValidated } = {}) => {
    const data = new SectionA_4(currentYearData);
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
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>Registered office address</p>
                </Col>
                <Col offset={2} span={12}>
                  <TextArea
                    placeholder="Add address here.."
                    rows={2}
                    value={currentYearData.registeredOffice}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        registeredOffice: e.target.value,
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

export default H4;
