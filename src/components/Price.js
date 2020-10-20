import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
	"@global": {
		ul: {
			margin: 0,
			padding: 0,
			listStyle: "none",
		},
	},
	toolbar: {
		flexWrap: "wrap",
	},
	toolbarTitle: {
		flexGrow: 1,
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	heroContent: {
		padding: theme.spacing(8, 0, 6),
	},
	cardHeader: {
		backgroundColor:
			theme.palette.type === "light"
				? theme.palette.grey[200]
				: theme.palette.grey[700],
	},
	cardPricing: {
		display: "flex",
		justifyContent: "center",
		alignItems: "baseline",
		marginBottom: theme.spacing(2),
	},
}));

const tiers = [
	{
		title: "Online Classes",
		price: "2000",
		description: ["Feaure1", "Feaure2", "Feaure3", "Feaure4"],
		buttonText: "Register",
		buttonVariant: "outlined",
	},
	{
		title: "Home Tuitions",
		subheader: "Most popular",
		price: "3000",
		description: ["Feaure1", "Feaure2", "Feaure3", "Feaure4"],
		buttonText: "Register",
		buttonVariant: "contained",
	},
	{
		title: "Study at Center",
		price: "2500",
		description: ["Feaure1", "Feaure2", "Feaure3", "Feaure4"],
		buttonText: "Register",
		buttonVariant: "outlined",
	},
];

export default function Pricing() {
	const classes = useStyles();

	return (
		<React.Fragment>
			{/* Hero unit */}
			<Container
				maxWidth="sm"
				component="main"
				className={classes.heroContent}
			>
				<Typography
					component="h1"
					variant="h2"
					align="center"
					color="textPrimary"
					gutterBottom
				>
					Tuition Fee
				</Typography>
				<Typography
					variant="h5"
					align="center"
					color="textSecondary"
					component="p"
				>
					Here are the plans and the underlying pricing provided by
					our institute
				</Typography>
			</Container>
			{/* End hero unit */}
			<Container maxWidth="md" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					{tiers.map((tier) => (
						// Enterprise card is full width at sm breakpoint
						<Grid
							item
							key={tier.title}
							xs={12}
							sm={tier.title === "Enterprise" ? 12 : 6}
							md={4}
						>
							<Card>
								<CardHeader
									title={tier.title}
									subheader={tier.subheader}
									titleTypographyProps={{ align: "center" }}
									subheaderTypographyProps={{
										align: "center",
									}}
									className={classes.cardHeader}
								/>
								<CardContent>
									<div className={classes.cardPricing}>
										<Typography
											component="h2"
											variant="h3"
											color="textPrimary"
										>
											₹{tier.price}
										</Typography>
										<Typography
											variant="h6"
											color="textSecondary"
										>
											/mo
										</Typography>
									</div>
									<ul>
										{tier.description.map((line) => (
											<Typography
												component="li"
												variant="subtitle1"
												align="center"
												key={line}
											>
												{line}
											</Typography>
										))}
									</ul>
								</CardContent>
								<CardActions>
									<Button
										fullWidth
										variant={tier.buttonVariant}
										color="primary"
									>
										{tier.buttonText}
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</React.Fragment>
	);
}
