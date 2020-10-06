import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import "./Card.css"

const useStyles = makeStyles({
    root: {
        maxWidth: "50%",
        maxHeight: "100%",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    container: {
        display: "flex",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
    }
});

export default function SimpleCard() {
    const classes = useStyles();


    return (
        <div className={classes.container}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
        </Typography>
                    <Typography variant="h5" component="h2">
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        adjective
        </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
          <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}