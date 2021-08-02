import { makeStyles } from '@material-ui/core'
import { textColors } from '../../_config/theme'

export const useStyle = makeStyles({
    input: {
        width: 284,
        height: 40,

    },

    InputConfig: {
        width: '100%',
        marginTop: 80,
    },

    label: {
        marginLeft: 8,
        fontWeight: 600,
        width: 124,
        height: 16,
        fontSize: 11,
        color: textColors.gray
    },
})