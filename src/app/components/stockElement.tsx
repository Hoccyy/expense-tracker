import React from 'react';
import styles from '../page.module.css'
import moneyFormatter from '../formats/moneyFormat'
import moneyFormatterRounded from '../formats/moneyFormatRounded'

type Props = {
    cashValue?: number,
    stockTicker?: string,
    stockPrice?: number,
    dividendYield?: number,
    shareQuantity?: number,
    annualDividendPayout?: number,
};

const StockElement = ({
    stockTicker = 'TICKR',
    stockPrice = 0,
    dividendYield = 0,
    shareQuantity = 0,
    annualDividendPayout = 0
}:Props) => {
    return (
        <div id={styles.stockElementContainer}>
            <div className={styles.centerStockList}>
            
            <table className={styles.stockItem}>
                <tr className={styles.stockItemHeaders}>
                    <th className={styles.stockItemHeaderText}></th>
                    <th className={styles.stockItemHeaderText}>Today&apos;s Price</th>
                    <th className={styles.stockItemHeaderText}>Dividend Yield</th>
                    <th className={styles.stockItemHeaderText}>Annual Income</th>
                    <th className={styles.stockItemHeaderText}>Quantity</th>
                </tr>
                <tr>
                    <td className={styles.stockItemHeaderText}> {stockTicker} </td>
                    <td className={styles.stockItemTextData}> {moneyFormatter(stockPrice)} </td>
                    <td className={styles.stockItemTextData}> {dividendYield}%</td>
                    <td className={styles.stockItemTextData}> {moneyFormatterRounded(annualDividendPayout)} </td>
                    <td className={styles.stockItemTextData}> {shareQuantity} </td>


                </tr>
            </table>
            </div>
        </div>
    );
};

StockElement.defaultProps = {
    stockTicker : 'TICKR',
    stockPrice : 0,
    dividendYield : 0,
    shareQuantity : 0,
    annualDividendPayout : 0
};

export default StockElement;