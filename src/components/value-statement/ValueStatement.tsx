import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './ValueStatement.css'

interface ValueStatementProps {
    header: string
    description: string
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightRegular,
    },
}))

const ValueStatement: FC<ValueStatementProps> = ({ header, description }) => {
    const classes = useStyles()

    return (
        <div className="value-statement">
            <div className={classes.root}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>
                            {header}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{description}</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default ValueStatement
