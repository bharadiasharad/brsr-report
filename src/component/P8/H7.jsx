import { Col, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 
import { P8_7 } from "./Type.ts";

const H7 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P8_7({}));

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
                    Do you have a preferential procurement policy where you give
                    preference to purchase from suppliers comprising
                    marginalized/vulnerable groups? (Yes/No){" "}
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={4}>
                  <Select
                    placeholder="YES / NO"
                    size="medium"
                    style={{ width: "100%" }}
                    value={currentYearData.is}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        is: e.target.value,
                      })
                    }
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "15px" }} span={10}>
                  <p>
                    {" "}
                    From which marginalized/vulnerable groups do you procure?
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={12}>
                  <TextArea
                    placeholder="Add details here.."
                    rows={3}
                    value={currentYearData.group}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        group: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col style={{ padding: "15px" }} span={10}>
                  <p>
                    What percentage of total procurement (by value) does it
                    constitute?{" "}
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={12}>
                  <TextArea
                    placeholder="Add details here.."
                    rows={3}
                    value={currentYearData.percentageSourcing}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        percentageSourcing: e.target.value,
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

export default H7;
