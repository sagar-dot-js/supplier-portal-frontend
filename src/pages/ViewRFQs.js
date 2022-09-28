import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Button from "../components/Button";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import RecentFAQCard from "../customComponents/RecentFAQCard";

const ViewRFQs = () => {
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
          <MdOutlineArrowBackIosNew className="text-[30px] rotate-180" />
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
      <div className="flex flex-col gap-5 ">
        <div className="flex gap-4 items-center justify-between pr-[290px]">
          <p className="text-[#333333] text-[24px]"> Countries</p>
          <p className="text-[#333333] text-[24px]"> Project Documents</p>
        </div>
        <div className="flex gap-[50px] h-[100px] ">
          <div className=" w-[60%] h-full">
            <div className="w-full h-full ">
              <table className="contries-table ">
                <tr>
                  <td> Countries</td>
                  <td> CuTarget Sampleba</td>
                  <td> Length of Interviewa</td>
                  <td> Incidence Rate</td>
                </tr>
                <tr>
                  <td> Cuba</td>
                  <td>32 N</td>
                  <td> 23 Minutes</td>
                  <td> 65.00%</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="w-[40%] flex flex-col gap-2 justify-between ">
            <div className="flex gap-4 justify-between">
              <div className="bg-[#F4F4F4] w-full rounded-md flex items-center p-3">
                Filename.png
              </div>{" "}
              <Button
                onClick={(e) => console.log("its working", e)}
                variant="outlined"
                customWidth="200px"
              >
                View
              </Button>
            </div>
            <div className="flex gap-4 justify-between">
              <div className="bg-[#F4F4F4] w-full rounded-md flex items-center p-3">
                Filename.png
              </div>{" "}
              <Button
                onClick={(e) => console.log("its working", e)}
                variant="outlined"
                customWidth="200px"
              >
                View
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[323px] flex flex-col gap-5">
        <p className="text-[#333333] text-[24px]"> Description</p>
        <div className="flex gap-[50px] h-full">
          <div className="bg-[#F4F4F4] h-full w-[60%] rounded-[8px] p-5">
            Testing opportunity after changing the database
          </div>
          <div className="w-[40%] flex flex-col gap-5">
            <div>
              <p className="text-[#161616] text-[24px]"> Target Audience</p>
              <p className="text-[#333333] text-[16px]">
                {" "}
                Customers, Marketers
              </p>
            </div>
            <div>
              <p className="text-[#161616] text-[24px]"> Sales Co-ordinator</p>
              <p className="text-[#333333] text-[16px]">Lokeshwaran Naidu</p>
              <p className="text-[#333333] text-[16px]">
                lokeshwaran.naidu@miratsinsights.com
              </p>
              <p className="text-[#333333] text-[16px]">9619330780</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-5 flex-col">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <p className="text-[#333333] text-[24px] ">Your Current Quote</p>
            <span className="text-[#5C96EE] text-[14px]">
              If Rejected hover on country to know the reason
            </span>
          </div>
          <Button
            className="sagar"
            onClick={(e) => console.log("its working", e)}
            variant="filled"
          >
            Edit Quote
          </Button>
        </div>
        <div className=" border border-blue-500 h-[300px]"></div>
      </div>
      <div className="flex gap-5 flex-col">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <p className="text-[#333333] text-[24px] ">Quotation Changelog</p>
          </div>
          {/* <Button
            className="sagar"
            onClick={(e) => console.log("its working", e)}
            variant="filled"
          >
            Edit Quote
          </Button> */}
        </div>
        <div className=" border border-blue-500 h-[300px]"></div>
      </div>
    </div>
  );
};

export default ViewRFQs;
