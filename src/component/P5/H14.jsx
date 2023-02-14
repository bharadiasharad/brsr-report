import { Col, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P5_14 } from "./Type.ts";

const H14 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P5_14({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col style={{ padding: "6px" }} span={8}></Col>
                <Col offset={1} span={8}>
                  <p className="input-data-placeholder-heading">
                    % of value chain partners (by value of business done with
                    such partners) that were assessed
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Sexual Harassment</p>
                </Col>
                <Col offset={1} span={8}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        sexualHarassment: e.target.value,
                      });
                    }}
                    value={currentYearData.sexualHarassment}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Discrimination at workplace</p>
                </Col>
                <Col offset={1} span={8}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        discrimination: e.target.value,
                      });
                    }}
                    value={currentYearData.discrimination}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Child Labour</p>
                </Col>
                <Col offset={1} span={8}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        childLabour: e.target.value,
                      });
                    }}
                    value={currentYearData.childLabour}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Forced Labour /Involuntary Labour</p>
                </Col>
                <Col offset={1} span={8}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        forcedLabour: e.target.value,
                      });
                    }}
                    value={currentYearData.forcedLabour}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Wages</p>
                </Col>
                <Col offset={1} span={8}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        wages: e.target.value,
                      });
                    }}
                    value={currentYearData.wages}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Others – please specify</p>
                </Col>
                <Col offset={1} span={8}>
                  <TextArea
                    placeholder="Add details here.."
                    rows={4}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        others: e.target.value,
                      });
                    }}
                    value={currentYearData.others}
                  />
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
