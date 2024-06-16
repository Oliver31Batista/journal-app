import { StarBorder } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        minHeight: "calc(100vh - 180px)",
        backgroundColor: "primary.main",
        padding: 4,
      }}
    >
      <Grid item xs={12}>
        <StarBorder />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Select or create an entry</Typography>
      </Grid>
    </Grid>
  );
};
