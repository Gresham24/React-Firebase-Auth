import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const generatePDF = (data) => {
    const documentDefinition = {
        content: [
            // for example
            { text: `Name: ${data.firstName}` },
            { text: `Email: ${data.email}` },
            // ... add more form fields
        ],
    };

    pdfMake.createPdf(documentDefinition).download("filename.pdf");
};
