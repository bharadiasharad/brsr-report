import { Col, Row, Select, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
import { P1_4 } from "./Type.ts";

const H4 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P1_4({}));

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    Does the entity have anti-corruption or anti-bribery policy?{" "}
                  </p>
                </Col>
                <Col offset={2} span={4} style={{ paddingTop: "10px" }}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPolicy: e.target.value,
                      });
                    }}
                    value={currentYearData.isPolicy}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    {" "}
                    If yes, provide details in brief and if available, provide a
                    web-link to the policy.{" "}
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={6}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        brief: e.target.value,
                      });
                    }}
                    value={currentYearData.brief}
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

export default H4;
