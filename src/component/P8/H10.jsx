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
 
 
import { P8_10 } from "./Type.ts";

const H10 = () => {
  const [entityValue, setEntityValue] = useState(undefined);
  const [rowData, setRowData] = useState([{ no: 1 }]);

  const [currentYearData, setCurrentYearData] = useState(new P8_10({}));

  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setCurrentYearData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSave = () => {
    console.log("h1 on save");
    console.log(currentYearData);
  };

  const onCancel = () => {
    console.log("h1 on cancel");
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
                <Col span={10}>
                  <p>S. No.</p>
                </Col>
                <Col span={4}>
                  <Input
                    size="medium"
                    type="text"
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
          </Row>

          <Row style={{ marginTop: "20px" }}>
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={4}>
                  <p>CSR Project</p>
                </Col>
                <Col span={14} offset={1}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    value={currentYearData.csr}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        csr: e.target.value,
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
                  <p>No. of persons benifited from CSR projects </p>
                </Col>
                <Col span={4} offset={1}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.persons}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        persons: e.target.value,
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

export default H10;
