import { DeleteFilled, PlusOutlined } from "@ant-design/icons";
import { Col, Row, Button, Input } from "antd";
import _ from "lodash";
import { useState, useEffect } from "react";
  import { SectionA_24 } from "./Type.ts";

const H24 = (props) => {
  const [currentYearData, setCurrentYearData] = useState([]);

  useEffect(() => {
    if ( {} !== {}) {
      const dataArr = Object.values( {});
      console.log(dataArr);
      const newData = dataArr.map((value) => new SectionA_24(value));
      setCurrentYearData(newData);
    } else {
      setCurrentYearData([new SectionA_24( {})]);
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
    newRow.push(new SectionA_24({}));
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
        <Col style={{ margin: "5px" }} span={24}>
          <Row>
            <Col span={4} style={{ padding: "5px" }}>
              <Input
                size="medium"
                type="text"
                required
                onChange={(e) => {
                  let newData = [...currentYearData];
                  console.log(newData);
                  newData[index].materialIssue = e.target.value;
                  setCurrentYearData(newData);
                }}
                value={data.materialIssue}
              />
            </Col>
            <Col span={4} style={{ padding: "5px" }}>
              <Input
                size="medium"
                type="text"
                required
                onChange={(e) => {
                  let newData = [...currentYearData];
                  console.log(newData);
                  newData[index].riskOpportunity = e.target.value;
                  setCurrentYearData(newData);
                }}
                value={data.riskOpportunity}
              />
            </Col>
            <Col span={4} style={{ padding: "5px" }}>
              <Input
                size="medium"
                type="text"
                required
                onChange={(e) => {
                  let newData = [...currentYearData];
                  console.log(newData);
                  newData[index].rationale = e.target.value;
                  setCurrentYearData(newData);
                }}
                value={data.rationale}
              />
            </Col>
            <Col span={4} style={{ padding: "5px" }}>
              <Input
                size="medium"
                type="text"
                required
                onChange={(e) => {
                  let newData = [...currentYearData];
                  console.log(newData);
                  newData[index].mitigate = e.target.value;
                  setCurrentYearData(newData);
                }}
                value={data.mitigate}
              />
            </Col>
            <Col span={4} style={{ padding: "5px" }}>
              <Input
                size="medium"
                type="text"
                required
                onChange={(e) => {
                  let newData = [...currentYearData];
                  console.log(newData);
                  newData[index].implication = e.target.value;
                  setCurrentYearData(newData);
                }}
                value={data.implication}
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
                      Material issue identified
                    </p>
                  </Col>
                  <Col span={4} style={{ padding: "5px" }}>
                    <p className="input-data-placeholder-heading">
                      Indicate whether risk or opportunity (R/O)
                    </p>
                  </Col>
                  <Col span={4} style={{ padding: "5px" }}>
                    <p className="input-data-placeholder-heading">
                      Rationale for identifying the risk / opportunity
                    </p>
                  </Col>
                  <Col span={4} style={{ padding: "5px" }}>
                    <p className="input-data-placeholder-heading">
                      In case of risk, approach to adapt or mitigate
                    </p>
                  </Col>
                  <Col span={4} style={{ padding: "5px" }}>
                    <p className="input-data-placeholder-heading">
                      Financial implications of the risk or opportunity
                      (Indicate positive or negative implications)
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

      <Row>
         
      </Row>
       
    </div>
  );
};

export default H24;
