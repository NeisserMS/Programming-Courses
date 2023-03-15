import { Workbook, Worksheet } from 'exceljs';
import { DigimonModel } from 'src/app/model/digimon.modal';

export module ExcelDigimonModule {
    export class Digimon {
        static async create(data: DigimonModel[]) {

            const workbook = new Workbook();
            const title = 'DigimonesExcel';
            let fecha = new Date();

            let worksheet: Worksheet;
            worksheet = workbook.addWorksheet('Hoja 1');

            const Headers = ['NOMBRE', 'URL FOTO', 'ESTADO'];

            const columnIndexStart = 1;
            const rowIndexStart = 1;

            let currentColumnIndex = columnIndexStart;
            let currentRowIndex = rowIndexStart + 3;

            worksheet.getColumn(1).width = 30
            worksheet.getColumn(2).width = 50
            worksheet.getColumn(3).width = 30
            //worksheet.getRow(1).height = 80;


            // worksheet.mergeCells('A1:B1')
            // worksheet.getCell('A1').fill = {
            //     type: 'pattern',
            //     pattern: 'solid',
            //     fgColor: { argb: '3C3C46' }
            // };

            // const logoId = workbook.addImage({
            //     base64: LOGO,
            //     extension: 'png',

            // });
            // worksheet.addImage(logoId, 'A1');

            worksheet.getCell('B2').value = {
                richText: [
                    { font: { italic: false }, text: 'LISTA DE DIGIMONES' },
                ]
            };

            worksheet.getCell('B2').alignment = {
                horizontal: 'center',
                vertical: 'middle'
            };

            worksheet.getCell('B2').font = {
                name: 'Yu Gothic',
                color: { argb: '2838D3' },
                bold: true,
                size: 14,
            };

            worksheet.getCell('C2').value = {
                richText: [
                    { font: { italic: false }, text: `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()}` },
                ]
            };

            worksheet.getCell('C2').alignment = {
                horizontal: 'center',
                vertical: 'middle'
            };

            worksheet.getCell('C2').font = {
                name: 'Yu Gothic',
                color: { argb: '000000' },
                bold: true,
                size: 12,
            };

            worksheet.getRow(currentRowIndex).alignment = { horizontal: 'center', vertical: 'middle', wrapText: true };

            data.forEach((x) => {
                let xrow = worksheet.addRow([x.name, x.img, x.level]);
                xrow.alignment = { horizontal: 'center', vertical: 'middle' };
                xrow.font = { bold: false, size: 9, name: 'Yu Gothic', color: { argb: '414456' } };
            });

            worksheet.getRow(currentRowIndex).values = [...Headers];

            await workbook.xlsx.writeBuffer().then((data) => {
                let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                const anchor = document.createElement('a');
                const url = URL.createObjectURL(blob);
                anchor.href = url;
                anchor.download = title + '.xlsx';
                document.body.appendChild(anchor);
                anchor.click();
                document.body.removeChild(anchor);
                URL.revokeObjectURL(url);
            }).catch(err => console.log(err));
        }
    }

    export class ImportDigimon {
        static async upload() {

            let data: DigimonModel[] = [];

            let workbook = new Workbook();
            // await workbook.xlsx.load(await config.file.arrayBuffer());

            let workSheet: Worksheet = workbook.getWorksheet(1);
            let explanation = workbook.getWorksheet('Sheet 1')

            let colComment = explanation.getColumn('C')
        }
    }


}
