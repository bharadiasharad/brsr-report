import {
  CloseCircleOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Col, Row, Select, Button } from "antd";
import Card from "antd/lib/card/Card";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 
import { P4_2 } from "./Type.ts";

const H2 = (props) => {
  const [entityValue, setEntityValue] = useState(undefined);
  const [currentYearData, setcurrentYearData] = useState(new P4_2({}));

  const [rowData, setRowData] = useState([{ no: 1 }]);

   

  const addNewRow = () => {
    setEntityValue(rowData.push({}));
  };

  const deleteRow = (index) => {
    let data = _.cloneDeep(rowData);
    data.splice(index, 1); // 2nd parameter means remove one item only
    setRowData(data);
  };

  const getData = () => {
    return rowData.map((data, index) => {
      return (
        <Card style={{ marginBottom: "5px", marginRight: "14px" }}>
          <Row style={{ marginTop: "9px" }}>
            <Col style={{ paddingRight: "10px" }} span={12}>
              <Row>
                <Col span={10}>
                  <p>Stakeholder Group</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={12}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    onChange={(e) => {
                      currentYearData({
                        ...currentYearData,
                        stakeholderGroup: e.target.value,
                      });
                    }}
                    value={currentYearData.stakeholderGroup}
                  />
                </Col>
              </Row>
            </Col>
            <Col style={{ paddingRight: "10px" }} span={12}>
              <Row>
                <Col span={10}>
                  <p>Whether identified as Vulnerable & Marginalized Group</p>
                </Col>
                <Col style={{ paddingTop: "9px" }} span={8} offset={4}>
                  <Select
                    placeholder="YES / NO"
                    size="medium"
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      setcurrentYearData({
                        ...currentYearData,
                        isVulnerableMarginalized: e.target.value,
                      });
                    }}
                    Value={currentYearData.isVulnerableMarginalized}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={8}>
                  <p>
                    Channels of communication (Email, SMS, Newspaper, Pamphlets,
                    Advertisement, Community Meetings, Notice Board, Website)
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={14} offset={1}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    rows={4}
                    onChange={(e) => {
                      setcurrentYearData({
                        ...currentYearData,
                        channelOfCommunication: e.target.value,
                      });
                    }}
                    Value={currentYearData.channelOfCommunication}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={8}>
                  <p>Frequency (Annually/ Half yearly/ Quarterly)</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={4} offset={1}>
                  <Select
                    placeholder="Annually/Half Yearly/Quarterly"
                    size="medium"
                    value={true}
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      setcurrentYearData({
                        ...currentYearData,
                        frequency: e.target.value,
                      });
                    }}
                    Value={currentYearData.frequency}
                  >
                    <Option>Annually</Option>
                    <Option>Half Yearly</Option>
                    <Option>Quarterly</Option>
                  </Select>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={8}>
                  <p>
                    Purpose and scope of engagement including key topics and
                    concerns raised during such engagement
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={14} offset={1}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    onChange={(e) => {
                      setcurrentYearData({
                        ...currentYearData,
                        purpose: e.target.value,
                      });
                    }}
                    Value={currentYearData.purpose}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={3} offset={21}>
              <Button
                type="default"
                danger
                shape="circle"
                icon={<DeleteOutlined style={{ color: "red" }} />}
                onClick={() => {
                  deleteRow(index);
                }}
              />
            </Col>
          </Row>
        </Card>
      );
    });
  };

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="1400px">
          <Row>
            <Col style={{ margin: "5px" }} span={24}>
              {getData()}
            </Col>
            <Col span={8}></Col>
          </Row>
          <Row>
            <div style={{ margin: "5px" }}>
              <Button
                type="primary"
                size="small"
                style={{ marginTop: "10px" }}
                onClick={() => addNewRow()}
                icon={<PlusOutlined />}
              >
                {" "}
                Add New data
              </Button>
            </div>
          </Row>
        </Col>
      </Row>

       
       
    </div>
  );
};

export default H2;
