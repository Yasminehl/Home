import {useEffect, useRef, useState} from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth.jsx";
const baseURL = "http://localhost:8090";
export const assessmentApi = axios.create({
  baseURL,
})

const ProtectedPage = () => {
  const { token } = useAuth();

    const isRun = useRef(false);

  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('token: ', token)
    if (isRun.current) return;

    isRun.current = true;

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    assessmentApi
      .get("/documents", config)
      .then((res) => setData(res.data))
      .catch((err) => console.error(err));
  }, []);
  return data ? (
    <>
      {data.map((rec, i) => (
        <h3 key={i}>{rec}</h3>
      ))}
    </>
  ) : (
    <div>Protected</div>
  );
};

export default ProtectedPage;