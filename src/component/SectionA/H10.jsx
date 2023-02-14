import { Col, Input, Row } from "antd";
import _ from "lodash";
import { useState } from "react";
 import { SectionA_10 } from "./Type.ts";
 
const H10 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new SectionA_10( {}));

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>Name of the Stock Exchange(s) where shares are listed</p>
                </Col>
                <Col offset={2} span={12}>
                  <Input
                    type="text"
                    required
                    style={{ marginTop: "10px" }}
                    value={currentYearData.exchange}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        exchange: e.target.value,
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

export default H10;