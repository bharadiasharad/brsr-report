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
import { P7_4 } from "./Type.ts";

const H4 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P7_4({}));
  const [rowData, setRowData] = useState([{ no: 1 }]);

  const addNewRow = () => {
    setCurrentYearData(rowData.push({}));
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
          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={12}>
              <Row>
                <Col span={5}>
                  <p>S.No.</p>
                </Col>
                <Col style={{ paddingTop: "8px" }} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    value={currentYearData.serial}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        serial: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
            </Col>
            <Col style={{ paddingRight: "10px" }} span={12}>
              <Row>
                <Col span={10}>
                  <p>Whether information available in public domain?</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={8} offset={4}>
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
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={8}>
                  <p>Public policy advocated</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={4} offset={1}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    value={currentYearData.policy}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        policy: e.target.value,
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
                <Col span={8}>
                  <p>
                    Frequency of Review by Board (Annually/Half Yearly
                    /Queterly/Others-please specify)
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={4} offset={1}>
                  <Select
                    size="medium"
                    style={{ width: "100%" }}
                    value={currentYearData.frequency}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        frequency: e.target.value,
                      })
                    }
                  >
                    <Option value={"annually"}>Annually</Option>
                    <Option value={"halfYearly"}>Half Yearly</Option>
                    <Option value={"quarterly"}>Quarterly</Option>
                    <Option value={"other"}>Other</Option>
                  </Select>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={8}>
                  <p>Method resorted for such advocacy</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={14} offset={1}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    value={currentYearData.methods}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        methods: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <p>Web Link, if available</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={10} offset={1}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    value={currentYearData.weblink}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        weblink: e.target.value,
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

export default H4;
