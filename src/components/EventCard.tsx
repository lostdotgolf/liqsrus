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

const options = {
  //   scales: {
  //     y: {
  //       min: 40000,
  //       max: 58000,
  //       stepSize: 5,
  //     },
  //     x: { min: 5, max: 50 },
  //   },
  elements: {
    point: {
      radius: 2,
    },
  },
};

export default function EventCard(props: Event) {
  const [isOpen, setIsOpen] = useState(false);
  const [historicBTCPrice, setHistoricBTCPrice] = useState([]);
  const [historicETHPrice, setHistoricETHPrice] = useState([]);
  const [historicSOLPrice, setHistoricSOLPrice] = useState([]);
  const [btcDifference, setBTCDifference] = useState(0);
  const [days, setDays] = useState(0);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  const open = () => {
    setIsOpen(!isOpen);
    console.log("open");
  };

  const fromDate = new Date(props.from);
  const toUnixTimestamp = Math.floor(fromDate.getTime() / 1000);

  const toDate = new Date(props.to);
  const fromUnixTimestamp = Math.floor(toDate.getTime() / 1000);

  const fetchBTCData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${fromUnixTimestamp}&to=${toUnixTimestamp}`
    );
    setHistoricBTCPrice(data.prices);

    const difference = data.prices[71][1] - data.prices[0][1];
    setBTCDifference(difference);
    console.log(difference);
  };

  const fetchETHData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/ethereum/market_chart/range?vs_currency=usd&from=${fromUnixTimestamp}&to=${toUnixTimestamp}`
    );
    setHistoricETHPrice(data.prices);
    console.log(data.prices);
  };

  const fetchSOLData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/solana/market_chart/range?vs_currency=usd&from=${fromUnixTimestamp}&to=${toUnixTimestamp}`
    );
    setHistoricSOLPrice(data.prices);
    console.log(data.prices);
  };

  console.log(historicBTCPrice, historicETHPrice, historicSOLPrice);

  useEffect(() => {
    fetchBTCData();
    fetchETHData();
    fetchSOLData();
  }, []);

  return (
    <div className="">
      <motion.div
        layout="position"
        transition={{ layout: { duration: 0.5, type: "spring" } }}
        onClick={open}
        className="bg-white text-black  ml-1 mr-1 md:mr-9 md:ml-9"
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0,0,0, 0.5 ",
        }}
      >
        <motion.h1
          layout="position"
          className="text-center text-2xl text-purple-500"
        >
          {props.name}
        </motion.h1>
        {isOpen && (
          <motion.div
            layout="position"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-min"
          >
            <div className="text-center text-green-500">
              {props.to}-{props.from}
            </div>
            <div className="text-center">{props.description}</div>
            <div className="text-center mb-9">where: {props.tags}</div>
            {isDesktop ? (
              <div>
                <Line
                  data={{
                    labels: historicBTCPrice.map((historicBTCPrice) => {
                      let date = new Date(historicBTCPrice[0]);
                      let time =
                        date.getHours() > 12
                          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                          : `${date.getHours()}:${date.getMinutes()} AM`;
                      return days === 1 ? time : date.toLocaleDateString();
                    }),

                    datasets: [
                      {
                        data: historicBTCPrice.map(
                          (historicBTCPrice) => historicBTCPrice[1]
                        ),
                        label: "btc price",
                        borderColor: "#CB7E14",
                      },
                    ],
                  }}
                  options={{
                    elements: {
                      point: {
                        radius: 2,
                      },
                    },
                  }}
                  width={"100%"}
                  height={"25%"}
                />
                <Line
                  data={{
                    labels: historicETHPrice.map((historicETHPrice) => {
                      let date = new Date(historicETHPrice[0]);
                      let time =
                        date.getHours() > 12
                          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                          : `${date.getHours()}:${date.getMinutes()} AM`;
                      return days === 1 ? time : date.toLocaleDateString();
                    }),

                    datasets: [
                      {
                        data: historicETHPrice.map(
                          (historicETHPrice) => historicETHPrice[1]
                        ),
                        label: "eth price",
                        borderColor: "#14cb8b",
                      },
                    ],
                  }}
                  options={{
                    elements: {
                      point: {
                        radius: 2,
                      },
                    },
                  }}
                  width={"75%"}
                  height={"25%"}
                />
                <Line
                  data={{
                    labels: historicSOLPrice.map((historicSOLPrice) => {
                      let date = new Date(historicSOLPrice[0]);
                      let time =
                        date.getHours() > 12
                          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                          : `${date.getHours()}:${date.getMinutes()} AM`;
                      return days === 1 ? time : date.toLocaleDateString();
                    }),

                    datasets: [
                      {
                        data: historicSOLPrice.map(
                          (historicSOLPrice) => historicSOLPrice[1]
                        ),
                        label: "sol price",
                        borderColor: "#7e4ed7",
                      },
                    ],
                  }}
                  options={{
                    elements: {
                      point: {
                        radius: 2,
                      },
                    },
                  }}
                  width={"75%"}
                  height={"25%"}
                />
              </div>
            ) : (
              <div>
                <Line
                  data={{
                    labels: historicBTCPrice.map((historicBTCPrice) => {
                      let date = new Date(historicBTCPrice[0]);
                      let time =
                        date.getHours() > 12
                          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                          : `${date.getHours()}:${date.getMinutes()} AM`;
                      return days === 1 ? time : date.toLocaleDateString();
                    }),

                    datasets: [
                      {
                        data: historicBTCPrice.map(
                          (historicBTCPrice) => historicBTCPrice[1]
                        ),
                        label: "btc price",
                        borderColor: "#CB7E14",
                      },
                    ],
                  }}
                  options={{
                    elements: {
                      point: {
                        radius: 2,
                      },
                    },
                  }}
                  width={"100%"}
                  height={"100%"}
                />
                <Line
                  data={{
                    labels: historicETHPrice.map((historicETHPrice) => {
                      let date = new Date(historicETHPrice[0]);
                      let time =
                        date.getHours() > 12
                          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                          : `${date.getHours()}:${date.getMinutes()} AM`;
                      return days === 1 ? time : date.toLocaleDateString();
                    }),

                    datasets: [
                      {
                        data: historicETHPrice.map(
                          (historicETHPrice) => historicETHPrice[1]
                        ),
                        label: "eth price",
                        borderColor: "#14cb8b",
                      },
                    ],
                  }}
                  options={{
                    elements: {
                      point: {
                        radius: 2,
                      },
                    },
                  }}
                  width={"100%"}
                  height={"100%"}
                />
                <Line
                  data={{
                    labels: historicSOLPrice.map((historicSOLPrice) => {
                      let date = new Date(historicSOLPrice[0]);
                      let time =
                        date.getHours() > 12
                          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                          : `${date.getHours()}:${date.getMinutes()} AM`;
                      return days === 1 ? time : date.toLocaleDateString();
                    }),

                    datasets: [
                      {
                        data: historicSOLPrice.map(
                          (historicSOLPrice) => historicSOLPrice[1]
                        ),
                        label: "sol price",
                        borderColor: "#7e4ed7",
                      },
                    ],
                  }}
                  options={{
                    elements: {
                      point: {
                        radius: 2,
                      },
                    },
                  }}
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
