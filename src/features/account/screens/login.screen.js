import React, { useState } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import {
  AccountBackground,
  AccountCover,
  LoginContainer,
  AuthButton,
  AuthTextInput,
} from "../components/account.styles";
import { loginRequest } from "../../../services/authentication/authentication.service";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AccountBackground>
      <AccountCover />
      <LoginContainer>
        <AuthTextInput
          label="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <Spacer size="large">
          <AuthTextInput
            label="Password"
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
        </Spacer>
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => loginRequest(email, password)}
          >
            Login
          </AuthButton>
        </Spacer>
      </LoginContainer>
    </AccountBackground>
  );
};
