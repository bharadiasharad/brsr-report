import { Col, Row, Select, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
import { P1_9 } from "./Type.ts";

const H9 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P1_9({}));

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    Does the entity have processes in place to avoid/manage
                    conflict of interests involving members of Board?{" "}
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={4}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isProcess}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isProcess: e.target.value,
                      });
                    }}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p> If yes, provide details of the same. </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={6}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                    value={currentYearData.details}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        details: e.target.value,
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

export default H9;
