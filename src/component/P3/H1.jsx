import { Col, Divider, Input, Row } from "antd";
import _ from "lodash";
import { useState } from "react";
 
const H1 = (props) => {
   

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="2000px">
          <Row>
            <Col style={{ margin: "5px" }} span={23}>
              <Row>
                <Col style={{ padding: "6px" }} span={3}>
                  <p>Category</p>
                </Col>
                <Col style={{ padding: "6px" }} border span={9}>
                  <p> % of employees covered by</p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={3}></Col>
                <Col span={1}>
                  <p className="input-data-placeholder-heading">Total</p>
                </Col>
                <Col span={4}>
                  <p className="input-data-placeholder-heading">
                    Health Insurance
                  </p>
                </Col>
                <Col span={4}>
                  <p className="input-data-placeholder-heading">
                    Accident Insurance
                  </p>
                </Col>
                <Col style={{ paddingLeft: "6px" }} span={4}>
                  <p className="input-data-placeholder-heading">
                    Maternity Benefits
                  </p>
                </Col>
                <Col span={4}>
                  <p className="input-data-placeholder-heading">
                    Paternity Benefits
                  </p>
                </Col>
                <Col span={4}>
                  <p className="input-data-placeholder-heading">
                    Day Care Facilities
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={2}></Col>
                <Col span={2}></Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">No.</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">%</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">No.</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">%</p>
                </Col>
                <Col span={0}></Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">No.</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">%</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">No.</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">%</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">No.</p>
                </Col>
                <Col span={2}>
                  <p className="input-data-placeholder-heading">%</p>
                </Col>
              </Row>
              <Divider orientation="left">Permanent </Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={2}>
                  {" "}
                  Male
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={2}>
                  {" "}
                  Female
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={2}>
                  Total
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Divider orientation="left">
                Other than Permanent (Contractual){" "}
              </Divider>
              <Row>
                <Col style={{ padding: "6px" }} span={2}>
                  {" "}
                  Male
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={2}>
                  {" "}
                  Female
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "6px" }} span={2}>
                  {" "}
                  Total
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col style={{ paddingRight: "5px" }} span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
                <Col span={2}>
                  <Input size="medium" type="number" required />
                </Col>
              </Row>
            </Col>
            <Col span={8}></Col>
          </Row>
        </Col>
        <Col flex="auto"></Col>
      </Row>
      <Divider></Divider>
      <div>
        <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
          <Col flex="2000px">
            <Row>
              <Col style={{ margin: "5px" }} span={24}>
                <Row>
                  <Col style={{ padding: "6px" }} span={3}>
                    <p>Category</p>
                  </Col>
                  <Col style={{ padding: "6px" }} border span={9}>
                    <p> % of workers covered by</p>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ padding: "6px" }} span={3}></Col>
                  <Col span={1}>
                    <p className="input-data-placeholder-heading">Total</p>
                  </Col>
                  <Col span={4}>
                    <p className="input-data-placeholder-heading">
                      Health Insurance
                    </p>
                  </Col>
                  <Col span={4}>
                    <p className="input-data-placeholder-heading">
                      Accident Insurance
                    </p>
                  </Col>
                  <Col style={{ paddingLeft: "6px" }} span={4}>
                    <p className="input-data-placeholder-heading">
                      Maternity Benefits
                    </p>
                  </Col>
                  <Col span={4}>
                    <p className="input-data-placeholder-heading">
                      Paternity Benefits
                    </p>
                  </Col>
                  <Col span={4}>
                    <p className="input-data-placeholder-heading">
                      Day Care Facilities
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col style={{ padding: "6px" }} span={2}></Col>
                  <Col span={2}></Col>
                  <Col span={2}>
                    <p className="input-data-placeholder-heading">No.</p>
                  </Col>
                  <Col span={2}>
                    <p className="input-data-placeholder-heading">%</p>
                  </Col>
                  <Col span={2}>
                    <p className="input-data-placeholder-heading">No.</p>
                  </Col>
                  <Col span={2}>
                    <p className="input-data-placeholder-heading">%</p>
                  </Col>
                  <Col span={0}></Col>
                  <Col span={2}>
                    <p className="input-data-placeholder-heading">No.</p>
                  </Col>
                  <Col span={2}>
                    <p className="input-data-placeholder-heading">%</p>
                  </Col>
                  <Col span={2}>
                    <p className="input-data-placeholder-heading">No.</p>
                  </Col>
                  <Col span={2}>
                    <p className="input-data-placeholder-heading">%</p>
                  </Col>
                  <Col span={2}>
                    <p className="input-data-placeholder-heading">No.</p>
                  </Col>
                  <Col span={2}>
                    <p className="input-data-placeholder-heading">%</p>
                  </Col>
                </Row>
                <Divider orientation="left">Permanent </Divider>
                <Row>
                  <Col style={{ padding: "6px" }} span={2}>
                    {" "}
                    Male
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col style={{ paddingRight: "5px" }} span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                </Row>
                <Row>
                  <Col style={{ padding: "6px" }} span={2}>
                    {" "}
                    Female
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col style={{ paddingRight: "5px" }} span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                </Row>
                <Row>
                  <Col style={{ padding: "6px" }} span={2}>
                    Total
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col style={{ paddingRight: "5px" }} span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                </Row>
                <Divider orientation="left">
                  Other than Permanent (Contractual){" "}
                </Divider>
                <Row>
                  <Col style={{ padding: "6px" }} span={2}>
                    {" "}
                    Male
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col style={{ paddingRight: "5px" }} span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                </Row>
                <Row>
                  <Col style={{ padding: "6px" }} span={2}>
                    {" "}
                    Female
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col style={{ paddingRight: "5px" }} span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                </Row>
                <Row>
                  <Col style={{ padding: "6px" }} span={2}>
                    {" "}
                    Total
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col style={{ paddingRight: "5px" }} span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                  <Col span={2}>
                    <Input size="medium" type="number" required />
                  </Col>
                </Row>
              </Col>
              <Col span={8}></Col>
            </Row>
          </Col>
          <Col flex="auto"></Col>
        </Row>
      </div>
       
       
    </div>
  );
};

export default H1;
