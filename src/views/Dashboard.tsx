import { useState, useContext, useEffect } from "react";
import { Box, Button, Grid, InputAdornment, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PercentIcon from "@mui/icons-material/Percent";
import moment from "moment";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import DataContext from "../context/DataContext";
import TextField from "../Components/TextField";

type Props = {};

const schema = yup.object().shape({
  projectCost: yup
    .number()
    .nullable()
    .transform((v) => (v === "" || Number.isNaN(v) ? null : v))
    .required("Project Cost is required"),
  inflationRate: yup
    .number()
    .nullable()
    .transform((v) => (v === "" || Number.isNaN(v) ? null : v))
    .required("Inflation Rate is required"),
  constructionCostInflation: yup
    .number()
    .nullable()
    .transform((v) => (v === "" || Number.isNaN(v) ? null : v))
    .required("Construction Cost Inflation is required"),
  annualDonationAmount: yup
    .number()
    .nullable()
    .transform((v) => (v === "" || Number.isNaN(v) ? null : v))
    .required("Annual Donation Amount is required"),
  annualROI: yup
    .number()
    .nullable()
    .transform((v) => (v === "" || Number.isNaN(v) ? null : v))
    .required("Annual ROI is required"),
  loanInterestRate: yup
    .number()
    .nullable()
    .transform((v) => (v === "" || Number.isNaN(v) ? null : v))
    .required("Loan Interest Amount is required"),
  insuranceBenefitAmount: yup
    .number()
    .nullable()
    .transform((v) => (v === "" || Number.isNaN(v) ? null : v))
    .required("Insurance Benefit Amount is required"),
  insurancePremiumRate: yup
    .number()
    .nullable()
    .transform((v) => (v === "" || Number.isNaN(v) ? null : v))
    .required("Insurance Benefit Amount is required"),
  yearOfPassing: yup.date().nullable(),
  clientAge: yup
    .number()
    .nullable()
    .transform((v) => (v === "" || Number.isNaN(v) ? null : v)),
  estateDonation: yup
    .number()
    .nullable()
    .transform((v) => (v === "" || Number.isNaN(v) ? null : v)),
  premiumAmount: yup
    .number()
    .nullable()
    .transform((v) => (v === "" || Number.isNaN(v) ? null : v)),
});

function Dashboard({}: Props) {
  const { mainData, updateData } = useContext(DataContext)!;

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      projectCost: undefined,
    },
  });

  const [activated, setActivated] = useState(false);

  type SchemaType = yup.InferType<typeof schema>;

  // console.log(errors)
  const onSubmit = (data: SchemaType) => {
    setActivated(true);
    const newData = {
      ...data,
      yearOfPassing: data.yearOfPassing?.getFullYear() ?? 0,
      clientAge: data.clientAge ?? 0,
      premiumAmount: data.premiumAmount ?? 0,
      estateDonation: data.estateDonation ?? 0,
    };
    updateData(newData);
    console.log(data);
  };

  useEffect(() => {
    if (mainData.projectCost) {
      // @ts-ignore
      const processedValues: SchemaType = Object.keys(mainData).reduce(
        (a, c) => {
          // @ts-ignore
          const tmp = mainData[c] || null;
          return { ...a, [c]: tmp };
        },
        {}
      );
      reset({
        ...processedValues,
        yearOfPassing: processedValues.yearOfPassing
          ? new Date(`${processedValues.yearOfPassing}`)
          : null,
      });
      setActivated(true);
    }
  }, []);

  return (
    <Box padding={2} pb={2} minHeight='calc(100vh - 64px - 36px - 32px - 53px)' bgcolor="white" borderRadius={2} boxShadow={2}>
      <Typography variant="h5">Dashboard</Typography>
      <Grid
        component="form"
        my={1}
        onSubmit={handleSubmit(onSubmit)}
        container
        width="100%"
        spacing={1}
      >
        <Grid item mb={1} xs={12}>
          <Box bgcolor="#e0e0e0" p={1} borderRadius={1}>
            <Typography variant="h6">Variables for Scenario</Typography>
          </Box>
        </Grid>
        {/* project cost */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            label="Project Cost"
            fullWidth
            type="number"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
              readOnly: activated,
            }}
            size="small"
            {...register("projectCost")}
            error={!!errors.projectCost}
            helperText={errors.projectCost?.message}
          />
        </Grid>
        {/* inflation rate */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            label="Inflation Rate"
            fullWidth
            type="number"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PercentIcon />
                </InputAdornment>
              ),
              readOnly: activated,
            }}
            size="small"
            {...register("inflationRate")}
            error={!!errors.inflationRate}
            helperText={errors.inflationRate?.message}
          />
        </Grid>
        {/* construction cost inflation */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            label="Construction Cost Inflation"
            fullWidth
            type="number"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PercentIcon />
                </InputAdornment>
              ),
              readOnly: activated,
            }}
            size="small"
            {...register("constructionCostInflation")}
            error={!!errors.constructionCostInflation}
            helperText={errors.constructionCostInflation?.message}
          />
        </Grid>
        {/* annual donation amount */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            label="Annual Donation Amount"
            fullWidth
            type="number"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
              readOnly: activated,
            }}
            size="small"
            {...register("annualDonationAmount")}
            error={!!errors.annualDonationAmount}
            helperText={errors.annualDonationAmount?.message}
          />
        </Grid>
        {/* annual roi */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            label="Annual ROI"
            fullWidth
            type="number"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PercentIcon />
                </InputAdornment>
              ),
              readOnly: activated,
            }}
            size="small"
            {...register("annualROI")}
            error={!!errors.annualROI}
            helperText={errors.annualROI?.message}
          />
        </Grid>
        {/* loan interest rate */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            label="Loan Interest Rate"
            fullWidth
            type="number"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PercentIcon />
                </InputAdornment>
              ),
              readOnly: activated,
            }}
            size="small"
            {...register("loanInterestRate")}
            error={!!errors.loanInterestRate}
            helperText={errors.loanInterestRate?.message}
          />
        </Grid>
        {/* insurance benefit amount */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            label="Insurance Benefit Amount"
            fullWidth
            type="number"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
              readOnly: activated,
            }}
            size="small"
            {...register("insuranceBenefitAmount")}
            error={!!errors.insuranceBenefitAmount}
            helperText={errors.insuranceBenefitAmount?.message}
          />
        </Grid>

        {/* insurance premium rate */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            label="Insurance Premium Rate"
            fullWidth
            type="number"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PercentIcon />
                </InputAdornment>
              ),
              readOnly: activated,
            }}
            size="small"
            {...register("insurancePremiumRate")}
            error={!!errors.insurancePremiumRate}
            helperText={errors.insurancePremiumRate?.message}
          />
        </Grid>

        <Grid my={1} item xs={12}>
          <Box bgcolor="#e0e0e0" p={1} borderRadius={1}>
            <Typography variant="h6">Optional Scenario</Typography>
          </Box>
        </Grid>
        {/* year of passing */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Controller
            name="yearOfPassing"
            render={({ field }) => {
              const { onChange, value, ...rest } = field;
              const mValue = value ? moment(value) : null;
              return (
                <DatePicker
                  sx={{ width: "100%" }}
                  slotProps={{
                    textField: {
                      size: "small",
                      InputLabelProps: { sx: { fontSize: 14 } },
                    },
                  }}
                  label="Year of Passing"
                  views={["year"]}
                  disablePast
                  {...rest}
                  value={mValue}
                  onChange={(v) => onChange(v)}
                  readOnly={activated}
                />
              );
            }}
            control={control}
          />
        </Grid>
        {/* client age */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            label="Client Age"
            {...register("clientAge")}
            fullWidth
            type="number"
            size="small"
            InputProps={{ readOnly: activated }}
          />
        </Grid>
        {/* estate donation */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <TextField
            label="Estate Donation"
            fullWidth
            type="number"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
              readOnly: activated,
            }}
            size="small"
            {...register("estateDonation")}
            error={!!errors.estateDonation}
            helperText={errors.estateDonation?.message}
          />
        </Grid>
        {/* <Grid item xs={12} md={6} /> */}

        {/* premium amount */}
        <Grid mb={1} item xs={12} sm={6} md={4} lg={3}>
          <TextField
            label="Premium Amount"
            fullWidth
            type="number"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AttachMoneyIcon />
                </InputAdornment>
              ),
              readOnly: activated,
            }}
            size="small"
            {...register("premiumAmount")}
            error={!!errors.premiumAmount}
            helperText={errors.premiumAmount?.message}
          />
        </Grid>

        <Grid display="flex" justifyContent="end" item xs={12}>
          <Box>
            {activated ? (
              <Button
                variant="outlined"
                onClick={() => setActivated(false)}
                sx={{ marginX: 2 }}
              >
                Edit
              </Button>
            ) : null}
            <Button type="submit" disabled={activated} variant="contained">
              Submit
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
