import {
  CloseCircleOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Col, Row, Select, Button, Input, DatePicker, Space } from "antd";
import Card from "antd/lib/card/Card";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 
 
import { P8_8 } from "./Type.ts";

const H8 = (props) => {
  const [entityValue, setEntityValue] = useState(undefined);
  const [rowData, setRowData] = useState([{ no: 1 }]);
  const [currentYearData, setCurrentYearData] = useState(new P8_8({}));

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

  const onEntityChange = (data) => {
    setEntityValue(data);
  };

  const addNewRow = () => {
    setEntityValue(rowData.push({}));
  };

  const deleteRow = (index) => {
    let data = _.cloneDeep(rowData);
    data.splice(index, 1); // 2nd parameter means remove one item only
    setRowData(data);
  };
  const dateFormat = "YYYY/MM/DD";

  const getData = () => {
    return rowData.map((data, index) => {
      return (
        <Card style={{ marginBottom: "5px", marginRight: "14px" }}>
          <Row style={{ marginTop: "20px" }}>
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={4}>
                  <p>Intellectual Property based on traditional knowledge</p>
                </Col>
                <Col span={4} offset={1}>
                  <TextArea
                    placeholder="Add details here.."
                    rows={3}
                    value={currentYearData.percentageSourcing}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        ipr: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={4}>
                  <p>Owned/Acquired (Yes/No) </p>
                </Col>
                <Col span={4} offset={1}>
                  <Select
                    placeholder="YES / NO"
                    size="medium"
                    style={{ width: "100%" }}
                    value={currentYearData.isOwned}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        isOwned: e.target.value,
                      })
                    }
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col span={4}>
                  <p>Benefit shared (Yes/No) </p>
                </Col>
                <Col span={4} offset={1}>
                  <Select
                    placeholder="YES / NO"
                    size="medium"
                    style={{ width: "100%" }}
                    value={currentYearData.isShared}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        isShared: e.target.value,
                      })
                    }
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={4}>
                  <p>Basis of calculating benefit share</p>
                </Col>
                <Col span={4} offset={1}>
                  <TextArea
                    placeholder="Add details here.."
                    rows={3}
                    value={currentYearData.basis}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        basis: e.target.value,
                      })
                    }
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

export default H8;
