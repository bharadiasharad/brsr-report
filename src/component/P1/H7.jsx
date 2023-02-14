import {
  CloseCircleOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Col, Row, Select, Button, Input, DatePicker, Space } from "antd";
import Card from "antd/lib/card/Card";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
import { P1_7 } from "./Type.ts";

const H7 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P1_7({}));
  const getData = () => {
    return (
      <div>
        <Row style={{ marginTop: "10px" }}>
          <Col style={{ paddingRight: "10px" }} span={12}></Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col style={{ paddingRight: "10px" }} span={24}>
            <Row>
              <Col span={10}>
                <p>
                  Details of any corrective action taken or underway on issues
                  related to fines/ penalties / action taken by regulators/law
                  enforcement agencies/ judicial institutions, on cases of
                  corruption and conflicts of interest.
                </p>
              </Col>
              <Col style={{ paddingTop: "10px" }} span={10} offset={1}>
                <TextArea
                  size="medium"
                  placeholder="Add details here.."
                  autoSize={{ minRows: 2, maxRows: 2 }}
                  value={currentYearData.correctiveAction}
                  onChange={(E) => {
                    setCurrentYearData({
                      ...currentYearData,
                      correctiveAction: E.target.value,
                    });
                  }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  };

  return (
    <div>
      <Row style={{ marginTop: "15px", paddingBottom: "10px" }}>
        <Col flex="1400px">
          <Row>
            <Col style={{ margin: "5px" }} span={24}>
              {getData()}
            </Col>
            <Col span={8}></Col>
          </Row>
        </Col>
      </Row>

      <Row>
         
      </Row>
    </div>
  );
};

export default H7;
