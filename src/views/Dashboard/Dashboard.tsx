import React from "react";
import { Filters } from "../../components/Sidebar/Filters";

interface Props {
  title: string;
}

const Dashboard: React.FC<Props> = ({ title }) => {
  console.log('Carga')
  return (
    <div className="color:black">
      <Filters />
    </div>
  );
};

export default Dashboard;
