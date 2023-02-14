import { Col, Input, Row, Select } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { Option } from "antd/lib/mentions";
import { useState } from "react";
 import { SectionA_23 } from "./Type.ts";
 
const H23 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new SectionA_23( {}));
  const [previousYearData, setPreviousYearData] = useState(new SectionA_23( {}));

  const prepareData = ({ isCompleted, isValidated } = {}) => {
    const data = new SectionA_23(currentYearData);
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
        <Col flex="1200px">
          <Row>
            <Col style={{ margin: "5px" }} span={23}>
              <Row>
                <Col style={{ padding: "6px" }} span={4}>
                  <p>Stakeholder group from whom complaint is received</p>
                </Col>
                <Col style={{ padding: "6px" }} offset={1} span={4}>
                  <p>Grievance Redressal Mechanism in Place</p>
                </Col>
                <Col span={5}>
                  <p className="input-data-placeholder-heading">FY</p>
                </Col>
                <Col offset={1} span={8}>
                  <p className="input-data-placeholder-heading">FY</p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}></Col>
                <Col style={{ padding: "6px" }} offset={2} span={3}>
                  <p>If Yes, then provide web-link for </p>
                </Col>
                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">Filed</p>
                </Col>
                <Col span={4}>
                  <p className="input-data-placeholder-heading">Pending</p>
                </Col>
                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">Filed</p>
                </Col>
                <Col span={4}>
                  <p className="input-data-placeholder-heading">Pending</p>
                </Col>
              </Row>{" "}
              <br />
              <Row>
                <Col style={{ padding: "6px" }} span={5}>
                  Communities
                </Col>
                <Col span={3}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "80%" }}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isLink: e.target.value,
                      });
                    }}
                    value={currentYearData.isLink}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        communitiesFiled: e.target.value,
                      });
                    }}
                    value={currentYearData.communitiesFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        communitiesPending: e.target.value,
                      });
                    }}
                    value={currentYearData.communitiesPending}
                  />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={2} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        communitiesFiled: e.target.value,
                      });
                    }}
                    value={previousYearData.communitiesFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        communitiesPending: e.target.value,
                      });
                    }}
                    value={previousYearData.communitiesPending}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={3} span={6}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        comminitiesRemark: e.target.value,
                      });
                    }}
                    value={currentYearData.comminitiesRemark}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={7}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        comminitiesRemark: e.target.value,
                      });
                    }}
                    value={previousYearData.comminitiesRemark}
                  />
                </Col>
              </Row>{" "}
              <br />
              <Row>
                <Col style={{ padding: "6px" }} span={5}>
                  Investors (other than)
                </Col>
                <Col span={3}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "80%" }}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        investorsLink: e.target.value,
                      });
                    }}
                    value={currentYearData.investorsLink}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        investorsFiles: e.target.value,
                      });
                    }}
                    value={currentYearData.investorsFiles}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        investorsPending: e.target.value,
                      });
                    }}
                    value={currentYearData.investorsPending}
                  />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={2} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        investorsFiles: e.target.value,
                      });
                    }}
                    value={previousYearData.investorsFiles}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        investorsPending: e.target.value,
                      });
                    }}
                    value={previousYearData.investorsPending}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={3} span={6}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        investorsPending: e.target.value,
                      });
                    }}
                    value={currentYearData.investorsRemark}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={7}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        investorsRemark: e.target.value,
                      });
                    }}
                    value={previousYearData.investorsRemark}
                  />
                </Col>
              </Row>{" "}
              <br />
              <Row>
                <Col style={{ padding: "6px" }} span={5}>
                  Shareholders
                </Col>
                <Col span={3}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "80%" }}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        shareholderLink: e.target.value,
                      });
                    }}
                    value={currentYearData.shareholderLink}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        shareholderFiles: e.target.value,
                      });
                    }}
                    value={currentYearData.shareholderFiles}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        shareholderPending: e.target.value,
                      });
                    }}
                    value={currentYearData.shareholderPending}
                  />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={2} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        shareholderFiles: e.target.value,
                      });
                    }}
                    value={previousYearData.shareholderFiles}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        shareholderPending: e.target.value,
                      });
                    }}
                    value={previousYearData.shareholderPending}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={3} span={6}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        shareholderRemark: e.target.value,
                      });
                    }}
                    value={currentYearData.shareholderRemark}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={7}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        shareholderRemark: e.target.value,
                      });
                    }}
                    value={previousYearData.shareholderRemark}
                  />
                </Col>
              </Row>{" "}
              <br />
              <Row>
                <Col style={{ padding: "6px" }} span={5}>
                  Employees and workers
                </Col>
                <Col span={3}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "80%" }}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        employeeLink: e.target.value,
                      });
                    }}
                    value={currentYearData.employeeLink}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        employeeFiled: e.target.value,
                      });
                    }}
                    value={currentYearData.employeeFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        employeePending: e.target.value,
                      });
                    }}
                    value={currentYearData.employeePending}
                  />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={2} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        employeeFiled: e.target.value,
                      });
                    }}
                    value={previousYearData.employeeFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        employeePending: e.target.value,
                      });
                    }}
                    value={previousYearData.employeePending}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={3} span={6}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        employeeRemark: e.target.value,
                      });
                    }}
                    value={currentYearData.employeeRemark}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={7}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        employeeRemark: e.target.value,
                      });
                    }}
                    value={previousYearData.employeeRemark}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col style={{ padding: "6px" }} span={5}>
                  Customers
                </Col>
                <Col span={3}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "80%" }}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        customerLlink: e.target.value,
                      });
                    }}
                    value={currentYearData.customerLlink}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        customerFiled: e.target.value,
                      });
                    }}
                    value={currentYearData.customerFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        customerPending: e.target.value,
                      });
                    }}
                    value={currentYearData.customerPending}
                  />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={2} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        customerFiled: e.target.value,
                      });
                    }}
                    value={previousYearData.customerFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        customerPending: e.target.value,
                      });
                    }}
                    value={previousYearData.customerPending}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={3} span={6}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        customerReamrk: e.target.value,
                      });
                    }}
                    value={currentYearData.customerReamrk}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={7}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        customerReamrk: e.target.value,
                      });
                    }}
                    value={previousYearData.customerReamrk}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col style={{ padding: "6px" }} span={5}>
                  Value Chain Partner
                </Col>
                <Col span={3}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "80%" }}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        partnerLink: e.target.value,
                      });
                    }}
                    value={currentYearData.partnerLink}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        partnerFiled: e.target.value,
                      });
                    }}
                    value={currentYearData.partnerFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        partnerPending: e.target.value,
                      });
                    }}
                    value={currentYearData.partnerPending}
                  />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={2} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        partnerFiled: e.target.value,
                      });
                    }}
                    value={previousYearData.partnerFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        partnerPending: e.target.value,
                      });
                    }}
                    value={previousYearData.partnerPending}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={3} span={6}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        partnerRemark: e.target.value,
                      });
                    }}
                    value={currentYearData.partnerRemark}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={7}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        partnerRemark: e.target.value,
                      });
                    }}
                    value={previousYearData.partnerRemark}
                  />
                </Col>
              </Row>
              <br />
              <Row>
                <Col style={{ padding: "6px" }} span={5}>
                  Other (please specify)
                </Col>
                <Col span={3}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "80%" }}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherLink: e.target.value,
                      });
                    }}
                    value={currentYearData.otherLink}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherFiled: e.target.value,
                      });
                    }}
                    value={currentYearData.otherFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherPendinng: e.target.value,
                      });
                    }}
                    value={currentYearData.otherPendinng}
                  />
                </Col>

                <Col style={{ paddingRight: "2px" }} offset={2} span={4}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        otherFiled: e.target.value,
                      });
                    }}
                    value={previousYearData.otherFiled}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        otherPendinng: e.target.value,
                      });
                    }}
                    value={previousYearData.otherPendinng}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={6}></Col>
                <Col style={{ paddingRight: "2px" }} offset={3} span={6}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        otherRemark: e.target.value,
                      });
                    }}
                    value={currentYearData.otherRemark}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={2} span={7}>
                  <TextArea
                    maxLength={200}
                    placeholder="Add Remarks here.."
                    rows={2}
                    onChange={(e) => {
                      setPreviousYearData({
                        ...previousYearData,
                        otherRemark: e.target.value,
                      });
                    }}
                    value={previousYearData.otherRemark}
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

export default H23;
