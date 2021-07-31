import React from 'react'
import { Container } from '@material-ui/core'
import { useStyles } from './PageContainer.style'

export const PageContainer : React.FC = ({ children }) => {
    const styles = useStyles()
    return (
        <Container maxWidth="xs" className={styles.ContainerPage}>
            {children as React.ReactChildren}
        </Container>
    )
}