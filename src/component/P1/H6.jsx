import { Col, Input, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
import { P1_6 } from "./Type.ts";

const H6 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P1_6({}));
  const [previousYearData, setPreviousYearData] = useState(new P1_6({}));

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
                  <p className="input-data-placeholder-heading">NO</p>
                </Col>

                <Col offset={5} span={4}>
                  <p className="input-data-placeholder-heading">NO</p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}>
                  No. Of complaints received in relation to issues of Conflict
                  of Interest of the Directors
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.directorNumber}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        directorNumber: e.target.value,
                      });
                    }}
                  />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={5} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.directorNumber}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        directorNumber: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={8}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    autoSize={{ minRows: 2, maxRows: 4 }}
                    value={currentYearData.directorRemarks}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        directorRemarks: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={8}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    autoSize={{ minRows: 2, maxRows: 4 }}
                    value={previousYearData.directorRemarks}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        directorRemarks: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <br />
              <Row style={{ paddingTop: "12px" }}>
                <Col style={{ padding: "6px" }} span={6}>
                  No. Of complaints received in relation to issues of Conflict
                  of Interest of the KMPs
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.kmpNumber}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        kmpNumber: e.target.value,
                      });
                    }}
                  />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={5} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={previousYearData.kmpNumber}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        kmpNumber: e.target.value,
                      });
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={8}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    autoSize={{ minRows: 2, maxRows: 4 }}
                    value={currentYearData.kmpRemarks}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        kmpRemarks: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={8}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    autoSize={{ minRows: 2, maxRows: 4 }}
                    value={previousYearData.kmpRemarks}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        kmpRemarks: e.target.value,
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

export default H6;
