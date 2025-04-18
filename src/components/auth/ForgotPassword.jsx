import { Button, Stack } from '@mui/material';

const ForgotPassword = () => {
  return (
    <Stack
      minHeight={{ xs: 'auto', sm: '549px' }}
      maxWidth={{ xs: '420px', sm: '572px' }}
      justifyContent={'center'}
      alignItems={'center'}
      py={{ xs: 4, sm: 1 }}
      variant={'authStack'}
      direction={'column'}
      maxHeight={'630px'}
      useFlexGap
      spacing={2}
      px={2}
    >
      <h1>Forgot Password</h1>
      <Stack direction={'column'} spacing={2}>
        <Button>Supplier</Button>
        <Button>Client</Button>
      </Stack>
    </Stack>
  );
};

export default ForgotPassword;
