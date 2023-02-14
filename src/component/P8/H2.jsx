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
 
 
import { P8_2 } from "./Type.ts";

const H2 = (props) => {
  const [entityValue, setEntityValue] = useState(undefined);
  const [rowData, setRowData] = useState([{ no: 1 }]);

  const [currentYearData, setCurrentYearData] = useState(new P8_2({}));

  const handleChange = (e) => {
    const { value } = e.target;
    setCurrentYearData((prev) => {
      return { ...prev, value };
    });
  };

  const onSaveAndNext = () => {
    console.log("h2 on save");
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
          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={12}>
              <Row>
                <Col span={5}>
                  <p>Sr. No.</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={9}>
                  <Input
                    size="medium"
                    type="number"
                    value={currentYearData.covered}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        covered: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
            </Col>
            <Col style={{ paddingRight: "8px" }} span={12}>
              <Row>
                <Col span={8}>
                  <p>Name of Project for which R&R is ongoing</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={12} offset={4}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    value={currentYearData.name}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        name: e.target.value,
                      })
                    }
                    rows={2}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={12}>
              <Row>
                <Col span={5}>
                  <p>State</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={9}>
                  <Input
                    size="medium"
                    type="text"
                    value={currentYearData.state}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        state: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
            </Col>
            <Col style={{ paddingRight: "8px" }} span={12}>
              <Row>
                <Col span={8}>
                  <p>District</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={12} offset={4}>
                  <Input
                    size="large"
                    type="text"
                    value={currentYearData.district}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        district: e.target.value,
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
                  <p>No. Of Project Affected Families (PAFs)</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={4} offset={1}>
                  <Input
                    size="medium"
                    type="number"
                    value={currentYearData.affected}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        affected: e.target.value,
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
                  <p>% of PAFs covered by R&R</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={4} offset={1}>
                  <Input
                    size="medium"
                    type="number"
                    value={currentYearData.serial}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        covered: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <p>Amounts paid to PAFs in the FY(In INR)</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={4} offset={1}>
                  <Input
                    size="medium"
                    type="text"
                    value={currentYearData.amount}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        amount: e.target.value,
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

export default H2;
