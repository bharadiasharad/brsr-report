import { Col, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P6_9 } from "./Type.ts";

const H9 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P6_9({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={22}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    Briefly describe the waste management practices adopted in
                    your establishments. Describe the strategy adopted by your
                    company to reduce usage of hazardous and toxic chemicals in
                    your products and processes and the practices adopted to
                    manage such wastes.
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={1} span={13}>
                  <TextArea
                    placeholder="Add details here.."
                    rows={5}
                    value={currentYearData.wasteManagementPractices}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        wasteManagementPractices: e.target.value,
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

export default H9;
