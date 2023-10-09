import fs from 'fs';
import csv from 'csv-parser';

let fields = ['nil_buffer',
    'stock_price',
    'quantity_held',
    'dividend_percentage',
    'annual_yield',
    'ticker',
    'cashflow_goal'
];
let newData = [
    {
        'nil_buffer' : '',
        'stock_price' : '1313',
        'quantity_held' : '13',
        'dividend_percentage' : '13',
        'annual_yield' : '130',
        'ticker' : 'HOCCY',
        'cashflow_goal' : ''
    },
];

//const newData = data;

type Props = {
    csvFileName?: string,
};

function CSVWriter(CSVfilename: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
        const CSV_Results: any[] = [];

        // Read the existing CSV data
        const rows : any = [];
        fs.createReadStream(CSVfilename) 
        .pipe(csv())
        .on('data', (row) => {
            rows.push(row);
        })
        .on('end', () => {
            console.log('CU15..');
            console.log(rows);
            // Add the new data to the array
            rows.push(newData[0]);

            console.log('CU16');
            console.log(rows);

            // Write the updated data back to the CSV file
            const writeStream = fs.createWriteStream(CSVfilename);

            // Write the header row if the file is empty
            if (rows.length === 1) {
            writeStream.write(Object.keys(newData).join(',') + '\n');
            }

            for (const row of rows) {
            writeStream.write(Object.values(row).join(',') + '\n');
            }
            writeStream.end();
            console.log('New row added successfully.');
        })
    });
}

CSVWriter.defaultProps = {
        csvFileName : 'Book1.csv'
    };
    
    export default CSVWriter;