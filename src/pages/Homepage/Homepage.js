import React from "react";
import Layout from "@/common/components/Layout/Layout";
import Link from "@/common/components/UI/Link/Link";

const Homepage = (props) => {
  return (
    <Layout>
      <div className="homepage _container">
        <h1 className="homepage__title">Welcome to my Todo App</h1>
        <h2 className="homepage__subtitle">Press button for continue</h2>
        <Link.Url button to="/sign-in">
          Sign In
        </Link.Url>
      </div>
    </Layout>
  );
};

export default Homepage;
