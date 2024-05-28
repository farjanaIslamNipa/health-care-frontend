'use client'
import {Box, Button, Container, Grid, Stack, TextField, Typography} from "@mui/material";
import Image from "next/image";
import assets from '@/assets'
import Link from "next/link";
import {useRouter} from "next/navigation";
import {SubmitHandler, useForm} from "react-hook-form";
import {loginUser} from "@/services/actions/loginUser";
import {storeUserInfo} from "@/services/auth.services";


export type TLoginUserData = {
  email: string;
  password: string
}

const LoginPage = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TLoginUserData>()

  const onSubmit: SubmitHandler<TLoginUserData> = async(values) => {
   
    try{
      const res = await loginUser(values)
      if(res?.data?.accessToken){
        storeUserInfo({accessToken: res?.data?.accessToken})
      }
      console.log(res, 'res')
    }catch(err: any){
      console.log(err.message)
    }
  }
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2} my={1}>
                <Grid item md={6}>
                  <TextField size="small" fullWidth={true} id="outlined-basic" label="Email" type="email" variant="outlined" {...register("email")} />
                </Grid>
                <Grid item md={6}>
                  <TextField size="small" fullWidth={true} id="outlined-basic" label="Password" type="password" variant="outlined" {...register("password")} />
                </Grid>
              </Grid>
              <Typography sx={{marginTop: '10px'}} textAlign="end" component="p" fontWeight={300}>
                  Forgot Password? <Link href="/register">Click Here</Link>
              </Typography>
              <Button type="submit" sx={{margin: '10px 0'}} fullWidth={true}>Login</Button>
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