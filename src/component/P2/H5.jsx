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

const H5 = (props) => {
  const [entityValue, setEntityValue] = useState(undefined);
  const [rowData, setRowData] = useState([{ no: 1 }]);

  const onSaveAndNext = () => {
    console.log("h1 on save");
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
                  <p>NIC code</p>
                </Col>
                <Col span={8}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
            </Col>
            <Col style={{ paddingRight: "10px" }} span={12}>
              <Row>
                <Col span={12}>
                  <p>Whether conducted by independent external agency ?</p>
                </Col>
                <Col span={8} offset={4}>
                  <Select
                    placeholder="YES / NO"
                    size="medium"
                    value={true}
                    style={{ width: "100%" }}
                    onChange={(value) => onEntityChange(value)}
                    defaultValue={entityValue}
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
                  <p>Name Of Product Service</p>
                </Col>
                <Col span={4} offset={1}>
                  <Input size="medium" type="text" required />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={8}>
                  <p>% of total Turnover contributed</p>
                </Col>
                <Col span={4} offset={1}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={8}>
                  <p> Results communicated in public domain?</p>
                </Col>
                <Col span={4} offset={1}>
                  <Select
                    placeholder="YES / NO"
                    size="medium"
                    value={true}
                    style={{ width: "100%" }}
                    onChange={(value) => onEntityChange(value)}
                    defaultValue={entityValue}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <p>
                    Boundary for which the Life Cycle Perspective/ Assessment
                    was conducted
                  </p>
                </Col>
                <Col span={10} offset={1}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    autoSize={{ minRows: 2, maxRows: 2 }}
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

export default H5;
