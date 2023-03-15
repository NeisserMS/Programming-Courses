import { PdfMakeWrapper } from "pdfmake-wrapper";

export class PDFUtil {

    static getInstance(): PdfMakeWrapper {
        const pdf = new PdfMakeWrapper();
        pdf.pageMargins([40, 30, 40, 60]);
        pdf.pageSize('A4');
        pdf.styles({
            title: { fontSize: 12, bold: true, alignment: 'center', color: '#000000' },
            subtitle: { fontSize: 6, alignment: 'center', color: '#000000' },
            cell: { fontSize: 9, alignment: 'center', margin: 0 },
            cellbold: { fontSize: 9, alignment: 'center', margin: 0, bold: true }
        });
        return pdf;
    }

    static fillColor(_: number, __: any, columnIndex: number) { return (columnIndex % 2 == 0) ? "#BEBEBE" : '' };
    static fillColorHeader(i: number, _: any, __: number) { return (i == 0) ? "#BEBEBE" : "" };
    static noBorderBottom(i: number, node: any, _: number) { return (node.table.body.length == i) ? 0 : 1 };

}