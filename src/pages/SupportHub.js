import Button from "../components/Button";
import LinkCard from "../components/LinkCard/LinkCard";

const SupportHub = () => {


    return (
        <div>
            <div className=" custom-px w-full flex flex-col gap-12">
                <div className="flex justify-between w-full ">
                    <div className=" w-[100%] ">
                        <p className="text-[32px] font-[400] text-[#1765DC]">Support Hub</p>
                        <div className="flex  justify-between ">
                            <div className="w-[309px]  ">
                                <p className="text-[16px] text-[#8CB5F3]">
                                    Your {" "}
                                    <span className="text-[#1765DC]"> Helpline</span>{" "}
                                    in need
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  */}
                <div className="flex justify-between w-full ">
                    <div className=" w-[70%] ">
                        <p className="text-[32px] font-[400]"> Mirats Supplier Support</p>
                        <div className="flex  justify-between ">
                            <div className="flex flex-col gap-8 w-[809px] " >
                                <div><p className="text-[16px]">
                                    Supplier can{" "}
                                    <span className="text-[#1765DC]"> File a support case</span>{" "}
                                    if encountered a bug or <span className="text-[#1765DC]"> Contact us</span>{" "} for help with the portal

                                </p></div>
                                <div className="flex gap-8">
                                    <Button variant="filled">File Support Case</Button>
                                    <Button variant="alternate">Contact Us</Button>
                                </div>


                            </div>

                        </div>
                    </div>
                    {/* <div className=" w-[30%] flex justify-end items-start">
                        <div>
                            <p className="text-[#151313] text-[24px]">TestSupplier#1 </p>
                            <p className="text-[#666666]">supplieremail@gmail.com</p>{" "}
                        </div>
                    </div> */}
                </div>

                {/*  */}
                <div className="flex justify-between flex-col gap-5  ">
                    <div className=" w-[100%] ">
                        <p className="text-[32px] font-[400]"> Mirats Supplier Support</p>
                        <div className="flex  justify-between ">
                            <div className="flex flex-col gap-8 w-[809px] " >
                                <p className="text-[16px]">
                                    Find frequently asked questions about the supplier portal.
                                </p>


                            </div>

                        </div>
                    </div>
                    <div className="flex gap-16 ">
                        <div className="w-[234px]">
                            <LinkCard
                                href="https://scalablecss.com/styled-components-global-styles/"
                                cardTitle="RFQs Support"
                                cardBody="Issues/doubts regarding RFQs can be found here"
                            />
                        </div>
                        <div className="w-[234px]">
                            <LinkCard
                                href="https://scalablecss.com/styled-components-global-styles/"
                                cardTitle="RFQs Support"
                                cardBody="Issues/doubts regarding RFQs can be found here"
                            />
                        </div>
                        <div className="w-[234px]">
                            <LinkCard
                                href="https://scalablecss.com/styled-components-global-styles/"
                                cardTitle="RFQs Support"
                                cardBody="Issues/doubts regarding RFQs can be found here"
                            />
                        </div>
                        <div className="w-[234px]">
                            <LinkCard
                                href="https://scalablecss.com/styled-components-global-styles/"
                                cardTitle="RFQs Support"
                                cardBody="Issues/doubts regarding RFQs can be found here"
                            />
                        </div>
                    </div>
                </div>
                {/*  */}

                {/*  */}

            </div>
            <div className="flex justify-between w-full bg-[#F4F4F4]">
                <div className=" w-[100%] px-20 py-12 flex flex-col gap-5">
                    <p className="text-[24px] font-[400]"> Take the next step</p>
                    <div className="flex  justify-between ">
                        <div className="flex flex-col gap-8 w-[809px] " >
                            <div><p className="text-[18px]">
                                Tell us what you're solving for. We will help you fing the best solution.

                            </p></div>
                            <div>
                                <Button variant="outlined">Contact Us</Button>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportHub;
