import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../services/apiAuth";
export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) =>
      loginApi({
        email,
        password,
      }),
    onSuccess: (user) => {
      console.log(user);
      navigate("/");
    },
    onError: (err) => {
      console.log("Error", err);
    },
  });
  return { login, isLoading };
}
