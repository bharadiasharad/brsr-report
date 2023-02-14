import { Col, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P5_6 } from "./Type.ts";

const H6 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P5_6({}));
  const [previoustYearData, setPreviousYearData] = useState(new P5_6({}));

   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="1200px">
          <Row>
            <Col style={{ margin: "5px" }} span={23}>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col offset={1} span={8}>
                  <p className="input-data-placeholder-heading">
                    Current Financial Year
                  </p>
                </Col>
                <Col offset={1} span={8}>
                  <p className="input-data-placeholder-heading">
                    Previous Financial Year
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col offset={1} span={4}>
                  <p className="input-data-placeholder-heading">Filed</p>
                </Col>
                <Col span={4}>
                  <p className="input-data-placeholder-heading">Pending</p>
                </Col>
                <Col offset={1} span={4}>
                  <p className="input-data-placeholder-heading">Filed</p>
                </Col>
                <Col span={4}>
                  <p className="input-data-placeholder-heading">Pending</p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  Sexual Harassment
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        sexualHarassmentFiled: e.target.value,
                      });
                    }}
                    value={currentYearData.sexualHarassmentFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        sexualHarassmentPending: e.target.value,
                      });
                    }}
                    value={currentYearData.sexualHarassmentPending}
                  />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previoustYearData,
                        sexualHarassmentFiled: e.target.value,
                      });
                    }}
                    value={previoustYearData.sexualHarassmentFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previoustYearData,
                        sexualHarassmentPending: e.target.value,
                      });
                    }}
                    value={previoustYearData.sexualHarassmentPending}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={8}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        sexualHarassmentRemarks: e.target.value,
                      });
                    }}
                    value={currentYearData.sexualHarassmentRemarks}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={8}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previoustYearData,
                        sexualHarassmentRemarks: e.target.value,
                      });
                    }}
                    value={previoustYearData.sexualHarassmentRemarks}
                  />
                </Col>
              </Row>
              <Row style={{ paddingTop: "12px" }}>
                <Col style={{ padding: "6px" }} span={6}>
                  Discrimination at workplace
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        discriminationFiled: e.target.value,
                      });
                    }}
                    value={currentYearData.discriminationFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        discriminationPending: e.target.value,
                      });
                    }}
                    value={currentYearData.discriminationPending}
                  />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previoustYearData,
                        discriminationFiled: e.target.value,
                      });
                    }}
                    value={previoustYearData.discriminationFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previoustYearData,
                        discriminationPending: e.target.value,
                      });
                    }}
                    value={previoustYearData.discriminationPending}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={8}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        discriminationRemarks: e.target.value,
                      });
                    }}
                    value={currentYearData.discriminationRemarks}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={8}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previoustYearData,
                        discriminationRemarks: e.target.value,
                      });
                    }}
                    value={previoustYearData.discriminationRemarks}
                  />
                </Col>
              </Row>
              <Row style={{ paddingTop: "12px" }}>
                <Col style={{ padding: "6px" }} span={6}>
                  Child Labour
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        childLabourFiled: e.target.value,
                      });
                    }}
                    value={currentYearData.childLabourFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        childLabourPending: e.target.value,
                      });
                    }}
                    value={currentYearData.childLabourPending}
                  />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previoustYearData,
                        childLabourFiled: e.target.value,
                      });
                    }}
                    value={previoustYearData.childLabourFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previoustYearData,
                        childLabourPending: e.target.value,
                      });
                    }}
                    value={previoustYearData.childLabourPending}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={8}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        childLabourRemarks: e.target.value,
                      });
                    }}
                    value={currentYearData.childLabourRemarks}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={8}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previoustYearData,
                        childLabourRemarks: e.target.value,
                      });
                    }}
                    value={previoustYearData.childLabourRemarks}
                  />
                </Col>
              </Row>
              <Row style={{ paddingTop: "12px" }}>
                <Col style={{ padding: "6px" }} span={6}>
                  Forced Labour /Involuntary Labour
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        forcedLabourFiled: e.target.value,
                      });
                    }}
                    value={currentYearData.forcedLabourFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        forcedLabourPending: e.target.value,
                      });
                    }}
                    value={currentYearData.forcedLabourPending}
                  />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previoustYearData,
                        forcedLabourFiled: e.target.value,
                      });
                    }}
                    value={previoustYearData.forcedLabourFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previoustYearData,
                        forcedLabourPending: e.target.value,
                      });
                    }}
                    value={previoustYearData.forcedLabourPending}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={8}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        forcedLabourRemarks: e.target.value,
                      });
                    }}
                    value={currentYearData.forcedLabourRemarks}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={8}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previoustYearData,
                        forcedLabourRemarks: e.target.value,
                      });
                    }}
                    value={previoustYearData.forcedLabourRemarks}
                  />
                </Col>
              </Row>
              <Row style={{ paddingTop: "12px" }}>
                <Col style={{ padding: "6px" }} span={6}>
                  Wages
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        wagesFiled: e.target.value,
                      });
                    }}
                    value={currentYearData.wagesFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        wagesPending: e.target.value,
                      });
                    }}
                    value={currentYearData.wagesPending}
                  />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previoustYearData,
                        wagesFiled: e.target.value,
                      });
                    }}
                    value={previoustYearData.wagesFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previoustYearData,
                        wagesPending: e.target.value,
                      });
                    }}
                    value={previoustYearData.wagesPending}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={8}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        wagesRemarks: e.target.value,
                      });
                    }}
                    value={currentYearData.wagesRemarks}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={8}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previoustYearData,
                        wagesRemarks: e.target.value,
                      });
                    }}
                    value={previoustYearData.wagesRemarks}
                  />
                </Col>
              </Row>
              <Row style={{ paddingTop: "12px" }}>
                <Col style={{ padding: "6px" }} span={6}>
                  Other human rights related issues
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherHumanRightsFiled: e.target.value,
                      });
                    }}
                    value={currentYearData.otherHumanRightsFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherHumanRightsPending: e.target.value,
                      });
                    }}
                    value={currentYearData.otherHumanRightsPending}
                  />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previoustYearData,
                        otherHumanRightsFiled: e.target.value,
                      });
                    }}
                    value={previoustYearData.otherHumanRightsFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previoustYearData,
                        otherHumanRightsPending: e.target.value,
                      });
                    }}
                    value={previoustYearData.otherHumanRightsPending}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={8}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherHumanRightsRemarks: e.target.value,
                      });
                    }}
                    value={currentYearData.otherHumanRightsRemarks}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={8}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previoustYearData,
                        otherHumanRightsRemarks: e.target.value,
                      });
                    }}
                    value={previoustYearData.otherHumanRightsRemarks}
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

export default H6;
