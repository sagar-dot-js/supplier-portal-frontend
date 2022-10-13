import { useState } from "react";
import Button from "../components/Button";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import Link from "../components/Link/Link";
import Modal from "../components/Modal/Modal";
import { ModalContent } from "../components/Modal/Modal.style";
import Header from "../customComponents/header/Header";
import InvoiceCard from "../customComponents/InvoiceCard";
import RecentFAQCard from "../customComponents/RecentFAQCard";
import ReportsCard from "../customComponents/ReportsCard";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
    console.log(openModal);
  };

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

  let projectCardData = [
    {
      title: "Total Projects",
      subTitle: "344",
    },
    {
      title: "Total Surveys",
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

  let invoiceCardData = [
    {
      title: "Robas RFQ",
      InvoiceId: "9898CKKL",
      date: "23/05/2022",
      totalAmt: "123324",
      Countries: "4",
    },
    {
      title: "Robas RFQ",
      InvoiceId: "9898CKKL",
      date: "23/05/2022",
      totalAmt: "123324",
      Countries: "4",
    },
    {
      title: "Robas RFQ",
      InvoiceId: "9898CKKL",
      date: "23/05/2022",
      totalAmt: "123324",
      Countries: "4",
    },
    {
      title: "Robas RFQ",
      InvoiceId: "9898CKKL",
      date: "23/05/2022",
      totalAmt: "123324",
      Countries: "4",
    },
    {
      title: "Robas RFQ",
      InvoiceId: "9898CKKL",
      date: "23/05/2022",
      totalAmt: "123324",
      Countries: "4",
    },
  ];

  let ReportsCardData = [
    {
      title: "Robas RFQ",
      id: "1000789",
    },
    {
      title: "Robas RFQ",
      id: "1000789",
    },
    {
      title: "Robas RFQ",
      id: "1000789",
    },
    {
      title: "Robas RFQ",
      id: "1000789",
    },
    {
      title: "Robas RFQ",
      id: "1000789",
    },
    {
      title: "Robas RFQ",
      id: "1000789",
    },
  ];

  return (
    <>
      <div className=" custom-px w-full flex flex-col gap-10">
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <ModalContent>
            <div className="w-[500px] h-[440px]  ">
              <div className=" flex items-end gap-5">
                <div>
                  <p className="text-[#000000] font-[400] text-[18px]">
                    Robas RFQ
                  </p>
                  <p className="text-[#1765DC] font-[600] text-[18px]    ">
                    1000789
                  </p>
                </div>
                <div>
                  {" "}
                  <p className="text-[18px]"> - Survey IDs </p>
                </div>
              </div>
              <div className=" pl-[100px]">
                <table className="modal-table">
                  <tr>
                    <td>
                      <p className="text-[#1765DC] font-[600] text-[24px]">
                        {" "}
                        1000785
                      </p>
                      <p className="text-[#1765DC] text-[13px]">Cuba</p>
                    </td>
                    <td>
                      <Button
                        onClick={(e) => console.log("its working", e)}
                        variant="outlined"
                        customWidth="200px"
                      >
                        Generate Report
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <p className="text-[#1765DC] font-[600] text-[24px]">
                        {" "}
                        1000789{" "}
                      </p>{" "}
                      <p className="text-[#1765DC] text-[13px] ">India</p>
                    </td>
                    <td>
                      <Button
                        onClick={(e) => console.log("its working", e)}
                        variant="outlined"
                        customWidth="200px"
                      >
                        Generate Report
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <p className="text-[#1765DC] font-[600] text-[24px]">
                        1000789{" "}
                      </p>
                      <p className="text-[#1765DC] text-[13px]">LATAM</p>
                    </td>
                    <td>
                      <Button
                        onClick={(e) => console.log("its working", e)}
                        variant="outlined"
                        customWidth="200px"
                      >
                        Generate Report
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {" "}
                      <p className="text-[#1765DC] font-[600] text-[24px]">
                        {" "}
                        1000789
                      </p>{" "}
                      <p className="text-[#1765DC] text-[13px]">
                        Bosnia & Herzegovina
                      </p>
                    </td>
                    <td>
                      <Button
                        onClick={(e) => console.log("its working", e)}
                        variant="outlined"
                        customWidth="200px"
                      >
                        Generate Report
                      </Button>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="">
                <Button variant="filled" className="ml-[200px]">
                  Generate Full Project Report
                </Button>
              </div>
            </div>
          </ModalContent>
        </Modal>
        <div className="flex justify-between w-full ">
          <div className=" w-[40%] ">
            <p className="text-[32px] font-[400] text-[#1765DC]"> Dashboard</p>
            <div className="flex  justify-between ">
              <div className="w-[309px]  ">
                <p className="text-[16px] text-[#8CB5F3]">
                  Welcome to{" "}
                  <span className="text-[#1765DC]"> Mirats Supplier</span>{" "}
                  Dashboard
                </p>
              </div>
            </div>
          </div>
          <div className=" w-[60%] flex justify-end items-start">
            <div>
              <p className="text-[#151313] text-[24px]">TestSupplier#1 </p>
              <p className="text-[#666666]">supplieremail@gmail.com</p>{" "}
            </div>
          </div>
        </div>
        <div>
          {/*  */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-4 items-center ">
              <p className="text-[#333333] text-[24px]"> RFQs</p>
              <Link
                to="/viewRFQs"
                border="underline"
                // className="text-[#5C96EE]"
                color="#1765dc"
              >
                View All
              </Link>
            </div>
            <div className="flex">
              <div className=" w-[40%] grid grid-cols-2 gap-10">
                {rfqsCardData.map((item, ind) => {
                  return (
                    <div className="w-[234px]">
                      <DisplayCard
                        customWidth="200px"
                        cardHeader={item.title}
                        cardBody={item.subTitle}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="w-[60%]">
                {" "}
                <RecentFAQCard />
              </div>
            </div>
          </div>
          {/*  */}
        </div>

        <div className="flex flex-col gap-5 ">
          <div className="flex gap-4 items-center ">
            <p className="text-[#333333] text-[24px]">Projects</p>
            <Link to="/project" border="underline" color="#1765dc">
              View All
            </Link>
          </div>
          <div className="flex">
            {projectCardData.map((item, ind) => {
              return (
                <div className="w-[234px]">
                  <DisplayCard
                    customWidth="200px"
                    cardHeader={item.title}
                    cardBody={item.subTitle}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-5 ">
          <div className="flex gap-4 items-center ">
            <p className="text-[#333333] text-[24px]"> Invoice</p>
            <Link
              to="/invoice"
              color="#1765dc"
              border="underline"
              href="https://scalablecss.com/styled-components-global-styles/"
            >
              View All
            </Link>
          </div>
          <div className="flex justify-between">
            {invoiceCardData.map((item, ind) => {
              return <InvoiceCard data={item} />;
            })}
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-5 ">
          <div className="flex gap-4 items-center ">
            <p className="text-[#333333] text-[24px]"> Reports</p>
            <Link
              to="/report-log"
              color="#1765dc"
              border="underline"
              href="https://scalablecss.com/styled-components-global-styles/"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {ReportsCardData.map((item, ind) => {
              return <ReportsCard openModal={openModal} />;
            })}
          </div>
        </div>
        <a href="#" className="underline"></a>
      </div>
    </>
  );
};

export default Dashboard;
