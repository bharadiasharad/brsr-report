import { DeleteFilled, PlusOutlined } from "@ant-design/icons";
import { Col, Row, Button, Input } from "antd";
import _ from "lodash";
import { useState } from "react";
 import TextArea from "antd/lib/input/TextArea";

const H6 = (props) => {
  const [entityValue, setEntityValue] = useState(undefined);
  const [rowData, setRowData] = useState([{ no: 1 }]);

   

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

  const getData = () => {
    return rowData.map((data, index) => {
      return (
        <Col style={{ margin: "5px" }} span={24}>
          <Row>
            <Col span={4} style={{ padding: "5px" }}>
              <TextArea
                size="medium"
                placeholder="Add details here.."
                autoSize={{ minRows: 2, maxRows: 2 }}
              />
            </Col>
            <Col span={4} style={{ padding: "5px" }}>
              <TextArea
                size="medium"
                placeholder="Add details here.."
                autoSize={{ minRows: 2, maxRows: 2 }}
              />
            </Col>
            <Col span={4} style={{ padding: "5px" }}>
              <TextArea
                size="medium"
                placeholder="Add details here.."
                autoSize={{ minRows: 2, maxRows: 2 }}
              />
            </Col>

            <Col
              style={{ paddingRight: "10px", paddingTop: "7px" }}
              offset={1}
              span={3}
            >
              <Button
                type="default"
                danger
                size="small"
                shape="circle"
                icon={
                  <DeleteFilled style={{ fontSize: "14px", color: "red" }} />
                }
                onClick={() => {
                  deleteRow(index);
                }}
              />
            </Col>
          </Row>
        </Col>
      );
    });
  };

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="1200px">
          <Row>
            <Col style={{ margin: "5px" }} span={24}>
              <Col style={{ margin: "5px" }} span={24}>
                <Row>
                  <Col span={4} style={{ padding: "5px" }}>
                    <p className="input-data-placeholder-heading">
                      Name of Product / Service
                    </p>
                  </Col>
                  <Col span={4} style={{ padding: "5px" }}>
                    <p className="input-data-placeholder-heading">
                      Description of the risk/concern
                    </p>
                  </Col>
                  <Col span={4} style={{ padding: "5px" }}>
                    <p className="input-data-placeholder-heading">
                      Action Taken
                    </p>
                  </Col>
                </Row>
              </Col>
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

export default H6;
