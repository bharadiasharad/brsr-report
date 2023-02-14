import { Col, Divider, Input, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 import { Option } from "antd/lib/mentions";
import { sectionB_7 } from "./Type.ts";
const H7 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new sectionB_7({}));
  const onSaveAndNext = () => {
    console.log("h1 on save");

    props.callback();
  };

  const onSave = () => {
    console.log("h1 on cancel");
  };

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="2000px">
          <Row>
            <Col style={{ margin: "5px" }} span={23}>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  <Divider>Questions</Divider>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={2}></Col>
                <Col span={2}></Col>
                <Col span={2}></Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">P1</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">P2</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">P3</p>
                </Col>
                <Col span={0}></Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">P4</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">P5</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">P6</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">P7</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">P8</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">P9</p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  The entity does not consider the Principles material to its
                  business (Yes/No)
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isNotMaterialP1}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isNotMaterialP1: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isNotMaterialP2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isNotMaterialP2: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isNotMaterialP3}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isNotMaterialP3: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isNotMaterialP4}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isNotMaterialP4: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isNotMaterialP5}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isNotMaterialP5: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isNotMaterialP6}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isNotMaterialP6: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isNotMaterialP7}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isNotMaterialP7: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isNotMaterialP8}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isNotMaterialP8: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isNotMaterialP9}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isNotMaterialP9: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  The entity is not at a stage where it is in a position to
                  formulate and implement the policies on specified principles
                  (Yes/No)
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isPositionP1}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPositionP1: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isPositionP2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPositionP2: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isPositionP3}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPositionP3: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isPositionP4}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPositionP4: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isPositionP5}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPositionP5: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isPositionP6}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPositionP6: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isPositionP7}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPositionP7: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isPositionP8}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPositionP8: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isPositionP9}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPositionP9: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  The entity does not have the financial or/human and technical
                  resources available for the task (Yes/No)
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isResourceP1}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isResourceP1: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isResourceP2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isResourceP2: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isResourceP3}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isResourceP3: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isResourceP4}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isResourceP4: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isResourceP5}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isResourceP5: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isResourceP6}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isResourceP6: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isResourceP7}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isResourceP7: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isResourceP8}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isResourceP8: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isResourceP9}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isResourceP9: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  It is planned to be done in the next financial year (Yes/No)
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isPlannedP1}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPlannedP1: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isPlannedP2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPlannedP2: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isPlannedP3}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPlannedP3: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isPlannedP4}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPlannedP4: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isPlannedP5}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPlannedP5: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isPlannedP6}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPlannedP6: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isPlannedP7}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPlannedP7: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isPlannedP8}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPlannedP8: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
                <Col span={2}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isPlannedP9}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPlannedP9: e.target.value,
                      });
                    }}
                  >
                    <Option value={false}>Yes</Option>
                    <Option value={true}>No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  Any other reason (please specify)
                </Col>
                <Col span={2}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                    value={currentYearData.isOtherP1}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isOtherP1: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={2}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                    value={currentYearData.isOtherP2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isOtherP2: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={2}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                    value={currentYearData.isOtherP3}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isOtherP3: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={2}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                    value={currentYearData.isOtherP4}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isOtherP4: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                    value={currentYearData.isOtherP5}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isOtherP5: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                    value={currentYearData.isOtherP6}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isOtherP6: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={2}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                    value={currentYearData.isOtherP7}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isOtherP7: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={2}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                    value={currentYearData.isOtherP8}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isOtherP8: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col span={2}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
                    value={currentYearData.isOtherP9}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isOtherP9: e.target.value,
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
      <Divider></Divider>

      <Row>
         
      </Row>
       
    </div>
  );
};

export default H7;
