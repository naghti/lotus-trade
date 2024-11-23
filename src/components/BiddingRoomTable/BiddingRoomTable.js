import React, {useEffect, useState} from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './BiddingRoomTable.module.scss';
import BiddingRoomTableTHead from "./BiddingRoomTableTHead";
import BiddingRoomTableTBody from "./BiddingRoomTableTBody";
import {useDispatch, useSelector} from "react-redux";
import {CHANGE_MOVE, loadBidders} from "../../app/biddersReducer";

function BiddingRoomTable() {
    let bidders = useSelector(state => state.bidders);
    let dispatch = useDispatch();
    let [isEnd, setIsEnd] = useState(false);

    useEffect(()=>{
        dispatch(loadBidders());
    },[])

    return (
        <Table striped>
            <BiddingRoomTableTHead bidders={bidders} isEnd={()=>setIsEnd(true)}/>
            <BiddingRoomTableTBody bidders={bidders} changeMove={(id)=>dispatch({type: CHANGE_MOVE, payload: id})} isEnd={isEnd}/>
        </Table>
    );
}

export default BiddingRoomTable;