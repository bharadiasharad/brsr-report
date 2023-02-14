import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Col, Row, Select, Tooltip } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 import { SectionA_13 } from "./Type.ts";
 
const H13 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new SectionA_13( {}));

  const prepareData = ({ isCompleted, isValidated } = {}) => {
    const data = new SectionA_13(currentYearData);
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

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <span>Reporting boundary</span>
                  <Tooltip
                    placement="right"
                    title={
                      "Reporting boundary - Are the disclosures under this report made on a standalone basis (i.e. only for the entity) or on a consolidated basis (i.e. for the entity and all the entities which form a part of its consolidated financial statements, taken together)."
                    }
                  >
                    <ExclamationCircleOutlined
                      style={{ color: "gray", paddingLeft: "5px" }}
                    />
                  </Tooltip>
                </Col>
                <Col offset={2} span={8}>
                  <Select
                    placeholder="Standalone / Consolidated"
                    style={{ width: "100%", paddingTop: "-10px" }}
                    onChange={(value) => {
                      setCurrentYearData({
                        ...currentYearData,
                        boundary: value,
                      });
                    }}
                    value={currentYearData?.boundary}
                  >
                    <Option value={"standalone"}>Standalone</Option>
                    <Option value={"consolidated"}>Consolidated</Option>
                  </Select>
                </Col>
              </Row>
            </Col>
            <Col span={8}></Col>
          </Row>
        </Col>
        <Col flex="auto"></Col>
      </Row>

      <Row>
         
      </Row>
       
    </div>
  );
};

export default H13;
