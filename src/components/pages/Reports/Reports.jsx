import "./Reports.css";
import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import pdfMake from "pdfmake/build/pdfmake";
import Sidebar from "../../Sidebar";

pdfMake.vfs = pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : pdfFonts.vfs;

const Reports = () => {
    const { currentUser, loading } = useContext(AuthContext);

    const generatePDF = () => {
        const details = currentUser.details;

        const docDefinition = {
            content: [
                { text: "Report", style: "header" },
                {
                    text: [{ text: "City: ", bold: true }, details.city],
                    style: "item",
                },
                {
                    text: [
                        {
                            text: "Company Name: ",
                            bold: true,
                        },
                        details.companyName,
                    ],
                    style: "item",
                },
                {
                    text: [
                        {
                            text: "Contact Number: ",
                            bold: true,
                        },
                        details.contactNum,
                    ],
                    style: "item",
                },
                {
                    text: [{ text: "Email: ", bold: true }, details.email],
                    style: "item",
                },
                {
                    text: [
                        {
                            text: "First Name: ",
                            bold: true,
                        },
                        details.firstName,
                    ],
                    style: "item",
                },
                {
                    text: [
                        {
                            text: "Last Name: ",
                            bold: true,
                        },
                        details.lastName,
                    ],
                    style: "item",
                },
            ],
            styles: {
                header: {
                    fontSize: 28,
                    bold: true,
                    margin: [0, 0, 0, 15],
                    alignment: "center",
                },
                item: {
                    margin: [0, 0, 0, 10],
                },
            },
        };

        pdfMake.createPdf(docDefinition).open();
    };

    return (
        <div className="page">
            <Sidebar />
            <main className="reportsContainer">
                <h1>Reports</h1>
                {loading && <p>Loading...</p>}

                {!loading && !currentUser && <p>No user logged in.</p>}

                {currentUser && (
                    <div className="reportDetails">
                        <p>
                            <strong>City:</strong> {currentUser.details.city}
                        </p>
                        <p>
                            <strong>Company Name:</strong>{" "}
                            {currentUser.details.companyName}
                        </p>
                        <p>
                            <strong>Contact Number:</strong>{" "}
                            {currentUser.details.contactNum}
                        </p>
                        <p>
                            <strong>Email:</strong> {currentUser.details.email}
                        </p>
                        <p>
                            <strong>First Name:</strong>{" "}
                            {currentUser.details.firstName}
                        </p>
                        <p>
                            <strong>Last Name:</strong>{" "}
                            {currentUser.details.lastName}
                        </p>
                        <button onClick={generatePDF}>Download</button>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Reports;
