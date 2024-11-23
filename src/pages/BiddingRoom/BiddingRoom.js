import styles from './BiddingRoom.module.scss';
import React from 'react';
import BiddingRoomTable from "../../components/BiddingRoomTable/BiddingRoomTable";
import RealTime from "../../components/RealTime/RealTime";

function BiddingRoom({title}) {

    return (
        <div className={styles.biddingRoom}>
            <p className={styles.header}>Ход торгов <b>{title}</b></p>
            <hr/>
            <p className={styles.infoText}>Уважаемые участиники, во время Вашего хода Вы можете изменить параметры торгов, указанныхв таблице: </p>
            <BiddingRoomTable/>
            <RealTime/>
        </div>
    );
}

export default BiddingRoom;