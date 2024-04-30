import DashboardTopNavbar from "@/components/DashboardTopNavbar";
import MailBox from "@/components/MailBox";

const Dashboard = () => {
  return (
    <div className="w-full">
      <DashboardTopNavbar />
      <div className="flex-none px-8 py-6 relative">
        <MailBox />
      </div>
    </div>
  );
};

export default Dashboard;
