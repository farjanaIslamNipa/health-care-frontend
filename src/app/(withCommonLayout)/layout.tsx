import Navbar from "@/components/shared/Navbar";
import {ReactNode} from "react";

const CommonLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default CommonLayout;