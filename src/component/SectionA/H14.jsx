import {
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Col, Row, Button, Input } from "antd";
import Card from "antd/lib/card/Card";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useEffect, useState } from "react";
 import { SectionA_14 } from "./Type.ts";
 
const H14 = (props) => {
  console.log( {});
  const [currentYearData, setCurrentYearData] = useState([]);

  useEffect(() => {
    if( {} !== {}) {
      const dataArr = Object.values( {});
      console.log(dataArr);
      const newData  = dataArr.map(value => new SectionA_14(value));
      setCurrentYearData(newData);
    } else {
      setCurrentYearData([new SectionA_14( {})])
    }
  }, []);

  const prepareData = ({ isCompleted, isValidated } = {}) => {
    setCurrentYearData(currentYearData);
    const data = currentYearData;
    const obj = {
      data: data,
      isCompleted: isCompleted,
      isValidated: isValidated,
    };
    return {
      data: obj,
      definationId: props.headingData.definationId,
      unitId: props.unitId,
    };
  };

  const addNewRow = () => {
    const newRow = [...currentYearData];
    newRow.push(new SectionA_14({}));
    setCurrentYearData(newRow);
  };

  const deleteRow = (index) => {
    let data = _.cloneDeep(currentYearData);
    data.splice(index, 1); // 2nd parameter means remove one item only
    setCurrentYearData(data);
  };

  const getData = () => {
    return currentYearData.map((data, index) => {
      return (
        <Card key={index} style={{ marginBottom: "5px", marginRight: "14px" }}>
          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={4}>
                  <p>Description of Main Activity</p>
                </Col>
                <Col span={18} offset={1}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    onChange={(e) => {
                      let newData = [...currentYearData];
                      console.log(newData);
                      newData[index].mainActivity = e.target.value;
                      setCurrentYearData(newData);
                    }}
                    value={data.mainActivity}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Col style={{ paddingRight: "10px" }} span={24}>
              <Row>
                <Col span={4}>
                  <p>Description of Business Activity</p>
                </Col>
                <Col span={18} offset={1}>
                  <TextArea
                    size="medium"
                    placeholder="Add details here.."
                    rows={2}
                    onChange={(e) => {
                      let newData = [...currentYearData];
                      newData[index].business = e.target.value;
                      setCurrentYearData(newData);
                    }}
                    value={data.business}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px", paddingLeft: "2px" }}>
            <Col style={{ paddingRight: "10px" }} span={12}>
              <Row>
                <Col span={10}>
                  <p>% of Turnover of the entity</p>
                </Col>
                <Col span={12}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      
                      let newData = [...currentYearData];
                      newData[index].turnover = e.target.value;
                      setCurrentYearData(newData);
                    }}
                    value={data.turnover}
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
        <Col flex="1200px">
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

export default H14;
