import { LinearProgress, Stack } from "@mui/material";

const FakeText = ({ lines }) => {
  return (
    <Stack spacing={2}>
      {Array.from({ length: lines }).map((_, index) => (
        <LinearProgress key={index} />
      ))}
    </Stack>
  );
};

export default FakeText;
