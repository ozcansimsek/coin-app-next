import { Alert, AlertColor, Box, Button, TextField } from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface IFormInput {
  email: string;
  cryptoCurrencyName: string;
  description: string;
}

const SubmitFormPage = () => {
  const [coinRequestItems, setCoinRequestItems] = useState([]);
  const { control, handleSubmit } = useForm<IFormInput>();
  const [message, setMessage] = useState<string>("");
  const [severity, setSeverity] = useState<AlertColor>("success");

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    fetch("/api/coinRequest", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.status === 201) {
          setSeverity("success");
        } else setSeverity("error");
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadCoinRequestHandler = () => {
    fetch("/api/coinRequest")
      .then((response) => response.json())
      .then((data) => {
        setCoinRequestItems(data.coinRequest);
      });
  };

  return (
    <>
      <Head>
        <title>Submit Cryptocurrency - COINLER</title>
        <meta name="description" content="Submit new coin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box display="flex" flexDirection="column">
          {message && (
            <Alert severity={severity}>
              {severity === "error"
                ? "Please fill all fields."
                : "Form submitted successfully"}{" "}
            </Alert>
          )}
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField sx={{ my: 2 }} label="Email" {...field} />
            )}
          />
          <Controller
            name="cryptoCurrencyName"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ my: 2 }}
                label="Cryptocurrency name"
                {...field}
              />
            )}
          />
          <Controller
            name="description"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <TextField
                sx={{ my: 2 }}
                label="Description"
                multiline
                rows={3}
                {...field}
              />
            )}
          />
          <Button sx={{ mt: 4 }} type="submit">
            Submit
          </Button>
        </Box>
      </form>

      <Button onClick={loadCoinRequestHandler}>Load Requests</Button>
      <ul>
        {coinRequestItems.map((item: any) => (
          <li key={item.id}>
            Email: {item.email}, Cryptocurrency Name: {item.cryptoCurrencyName},{" "}
            Description: {item.description}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SubmitFormPage;
