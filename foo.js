var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// does this push??
// test

function reqListener() {
    let status = this.responseText.status;
    console.log("***** Begin requesting data from litecoinpool *******");

    let responseLTC = JSON.parse(this.responseText);

    // Pool
    let pool_hash_rate_LTC = responseLTC.pool.hash_rate;
    let active_users_LTC = responseLTC.pool.active_users;
    let total_work_LTC = responseLTC.pool.total_work;
    let pps_ratio_LTC = responseLTC.pool.pps_ratio;
    let pps_rate_LTC = responseLTC.pool.pps_rate;

    // Network
    let network_hash_rate_LTC = responseLTC.network.hash_rate;
    let network_block_number_LTC = responseLTC.network.block_number;
    let network_time_per_block_LTC = responseLTC.network.time_per_block;
    let network_difficulty_LTC = responseLTC.network.difficulty;
    let network_next_difficulty_LTC = responseLTC.network.next_difficulty;
    let network_retarget_time_LTC = responseLTC.network.retarget_time;

    // Market Values
    let ltc_btc = responseLTC.market.ltc_btc;
    let ltc_usd = responseLTC.market.ltc_usd;
    let ltc_eur = responseLTC.market.ltc_eur;
    let ltc_gbp = responseLTC.market.ltc_gbp;
    let ltc_rub = responseLTC.market.ltc_rub;
    let ltc_cny = responseLTC.market.ltc_cny;
    let btc_usd = responseLTC.market.btc_usd;

    // All Logging
    console.log('Pool - Hash Rate: ' + pool_hash_rate_LTC);
    console.log('Pool - Active Users ' + active_users_LTC);
    console.log('Pool - Total Work: ' + total_work_LTC);
    console.log('Pool - PPS Ration LTC ' + pps_ratio_LTC);
    console.log('Pool - PPS Rate LTC ' + pps_rate_LTC);

    console.log('Litecoin - Hash Rate: ' + network_hash_rate_LTC);
    console.log('Litecoin - Block Number: ' + network_block_number_LTC);
    console.log('Litecoin - Time Per Block: ' + network_time_per_block_LTC);
    console.log('Litecoin - Difficulty Rate: ' + network_difficulty_LTC);
    console.log('Litecoin - Next Difficulty Rate: ' + network_next_difficulty_LTC);
    console.log('Litecoin - Retarget Time: ' + network_retarget_time_LTC);

    console.log('Ratio - Litecoin to Bitcoin: ' + ltc_btc);
    console.log('Litecoin (USD): '+ ltc_usd);
    console.log('Litecoin (EURO): ' + ltc_eur);
    console.log('Litecoin (GBP): ' + ltc_gbp);
    console.log('Litecoin (RUB): ' + ltc_rub);
    console.log('Litecoin (CNY): ' + ltc_cny);
    console.log('Bitcoin (USD): ' + btc_usd);
    console.log("***** Request Completed ******");
}



var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://www.litecoinpool.org/api");
oReq.send();

// HTTP STATUS LOGGING
oReq.onload = function () {
    console.log('HTTP Status:', oReq.status);
};
