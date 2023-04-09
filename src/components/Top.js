import React, { useState, useEffect } from 'react';

function Top() {
    const [cryptoArr, setCryptoArr] = useState([]);
    fetch('https://api.coinlore.net/api/tickers/')
    .then(res => res.json())
    .then((data)=>{
        setCryptoArr(data.data);
    })

    return (
        <div className='top-container'>
            <h1>Top 10 Global Crypto Coins</h1>
            <div className='display-container'>

               {
                cryptoArr.slice(0, 10).map((ele,index)=>(
                    <div className='coin-container' key={index}>
                    <p className='rank-para'>Rank #{ele.rank}</p>
                    <h3 className='coin-symbol'>{`${ele.name} (${ele.symbol})`}</h3>
                    <p className='price-para'>Price: {ele.price_usd}</p>
                </div>
                ))
               }

            </div>
        </div>
    )
}

export default Top
