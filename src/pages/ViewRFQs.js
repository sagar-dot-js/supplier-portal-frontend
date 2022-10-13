import React, { useState } from "react";
import { BiCaretDown, BiCaretDownCircle } from "react-icons/bi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import Button from "../components/Button";
import Chip from "../components/Chips/Chip";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import RecentFAQCard from "../customComponents/RecentFAQCard";
import styles from "../components/CollapseTable/CollapseTable.module.css";

const collapseData = [
  {
    id: 1,
    level: "Crystal",
    supplierName: "Supp1",
    supplierNum: "#10000324",
    allocation: 328,
    avgCpi: 13,
    totalBudget: 900,
    allocationStatus: "Approved",
    emailSent: "Sent",
    countries: [
      {
        id: 111,
        level: "Gold",
        countryName: "japan",
        tg: [
          {
            level: "Silver",
            targetGroupName: "tg1",
          },
          {
            level: "Silver",
            targetGroupName: "tg2",
          },
        ],
      },
      {
        id: 222,
        level: "Gold",
        countryName: "usa",
        tg: [
          {
            level: "Silver",
            targetGroupName: "tg3",
          },
          {
            level: "Silver",
            targetGroupName: "tg1",
          },
        ],
      },
      {
        id: 333,
        level: "Gold",
        countryName: "india",
      },
    ],
  },
  {
    id: 2,
    level: "Crystal",
    supplierName: "supp2",
    supplierNum: "#10000159",
    countries: [
      {
        id: 121,
        level: "Gold",
        countryName: "country3",
        tg: [
          {
            level: "Silver",
            targetGroupName: "tg1111",
          },
          {
            level: "Silver",
            targetGroupName: "tg2222",
          },
        ],
      },
      {
        id: 131,
        level: "Gold",
        countryName: "country4",
        tg: [
          {
            level: "Silver",
            targetGroupName: "tg3333",
          },
          {
            level: "Silver",
            targetGroupName: "tg4444",
          },
        ],
      },
      {
        id: 141,
        level: "Gold",
        countryName: "country3",
      },
    ],
  },
];

