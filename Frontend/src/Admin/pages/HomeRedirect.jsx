import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomeRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role === "admin") {
      navigate("/admin/dashboard");
    } else if (role === "operation") {
      navigate("/ops/dashboard");
    } else {
      navigate("/");
    }
  }, [navigate]);

  return null;
};

export default HomeRedirect;
