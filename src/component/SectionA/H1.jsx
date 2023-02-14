import { Col, Input, Row } from "antd";
import { useState } from "react";
import { SectionA_1 } from "./Type.ts";

const H1 = (props) => {
  const [currentYearData, setCurrentYearData] = useState( () =>
    new SectionA_1({})
  );

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>Corporate Identity Number (CIN) of the Listed Entity</p>
                </Col>
                <Col offset={2} span={12}>
                  <Input
                    style={{ marginTop: "10px" }}
                    value={""}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        cin: e.target.value,
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

export default H1;
