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

const Rfqs = () => {
    const surveyType = ["one", "two", "three"];
    const [selectedRows, setSelectedRows] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(4);

    const [selected, setSelected] = useState(null);

    const statusColors = {
        unseen: "error",
        seen: "warning",
        approved: "success",
    };
    const openModal = () => {
        console.log(openModal);
    };
    const data = [
        {
            id: 33333333,
            name: "India project",
            startDate: "June 05 2022",
            status: "Approved",
            studyType: "adhoc",
            surveyType: "information tech",
            sampleRequired: 30,
            user: "Ironman",
            country: "India",
        },
        {
            id: 334,
            name: "India project",
            startDate: "June 05 2022",
            status: "Unseen",
            studyType: "adhoc",
            surveyType: "information tech",
            sampleRequired: 30,
            user: "Hulk",
            country: "India",
        },
        {
            id: 335,
            name: "India project",
            startDate: "June 05 2022",
            status: "Seen",
            studyType: "adhoc",
            surveyType: "information tech",
            sampleRequired: 30,
            user: "Cap",
            country: "India",
        },
        {
            id: 336,
            name: "India project",
            startDate: "June 05 2022",
            status: "Seen",
            studyType: "adhoc",
            surveyType: "information tech",
            sampleRequired: 30,
            user: "Hero",
            country: "India",
        },
        {
            id: 337,
            name: "India project",
            startDate: "June 05 2022",
            status: "Seen",
            studyType: "adhoc",
            surveyType: "information tech",
            sampleRequired: 30,
            user: "Ultron",
            country: "India",
        },
        {
            id: 338,
            name: "India project",
            startDate: "June 05 2022",
            status: "Seen",
            studyType: "adhoc",
            surveyType: "information tech",
            sampleRequired: 30,
            user: "Mountain",
            country: "India",
        },
        {
            id: 339,
            name: "India project",
            startDate: "June 05 2022",
            status: "Seen",
            studyType: "adhoc",
            surveyType: "information tech",
            sampleRequired: 30,
            user: "Lays",
            country: "India",
        },
        {
            id: 340,
            name: "India project",
            startDate: "June 05 2022",
            status: "Seen",
            studyType: "adhoc",
            surveyType: "information tech",
            sampleRequired: 30,
            user: "Mirats",
            country: "India",
        },
    ];

    return (
        <div className=" custom-px w-full flex flex-col gap-12">
            <div className="flex justify-between w-full ">
                <div className=" w-[100%] ">
                    <p className="text-[32px] font-[400] text-[#1765DC]">RFQs</p>
                    <div className="flex  justify-between ">
                        <div className="w-[309px]  ">
                            <p className="text-[16px] text-[#8CB5F3]">
                                Your {" "}
                                <span className="text-[#1765DC]"> RFQs</span>{" "}
                                all at one place
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between w-full ">
                <div className=" w-[80%] grid grid-cols-4 gap-10">
                    <div className="w-[234px]">
                        <DisplayCard
                            customWidth="200px"
                            cardHeader="Total RFQs"
                            cardBody="344"
                        />
                    </div>
                    <div className="w-[234px]">
                        <DisplayCard
                            customWidth="200px"
                            cardHeader="Won"
                            cardBody="344"
                        />
                    </div>
                    <div className="w-[234px]">
                        <DisplayCard
                            customWidth="200px"
                            cardHeader="Live"
                            cardBody="344"
                        />
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

                </div>
            </div>

            {/*  */}
            <div className="flex justify-between w-full ">
                <div className=" w-[80%] grid grid-cols-5 gap-5  ">
                    <div className="w-[180px] " >
                        <Dropdown dropdownText="Survey Type" options={surveyType} />
                    </div>
                    <div className="w-[180px] ">
                        <Dropdown dropdownText="Study Type" options={surveyType} />
                    </div>
                    <div className="w-[180px]">
                        <Dropdown dropdownText="Country" options={surveyType} />
                    </div>
                    <div className="w-[180px]">
                        <Dropdown dropdownText="Date" options={surveyType} />
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
                <div className=" w-[20%] flex justify-end items-start">
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
                        Pass
                    </Button>
                    <Button
                        onClick={(e) => console.log("its working", e)}
                        variant="outlined"
                        customWidth="200px"
                        className="tableBtn"
                    >
                        Edit
                    </Button>
                    <Button
                        onClick={(e) => console.log("its working", e)}
                        variant="outlined"
                        customWidth="200px"
                        className="tableBtn"
                    >
                        Option
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
                                <Th>Start date</Th>
                                <Th>Status</Th>
                                <Th>Study type</Th>
                                <Th>Survey type</Th>
                                <Th>Sample required</Th>
                                <Th>User</Th>
                                <Th>Country</Th>
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
                                                    checked={
                                                        selectedRows.filter((r) => r.id === d.id)[0]
                                                    }
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
                                            <Td>{d.sampleRequired}</Td>
                                            <Td>{d.user}</Td>
                                            <Td>{d.country}</Td>
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

            {/* <div className="flex flex-col gap-5 ">
                <div className="flex gap-4 items-center ">
                    <p> Invoice</p>
                    <p className="underline text-xs">View All</p>
                </div>
                <div className="grid grid-cols-3">
                    <ReportsCard />
                    <ReportsCard />
                    <ReportsCard />
                    <ReportsCard />
                    <ReportsCard />
                    <ReportsCard />
                </div>
            </div> */}
        </div>
    );
};

export default Rfqs;
