import { Col, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P9_2 } from "./Type.ts";

const H2 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P9_2({}));

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
                    Turnover of products and/serviecs as a percentage of
                    turnover from all products/service that carry information
                    about(as % of total)
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>
                    Environmental and soical parameters relevant to the product
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={1} span={8}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.environmental}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        environmental: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Safe and responsible usage</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={1} span={8}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.safe}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        safe: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Recycling and/or safe disposal</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={1} span={8}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.recycle}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        recycle: e.target.value,
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

export default H2;
