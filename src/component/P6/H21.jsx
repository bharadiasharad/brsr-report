import { Col, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P6_21 } from "./Type.ts";

const H21 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P6_21({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={22}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    Percentage of value chain partners (by value of business
                    done with such partners) that were assessed for
                    environmental impacts.
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={1} span={13}>
                  <TextArea
                    placeholder="Add details here.."
                    rows={3}
                    value={currentYearData.valueChainPartner}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        valueChainPartner: e.target.value,
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

export default H21;
