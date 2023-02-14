import { Col, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P7_1 } from "./Type.ts";

const H1 = (props) => {
  const [cuerrentYearData, setCurrentDataYear] = useState(new P7_1({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={22}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    Number of affiliations with trade and industry chambers/
                    associations
                  </p>
                </Col>
                <Col offset={1} span={13}>
                  <TextArea
                    placeholder="Add details here.."
                    rows={3}
                    value={cuerrentYearData.number}
                    onChange={(e) =>
                      setCurrentDataYear({
                        ...cuerrentYearData,
                        number: e.target.value,
                      })
                    }
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

export default H1;
