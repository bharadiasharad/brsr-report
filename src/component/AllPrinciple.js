import { Card, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { BRSRSchema } from '../constants/Principle';
import { convertPrincipleTileToUrlName } from '../utility/Common';


const AllPrinciple = () => {

  const navigate = useNavigate();

  const OnCardSelect = (title) => {
    const urlkey = convertPrincipleTileToUrlName(title);
    navigate('/'+urlkey)
  }

  return (<div style={{ padding: "50px" }}>
    <Row justify="center" gutter={[10, 20]}>
      {
        BRSRSchema.map(data => {
          return <Col
            xs={24} sm={12} md={8} lg={6} xl={4}
            style={{
              padding: "10px"
            }}
          >
            <Card
              hoverable
              style={{
                width: "100%",
                height: 340,
              }}
              onClick={() => OnCardSelect(data.title)}
              cover={
                <img
                  alt="example"
                  src={"https://picsum.photos/200/150?" + data.title}
                />
              }
            >

              <h3>{data.title}</h3>
              <p style={{ fontSize: "10px" }}>{data.description}</p>
            </Card>
          </Col>
        })
      }
    </Row>
  </div>)
}


export default AllPrinciple;