import DashboardTopNavbar from "@/components/DashboardTopNavbar";
import Mainsidebar from "@/components/Mainsidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-start justify-normal">
      <Mainsidebar />
      {children}
    </div>
  );
};

export default DashboardLayout;
