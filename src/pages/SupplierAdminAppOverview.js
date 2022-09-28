import React from "react";
import Button from "../components/Button";
import Chip from "../components/Chips/Chip";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiCheckboxCircleFill } from "react-icons/ri";

const SupplierAdminAppOverview = () => {
  let compDetailCardData = [
    {
      heading: "Company Information",
      titel1: "No of customers",
      valueOfTitel1: "Mirats Quanto",
      titel2: "Company Offices",
      valueOfTitel2: "43",
      titel3: "Annual Revenue",
      valueOfTitel3: "NA",
      titel4: "Tax ID Number",
      valueOfTitel4: "Thu Jul 14 2022",
      titel5: "",
      valueOfTitel5: "",
    },
    {
      heading: "Business Information",
      titel1: "Official Name",
      valueOfTitel1: "Mirats Quanto",
      titel2: "Employee Size",
      valueOfTitel2: "43",
      titel3: "Registration No.",
      valueOfTitel3: "NA",
      titel4: "Company Start Date",
      valueOfTitel4: "Thu Jul 14 2022",
      titel5: "Company Start Date",
      valueOfTitel5: "Thu Jul 14 2022",
    },
  ];

  return (
    <div className=" custom-px w-full flex flex-col gap-10">
      <div className="flex justify-between">
        <div>
          <p className="text-[32px]">Mirats Quanto (India) Private Limited</p>
          <p className="text-[24px]">ID #1234567800</p>
        </div>
        <div className="flex gap-3 items-end ">
          <Button
            onClick={(e) => console.log("its working", e)}
            variant="outlined"
            customWidth="200px"
            disabled
          >
            Edit Application
          </Button>
          <Button
            onClick={(e) => console.log("its working", e)}
            variant="outlined"
            customWidth="200px"
            disabled
          >
            Reject Application
          </Button>
          <Button
            className="sagar"
            onClick={(e) => console.log("its working", e)}
            variant="filled"
          >
            Approve Application
          </Button>
        </div>
      </div>
      <div className=" flex justify-between ">
        {/*  */}
        <div className="h-[260px] w-[390px] border border-[#989898] rounded-[8px] p-3 flex flex-col gap-2 relative">
          <div className="flex gap-3">
            <p>Company Description</p>{" "}
            <Chip variant="filled" color="primary">
              Primary
            </Chip>
          </div>
          <div className="w-[70%]">
            {" "}
            <p className="text-[14px]">
              Issues/doubts regarding RFQs can be found here{" "}
            </p>
          </div>
          <AiOutlineCloseCircle className="absolute right-2 top-2 text-2xl text-blue-500 " />
          <RiCheckboxCircleFill className="absolute right-2 bottom-2 text-2xl text-blue-500" />
        </div>
        {/*  */}
        {compDetailCardData.map((data) => {
          return <DetailsCard data={data} />;
        })}

        {/*  */}
        {/*  */}
      </div>
    </div>
  );
};

export default SupplierAdminAppOverview;

const DetailsCard = (props) => {
  console.log(props);
  return (
    <div className="h-[260px] w-[390px] border border-[#989898] rounded-[8px] p-3 flex flex-col gap-2 relative">
      <div className="flex gap-3">
        <p>{props.data.heading}</p>{" "}
      </div>
      <div className="w-full  text-[12px]">
        <table className="" id="companyDecCardTable">
          <tr>
            <td>{props.data.titel1}</td>
            <td> {props.data.valueOfTitel1}</td>
          </tr>
          <tr>
            <td>{props.data.titel2}</td>
            <td> {props.data.valueOfTitel2}</td>
          </tr>
          <tr>
            <td>{props.data.titel3}</td>
            <td> {props.data.valueOfTitel3}</td>
          </tr>
          <tr>
            <td>{props.data.titel4}</td>
            <td> {props.data.valueOfTitel4}</td>
          </tr>
          <tr>
            <td>{props.data.titel5}</td>
            <td> {props.data.valueOfTitel5}</td>
          </tr>
        </table>
      </div>
      <AiOutlineCloseCircle className="absolute right-2 top-2 text-2xl text-blue-500 " />
      <RiCheckboxCircleFill className="absolute right-2 bottom-2 text-2xl text-blue-500" />
    </div>
  );
};
