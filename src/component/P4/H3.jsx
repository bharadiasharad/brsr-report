import { Col, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P4_3 } from "./Type.ts";

const H3 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P4_3({}));
   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    Provide the processes for currentYearData between
                    stakeholders and the Board on economic, environmental, and
                    social topics or if currentYearData is delegated, how is
                    feedback from such currentYearDatas provided to the Board.
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={12}>
                  <TextArea
                    placeholder="Add details here.."
                    rows={3}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        consultation: e.target.value,
                      });
                    }}
                    value={currentYearData.consultation}
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

export default H3;
