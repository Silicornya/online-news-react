import { Outlet } from "react-router-dom";

const PrimaryLayout = () => {
  return (
    <div>
      <h1>Primary Layout</h1>
      <Outlet />

    </div>
  );
};

export default PrimaryLayout;