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
 
 
import { P7_2 } from "./Type.ts";

const H2 = (props) => {
  const [entityValue, setEntityValue] = useState(undefined);
  const [rowData, setRowData] = useState([{ no: 1 }]);
  const [count, setCount] = useState(1);
  const [disable, setDisable] = useState(false);

  const [cuerrentYearData, setCurrentDataYear] = useState(new P7_2({}));

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
                <Col span={6}>
                  <p>S. No.</p>
                </Col>
                <Col style={{ paddingTop: "8px" }} span={5}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={cuerrentYearData.serial}
                    onChange={(e) =>
                      setCurrentDataYear({
                        ...cuerrentYearData,
                        serial: e.target.value,
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
                  <p>Name of the trade and industry chambers</p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={10} offset={1}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    value={cuerrentYearData.name}
                    onChange={(e) =>
                      setCurrentDataYear({
                        ...cuerrentYearData,
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
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={8}>
                  <p>Reach of trade and industry chambers </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} span={10} offset={1}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    value={cuerrentYearData.reach}
                    onChange={(e) =>
                      setCurrentDataYear({
                        ...cuerrentYearData,
                        reach: e.target.value,
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
                disabled={disable}
                onClick={(e) => {
                  setCount(count == 10 ? setDisable(true) : count + 1);
                  addNewRow();
                }}
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
