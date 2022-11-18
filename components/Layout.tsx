import React, { Component, ReactNode } from "react";
import Head from "next/head";

interface MyState {}

interface MyProps {
  children: ReactNode;
}
export class Layout extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
  }
  render() {
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
          />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <title>Admin | Metics AI Ranking Engine</title>
        </Head>
        {this.props.children}
      </>
    );
  }
}
export default Layout;
