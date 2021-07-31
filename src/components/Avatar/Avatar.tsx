import React from 'react'
import avatar from '../../_assets/img/avatar.png'
import { useStyles } from './Avatar.styles'


export const Avatar: React.FC = () =>{
    const styles = useStyles();
    return (
        <div className={styles.ContainerPage}>
            <img src={avatar} className={styles.img} alt="Avatar"/>
        </div>
    )
}


