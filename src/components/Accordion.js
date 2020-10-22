import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "100%",
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightBold,
	},
}));

function SimpleAccordion() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Accordion style={{ border: "1px solid #ff5c50" }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography className={classes.heading}>
						Why Us ? What Makes us Uniques ?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Learning is a process continuing indefinitely through
						till end of life.People learn by observing and with
						experience. As one grows he or she learns most of the
						things through observing and thereby accumulates
						experience. Home tutors help in the process of learning
						timely.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion style={{ border: "1px solid #da70d6" }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography className={classes.heading}>
						Should one wait for time to possess knowledge ?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						With the development of society and of the world
						becoming globalised , one cannot wait for the time to
						develop knowledge in himself or herself. With growing
						competition and increased population the value of time
						is matching the value of diamonds.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion style={{ border: "1px solid #47adff" }}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2a-content"
					id="panel2a-header"
				>
					<Typography className={classes.heading}>
						What is to be done ?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						The best teacher to teach anyone is experience. Thus one
						should utilise the experience of others to gain
						knowledge. The best way is to interact with your
						teachers. Teachers in school cannot give one to one
						attention and cannot solve your problems personally.
						That is why we should possess a personal trainer or a
						tutor to guide our way.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}

export default SimpleAccordion;
