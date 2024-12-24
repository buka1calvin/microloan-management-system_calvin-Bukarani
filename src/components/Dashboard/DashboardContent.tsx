import { stats } from "../../constants/statistics";
import StartCard from "../ui/StartCard";

const DashboardContent = () => {
  return (
    <section className="flex flex-col w-full px-10 py-6">
      <div className="">
        <div className="flex md:gap-5 w-full">
          {stats.map((stat, i) => (
            <StartCard amount={stat.amount} title={stat.title} key={i} />
          ))}
        </div>
        <button className=""></button>
        </div>
    </section>
  );
};

export default DashboardContent;
