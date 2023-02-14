import { Col, Divider, Input, Row, Select } from "antd";
import _ from "lodash";
import { useState } from "react";
import { Option } from "antd/lib/mentions";
import { P1_2 } from "./Type.ts";
const H2 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P1_2({}));

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="auto">
          <Row>
            <Col style={{ margin: "5px" }} span={24}>
              <Row>
                <Col style={{ padding: "6px" }} span={3}></Col>
                <Col offset={1} span={9}></Col>
                <Col offset={1} span={9}></Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}></Col>
                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">
                    NGRBC Principle
                  </p>
                </Col>
                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">
                    Name of the regulatory/enforcement agencies/judical
                    institutions
                  </p>
                </Col>
                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">
                    Amount in INR
                  </p>
                </Col>
                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">
                    Brief of Judgement
                  </p>
                </Col>
                <Col offset={1} span={3}>
                  <p className="input-data-placeholder-heading">
                    Has an appeal been preferred?
                  </p>
                </Col>
              </Row>
              <Divider orientation="left">Monetary</Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Penalty/Punishment
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="text"
                    required
                    value={currentYearData.monetaryPenaltyPriciple}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        monetaryPenaltyPriciple: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="ntext"
                    required
                    value={currentYearData.monetaryPenaltyInstitution}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        monetaryPenaltyInstitution: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.monetaryPenaltyAmount}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        monetaryPenaltyAmount: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="text"
                    required
                    value={currentYearData.monetaryPenaltyBrief}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        monetaryPenaltyBrief: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isMonetaryPenaltyAppeal}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isMonetaryPenaltyAppeal: e.target.value,
                      });
                    }}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Settlement
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="text"
                    required
                    value={currentYearData.monetarySettlementPrinciple}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        monetarySettlementPrinciple: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="text"
                    required
                    value={currentYearData.monetarySettlementInstitution}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        monetarySettlementInstitution: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.monetarySettlementAmount}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        monetarySettlementAmount: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="text"
                    required
                    value={currentYearData.monetarySettlementBrief}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        monetarySettlementBrief: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isMonetarySettlementAppeal}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isMonetarySettlementAppeal: e.target.value,
                      });
                    }}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Compunidng fee
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="text"
                    required
                    value={currentYearData.monetaryCompoundingPrinciple}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        monetaryCompoundingPrinciple: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="text"
                    required
                    value={currentYearData.monetaryCompoundingInstitution}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        monetaryCompoundingInstitution: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.monetaryCompoundingAmount}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        monetaryCompoundingAmount: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="text"
                    required
                    value={currentYearData.monetaryCompoundingBrief}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        monetaryCompoundingBrief: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isMonetaryCompoundingAppeal}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isMonetaryCompoundingAppeal: e.target.value,
                      });
                    }}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
              </Row>
              <Divider orientation="left">Non Monetary </Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Imprisonment
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="text"
                    required
                    value={currentYearData.NonMonetaryImprisonmentPrinciple}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        NonMonetaryImprisonmentPrinciple: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="text"
                    required
                    value={currentYearData.NonMonetaryImprisonmentInstitution}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        NonMonetaryImprisonmentInstitution: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.NonMonetaryImprisonmentAmount}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        NonMonetaryImprisonmentAmount: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="text"
                    required
                    value={currentYearData.NonMonetaryImprisonmentBrief}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        NonMonetaryImprisonmentBrief: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isNonMonetaryImprisonmentAppeal}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isNonMonetaryImprisonmentAppeal: e.target.value,
                      });
                    }}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
                  </Select>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  Punishment
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="text"
                    required
                    value={currentYearData.NonMonetaryPunishmentPrinciple}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        NonMonetaryPunishmentPrinciple: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="text"
                    required
                    value={currentYearData.NonMonetaryPunishmentInstitution}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        NonMonetaryPunishmentInstitution: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col offset={1} span={3}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    value={currentYearData.NonMonetaryPunishmentAmount}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        NonMonetaryPunishmentAmount: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Input
                    size="medium"
                    type="text"
                    required
                    value={currentYearData.NonMonetaryPunishmentBrief}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        NonMonetaryPunishmentBrief: e.target.value,
                      });
                    }}
                  />
                </Col>
                <Col style={{ paddingRight: "2px" }} offset={1} span={3}>
                  <Select
                    placeholder="YES / NO"
                    style={{ width: "100%" }}
                    value={currentYearData.isNonMonetaryPunishmentAppeal}
                    onChange={(e) => {
                      setCurrentYearData({
                        ...currentYearData,
                        isNonMonetaryPunishmentAppeal: e.target.value,
                      });
                    }}
                  >
                    <Option value={true}>Yes</Option>
                    <Option value={false}>No</Option>
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

export default H2;
