import {
  CloseCircleOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Col, Row, Select, Button, DatePicker, Card } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
 
import { useState } from "react";
 
import { P6_11 } from "./Type.ts";

const H11 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P6_11({}));
  const [rowData, setRowData] = useState([{ no: 1 }]);
  const dateFormat = "DD-MM-YYYY";

   

  const addNewRow = () => {
    setCurrentYearData(rowData.push({}));
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
          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={4}>
                  <p>Name and brief details of project</p>
                </Col>
                <Col span={18} offset={1}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        name: e.target.value,
                      });
                    }}
                    value={currentYearData.name}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={12}>
              <Row>
                <Col span={10}>
                  <p>EIA Notification No.</p>
                </Col>
                <Col span={12}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    rows={1}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        notification: e.target.value,
                      });
                    }}
                    value={currentYearData.notification}
                  />
                </Col>
              </Row>
            </Col>
            <Col style={{ paddingRight: "10px" }} span={12}>
              <Row>
                <Col span={10}>
                  <p>Date</p>
                </Col>
                <Col span={8} offset={4}>
                  <DatePicker
                    style={{ width: "100%" }}
                    format={dateFormat}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        date: e.target.value,
                      });
                    }}
                    value={currentYearData.date}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={12}>
              <Row>
                <Col span={10}>
                  <p>Conducted by independent external agency?</p>
                </Col>
                <Col span={8} offset={4}>
                  <Select
                    placeholder="YES / NO"
                    size="medium"
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isConducted: e.target.value,
                      });
                    }}
                    value={currentYearData.isConducted}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
              </Row>
            </Col>
            <Col style={{ paddingRight: "10px" }} span={12}>
              <Row>
                <Col span={10}>
                  <p>Results communicated in public domain?</p>
                </Col>
                <Col span={8} offset={4}>
                  <Select
                    placeholder="YES / NO"
                    size="medium"
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isPublic: e.target.value,
                      });
                    }}
                    value={currentYearData.isPublic}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={4}>
                  <p>Relevant Web link</p>
                </Col>
                <Col span={18} offset={1}>
                  <TextArea
                    size="medium"
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        link: e.target.value,
                      });
                    }}
                    value={currentYearData.link}
                    placeholder="Add details here.."
                    rows={2}
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

export default H11;
