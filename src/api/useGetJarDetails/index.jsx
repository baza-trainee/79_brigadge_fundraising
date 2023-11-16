import axios from "axios";
import { useEffect, useState } from "react";

const useGetJarDetails = () => {
  const [data, setData] = useState({
    fundraisingGoal: 0,
    totalDonations: 0,
    recentDonations: [
      {
        donor: "",
        donationAmount: 0,
        time: "",
      },
    ],
    largestDonations: [
      {
        donor: "",
        donationAmount: 0,
        time: "",
      },
    ],
  });

  useEffect(() => {
    axios.get("/api/jar_details").then(({ data }) => {
      setData(data);
    });
  }, []);
  return { data };
};

export default useGetJarDetails;
