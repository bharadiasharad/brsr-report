import { Col, Input, Row, Spin } from "antd";
import _ from "lodash";
import { useState, useEffect } from "react";
 import { SectionA_2 } from "./Type.ts";
 
const H2 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(
    new SectionA_2({})
  );

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>Name of the Listed Entity</p>
                </Col>
                <Col offset={2} span={12}>
                  <Input
                    style={{ marginTop: "10px" }}
                    value={currentYearData?.name}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        name: e.target.value,
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

export default H2;
