import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Chip from "../components/Chips/Chip";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import Dropdown from "../components/Dropdown/Dropdown";
import LinkCard from "../components/LinkCard/LinkCard";
import Search from "../components/Search/Search";
import Table, {
  TableActionPopUp,
  TableBody,
  TableHead,
  TableRow,
  TableWithPagination,
  Td,
  Th,
} from "../components/Table/Table";
import TablePagination from "../components/Table/TablePagination";
import TabContext, {
  Tab,
  TabList,
  TabPanel,
} from "../components/Tab/TabContext";

const statusColors = {
  unseen: "error",
  seen: "primary",
  approved: "success",
};

const SupplierAdminApp = () => {
  const data = [
    {
      id: 33333333,
      name: "Mid Pacific Research",
      Website: "https://miratsinsights.com",
      Country: "American Samoa",
      Status: "Approved",
      Employees: "1-10",
      Experience: "1-10 Years",
      DateApplied: "June 15 2022",
    },
    {
      id: 33333333,
      name: "Mid Pacific Research",
      Website: "https://miratsinsights.com",
      Country: "American Samoa",
      Status: "Approved",
      Employees: "1-10",
      Experience: "1-10 Years",
      DateApplied: "June 15 2022",
    },
    {
      id: 33333333,
      name: "Mid Pacific Research",
      Website: "https://miratsinsights.com",
      Country: "American Samoa",
      Status: "Approved",
      Employees: "1-10",
      Experience: "1-10 Years",
      DateApplied: "June 15 2022",
    },
    {
      id: 33333333,
      name: "Mid Pacific Research",
      Website: "https://miratsinsights.com",
      Country: "American Samoa",
      Status: "Approved",
      Employees: "1-10",
      Experience: "1-10 Years",
      DateApplied: "June 15 2022",
    },
    {
      id: 33333333,
      name: "Mid Pacific Research",
      Website: "https://miratsinsights.com",
      Country: "American Samoa",
      Status: "Approved",
      Employees: "1-10",
      Experience: "1-10 Years",
      DateApplied: "June 15 2022",
    },
  ];

  const [selectedRows, setSelectedRows] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [tabActive, setTabActive] = useState(2);

  return (
    <div className=" custom-px w-full flex flex-col gap-12">
      <div className="flex justify-between w-full ">
        <div className=" w-[100%] ">
          <p className="text-[32px] font-[400] text-[#1765DC]">
            Supplier Applications
          </p>
          <div className="flex  justify-between ">
            <div className="w-[70%]  ">
              <div>
                <TabContext
                  onChange={(value) => setTabActive(value)}
                  value={tabActive}
                  position="horizontal"
                >
                  <TabList>
                    <Tab value={1}>All</Tab>
                    <Tab value={2}>Approved</Tab>
                    <Tab value={3}>Not Reviewed</Tab>
                    <Tab value={4}>Unapproved</Tab>
                    <Tab value={5}>Archived</Tab>
                    <Tab value={6}>Incomplete</Tab>
                  </TabList>
                  <TabPanel value={1}>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sunt quis, exercitationem officiis magni sapiente
                      dignissimos voluptate provident omnis ullam esse.
                    </p>
                    <input type="text" />
                  </TabPanel>
                  <TabPanel value={2}>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Sunt quis, exercitationem officiis magni sapiente
                      dignissimos voluptate provident omnis ullam esse.
                    </p>
                    <input type="text" />
                  </TabPanel>
                  <TabPanel value={3}>
                    <input type="text" />
                  </TabPanel>
                </TabContext>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="flex justify-between w-full ">
        <div className=" w-[70%] grid grid-cols-4 gap-5  ">
          <div className="w-[180px] ">
            {/* <Dropdown dropdownText="Survey Type" options={surveyType} /> */}
          </div>
          <div className="w-[180px] ">
            {/* <Dropdown dropdownText="Study Type" options={surveyType} /> */}
          </div>
          <div className="w-[180px]">
            {/* <Dropdown dropdownText="Country" options={surveyType} /> */}
          </div>
          <div className="w-[180px] ">
            <p>
              <Link
                color="#1765DC"
                border="underline"
                href="https://scalablecss.com/styled-components-global-styles/"
              >
                underlined link
              </Link>
            </p>
          </div>
        </div>
        <div className=" w-[30%] flex justify-end items-start">
          <div>
            <Search />
          </div>
        </div>
      </div>
      {/*  */}
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
                <Th>
                  LOI <sub>(Mins)</sub>
                </Th>
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
                      <Td>{d.Website}</Td>
                      <Td>{d.Country}</Td>
                      <Td>
                        {" "}
                        <Chip
                          variant="filled"
                          color={statusColors[d.Status.toLowerCase()]}
                        >
                          {d.Status}
                        </Chip>{" "}
                      </Td>
                      {/* <Td>{d.status}</Td> */}

                      <Td>{d.Employees}</Td>
                      <Td>{d.Experience}</Td>
                      <Td>{d.Experience}</Td>
                      <Td>{d.DateApplied}</Td>
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
      <div className="flex flex-col gap-5 ">
        <div className="flex gap-4 items-center ">
          <p className="text-[32px] font-[400]"> Report Log</p>
        </div>
        <div className="flex">
          <div className="w-[234px]">
            <DisplayCard
              customWidth="200px"
              cardHeader="Card Header1"
              cardBody="Card Body"
            />
          </div>
          <div className="w-[234px]">
            <DisplayCard
              customWidth="200px"
              cardHeader="Card Header1"
              cardBody="Card Body"
            />
          </div>
          <div className="w-[234px]">
            <DisplayCard
              customWidth="200px"
              cardHeader="Card Header1"
              cardBody="Card Body"
            />
          </div>
          <div className="w-[234px]">
            <DisplayCard
              customWidth="200px"
              cardHeader="Card Header1"
              cardBody="Card Body"
            />
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default SupplierAdminApp;
