import { Col, Divider, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P6_5 } from "./Type.ts";

const H5 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P6_5({}));
  const [previousYearData, setPreviousYearData] = useState(new P6_5({}));

   

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
                  <p>Nox</p>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    value={currentYearData.nox}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        nox: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    value={previousYearData.nox}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        nox: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Sox</p>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.sox}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        sox: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.sox}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        sox: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Particulate matter (PM)</p>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.pm}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        pm: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.pm}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        pm: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Persistent organic pollutants (POP)</p>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.pop}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        pop: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.pop}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        pop: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Volatile organic compounds (VOC)</p>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.voc}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        voc: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.voc}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        voc: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Hazardous air pollutants (HAP)</p>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.hap}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        hap: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.hap}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        hap: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={8}>
                  <p>Others – please specify</p>
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.others}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        others: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.others}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        others: e.target.value,
                      });
                    }}
                  />
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
                  <span>
                    Indicate if any independent assessment/ evaluation/assurance
                    has been carried out by an external agency?
                  </span>
                </Col>
                <Col offset={1} span={13}>
                  <TextArea
                    placeholder="Add details here.."
                    rows={4}
                    value={currentYearData.independentAssesment}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        independentAssesment: e.target.value,
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

       
       
    </div>
  );
};

export default H5;
