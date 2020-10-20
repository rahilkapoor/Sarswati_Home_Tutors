import React from "react";
import "../styles/Home.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

function Home() {
    const classes = useStyles();
    return (
        <div className="home">
            <h1>Our Vision</h1>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <p>
                            We provide experienced Home tutors for all classes
                            in Indirapuram, Ghaziabad, Vaishali, Vasundhara and
                            Noida. We cover all the subjects. Best and
                            successful Home tutors providers in Delhi Ncr since
                            2009.
                        </p>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <p>
                            Online coaching classes from VIII-XII Started. In
                            the wake of covid 19, we have started an initiative
                            for imparting the best education in lowest possible
                            fees. In this regard, We have started Online Classes
                            at minimal fees. Join today, before syllabus and
                            time runs away.
                        </p>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Home;
