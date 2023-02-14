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
 
import { P6_10 } from "./Type.ts";

const H10 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P6_10({}));
  const [rowData, setRowData] = useState([{ no: 1 }]);

  const [entityValue, setEntityValue] = useState(undefined);

   

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
          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={12}>
              <Row>
                <Col span={10}>
                  <p>Location</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={12}>
                  <Select
                    placeholder="Location"
                    size="medium"
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        location: e.target.value,
                      });
                    }}
                    value={currentYearData.location}
                    dropdownStyle={{ width: "500px" }}
                  >
                    <Option value="1">
                      Mumbai Head Office 12345 Navi Mumbai
                    </Option>
                    <Option value="2">Pune</Option>
                    <Option value="3">Bangalore</Option>
                    <Option value="4">Delhi</Option>
                  </Select>
                </Col>
              </Row>
            </Col>
            <Col style={{ paddingRight: "10px" }} span={12}>
              <Row>
                <Col span={10}>
                  <p>Is Environmental complied?</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={8} offset={4}>
                  <Select
                    placeholder="YES / NO"
                    size="medium"
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        is: e.target.value,
                      });
                    }}
                    value={currentYearData.is}
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
                <Col span={4}>
                  <p>
                    If no, the reasons thereof and corrective action taken, if
                    any
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={18} offset={1}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        reason: e.target.value,
                      });
                    }}
                    value={currentYearData.reason}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={4}>
                  <p>Type of operation</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={18} offset={1}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    rows={1}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        operation: e.target.value,
                      });
                    }}
                    value={currentYearData.operation}
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

export default H10;
