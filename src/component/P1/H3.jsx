import { Col, Divider, Input, Row } from "antd";
import _ from "lodash";
import { useState } from "react";
import TextArea from "antd/lib/input/TextArea";
import { P1_3 } from "./Type.ts";

const H3 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P1_3({}));
  const [previousYearData, setPreviousYearData] = useState(new P1_3({}));

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="1200px">
          <Row>
            <Col style={{ margin: "5px" }} span={24}>
              <Row>
                <Col style={{ padding: "" }} span={1}></Col>
                <Col offset={0} span={4}>
                  <p
                    className="input-data-placeholder-heading"
                    paddingRight="5px"
                  >
                    Case Details
                  </p>
                </Col>

                <Col offset={1} span={6}>
                  <p className="input-data-placeholder-heading">
                    Name of the regulatory / enforcement agencies / judical
                    instutitution
                  </p>
                </Col>
              </Row>
              <Row>
                <Col offset={1} span={4}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                    value={currentYearData.case1}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        case1: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={6}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                    value={previousYearData.name1}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...currentYearData,
                        name1: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>{" "}
              <br />
              <Row>
                <Col offset={1} span={4}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                    value={currentYearData.case2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        case2: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={6}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                    value={previousYearData.name2}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...currentYearData,
                        name2: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col offset={1} span={4}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                    value={currentYearData.case3}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        case3: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={6}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                    value={previousYearData.name3}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...currentYearData,
                        name3: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                    value={currentYearData.case4}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        case4: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={6}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                    value={previousYearData.name4}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...currentYearData,
                        name4: e.target.value,
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

export default H3;
