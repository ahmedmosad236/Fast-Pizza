import { Link, useNavigate } from "react-router-dom";

function Linkbutton({ children, to }) {
  const navigate = useNavigate();
  const classname = " text-sm text-blue-500 hover:text-blue-600";
  if (to === "-1")
    return (
      <button onClick={() => navigate(-1)} className={classname}>
        &larr; Go back
      </button>
    );
  return (
    <Link to={to} className={classname}>
      {children}
    </Link>
  );
}

export default Linkbutton;
