/* eslint-disable react-hooks/exhaustive-deps*/
import axios from "axios";
import { useCallback, useState } from "react";

import { User } from "../types/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const { showMessage } = useMessage();
  const [lodaing, setLoading] = useState(false);
  const [users, setUsetrs] = useState<Array<User>>([]);
  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsetrs(res.data))
      .catch(() => {
        showMessage({
          title: "ユーザーが取得できません",
          status: "error"
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { getUsers, lodaing, users };
};
