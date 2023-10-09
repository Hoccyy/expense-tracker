import React from 'react';
import Image from 'next/image';
import styles from '../page.module.css';
import moneyFormatter from '../formats/moneyFormat';
import moneyFormatterRounded from '../formats/moneyFormatRounded';
import QueryCashFlowStatus from '../components/QueryCashFlowStatus';

type Props = {
    MonthlyCashFlowValue: number
};

const MonthlyCashFlow = ({
    MonthlyCashFlowValue
}:Props) => {
    if (MonthlyCashFlowValue > 0){
        return (
            <div id={styles.stockElementContainer}>
                <div className={styles.centerStockList}>
                
                <table className={styles.stockItem}>

                    <tr>
                        <td className={styles.stockItemTextData}>
                            <h1>
                                {moneyFormatter(MonthlyCashFlowValue)}
                            </h1>
                        </td>
                        <td className={styles.stockItemTextData}> 
                            <p className={styles.cashFlowStatusGood}>
                                {QueryCashFlowStatus(MonthlyCashFlowValue)} 
                            </p>
                        </td>
                    </tr>
                </table>
                </div>
            </div>
        );
    } 
    if (MonthlyCashFlowValue == 0){
        return (
            <div id={styles.stockElementContainer}>
                <div className={styles.centerStockList}>
                
                <table className={styles.stockItem}>

                    <tr>
                        <td className={styles.stockItemTextData}>
                            <h1>
                                {moneyFormatter(MonthlyCashFlowValue)}
                            </h1>
                        </td>
                        <td className={styles.stockItemTextData}> 
                            <p className={styles.cashFlowStatusNeutral}>
                                {QueryCashFlowStatus(MonthlyCashFlowValue)} 
                            </p>
                        </td>
                    </tr>
                </table>
                </div>
            </div>
        );
    }
    else {
        return (
            <div id={styles.stockElementContainer}>
                <div className={styles.centerStockList}>
                
                <table className={styles.stockItem}>

                    <tr>
                        <td className={styles.stockItemTextData}>
                            <h1>
                                {moneyFormatter(MonthlyCashFlowValue)}
                            </h1>
                        </td>
                        <td className={styles.stockItemTextData}> 
                            <p className={styles.cashFlowStatusBad}>
                                {QueryCashFlowStatus(MonthlyCashFlowValue)} 
                            </p>
                        </td>
                    </tr>
                </table>
                </div>
            </div>
        );
    }
};

MonthlyCashFlow.defaultProps = {
    MonthlyCashFlowValue : -1313
};

export default MonthlyCashFlow;