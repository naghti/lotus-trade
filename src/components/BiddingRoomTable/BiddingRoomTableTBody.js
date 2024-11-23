import React from 'react';

function BiddingRoomTableTBody({bidders, changeMove, isEnd}) {

    return (
        <tbody>
        {!!bidders.length && (
            <>
                <tr>
                    <td>Наличие комплекса мероприятий, повышающих стандарты качества изготовления</td>
                    {bidders.map(e => e.isSetEvents).map((item,i) => (<td key={i} className='text-center'>{item ? "Да": 'Нет'}</td>))}
                </tr>
                <tr>
                    <td>Срок изготовления лота, дней</td>
                    {bidders.map(e => e.prodTime).map((item,i) => (<td key={i} className='text-center'>{item}</td>))}
                </tr>
                <tr>
                    <td>Гарантийные обязательста, мес</td>
                    {bidders.map(e => e.warrantyMount).map((item,i) => (<td key={i} className='text-center'>{item}</td>))}
                </tr>
                <tr>
                    <td>Условия оплаты</td>
                    {bidders.map(e => e.paymentTerm).map((item,i) => (<td key={i} className='text-center'>{item}%</td>))}
                </tr>
                <tr>
                    <td>Стоимость изготовления лота, руб. (без НДС)</td>
                    {bidders.map(e => [e.prodCost, e.prodCostSale]).map((item,i) => (<td key={i} className='text-center'>
                        <div style={{color: "blue", fontWeight: 'bold'}}>{item[0]} руб.</div>
                        <div style={{color: "red", fontWeight: 'bold'}}>-{item[1]} руб.</div>
                        <div style={{color: "green", fontWeight: 'bold'}}>{item[0]-item[1]} руб.</div>
                    </td>))}
                </tr>
                <tr>
                    <td>Действия:</td>
                    {bidders.map(e => [e.id, e.actions]).map(item => (<td key={item[0]} className='text-center'>
                        <button onClick={()=>changeMove(item[0])} disabled={isEnd}>Ставка {item[0]}</button></td>))}
                </tr>
            </>)
        }
        </tbody>
    );
}

export default BiddingRoomTableTBody;