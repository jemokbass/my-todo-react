import React from "react";
import Content from "@/common/components/UI/Content/Content";
import Link from "@/common/components/UI/Link/Link";
import Input from "@/common/components/UI/Input/Input";
import Button from "@/common/components/UI/Buttons/Button/Button";

const SignInForm = () => {
  return (
    <Content.Inner className="sign-in">
      <Link.Prev className="sign-in__back">Back</Link.Prev>
      <Content.Title>Sign In</Content.Title>
      <Content.Subtitle size="sm">Log in to your account</Content.Subtitle>
      <form className="sign-in__form">
        <Input label="E-mail" />
        <Input label="Password" />
        <Button type="submit" size="md">
          Log In
        </Button>
      </form>
    </Content.Inner>
  );
};

export default SignInForm;
