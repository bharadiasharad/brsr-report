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
 
 
import { P7_3 } from "./Type.ts";

const H3 = (props) => {
  const [entityValue, setEntityValue] = useState(undefined);
  const [rowData, setRowData] = useState([{ no: 1 }]);
  const [currentYearData, setCurrentYearData] = useState(new P7_3({}));

  const onSaveAndNext = () => {
    console.log("h3 on save");
    props.callback();
    console.log(currentYearData);
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
    setEntityValue(...rowData, rowData.push({}));
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
                  <p>Name of auhtority</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={12}>
                  <Input
                    size="medium"
                    type="text"
                    required
                    value={currentYearData.authority}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        authority: e.target.value,
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
                  <p>Brief of the case</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={14} offset={1}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    value={currentYearData.brief}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        brief: e.target.value,
                      })
                    }
                    rows={2}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={4}>
                  <p>Corrective action taken </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={14} offset={1}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    value={currentYearData.correctiveAction}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        correctiveAction: e.target.value,
                      })
                    }
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

export default H3;
