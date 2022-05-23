import axios from "axios";
import { useCallback, useState } from "react";

export const useAllUsers = () => {
  const [lodaing, setLoading] = useState();
  const [users, setUsetrs] = useState();
  const getUsers = useCallback(() => {
    axios.get("https://jsonplaceholder.typicode.com/users");
  });
  return { getUsers };
};
