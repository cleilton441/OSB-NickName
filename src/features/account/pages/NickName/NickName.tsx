import React from 'react'
import { useStyles } from './NickName.style'

import { ProcessDescriptionHeader } from '../../../../components/ProcessDescriptionHeader';
import { PageContainer } from '../../../../components/PageContainer';
import { ProcessPageLayout } from '../../../../components/ProcessPageLayout';
import { InputConfig } from '../../../../components/InputConfig';
import { Avatar } from '../../../../components/Avatar';
import { ButtonWithFloatingIcon } from '../../../../components/ButtonWithFloatingIcon/ButtonWithFloatingIcon';
import IconCheck from '../../../../_assets/img/IconCheck.svg'
import { ButtonFooter } from '../../../../components/ButtonFooter';


export const NickName: React.FC = () =>{
    const styles = useStyles();
    return (
        <PageContainer>
           <ProcessPageLayout 
            header={
                    <ProcessDescriptionHeader 
                    title="Editar Conta" 
                    />
                    
                    }
                    main={
                        <div className={styles.midcontent}>
                            <Avatar/>
                            <ButtonWithFloatingIcon  size="small"  icon={IconCheck} />
                            <InputConfig/>
                        </div>
                       
                    }
                    footer={
                        <ButtonFooter size="large" icon={IconCheck}/>
                    }
            />
        </PageContainer>
    )
}
