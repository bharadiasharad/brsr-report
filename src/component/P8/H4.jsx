import { Col, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P8_4 } from "./Type.ts";

const H4 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P8_4({}));

  const onSaveAndNext = () => {
    console.log("h3 on save");
    props.callback();
  };

  const onSave = () => {
    console.log("h2 on save");
  };

  const onCancel = () => {
    console.log("h2 on cancel");
  };

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col style={{ padding: "6px" }} span={8}></Col>
                <Col offset={1} span={8}>
                  <p className="input-data-placeholder-heading">
                    FY 21 Current Financial Year
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p> Directly sourced from MSMEs / small producers</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={1} span={8}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.msme}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        msme: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>
                    Sourced directly form within the district and neighbouring
                    districts
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={1} span={8}>
                  <Input
                    padding="10px"
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.neigbouring}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        neigbouring: e.target.value,
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

export default H4;
