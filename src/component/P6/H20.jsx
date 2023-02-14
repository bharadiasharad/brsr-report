import { Col, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P6_20 } from "./Type.ts";

const H20 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P6_20({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={22}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    Disclose any significant adverse impact to the environment,
                    arising from the value chain of the entity. What mitigation
                    or adaptation measures have been taken by the entity in this
                    regard.
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={1} span={13}>
                  <TextArea
                    placeholder="Add details here.."
                    rows={4}
                    value={currentYearData.adverseImpact}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        adverseImpact: e.target.value,
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

export default H20;
