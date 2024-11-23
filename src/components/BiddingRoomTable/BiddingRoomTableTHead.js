import React from 'react';
import Counter from "../Counter/Counter";

function BiddingRoomTableTHead({bidders, isEnd}) {

    return (
        <thead className='text-center'>
            {!!bidders.length && (
                <>
                <tr>
                    <th>ХОД</th>
                {bidders.map(e => e.move).map((item,i) => (<th key={i}>{item ? <Counter isEnd={isEnd}/> : '' }</th>))}
                </tr>
                <tr>
                    <th>ПАРАМЕТРЫ И ТРЕБОВАНИЯ</th>
            {bidders.map(e => e.title).map((item,i) => (<th key={item}> Участник {i+1} <p>{item}</p> </th>))}
                </tr>
                </>)}
        </thead>
    );
}

export default BiddingRoomTableTHead;