import { Col, Row, Select } from "antd";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 
import { P5_4 } from "./Type.ts";

const H4 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P5_4({}));

   

  const oncurrentYearDataChange = (data) => {
    setCurrentYearData(data);
  };

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    Do you have a focal point (Individual/ Committee)
                    responsible for addressing human rights impacts or issues
                    caused or contributed to by the business?{" "}
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={4}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isFocalPointCommittee: e.target.value,
                      });
                    }}
                    Value={setCurrentYearData.isFocalPointCommittee}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
              </Row>
            </Col>
            <Col span={8}></Col>
          </Row>
        </Col>
        <Col flex="auto"></Col>
      </Row>

       
       
    </div>
  );
};

export default H4;
