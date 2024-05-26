import {Box, Button, Container, Grid, Stack, TextField, Typography} from "@mui/material";
import Image from "next/image";
import assets from '@/assets'
import Link from "next/link";


const LoginPage = () => {
  return (
    <Container>
      <Stack sx={{justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
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
                Login PH HealthCare
              </Typography>
            </Box>
          </Stack>
          <Box sx={{textAlign: 'center'}}>
            <form>
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <TextField size="small" fullWidth={true} id="outlined-basic" label="Email" type="email" variant="outlined" />
                </Grid>
                <Grid item md={6}>
                  <TextField size="small" fullWidth={true} id="outlined-basic" label="Password" type="password" variant="outlined" />
                </Grid>
              </Grid>
              <Typography sx={{marginTop: '10px'}} textAlign="end" component="p" fontWeight={300}>
                  Forgot Password? <Link href="/register">Click Here</Link>
              </Typography>
              <Button sx={{margin: '10px 0'}} fullWidth={true}>Login</Button>
              <Typography component="p" fontWeight={300}>
                  Don&apos;t have an account? <Link href="/register">Create an account</Link>
              </Typography>
            </form>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;