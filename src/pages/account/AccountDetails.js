import React, { Fragment, useEffect, useContext } from "react";
import { PageHeader, Row, Col, Descriptions } from "antd";
import { GlobalContext } from "../../context/GlobalContextProvider";

const AccountDetails = props => {
  const { accountContext } = useContext(GlobalContext);

  useEffect(() => {
    accountContext.getAccountBalance();
  }, []);

  const { accountBalance } = accountContext;

  const pageHeader = (
    <PageHeader
      title={props.title} //"Account Transection"
      subTitle={props.subTitle} //"Deposit, Withdrawal Balance"
    >
      <hr />
      <Descriptions title="Account Summary">
        <Descriptions.Item label="Account Type">
          {accountBalance.accountType}
        </Descriptions.Item>
        <Descriptions.Item label="Account Number">
          {accountBalance.accountNumber}
        </Descriptions.Item>
        <Descriptions.Item label="Account Balance">
          {accountBalance.balanceAmount}
        </Descriptions.Item>
      </Descriptions>
    </PageHeader>
  );

  return (
    <Fragment>
      <Row>
        <Col>{pageHeader}</Col>
      </Row>
    </Fragment>
  );
};

export default AccountDetails;
