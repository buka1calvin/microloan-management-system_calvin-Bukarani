import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../constants/navLinks";
import clsx from "clsx";
const Navlinks = () => {
  const pathname = useLocation();
  return (
    <div className="mt-20 flex items-center flex-col space-y-4 px-3">
      {navLinks.map((link, i) => {
        const isActive = pathname.pathname === link.url;
        return (
          <Link
            to={link.url}
            key={i}
            className={clsx(
              "flex w-full rounded-lg shadow-inner shadow-red-800/15 border border-red-800/15 px-2 py-2 text-lg items-center justify-start space-x-2",
              isActive
                ? "text-stone-900 bg-orange-50 font-semibold"
                : "text-white bg-transparent font-normal"
            )}
          >
            <link.icon className=" h-6 w-6" />
            <span className="text-sm">{link.name}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Navlinks;
