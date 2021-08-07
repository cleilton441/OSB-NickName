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
        fontWeight: 500,
        width: 126,
        height: 16,
        fontSize: 12,
        color: textColors.gray,
    },
})