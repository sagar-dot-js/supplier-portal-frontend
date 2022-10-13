import Button from "../components/Button";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import InvoiceCard from "../customComponents/InvoiceCard";
import RecentFAQCard from "../customComponents/RecentFAQCard";
import ReportsCard from "../customComponents/ReportsCard";
import Dropdown from "../components/Dropdown/Dropdown";
import Link from "../components/Link/Link";
import Search from "../components/Search/Search";
import { useState } from "react";
import Table, {
  TableActionPopUp,
  TableBody,
  TableHead,
  TableRow,
  TableWithPagination,
  Td,
  Th,
} from "../components/Table/Table";
import Chip from "../components/Chips/Chip";
import TablePagination from "../components/Table/TablePagination";
import country from "../json-data/contry-data.json";

const ReportLog = () => {
  const surveyType = ["one", "two", "three"];
  const [selectedRows, setSelectedRows] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const [selected, setSelected] = useState(null);

  const statusColors = {
    unseen: "error",
    seen: "warning",
    approved: "success",
    launched: "primary",
  };

  let surveyTypeData = [
    {
      label: "Survey Type1",
    },
    {
      label: "Survey Type1",
    },
    {
      label: "Survey Type1",
    },
  ];

  let StudyType = [
    {
      label: "Study Type 1",
    },
    {
      label: "Study Type 2",
    },
    {
      label: "Study Type 3",
    },
  ];

  const openModal = () => {
    console.log(openModal);
  };
  const data = [
    {
      id: 333,
      name: "India project",
      SurveyNo: 123455,
      startDate: "June 05 2022",
      status: "primary",
      studyType: "adhoc",
      surveyType: "information tech",
      loi: 100,
      bid: "$5.75",
    },
    {
      id: 333,
      name: "India project",
      SurveyNo: 123455,
      startDate: "June 05 2022",
      status: "primary",
      studyType: "adhoc",
      surveyType: "information tech",
      loi: 100,
      bid: "$5.75",
    },
    {
      id: 333,
      name: "India project",
      SurveyNo: 123455,
      startDate: "June 05 2022",
      status: "primary",
      studyType: "adhoc",
      surveyType: "information tech",
      loi: 100,
      bid: "$5.75",
    },
    {
      id: 333,
      name: "India project",
      SurveyNo: 123455,
      startDate: "June 05 2022",
      status: "primary",
      studyType: "adhoc",
      surveyType: "information tech",
      loi: 100,
      bid: "$5.75",
    },
    {
      id: 333,
      name: "India project",
      SurveyNo: 123455,
      startDate: "June 05 2022",
      status: "primary",
      studyType: "adhoc",
      surveyType: "information tech",
      loi: 100,
      bid: "$5.75",
    },
    {
      id: 333,
      name: "India project",
      SurveyNo: 123455,
      startDate: "June 05 2022",
      status: "primary",
      studyType: "adhoc",
      surveyType: "information tech",
      loi: 100,
      bid: "$5.75",
    },
  ];

  return (
    <div className=" custom-px w-full flex flex-col gap-12">
      <div className="flex justify-between w-full ">
        <div className=" w-[100%] ">
          <p className="text-[32px] font-[400] text-[#1765DC]">Reports</p>
          <div className="flex  justify-between ">
            <div className="w-[309px]  ">
              <p className="text-[16px] text-[#8CB5F3]">
                Your <span className="text-[#1765DC]"> Reports & Log</span> all
                at one place
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-between w-full ">
        <div className=" w-[70%] grid grid-cols-4 gap-5  ">
          <div className="w-[234px]">
            <DisplayCard customWidth="200px" cardHeader="Won" cardBody="344" />
          </div>
          <div className="w-[234px]">
            <DisplayCard customWidth="200px" cardHeader="Live" cardBody="344" />
          </div>
          <div className="w-[234px]">
            <DisplayCard
              customWidth="200px"
              cardHeader="Approved"
              cardBody="344"
            />
          </div>
        </div>
        <div className=" w-[20%] flex justify-end items-start">
          <div>
            <Button variant="filled" onClick={openModal}>
              Create Survey
            </Button>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex justify-between w-full  ">
        <div className="flex gap-2">
          <Dropdown
            dropdownText="Survey Type "
            onChange={(e) => console.log(e)}
            options={surveyTypeData}
          />
          <Dropdown
            dropdownText="Study Type"
            onChange={(e) => console.log(e)}
            options={StudyType}
          />
          <Dropdown
            dropdownText="Country"
            onChange={(e) => console.log(e)}
            options={country}
          />

          <div className=" flex items-center">
            <button className="text-[#1765DC] font-[700] border-b-2 border-[#1765DC]">
              Clear Filters
            </button>
          </div>
        </div>
        <div className=" w-[30%] flex justify-end items-start">
          <div>
            <Search />
          </div>
        </div>
      </div>

      <div className=" flex-col ">
        <TableActionPopUp selectedRows={selectedRows}>
          <Button
            onClick={(e) => console.log("its working", e)}
            variant="outlined"
            customWidth="200px"
            className="tableBtn"
          >
            Generate Survay Report
          </Button>
          <Button
            onClick={(e) => console.log("its working", e)}
            variant="outlined"
            customWidth="200px"
            className="tableBtn"
          >
            Generate Project Report
          </Button>
        </TableActionPopUp>
        <TableWithPagination>
          <Table>
            <TableHead>
              <TableRow>
                <Th>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedRows(data);
                      } else setSelectedRows([]);
                    }}
                  />
                </Th>
                <Th>Project ID</Th>
                <Th>Project Name</Th>
                <Th>Survey No.</Th>
                <Th>Start date</Th>
                <Th>Status</Th>
                <Th>Study type</Th>
                <Th>Survey type</Th>
                <Th>LOI (Mins)</Th>
                <Th>Bid CPI</Th>
              </TableRow>
            </TableHead>
            <TableBody>
              {data
                ?.slice(
                  pageNumber * rowsPerPage - rowsPerPage,
                  pageNumber * rowsPerPage
                )
                .map((d, i) => {
                  return (
                    <TableRow key={i}>
                      <Td>
                        <input
                          type="checkbox"
                          checked={selectedRows.filter((r) => r.id === d.id)[0]}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedRows((prev) => [...prev, d]);
                            } else
                              setSelectedRows((prev) => {
                                return prev.filter((pd) => {
                                  return pd.id !== d.id;
                                });
                              });
                          }}
                        />
                      </Td>
                      <Link
                        href="https://mui.com/material-ui/react-accordion/"
                        color="black"
                        border="underline"
                      >
                        {" "}
                        <Td>{d.id}</Td>
                      </Link>

                      <Td>{d.name}</Td>
                      <Td>{d.SurveyNo}</Td>
                      <Td>{d.startDate}</Td>
                      <Td>
                        {" "}
                        <Chip
                          variant="filled"
                          color={statusColors[d.status.toLowerCase()]}
                        >
                          {d.status}
                        </Chip>{" "}
                      </Td>
                      {/* <Td>{d.status}</Td> */}
                      <Td>{d.studyType}</Td>
                      <Td>{d.surveyType}</Td>
                      <Td>{d.loi}</Td>
                      <Td>{d.bid}</Td>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            totalDataCnt={data.length}
          />
        </TableWithPagination>
      </div>
      {/*  */}

      {/*  */}
    </div>
  );
};

export default ReportLog;
