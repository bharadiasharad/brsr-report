import { Col, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 import { sectionB_6 } from "./Type.ts";

const H6 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new sectionB_6({}));
  const [previousYearData, setPreviousYearData] = useState(new sectionB_6({}));

   

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
                <Col offset={3} span={6}>
                  <p className="input-data-placeholder-heading">
                    Has the entity carried out independent assessment/
                    evaluation of the working of its policies by an external
                    agency?
                  </p>
                </Col>
                <Col offset={3} span={4}>
                  <p className="input-data-placeholder-heading">
                    If yes, provide name of the agency
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }}>
                  <p className="input-data-placeholder-heading">P1</p>
                </Col>
                <Col style={{ padding: "6px" }} offset={3} span={5}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    value={currentYearData.isAssesmentP1}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isAssesmentP1: e.target.value,
                      });
                    }}
                  >
                    <Option value="true">Yes</Option>
                    <Option value="false">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={3}>
                  <TextArea
                    placeholder="Add statement here.."
                    rows={4}
                    value={currentYearData.nameP1}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        nameP1: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>

              <Row>
                <Col style={{ padding: "6px" }}>
                  <p className="input-data-placeholder-heading">P2</p>
                </Col>
                <Col style={{ padding: "6px" }} offset={3} span={5}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    value={currentYearData.isAssesmentP2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isAssesmentP2: e.target.value,
                      });
                    }}
                  >
                    <Option value="true">Yes</Option>
                    <Option value="false">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={3}>
                  <TextArea
                    placeholder="Add statement here.."
                    rows={4}
                    value={currentYearData.nameP2}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        nameP2: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }}>
                  <p className="input-data-placeholder-heading">P3</p>
                </Col>
                <Col style={{ padding: "6px" }} offset={3} span={5}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    value={currentYearData.isAssesmentP3}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isAssesmentP3: e.target.value,
                      });
                    }}
                  >
                    <Option value="true">Yes</Option>
                    <Option value="false">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={3}>
                  <TextArea
                    placeholder="Add statement here.."
                    rows={4}
                    value={currentYearData.nameP3}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        nameP3: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }}>
                  <p className="input-data-placeholder-heading">P4</p>
                </Col>
                <Col style={{ padding: "6px" }} offset={3} span={5}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    value={currentYearData.isAssesmentP4}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isAssesmentP4: e.target.value,
                      });
                    }}
                  >
                    <Option value="true">Yes</Option>
                    <Option value="false">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={3}>
                  <TextArea
                    placeholder="Add statement here.."
                    rows={4}
                    value={currentYearData.nameP5}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        nameP5: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }}>
                  <p className="input-data-placeholder-heading">P5</p>
                </Col>
                <Col style={{ padding: "6px" }} offset={3} span={5}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    value={currentYearData.isAssesmentP5}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isAssesmentP5: e.target.value,
                      });
                    }}
                  >
                    <Option value="true">Yes</Option>
                    <Option value="false">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={3}>
                  <TextArea
                    placeholder="Add statement here.."
                    rows={4}
                    value={currentYearData.nameP6}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        nameP6: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }}>
                  <p className="input-data-placeholder-heading">P6</p>
                </Col>
                <Col style={{ padding: "6px" }} offset={3} span={5}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    value={currentYearData.isAssesmentP6}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isAssesmentP6: e.target.value,
                      });
                    }}
                  >
                    <Option value="true">Yes</Option>
                    <Option value="false">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={3}>
                  <TextArea
                    placeholder="Add statement here.."
                    rows={4}
                    value={currentYearData.nameP6}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        nameP6: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }}>
                  <p className="input-data-placeholder-heading">P7</p>
                </Col>
                <Col style={{ padding: "6px" }} offset={3} span={5}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    value={currentYearData.isAssesmentP7}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isAssesmentP7: e.target.value,
                      });
                    }}
                  >
                    <Option value="true">Yes</Option>
                    <Option value="false">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={3}>
                  <TextArea
                    placeholder="Add statement here.."
                    rows={4}
                    value={currentYearData.nameP7}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        nameP7: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }}>
                  <p className="input-data-placeholder-heading">P8</p>
                </Col>
                <Col style={{ padding: "6px" }} offset={3} span={5}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    value={currentYearData.isAssesmentP8}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isAssesmentP8: e.target.value,
                      });
                    }}
                  >
                    <Option value="true">Yes</Option>
                    <Option value="false">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={3}>
                  <TextArea
                    placeholder="Add statement here.."
                    rows={4}
                    value={currentYearData.nameP8}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        nameP8: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }}>
                  <p className="input-data-placeholder-heading">P9</p>
                </Col>
                <Col style={{ padding: "6px" }} offset={3} span={5}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "50", paddingTop: "-10px" }}
                    value={currentYearData.isAssesmentP9}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isAssesmentP9: e.target.value,
                      });
                    }}
                  >
                    <Option value="true">Yes</Option>
                    <Option value="false">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={3}>
                  <TextArea
                    placeholder="Add statement here.."
                    rows={4}
                    value={currentYearData.nameP9}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        nameP9: e.target.value,
                      });
                    }}
                  />
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

export default H6;
