import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Col, Divider, Input, Row, Tooltip } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
import { P1_5 } from "./Type.ts";

const H5 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P1_5({}));
  const [previousYearData, setPreviousYearData] = useState(new P1_5({}));

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col style={{ padding: "6px" }} span={8}></Col>
                <Col offset={0} span={6}>
                  <p className="input-data-placeholder-heading">
                    FY Current Financial Year
                  </p>
                </Col>
                <Col offset={1} span={6}>
                  <p className="input-data-placeholder-heading">
                    FY Previous Financial Year
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Directors</p>
                </Col>
                <Col offset={0} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.director}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        director: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.director}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        director: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>KMPs</p>
                </Col>
                <Col offset={0} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.kmp}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        kmp: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.kmp}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        kmp: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Employees</p>
                </Col>
                <Col offset={0} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.employee}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        employee: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.employee}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        employee: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Workers</p>
                </Col>
                <Col offset={0} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.worker}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        worker: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.worker}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        worker: e.target.value,
                      });
                    }}
                  />
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

export default H5;
