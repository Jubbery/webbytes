"use client";
import React, { Fragment } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Link,
  Box,
} from "@mui/material";
import styles from "./page.module.css";
import styled from "@emotion/styled";
import { NextPage } from "next";

const WinBytesText = styled(Typography)`
  font-weight: bold;
  font-size: 50px;
  font-family: "Lucida Console", "Helvetica", "Arial", sans-serif;
  color: #3f51b5;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2); // Added shadow for better emphasis
`;

const Page: NextPage = () => {
  return (
    <Fragment>
      <Container maxWidth="xs" className={styles.container}>
        <WinBytesText variant="h2" align="center">
          winBYTES
        </WinBytesText>
        <Typography component="h3" variant="h6" align="center" gutterBottom>
          Pick your team and when they win, so do you!
        </Typography>

        <form className={styles.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="phone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={styles.button}
            style={{ marginTop: "16px" }} // Added a little margin for spacing
          >
            Sign Up
          </Button>
          <Typography
            align="center"
            justifyItems="center"
            style={{
              marginTop: "16px",
              color: "#000000",
              fontWeight: "bold",
            }}
          >
            Already have an account? <Link href="login">Login</Link>
          </Typography>
        </form>
      </Container>
      <div className={styles.backgroundContainer}></div>
    </Fragment>
  );
};

export default Page;
