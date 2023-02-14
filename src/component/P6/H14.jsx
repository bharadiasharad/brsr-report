import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Col, Divider, Input, Row, Tooltip } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P6_14 } from "./Type.ts";

const H14 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P6_14({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col style={{ padding: "6px" }} span={8}></Col>
                <Col offset={1} span={6}>
                  <p className="input-data-placeholder-heading">
                    Current Financial Year
                  </p>
                </Col>
                <Col offset={1} span={6}>
                  <p className="input-data-placeholder-heading">
                    Previous Financial Year
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Total Electricity Consumption</p>
                </Col>
                <Col offset={1} span={6}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col offset={1} span={6}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Total Fuel Consumption</p>
                </Col>
                <Col offset={1} span={6}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col offset={1} span={6}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Energy Consumption Through other sources</p>
                </Col>
                <Col offset={1} span={6}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col offset={1} span={6}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Total Energy Consumed</p>
                </Col>
                <Col offset={1} span={6}>
                  <Input size="medium" type="number" disabled required />
                </Col>
                <Col offset={1} span={6}>
                  <Input size="medium" type="number" disabled required />
                </Col>
              </Row>
            </Col>
            <Col span={8}></Col>
          </Row>
          <Divider />
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <span>Energy intensity per rupee of turnover</span>
                  <Tooltip
                    placement="right"
                    title={"Total energy consumption/ turnover in rupees"}
                  >
                    <ExclamationCircleOutlined
                      style={{ color: "gray", paddingLeft: "5px" }}
                    />
                  </Tooltip>
                </Col>
                <Col offset={1} span={6}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col offset={1} span={6}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <span>
                    Energy intensity (optional) – the relevant metric may be
                    selected by the entity
                  </span>
                </Col>
                <Col offset={1} span={6}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col offset={1} span={6}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Divider />
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <span>
                    Indicate if any independent assessment/ evaluation/assurance
                    has been carried out by an external agency?
                  </span>
                </Col>
                <Col offset={1} span={13}>
                  <TextArea placeholder="Add details here.." rows={4} />
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

export default H14;
