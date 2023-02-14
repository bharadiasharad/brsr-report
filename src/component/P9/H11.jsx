import { Col, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P9_11 } from "./Type.ts";

const H11 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P9_11({}));

  const onSaveAndNext = () => {
    console.log("h3 on save");
    props.callback();
  };

  const onSave = () => {
    console.log("h1 on save");
  };

  const onCancel = () => {
    console.log("h1 on cancel");
  };

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col style={{ padding: "6px" }} span={8}></Col>
                <Col offset={1} span={8}></Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Number of instances of data breaches along-with impact</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={1} span={8}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.impactData}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        impactData: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>
                    Percantage of data breaches involving personally
                    idenrifiable information of customer
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={1} span={8}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.customerData}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        customerData: e.target.value,
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

export default H11;
