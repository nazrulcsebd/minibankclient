import React, { Fragment, useContext, useEffect } from "react";
import { Row, Col, Descriptions } from "antd";
import AccountDetails from "../account/AccountDetails";
import { GlobalContext } from "../../context/GlobalContextProvider";
import moment from "moment";

const CustomerProfile = () => {
  const { customerContext } = useContext(GlobalContext);
  useEffect(() => {
    customerContext.getCustomer();
  }, []);

  const { specificCustomer } = customerContext;

  return (
    <Fragment>
      <Row>
        <Col>
          <AccountDetails title="User Profile" subTitle="Account Profile" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Descriptions bordered>
            <Descriptions.Item label="First name">{specificCustomer.firstName}</Descriptions.Item>
            <Descriptions.Item label="Last name">{specificCustomer.lastName}</Descriptions.Item>
            <Descriptions.Item label="Date of birth">{moment(specificCustomer.dateOfBirth).format('YYYY-MM-DD')}</Descriptions.Item>
            <Descriptions.Item label="Country">{specificCustomer.country}</Descriptions.Item>
            <Descriptions.Item label="City" span={2}>{specificCustomer.city}</Descriptions.Item>
            <Descriptions.Item label="Zip Code" span={2}>{specificCustomer.zipCode}</Descriptions.Item>
            <Descriptions.Item label="Phone" span={2}>{specificCustomer.phone}</Descriptions.Item>
            <Descriptions.Item label="" span={3}>
              {/* <Badge status="processing" text="Running" /> */}
            </Descriptions.Item>
            <Descriptions.Item label="Email">{specificCustomer.email}</Descriptions.Item>
            <Descriptions.Item label="Personal Code">{specificCustomer.personalCode}</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CustomerProfile;
