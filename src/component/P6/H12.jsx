import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Col, Row, Button, Card } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P6_12 } from "./Type.ts";

const H12 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P6_12({}));

  const [entityValue, setEntityValue] = useState(undefined);
  const [rowData, setRowData] = useState([{ no: 1 }]);
  const dateFormat = "DD-MM-YYYY";

   

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
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={5}>
                  <p>
                    Specify the law / regulation / guidelines which was not
                    complied with
                  </p>
                </Col>
                <Col span={17} offset={1}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    value={currentYearData.law}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        law: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={5}>
                  <p>Provide details of the non-compliance</p>
                </Col>
                <Col span={17} offset={1}>
                  <TextArea
                    size="medium"
                    value={currentYearData.details}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        details: e.target.value,
                      });
                    }}
                    placeholder="Add details here.."
                    rows={2}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={5}>
                  <p>
                    Any fines / penalties / action taken by regulatory agencies
                    such as pollution control boards or by courts
                  </p>
                </Col>
                <Col span={17} offset={1}>
                  <TextArea
                    size="medium"
                    value={currentYearData.fine}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        fine: e.target.value,
                      });
                    }}
                    placeholder="Add details here.."
                    rows={2}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={5}>
                  <p>Corrective action taken, if any</p>
                </Col>
                <Col span={17} offset={1}>
                  <TextArea
                    size="medium"
                    value={currentYearData.corrective}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        corrective: e.target.value,
                      });
                    }}
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

export default H12;
