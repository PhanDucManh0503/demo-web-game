import { ROLE_USER } from "@/constant/enums/Role";
import { useUserQuery } from "@/hooks/useUser";
import { DispatchContext, StateContext, TypeActionStore } from "@/store";
import { Flex } from "@chakra-ui/react";
import { useContext, useEffect } from "react";

const LoginPage = () => {
  const { data: user, isLoading } = useUserQuery(123);
  const dispatch = useContext(DispatchContext);
  const state = useContext(StateContext);
  console.log(state);
  useEffect(() => {
    console.log(user, isLoading, state);

    dispatch({
      type: TypeActionStore.USER_LOGIN,
      payload: { userLogin: { role: ROLE_USER.ADMIN } },
    });
  }, [dispatch, isLoading, state, user]);
  return (
    <div className="container text-red-900">
      <Flex>
        <p>test</p>
        <p>login</p>
      </Flex>
    </div>
  );
};

export default LoginPage;
