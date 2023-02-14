import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Col, Divider, Input, Row, Select, Tooltip } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 import { sectionB_1 } from "./Type.ts";

const H1 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new sectionB_1({}));
  const [previousYearData, setPreviousYearData] = useState(new sectionB_1({}));

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
              span={10}
            >
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  <p className="input-data-placeholder-heading">Principle</p>
                </Col>
                <Col offset={1} span={8}>
                  <p className="input-data-placeholder-heading">
                    Whether your entity’s policies cover each principle and its
                    core elements of the NGRBC
                  </p>
                </Col>
                <Col offset={1} span={8}>
                  <p className="input-data-placeholder-heading">
                    Has the policy been approved by the Board?
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  <p className="input-data-placeholder-heading">P1</p>
                </Col>
                <Col style={{ padding: "6px" }} offset={1} span={8}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    value={currentYearData.isPolicyP1}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPolicyP1: e.target.value,
                      });
                    }}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={1} span={8}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    value={currentYearData.isPolicyApprovedP1}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPolicyApprovedP1: e.target.value,
                      });
                    }}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  <p className="input-data-placeholder-heading">P2</p>
                </Col>
                <Col style={{ padding: "6px" }} offset={1} span={8}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    value={currentYearData.isPolicyP2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPolicyP2: e.target.value,
                      });
                    }}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={1} span={8}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    value={currentYearData.isPolicyApprovedP2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPolicyApprovedP2: e.target.value,
                      });
                    }}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  <p className="input-data-placeholder-heading">P3</p>
                </Col>
                <Col style={{ padding: "6px" }} offset={1} span={8}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    value={currentYearData.isPolicyP3}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPolicyP3: e.target.value,
                      });
                    }}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={1} span={8}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    value={currentYearData.isPolicyApprovedP3}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPolicyApprovedP3: e.target.value,
                      });
                    }}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  <p className="input-data-placeholder-heading">P4</p>
                </Col>
                <Col style={{ padding: "6px" }} offset={1} span={8}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    value={currentYearData.isPolicyP4}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPolicyP4: e.target.value,
                      });
                    }}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={1} span={8}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    value={currentYearData.isPolicyApprovedP4}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPolicyApprovedP4: e.target.value,
                      });
                    }}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  <p className="input-data-placeholder-heading">P5</p>
                </Col>
                <Col style={{ padding: "6px" }} offset={1} span={8}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    value={currentYearData.isPolicyP5}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPolicyP5: e.target.value,
                      });
                    }}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={1} span={8}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    value={currentYearData.isPolicyApprovedP5}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPolicyApprovedP5: e.target.value,
                      });
                    }}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  <p className="input-data-placeholder-heading">P6</p>
                </Col>
                <Col style={{ padding: "6px" }} offset={1} span={8}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    value={currentYearData.isPolicyP6}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPolicyP6: e.target.value,
                      });
                    }}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={1} span={8}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    value={currentYearData.isPolicyApprovedP6}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPolicyApprovedP6: e.target.value,
                      });
                    }}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  <p className="input-data-placeholder-heading">P7</p>
                </Col>
                <Col style={{ padding: "6px" }} offset={1} span={8}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    value={currentYearData.isPolicyP7}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPolicyP7: e.target.value,
                      });
                    }}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={1} span={8}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    value={currentYearData.isPolicyApprovedP7}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPolicyApprovedP7: e.target.value,
                      });
                    }}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  <p className="input-data-placeholder-heading">P8</p>
                </Col>
                <Col style={{ padding: "6px" }} offset={1} span={8}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    value={currentYearData.isPolicyP8}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPolicyP8: e.target.value,
                      });
                    }}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={1} span={8}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    value={currentYearData.isPolicyApprovedP8}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPolicyApprovedP8: e.target.value,
                      });
                    }}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  <p className="input-data-placeholder-heading">P9</p>
                </Col>
                <Col style={{ padding: "6px" }} offset={1} span={8}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    value={currentYearData.isPolicyP9}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPolicyP9: e.target.value,
                      });
                    }}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
                <Col style={{ padding: "6px" }} offset={1} span={8}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    value={currentYearData.isPolicyApprovedP9}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPolicyApprovedP9: e.target.value,
                      });
                    }}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>
            </Col>
            <Col span={13}>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p className="input-data-placeholder-heading">
                    Web Link of the Policies, if available
                  </p>
                </Col>
                <Col offset={1} span={15}>
                  <TextArea
                    placeholder="Add address here.."
                    rows={2}
                    value={previousYearData.linkP1}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        linkP1: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p className="input-data-placeholder-heading">
                    Whether the entity has translated the policy into
                    procedures?
                  </p>
                </Col>
                <Col style={{ paddingTop: "6px" }} offset={1} span={6}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    value={currentYearData.isProcedureP1}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isProcedureP1: e.target.value,
                      });
                    }}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p className="input-data-placeholder-heading">
                    Do the enlisted policies extend to your value chain
                    partners?
                  </p>
                </Col>
                <Col style={{ paddingTop: "6px" }} offset={1} span={6}>
                  <Select
                    placeholder="Yes / No"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    value={currentYearData.isValueChainPartnersP1}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isValueChainPartnersP1: e.target.value,
                      });
                    }}
                  >
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p className="input-data-placeholder-heading">
                    Name of the national and international codes.
                    <Tooltip
                      placement="right"
                      title={
                        "Name of the national and international codes/certifications/labels/ standards (e.g. Forest Stewardship Council, Fairtrade, Rainforest Alliance, Trustea) standards (e.g. SA 8000, OHSAS, ISO, BIS) adopted by your entity and mapped to each principle."
                      }
                    >
                      <ExclamationCircleOutlined
                        style={{ color: "gray", paddingLeft: "5px" }}
                      />
                    </Tooltip>
                  </p>
                </Col>
                <Col style={{ paddingTop: "6px" }} offset={1} span={15}>
                  <TextArea
                    placeholder="Add address here.."
                    rows={2}
                    value={previousYearData.linkP2}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        linkP2: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p className="input-data-placeholder-heading">
                    Performance of the entity against the specific commitments,
                    goals and targets along-with reasons in case the same are
                    not met.
                  </p>
                </Col>
                <Col style={{ paddingTop: "6px" }} offset={1} span={15}>
                  <TextArea
                    placeholder="Add address here.."
                    rows={3}
                    value={previousYearData.linkP3}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        linkP3: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col flex="auto"></Col>
      </Row>

      <Row>
         
      </Row>
       
    </div>
  );
};

export default H1;
