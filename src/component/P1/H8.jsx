import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Col, Divider, Input, Row, Tooltip } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
import { P1_8 } from "./Type.ts";

const H8 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P1_8({}));

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="1200px">
          <Row>
            <Col style={{ margin: "5px" }} span={24}>
              <Row>
                <Col offset={1} span={6}>
                  <p className="input-data-placeholder-heading">
                    Total number of awareness programmes held
                  </p>
                </Col>
                <Col offset={1} span={6}>
                  <p className="input-data-placeholder-heading">
                    Topics/Principles covered under the training
                  </p>
                </Col>
                <Col offset={1} span={6}>
                  <p className="input-data-placeholder-heading">
                    %age of value chain partners covered(by value of business
                    done with such partners)under the awareness programmes
                  </p>
                </Col>
              </Row>
              <br />
              <Row>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalAwareness1}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalAwareness1: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.topic1}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        topic1: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    value={currentYearData.percentage1}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        percentage1: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalAwareness2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalAwareness2: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.topic2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        topic2: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.percentage2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        percentage2: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalAwareness3}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalAwareness3: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.topic3}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        topic3: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.percentage3}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        percentage3: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.totalAwareness4}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        totalAwareness4: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.topic4}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        topic4: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.percentage4}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        percentage4: e.target.value,
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

export default H8;
