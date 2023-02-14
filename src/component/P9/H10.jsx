import { Col, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 
import { P9_10 } from "./Type.ts";

const H10 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P9_10({}));

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
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    Does the entity display product information on the product
                    over and above what is mandated as per local laws?{" "}
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={4}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        display: e.target.value,
                      });
                    }}
                    value={currentYearData.display}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
              </Row>

              <Row>
                <Col span={10}>
                  <p> If yes, Add details here</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={12}>
                  <TextArea
                    placeholder="Add details here.."
                    autoSize={{ minRows: 3, maxRows: 15 }}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        survey: e.target.value,
                      });
                    }}
                    value={currentYearData.survey}
                  />
                </Col>
              </Row>
              <br />
            </Col>
            <Col span={8}></Col>
          </Row>
        </Col>
        <Col flex="auto"></Col>
      </Row>

       
       
    </div>
  );
};

export default H10;
