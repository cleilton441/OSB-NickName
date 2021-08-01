import React,  { useState, useEffect } from 'react'
import { TextField, Typography } from '@material-ui/core'
import { useStyle } from './InputConfig.style'
import { MaskInput } from '../../_utils/MaskInput'
import './InputConfig.scss'

export const InputConfig : React.FC = () => {
    const [name, setName] = useState('')
    const [visibility, setSivibility] = useState(false)

    const style = useStyle()

    useEffect(()=>{
        setTimeout(()=> {
           setSivibility(MaskInput(name))
           console.log(visibility)
        }, 1000)
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [name])

    return (
        <div className={style.InputConfig}>
            <span>
                <Typography className={style.label}>Editar apelido da conta</Typography>
            </span>
            <TextField
            id="InputConfig"
            variant="outlined" 
            placeholder={"Seu apelido "} 
            className={style.input}
            error={visibility}
            helperText={ visibility ? "Apenas letras" : "" }
            onChange={(e) => setName(e.target.value)} 
              />
        </div>
    )
}