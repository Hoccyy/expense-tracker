import styles from "./page.module.css";
import Link from "next/link";

import React, { useState } from "react";

import CircularProgressBar from "./components/progressBar";
import ProgressValue from "./components/progressValue";
import StockElement from "./components/stockElement";
import moneyFormatter from "./formats/moneyFormat";
import CSVReader from "./components/CSVReader";

let NetPortfolioValue: number = 0;
let monthlyDividends: number = 0;
var MonthlyIncome: number = 1200;
export let MonthlyCashFlowValue: number = 0;
export let MonthlyExpenditure: number = 0;
export let CashFlowGoal: number = 0;

// Extract method for stock deletion and addition Extraction #1
const portfolioStockItems: React.JSX.Element[] = []; //Insert the data here

export function loadPortfolioFromCsv(csvFile : any){
  // Retrieve portfolio from CSV file
  let portfolioCSV = CSVReader(csvFile)
    //Update each thing here
    .then((data) => {
      data.forEach((row, index) => {
        //console.log(`Row ${index + 1}:`, row) ;
        portfolioStockItems.push(
          <StockElement
            stockTicker={row["ticker"]}
            stockPrice={row["stock_price"]}
            dividendYield={row["dividend_percentage"]}
            shareQuantity={row["quantity_held"]}
            annualDividendPayout={row["annual_yield"]}
          />
        );
        monthlyDividends += (1 * row["annual_yield"])/12;
        MonthlyCashFlowValue += (1 * row["annual_yield"])/12;
        MonthlyExpenditure += (1 * row["monthly_expenditure"]);
        // if (data == null) { }
        NetPortfolioValue += 1 * row["stock_price"] * (1 * row["quantity_held"]);
        if (row["cashflow_goal"]) {CashFlowGoal = row["cashflow_goal"];}
      });
    });
  MonthlyCashFlowValue += MonthlyIncome;
  //let monthlyDividends : number = portfolioStockItems.reduce((accumulator, currentValue) => accumulator + currentValue.props.stockPrice, 0);
}

// CSVWriter("Book1.csv");
// Load CSV file via any method and input here for data to be filled in
loadPortfolioFromCsv('financeData.csv');

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <nav className={styles.menuContainer}>
          <ul className={styles.menuContent}>
            <li className={styles.menuContentItem}>
              <Link href="/">
                <h1 className={styles.menuCenter}>Portfolio</h1>
              </Link>
            </li>
            <li className={styles.menuContentItem}>
              <h1 className={styles.menuCenter}>Activity</h1>
            </li>
          </ul>
        </nav>

        <ul className={styles.center}>
          <div className={styles.progressTrackerContainer}>
            <div className={styles.verticalCenter}>
              <CircularProgressBar
                selectedValue={(MonthlyCashFlowValue/CashFlowGoal)*100}
                maxValue={100}
                radius={100}
                activeStrokeColor="#0f4fff"
                withGradient
              />
            </div>
            <li className={styles.menuContentItem}>
              <h1>
                <ProgressValue cashValue={MonthlyCashFlowValue - MonthlyExpenditure} />
              </h1>
            </li>
          </div>
        </ul>

        {/* Swap this out for new pages (Below) Extraction #2 */}
        <ul className={styles.centerStockList}>
          <div className={styles.portfolioContainer}>
            {/* Stocks go here */}
            <div>
              <h1 className={styles.portfolioTitle}>Stock Holdings</h1>
              <h1 className={styles.portfolioTitle}> {moneyFormatter(monthlyDividends*12)} Annually </h1>
              {/* Add all stocks here, extract later Extraction #3 */}
              {portfolioStockItems.map((portfolioStockItems, index) => (
                <div key={index}>{portfolioStockItems}</div>
              ))}
            </div>
            {/* Stocks go here. */}
          </div>

          <ul>
            <div className={styles.sideScrollContainer}>

              <div className={styles.centerSide}>
                <h1 className={styles.balanceTextHeader}>Portfolio Value</h1>
                <h1 className={styles.balanceTextData}>
                  {moneyFormatter(NetPortfolioValue)}
                </h1>
              </div>

              <div className={styles.centerSide}>
                <h1 className={styles.balanceTextHeader}>Monthly Income</h1>
                <h1 className={styles.balanceTextData}>
                  {moneyFormatter(MonthlyIncome)}
                </h1>
              </div>

              <div className={styles.centerSide}>
                <h1 className={styles.balanceTextHeader}>Monthly Expenses</h1>
                <h1 className={styles.balanceTextData}>
                  {moneyFormatter(MonthlyExpenditure)}
                </h1>
              </div>

              <div className={styles.centerSide}>
                <h1 className={styles.balanceTextHeader}>Cashflow Goal</h1>
                <h1 className={styles.balanceTextData}>
                  {moneyFormatter(CashFlowGoal)}
                </h1>
              </div>

            </div>
            <div className={styles.sideScrollContainer}>
              <img className={styles.webLogo} src='webLogo.png'/>
              <h1 className={styles.balanceTextHeader}>Company©️</h1>
            </div>
          </ul>
        </ul>
        {/* Swap this out for new pages ^^^^^ */}
      </div>
    </main>
  );
}
