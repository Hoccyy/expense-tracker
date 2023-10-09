import fs from 'fs';
import csv from 'csv-parser';

type Props = {
    csvFileName?: string,
};

function CSVReader(csvFileName: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
        const CSV_Results: any[] = [];

        fs.createReadStream(csvFileName)
            .pipe(csv())
            .on('data', (data) => CSV_Results.push(data))
            .on('end', () => {
                resolve(CSV_Results);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
}

CSVReader.defaultProps = {
    csvFileName : 'Book1.csv'
};

export default CSVReader;