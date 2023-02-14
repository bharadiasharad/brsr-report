import { ExclamationCircleOutlined } from "@ant-design/icons";
import {
  Card,
  Col,
  DatePicker,
  Divider,
  Input,
  Row,
  Select,
  Space,
  Tooltip,
  Typography,
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import { Option } from "antd/lib/mentions";
import _ from "lodash";
import { useState } from "react";
 
import { P9_4 } from "./Type.ts";

const H4 = (props) => {
  const [number, setNumber] = useState(new P9_4({}));
  const [recall, setRecall] = useState(new P9_4({}));

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
        <Col flex="900px">
          <Row>
            <Col style={{ margin: "5px" }} span={18}>
              <Row>
                <Col style={{ padding: "6px" }} span={8}></Col>
                <Col offset={1} span={6}>
                  <p className="input-data-placeholder-heading">Number</p>
                </Col>
                <Col offset={1} span={6}>
                  <p className="input-data-placeholder-heading">
                    Reasons of recall
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span style={{ paddingBottom: "0" }}> Voluntary recalls</span>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setNumber({ ...number, voluntaryRcalls: e.target.value })
                    }
                    value={number.voluntaryRcalls}
                  />
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={1} span={8}>
                  <Input
                    size="meduim"
                    type="text"
                    required
                    onChange={(e) =>
                      setRecall({ ...recall, voluntaryReason: e.target.value })
                    }
                    value={recall.voluntaryReason}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ marginBottom: "14px", padding: "6px" }} span={8}>
                  <span style={{ paddingBottom: "0" }}>Forced recalls</span>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={1} span={6}>
                  <Input
                    size="medium"
                    type="number"
                    required
                    onChange={(e) =>
                      setNumber({ ...number, forcedNumber: e.target.value })
                    }
                    value={number.forcedNumber}
                  />
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={1} span={8}>
                  <Input
                    size="medium"
                    type="text"
                    required
                    onChange={(e) =>
                      setRecall({ ...recall, forcedReason: e.target.value })
                    }
                    value={recall.forcedReason}
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

export default H4;
