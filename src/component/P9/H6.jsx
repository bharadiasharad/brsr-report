import { Col, Row } from "antd";
import TextArea from "antd/lib/input/TextArea";
import _ from "lodash";
import { useState } from "react";
 
import { P9_6 } from "./Type.ts";

const H6 = (props) => {
  const [currentYearData, setCurrentYearData] = useState(new P9_6({}));

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
            <Col style={{ margin: "5px" }} span={20}>
              <Row>
                <Col style={{ padding: "6px" }} span={10}>
                  <p>
                    {" "}
                    Provide details of any corrective actions or underway on
                    issues relating to advertising, and delivery of essential
                    services; cyber security and data privacy of customers;
                    re-occurrence of instances of product recalls; penalty /
                    action taken by regulatory authorities on saftey of products
                    / services.
                  </p>
                </Col>
                <Col style={{ paddingTop: "10px" }} offset={1} span={12}>
                  <TextArea
                    placeholder="Add details here.."
                    rows={3}
                    value={currentYearData.actions}
                    onChange={(e) =>
                      setCurrentYearData({
                        ...currentYearData,
                        actions: e.target.value,
                      })
                    }
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
