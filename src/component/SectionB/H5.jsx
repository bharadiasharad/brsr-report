import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Col, Divider, Input, Row, Select, Tooltip } from "antd";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 import { sectionB_5 } from "./Type.ts";

const H5 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new sectionB_5({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="2000px">
          <Row>
            <Col
              style={{
                margin: "5px",
                borderRight: "1px solid rgba(0,0,0,.06)",
                paddingRight: "12px",
              }}
            >
              <Row>
                <Divider span={20}>subject for review </Divider>
                <Col style={{ padding: "6px" }}>
                  <p className="input-data-placeholder-heading">Principle</p>
                </Col>
                <Col offset={1} span={8}>
                  <p className="input-data-placeholder-heading">
                    Performance against above policies and follow up action
                  </p>
                </Col>

                <Col offset={2} span={8}>
                  <p className="input-data-placeholder-heading">
                    Compliance with statutory requirements of relevance to the
                    principles, and, rectification of any non-compliances
                  </p>
                </Col>
              </Row>
              <Divider></Divider>
              <Row>
                <Col offset={2} span={4}>
                  <p className="input-data-placeholder-heading">
                    Indicate whether review was undertaken by Director /
                    Committee of the Board/ Any other Committee
                  </p>
                </Col>
                <Col span={3} offset={2}>
                  <p className="input-data-placeholder-heading">Frequency</p>
                </Col>
                <Col offset={2} span={4}>
                  <p className="input-data-placeholder-heading">
                    Indicate whether review was undertaken by Director /
                    Committee of the Board/ Any other Committee
                  </p>
                </Col>
                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">Frequency</p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }}>
                  <p className="input-data-placeholder-heading">P1</p>
                </Col>
                <Col
                  style={{ paddingRight: "10px", width: "200", padding: "6px" }}
                  offset={2}
                  span={5}
                >
                  <Select placeholder="director " onChange={(value) => value}>
                    <Option value="1">Director</Option>
                    <Option value="2">Committee of the Board</Option>
                    <Option value="3">Any other Committee</Option>
                  </Select>
                </Col>
                <Col
                  style={{ padding: "6px", float: "right" }}
                  offset={1}
                  span={2}
                >
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={3} span={3}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={2}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>

              <Row>
                <Col style={{ padding: "6px" }}>
                  <p className="input-data-placeholder-heading">P2</p>
                </Col>
                <Col
                  style={{ paddingRight: "10px", width: "200", padding: "6px" }}
                  offset={2}
                  span={5}
                >
                  <Select placeholder="director " onChange={(value) => value}>
                    <Option value="1">Director</Option>
                    <Option value="2">Committee of the Board</Option>
                    <Option value="3">Any other Committee</Option>
                  </Select>
                </Col>
                <Col
                  style={{ padding: "6px", float: "right" }}
                  offset={1}
                  span={2}
                >
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={3} span={3}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={2}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }}>
                  <p className="input-data-placeholder-heading">P3</p>
                </Col>
                <Col
                  style={{ paddingRight: "10px", width: "200", padding: "6px" }}
                  offset={2}
                  span={5}
                >
                  <Select placeholder="director " onChange={(value) => value}>
                    <Option value="1">Director</Option>
                    <Option value="2">Committee of the Board</Option>
                    <Option value="3">Any other Committee</Option>
                  </Select>
                </Col>
                <Col
                  style={{ padding: "6px", float: "right" }}
                  offset={1}
                  span={2}
                >
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={3} span={3}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={2}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }}>
                  <p className="input-data-placeholder-heading">P4</p>
                </Col>
                <Col
                  style={{ paddingRight: "10px", width: "200", padding: "6px" }}
                  offset={2}
                  span={5}
                >
                  <Select placeholder="director " onChange={(value) => value}>
                    <Option value="1">Director</Option>
                    <Option value="2">Committee of the Board</Option>
                    <Option value="3">Any other Committee</Option>
                  </Select>
                </Col>
                <Col
                  style={{ padding: "6px", float: "right" }}
                  offset={1}
                  span={2}
                >
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={3} span={3}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={2}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }}>
                  <p className="input-data-placeholder-heading">P5</p>
                </Col>
                <Col
                  style={{ paddingRight: "10px", width: "200", padding: "6px" }}
                  offset={2}
                  span={5}
                >
                  <Select placeholder="director " onChange={(value) => value}>
                    <Option value="1">Director</Option>
                    <Option value="2">Committee of the Board</Option>
                    <Option value="3">Any other Committee</Option>
                  </Select>
                </Col>
                <Col
                  style={{ padding: "6px", float: "right" }}
                  offset={1}
                  span={2}
                >
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={3} span={3}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={2}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }}>
                  <p className="input-data-placeholder-heading">P6</p>
                </Col>
                <Col
                  style={{ paddingRight: "10px", width: "200", padding: "6px" }}
                  offset={2}
                  span={5}
                >
                  <Select placeholder="director " onChange={(value) => value}>
                    <Option value="1">Director</Option>
                    <Option value="2">Committee of the Board</Option>
                    <Option value="3">Any other Committee</Option>
                  </Select>
                </Col>
                <Col
                  style={{ padding: "6px", float: "right" }}
                  offset={1}
                  span={2}
                >
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={3} span={3}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={2}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }}>
                  <p className="input-data-placeholder-heading">P7</p>
                </Col>
                <Col
                  style={{ paddingRight: "10px", width: "200", padding: "6px" }}
                  offset={2}
                  span={5}
                >
                  <Select placeholder="director " onChange={(value) => value}>
                    <Option value="1">Director</Option>
                    <Option value="2">Committee of the Board</Option>
                    <Option value="3">Any other Committee</Option>
                  </Select>
                </Col>
                <Col
                  style={{ padding: "6px", float: "right" }}
                  offset={1}
                  span={2}
                >
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={3} span={3}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={2}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }}>
                  <p className="input-data-placeholder-heading">P8</p>
                </Col>
                <Col
                  style={{ paddingRight: "10px", width: "200", padding: "6px" }}
                  offset={2}
                  span={5}
                >
                  <Select placeholder="director " onChange={(value) => value}>
                    <Option value="1">Director</Option>
                    <Option value="2">Committee of the Board</Option>
                    <Option value="3">Any other Committee</Option>
                  </Select>
                </Col>
                <Col
                  style={{ padding: "6px", float: "right" }}
                  offset={1}
                  span={2}
                >
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={3} span={3}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={2}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }}>
                  <p className="input-data-placeholder-heading">P9</p>
                </Col>
                <Col
                  style={{ paddingRight: "10px", width: "200", padding: "6px" }}
                  offset={2}
                  span={5}
                >
                  <Select placeholder="director " onChange={(value) => value}>
                    <Option value="1">Director</Option>
                    <Option value="2">Committee of the Board</Option>
                    <Option value="3">Any other Committee</Option>
                  </Select>
                </Col>
                <Col
                  style={{ padding: "6px", float: "right" }}
                  offset={1}
                  span={2}
                >
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={3} span={3}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={2}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    onChange={(value) => value}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>
            </Col>
            <Col span={13}></Col>
          </Row>
        </Col>
        <Col flex="auto"></Col>
      </Row>

      <Row>
         
      </Row>
       
    </div>
  );
};

export default H5;