const ViewRFQs = () => {
  const [open, setOpen] = useState([]);

  let rfqsCardData = [
    {
      title: "Total RFQs",
      subTitle: "344",
    },
    {
      title: "Won",
      subTitle: "344",
    },
    {
      title: "Live",
      subTitle: "344",
    },
    {
      title: "Approved",
      subTitle: "344",
    },
  ];

  return (
    <div className=" custom-px w-full flex flex-col gap-10">
      <div className="flex justify-between text-[#8CB5F3]">
        <div className="flex items-center gap-2 cursor-pointer">
          <MdOutlineArrowBackIosNew className="text-[30px]" />
          <p>
            Back to
            <br /> RFQs
          </p>
        </div>

        <div className="flex items-center gap-2  cursor-pointer">
          <p>
            Next <br />
            RFQ
          </p>{" "}
          <MdOutlineArrowBackIosNew className="text-[30px] rotate-180 -z-10" />
        </div>
      </div>
      <div className="flex gap-10 text-[14px]">
        <div>
          <p className="text-[#1765DC] text-[21px]"> QID#1000700</p>
          <p className="text-[#1765DC]">
            Project ID <span className="text-[#8CB5F3]">#1000700</span>
          </p>
          <p>APPROVED</p>
        </div>

        <div>
          <p>Total Budget</p>
          <p className="text-[16px]">₹ 144430.00</p>
        </div>
        <div>
          <p>Survey IDs</p>
          <div className="flex gap-5">
            <p>
              Cuba <span className="text-[#1765DC]">#1000700 </span>{" "}
            </p>
            <p>
              Cuba <span className="text-[#1765DC]">#1000700 </span>{" "}
            </p>
            <p>
              Cuba <span className="text-[#1765DC]">#1000700 </span>{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 ">
        <div className="flex">
          {rfqsCardData.map((item, ind) => {
            return (
              <div className="w-[234px]">
                <DisplayCard
                  customWidth="200px"
                  cardHeader="Card Header1"
                  cardBody="Card Body"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex  py-[20px] justify-between items-center">
        <div>
          <p className="text-[#333333] text-[24px]">
            Your Current Quote{" "}
            <span className="text-[#5C96EE] text-[12px]">
              If Rejected hover on country to know the reason
            </span>
          </p>{" "}
        </div>
        <div>
          <Button variant="filled">Edit Quote</Button>
        </div>
      </div>
      <div>
        <div className={styles.collapse_table}>
          <table className={styles.collapse_table_container}>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>
                  Supplier {">"} country {">"} Target audience
                </th>
                <th>Allocation</th>
                <th>Avg cpi</th>
                <th>Total Budget</th>
                <th>Allocation Status</th>
                <th>Email Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {collapseData?.map((data) => {
                let suppId = data?.id;
                return (
                  <>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td
                        onClick={() => {
                          if (!open.includes(suppId)) {
                            setOpen((prevArr) => [...prevArr, suppId]);
                          } else {
                            setOpen((prevArr) => {
                              return prevArr.filter((id) => id !== suppId);
                            });
                          }
                        }}
                      >
                        <div className={styles.flex}>
                          <span className={styles.icon}>
                            <BiCaretDown />
                          </span>
                          <span>
                            {" "}
                            {data?.supplierName} (ID{data.supplierNum})
                          </span>
                        </div>
                      </td>
                      <td>1455</td>
                      <td>20</td>
                      <td>900</td>
                      <td>
                        <Chip variant="filled" color="success">
                          Approved
                        </Chip>
                      </td>
                      <td>
                        <Chip variant="outlined" color="success">
                          Sent
                        </Chip>
                      </td>
                      <td>
                        <TbEdit />
                      </td>
                    </tr>

                    {open.includes(suppId) && (
                      <>
                        {data?.countries?.map((country) => {
                          let countryId = country?.id;
                          if (!open.includes(countryId)) {
                            return (
                              <tr>
                                <td>
                                  <input type="checkbox" />
                                </td>
                                <td
                                  style={{ paddingLeft: "2em" }}
                                  onClick={() =>
                                    setOpen((prevArr) => [
                                      ...prevArr,
                                      countryId,
                                    ])
                                  }
                                >
                                  <div className={styles.flex}>
                                    <span className={styles.icon}>
                                      <BiCaretDown />
                                    </span>
                                    <span>{country?.countryName}</span>
                                  </div>
                                </td>
                                <td>1455</td>
                                <td>20</td>
                                <td>900</td>
                                <td>
                                  <Chip variant="filled" color="success">
                                    Approved
                                  </Chip>
                                </td>
                                <td>
                                  <Chip variant="outlined" color="success">
                                    Sent
                                  </Chip>
                                </td>
                                <td>
                                  <TbEdit />
                                </td>
                              </tr>
                            );
                          } else {
                            return (
                              <>
                                <tr>
                                  <td>
                                    <input type="checkbox" />
                                  </td>
                                  <td
                                    style={{ paddingLeft: "2em" }}
                                    onClick={() =>
                                      setOpen((prevArr) => {
                                        return prevArr.filter(
                                          (id) => id != countryId
                                        );
                                      })
                                    }
                                  >
                                    <div className={styles.flex}>
                                      <span className={styles.icon}>
                                        <BiCaretDown />
                                      </span>
                                      <span>{country?.countryName}</span>
                                    </div>
                                  </td>
                                  <td>1455</td>
                                  <td>20</td>
                                  <td>900</td>
                                  <td>
                                    <Chip variant="filled" color="success">
                                      Approved
                                    </Chip>
                                  </td>
                                  <td>
                                    <Chip variant="outlined" color="success">
                                      Sent
                                    </Chip>
                                  </td>
                                  <td>
                                    <TbEdit />
                                  </td>
                                </tr>
                                {country?.tg?.map((target) => {
                                  return (
                                    <tr>
                                      <td>
                                        <input type="checkbox" />
                                      </td>
                                      <td style={{ paddingLeft: "3.5em" }}>
                                        {target?.targetGroupName}
                                      </td>
                                      <td>1455</td>
                                      <td>20</td>
                                      <td>900</td>
                                      <td>
                                        <Chip variant="filled" color="success">
                                          Approved
                                        </Chip>
                                      </td>
                                      <td>
                                        <Chip
                                          variant="outlined"
                                          color="success"
                                        >
                                          Sent
                                        </Chip>
                                      </td>
                                      <td>
                                        <TbEdit />
                                      </td>
                                    </tr>
                                  );
                                })}
                              </>
                            );
                          }
                        })}
                      </>
                    )}
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="h-[400px] w-full flex ">
        <div className="w-[70%] h-full ">
          <p className="text-[#333333] text-[24px] mb-5 ">Description </p>
          <textarea
            placeholder="Testing opportunity after changing the database"
            className="w-[70%] h-[323px] rounded-[8px] border p-5 outline-none"
          ></textarea>
        </div>
        <div className="w-[30%] h-full ">
          <p className="text-[#333333] text-[24px] mb-5 ">Project Documents </p>
          <div className="flex flex-col gap-4">
            <div className="flex h-[48px] gap-3">
              <input
                type="text"
                placeholder="Filename.png"
                className="border w-[80%] bg-[#F4F4F4] p-3 rounded-[8px]  "
              />
              <button className="w-[20%] border-2 rounded-[8px] border-[#1765DC] text-[#1765DC] font-[600]">
                View
              </button>
            </div>
            <div className="flex h-[48px] gap-3">
              <input
                type="text"
                placeholder="Filename.png"
                className="border w-[80%] bg-[#F4F4F4] p-3 rounded-[8px]  "
              />
              <button className="w-[20%] border-2 rounded-[8px] border-[#1765DC] text-[#1765DC] font-[600]">
                View
              </button>
            </div>
            <div>
              <p className="text-[#333333] text-[24px] mb-5 ">
                Target Audience{" "}
              </p>
              <p className="text-[#333333] text-[18px]">
                {" "}
                Customers, Marketers
              </p>
            </div>
            <div>
              <p className="text-[#333333] text-[24px] mb-5 ">
                Sales Co-ordinator
              </p>
              <p className="text-[#333333] text-[18px]">Lokeshwaran Naidu</p>
              <p className="text-[#333333] text-[18px]">
                lokeshwaran.naidu@miratsinsights.com
              </p>
              <p className="text-[#333333] text-[18px]">9619330780</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#333333] text-[24px] mb-5 ">Quotation Changelog </p>
        <div className="h-[303px] border"></div>
      </div>
    </div>
  );
};

export default ViewRFQs;
