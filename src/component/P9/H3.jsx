import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Card, Col, DatePicker, Divider, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 
import { P9_3 } from "./Type.ts";

const H3 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P9_3({}));
  const [previousYearData, setPreviousYearData] = useState(new P9_3({}));

  const onSaveAndNext = () => {
    console.log("h3 on save");
    props.callback();
  };

  const onSave = () => {
    console.log("h1 on save");
  };

  const onCancel = () => {
    console.log("h1 on cancel");
  };

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="1200px">
          <Row>
            <Col style={{ margin: "5px" }} span={22}>
              <Row>
                <Col style={{ padding: "6px" }} span={4}></Col>
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
                <Col style={{ padding: "6px" }} span={4}>
                  No. of consumer complaints
                </Col>
                <Col offset={1} span={4}>
                  <p className="input-data-placeholder-heading">
                    Files During the year
                  </p>
                </Col>
                <Col span={4}>
                  <p className="input-data-placeholder-heading">
                    Pending Resoultion at the end of the Year
                  </p>
                </Col>
                <Col offset={1} span={4}>
                  <p className="input-data-placeholder-heading">
                    Files During the year
                  </p>
                </Col>
                <Col span={4}>
                  <p className="input-data-placeholder-heading">
                    Pending Resoultion at the end of the Year
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  <span style={{ paddingBottom: "0" }}> Data Privacy</span>
                </Col>
                <Col offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.privacyFile}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        privacyFile: e.target.value,
                      })
                    }
                  />
                </Col>
                <Col span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        privacyPending: e.target.value,
                      })
                    }
                    value={currentYearData.privacyPending}
                  />
                </Col>
                <Col offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setPreviousYearData({
                        ...previousYearData,
                        privacyFile: e.target.value,
                      })
                    }
                    value={previousYearData.privacyFile}
                  />
                </Col>
                <Col span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setPreviousYearData({
                        ...previousYearData,
                        privacyPending: e.target.value,
                      })
                    }
                    value={previousYearData.privacyPending}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={4}></Col>
                <Col style={{ marginBottom: "14px" }} offset={1} span={8}>
                  <TextArea
                    placeholder="Add Remarks (Optional)"
                    rows={2}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        privacyremarks: e.target.value,
                      })
                    }
                    value={currentYearData.privacyremarks}
                  />
                </Col>
                <Col style={{ marginBottom: "14px" }} offset={1} span={8}>
                  <TextArea
                    placeholder="Add Remarks (Optional)"
                    rows={2}
                    onChange={(e) =>
                      setPreviousYearData({
                        ...previousYearData,
                        privacyremarks: e.target.value,
                      })
                    }
                    value={previousYearData.privacyremarks}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  <span style={{ paddingBottom: "0" }}>Advertising</span>
                </Col>
                <Col offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        advertisingFile: e.target.value,
                      })
                    }
                    value={currentYearData.advertisingFile}
                  />
                </Col>
                <Col span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        advertisingPending: e.target.value,
                      })
                    }
                    value={currentYearData.advertisingPending}
                  />
                </Col>
                <Col offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setPreviousYearData({
                        ...previousYearData,
                        advertisingFile: e.target.value,
                      })
                    }
                    value={previousYearData.advertisingFile}
                  />
                </Col>
                <Col span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setPreviousYearData({
                        ...previousYearData,
                        advertisingPending: e.target.value,
                      })
                    }
                    value={previousYearData.advertisingPending}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={4}></Col>
                <Col style={{ marginBottom: "14px" }} offset={1} span={8}>
                  <TextArea
                    placeholder="Add Remarks (Optional)"
                    rows={2}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        advertisingRemarks: e.target.value,
                      })
                    }
                    value={currentYearData.advertisingRemarks}
                  />
                </Col>
                <Col style={{ marginBottom: "14px" }} offset={1} span={8}>
                  <TextArea
                    placeholder="Add Remarks (Optional)"
                    rows={2}
                    onChange={(e) =>
                      setPreviousYearData({
                        ...previousYearData,
                        advertisingRemarks: e.target.value,
                      })
                    }
                    value={previousYearData.advertisingRemarks}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  <span style={{ paddingBottom: "0" }}> Cyber-security</span>
                </Col>
                <Col offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    //  onChange={(e) => setCurrentYearData({...currentYearData,advertisingRemarks:e.target.value})}
                    //  value={currentYearData.advertisingRemarks}
                  />
                </Col>
                <Col span={4}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col offset={1} span={4}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={4}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col span={4}></Col>
                <Col style={{ marginBottom: "14px" }} offset={1} span={8}>
                  <TextArea placeholder="Add Remarks (Optional)" rows={2} />
                </Col>
                <Col style={{ marginBottom: "14px" }} offset={1} span={8}>
                  <TextArea placeholder="Add Remarks (Optional)" rows={2} />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  <span style={{ paddingBottom: "0" }}>
                    Delivery of essential services
                  </span>
                </Col>
                <Col offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        deliveryFile: e.target.value,
                      })
                    }
                    value={currentYearData.deliveryFile}
                  />
                </Col>
                <Col span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        deliveryPending: e.target.value,
                      })
                    }
                    value={currentYearData.deliveryPending}
                  />
                </Col>
                <Col offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setPreviousYearData({
                        ...previousYearData,
                        deliveryFile: e.target.value,
                      })
                    }
                    value={previousYearData.deliveryFile}
                  />
                </Col>
                <Col span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setPreviousYearData({
                        ...previousYearData,
                        deliveryPending: e.target.value,
                      })
                    }
                    value={previousYearData.deliveryPending}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={4}></Col>
                <Col style={{ marginBottom: "14px" }} offset={1} span={8}>
                  <TextArea
                    placeholder="Add Remarks (Optional)"
                    rows={2}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        deliveryRemarks: e.target.value,
                      })
                    }
                    value={currentYearData.deliveryRemarks}
                  />
                </Col>
                <Col style={{ marginBottom: "14px" }} offset={1} span={8}>
                  <TextArea
                    placeholder="Add Remarks (Optional)"
                    rows={2}
                    onChange={(e) =>
                      setPreviousYearData({
                        ...previousYearData,
                        deliveryRemarks: e.target.value,
                      })
                    }
                    value={previousYearData.deliveryRemarks}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  <span style={{ paddingBottom: "0" }}>
                    Restrictive Trade Practices
                  </span>
                </Col>
                <Col offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        restrcitiveFile: e.target.value,
                      })
                    }
                    value={currentYearData.restrcitiveFile}
                  />
                </Col>
                <Col span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        restrcitivePending: e.target.value,
                      })
                    }
                    value={currentYearData.restrcitivePending}
                  />
                </Col>
                <Col offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setPreviousYearData({
                        ...previousYearData,
                        restrcitiveFile: e.target.value,
                      })
                    }
                    value={previousYearData.restrcitiveFile}
                  />
                </Col>
                <Col span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setPreviousYearData({
                        ...previousYearData,
                        restrcitivePending: e.target.value,
                      })
                    }
                    value={previousYearData.restrcitivePending}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={4}></Col>
                <Col style={{ marginBottom: "14px" }} offset={1} span={8}>
                  <TextArea
                    placeholder="Add Remarks (Optional)"
                    rows={2}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        restrcitiveRemarks: e.target.value,
                      })
                    }
                    value={currentYearData.restrcitiveRemarks}
                  />
                </Col>
                <Col style={{ marginBottom: "14px" }} offset={1} span={8}>
                  <TextArea
                    placeholder="Add Remarks (Optional)"
                    rows={2}
                    onChange={(e) =>
                      setPreviousYearData({
                        ...previousYearData,
                        restrcitiveRemarks: e.target.value,
                      })
                    }
                    value={previousYearData.restrcitiveRemarks}
                  />
                </Col>
              </Row>

              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  <span style={{ paddingBottom: "0" }}>
                    Unfair Trade Practices
                  </span>
                </Col>
                <Col offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        unfairTradeFile: e.target.value,
                      })
                    }
                    value={currentYearData.unfairTradeFile}
                  />
                </Col>
                <Col span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        unfairTradePending: e.target.value,
                      })
                    }
                    value={currentYearData.unfairTradePending}
                  />
                </Col>
                <Col offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setPreviousYearData({
                        ...previousYearData,
                        unfairTradeFile: e.target.value,
                      })
                    }
                    value={previousYearData.unfairTradeFile}
                  />
                </Col>
                <Col span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setPreviousYearData({
                        ...previousYearData,
                        unfairTradePending: e.target.value,
                      })
                    }
                    value={previousYearData.unfairTradePending}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={4}></Col>
                <Col style={{ marginBottom: "14px" }} offset={1} span={8}>
                  <TextArea
                    placeholder="Add Remarks (Optional)"
                    rows={2}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        unfairRemarks: e.target.value,
                      })
                    }
                    value={currentYearData.unfairRemarks}
                  />
                </Col>
                <Col style={{ marginBottom: "14px" }} offset={1} span={8}>
                  <TextArea
                    placeholder="Add Remarks (Optional)"
                    rows={2}
                    onChange={(e) =>
                      setPreviousYearData({
                        ...previousYearData,
                        unfairRemarks: e.target.value,
                      })
                    }
                    value={previousYearData.unfairRemarks}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  <span style={{ paddingBottom: "0" }}>Other</span>
                </Col>
                <Col offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        otherFile: e.target.value,
                      })
                    }
                    value={currentYearData.otherFile}
                  />
                </Col>
                <Col span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        otherPending: e.target.value,
                      })
                    }
                    value={currentYearData.otherPending}
                  />
                </Col>
                <Col offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setPreviousYearData({
                        ...previousYearData,
                        otherFile: e.target.value,
                      })
                    }
                    value={previousYearData.otherFile}
                  />
                </Col>
                <Col span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setPreviousYearData({
                        ...previousYearData,
                        otherPending: e.target.value,
                      })
                    }
                    value={previousYearData.otherPending}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={4}></Col>
                <Col style={{ marginBottom: "14px" }} offset={1} span={8}>
                  <TextArea
                    placeholder="Add Remarks (Optional)"
                    rows={2}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        otherRemarks: e.target.value,
                      })
                    }
                    value={currentYearData.otherRemarks}
                  />
                </Col>
                <Col style={{ marginBottom: "14px" }} offset={1} span={8}>
                  <TextArea
                    placeholder="Add Remarks (Optional)"
                    rows={2}
                    onChange={(e) =>
                      setPreviousYearData({
                        ...previousYearData,
                        otherRemarks: e.target.value,
                      })
                    }
                    value={previousYearData.otherRemarks}
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

export default H3;
