import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Col, Row, Button, Input } from "antd";
import _ from "lodash";
import { useState, useEffect } from "react";
 import { SectionA_15 } from "./Type.ts";
 
const H15 = (props) => {
  const [currentYearData, setCurrentYearData] = useState([]);

  useEffect(() => {
    console.log( {})
    if( {} !== {}) {
      const dataArr = Object.values( {});
      const newData  = dataArr.map(value => new SectionA_15(value));
      setCurrentYearData(newData);
    } else {
      setCurrentYearData([new SectionA_15( {})])
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
    newRow.push(new SectionA_15({}));
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
        <Col style={{ margin: "5px" }} span={18}>
          <Row>
            <Col span={6}>
              <Input
                size="medium"
                type="text"
                required
                onChange={(e) => {
                  let newData = [...currentYearData];
                      console.log(newData);
                      newData[index].product = e.target.value;
                      setCurrentYearData(newData);
                }}
                value={data.product}
              />
            </Col>
            <Col offset={1} span={6}>
              <Input
                size="medium"
                type="text"
                required
                onChange={(e) => {
                  let newData = [...currentYearData];
                      console.log(newData);
                      newData[index].nic = e.target.value;
                      setCurrentYearData(newData);
                }}
                value={data.nic}
              />
            </Col>
            <Col offset={1} span={6}>
              <Input
                size="medium"
                type="number"
                required
                onChange={(e) => {
                  let newData = [...currentYearData];
                      console.log(newData);
                      newData[index].turnover = e.target.value;
                      setCurrentYearData(newData);
                }}
                value={data.turnover}
              />
            </Col>
            <Col
              style={{ paddingRight: "10px", paddingTop: "2px" }}
              span={2}
              offset={1}
            >
              <Button
                type="default"
                danger
                size="small"
                shape="circle"
                icon={
                  <DeleteOutlined style={{ fontSize: "14px", color: "red" }} />
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
              <Col style={{ margin: "5px" }} span={18}>
                <Row style={{ textAlign: "center" }}>
                  <Col span={6}>Product/Service</Col>
                  <Col offset={1} span={6}>
                    NIC Code
                  </Col>
                  <Col offset={1} span={6}>
                    % of total turnover contributed
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

      <Row>
         
      </Row>
       
    </div>
  );
};

export default H15;
