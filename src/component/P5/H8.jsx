import { Col, Row, Select } from "antd";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 
import { P5_8 } from "./Type.ts";

const H8 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P5_8({}));

   

  const onCurrentYearDataChange = (data) => {
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
                    Do human rights requirements form part of your business
                    agreements and contracts?{" "}
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={2} span={4}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        isbusinessAgreement: e.target.value,
                      })
                    }
                    defaultValue={currentYearData.isbusinessAgreement}
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

export default H8;
