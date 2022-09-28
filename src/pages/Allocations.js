import React, { useState } from "react";
import { Link } from "react-router-dom";
import Chip from "../components/Chips/Chip";
import Dropdown from "../components/Dropdown/Dropdown";
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

const Allocations = () => {
  const surveyType = ["one", "two", "three"];
  const [selectedRows, setSelectedRows] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const statusColors = {
    unseen: "error",
    seen: "primary",
    approved: "success",
  };

  const data = [
    {
      id: 33333333,
      name: "India project",
      AccountName: "Track Opinion",
      CreatedDate: "June 15 2022",
      status: "approved",
      Amount: "$5456",
      LOI: "20",
      IR: "32",
      Feasibility: "32",
      SalesManager: "UsernameBig",
      CreatedBy: "UsernameBig",
      StudyType: "ADHOC",
      startDate: "June 05 2022",
      endDate: "June 05 2022",
    },
  ];

  return (
    <div className=" custom-px w-full flex flex-col gap-10">
      <div>Sales Orders</div>
      <div className="test1 ">
        {/* <Dropdown dropdownText="Survey Type" options={surveyType} /> */}
      </div>

      <div>
        <TableActionPopUp selectedRows={selectedRows}></TableActionPopUp>
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
                <Th>ID</Th>
                <Th>Project Name</Th>
                <Th>Account Name</Th>
                <Th>Created Date</Th>
                <Th>Status</Th>
                <Th>Amount</Th>
                <Th>LOI</Th>
                <Th>IR</Th>
                <Th>Feasibility</Th>
                <Th>Sales Manager</Th>
                <Th>Created By</Th>
                <Th>Study Type</Th>
                <Th>Start Date</Th>
                <Th>End Date</Th>
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
                      <Td>{d.AccountName} </Td>
                      <Td>{d.CreatedDate} </Td>
                      <Td>
                        <Chip
                          variant="filled"
                          color={statusColors[d.status.toLowerCase()]}
                        >
                          {d.status}
                        </Chip>{" "}
                      </Td>
                      <Td>{d.Amount}</Td>
                      <Td>{d.LOI}</Td>
                      <Td>{d.IR}</Td>
                      <Td>{d.Feasibility}</Td>
                      <Td>{d.SalesManager}</Td>
                      <Td>{d.CreatedBy}</Td>
                      <Td>{d.StudyType}</Td>
                      <Td>{d.startDate}</Td>
                      <Td>{d.endDate}</Td>
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
    </div>
  );
};

export default Allocations;
