import {Box, Button, Container, Grid, Stack, TextField, Typography} from "@mui/material";
import Image from "next/image";
import assets from '@/assets'
import Link from "next/link";

const RegisterPage = () => {
  return (
    <Container sx={{padding: '50px'}}>
      <Stack sx={{justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{
          maxWidth: 600,
          width: '100%',
          boxShadow: 1,
          borderRadius: 1,
          p: 4
        }}>
          <Stack sx={{justifyContent: 'center', alignItems: 'center'}}>
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="Logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={900}>
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box sx={{textAlign: 'center'}}>
            <form>
              <Grid container spacing={3} my={1}>
                <Grid item md={12}>
                  <TextField size="small" fullWidth={true} id="outlined-basic" label="Name" variant="outlined" />
                </Grid>
                <Grid item md={6}>
                  <TextField size="small" fullWidth={true} id="outlined-basic" label="Email" type="email" variant="outlined" />
                </Grid>
                <Grid item md={6}>
                  <TextField size="small" fullWidth={true} id="outlined-basic" label="Password" type="password" variant="outlined" />
                </Grid>
                <Grid item md={6}>
                  <TextField size="small" fullWidth={true} id="outlined-basic" label="Contact Number" type="tel" variant="outlined" />
                </Grid>
                <Grid item md={6}>
                  <TextField size="small" fullWidth={true} id="outlined-basic" label="Address" variant="outlined" />
                </Grid>
              </Grid>
              <Button sx={{margin: '20px 0'}} fullWidth={true}>Register</Button>
              <Typography component="p" fontWeight={300}>
                  Do you already have an account? <Link href="/login">Login</Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;