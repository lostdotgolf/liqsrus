import { motion } from "framer-motion";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { useState } from "react";
import { Chart, registerables } from "chart.js";
import { useEffect } from "react";

Chart.register(...registerables);

interface Event {
  name: String;
  to: string;
  from: string;
  description: String;
  tags: String;
}

export default function EventCard(props: Event) {
  const [isOpen, setIsOpen] = useState(false);
  const [historicPrice, setHistoricPrice] = useState([]);
  const [days, setDays] = useState(2);

  const open = () => {
    setIsOpen(!isOpen);
    console.log("open");
  };

  const toDate = new Date(props.to);
  const toUnixTimestamp = Math.floor(toDate.getTime() / 1000);

  const fromDate = new Date(props.from);
  const fromUnixTimestamp = Math.floor(fromDate.getTime() / 1000);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${toUnixTimestamp}&to=${fromUnixTimestamp}`
    );
    setHistoricPrice(data.prices);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="text-xl mr-2 ml-2 md:text-3xl md:w-1/2 md:h-1/2">
      <motion.div
        layout="position"
        transition={{ layout: { duration: 0.5, type: "spring" } }}
        onClick={open}
        className="bg-white text-black  mr-9 ml-9"
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0,0,0, 0.5 ",
        }}
      >
        <motion.h1 layout="position" className="text-center">
          {props.name}
        </motion.h1>
        {isOpen && (
          <motion.div
            layout="position"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col m-3"
          >
            <div>
              {props.to}-{props.from}
            </div>
            <div>{props.description}</div>
            <div>where: {props.tags}</div>
            <Line
              data={{
                labels: historicPrice.map((historicPrice) => {
                  let date = new Date(historicPrice[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicPrice.map(
                      (historicPrice) => historicPrice[1]
                    ),
                    label: "btc price",
                    borderColor: "#7e4ed7",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
              width={"100%"}
              height={"100%"}
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
