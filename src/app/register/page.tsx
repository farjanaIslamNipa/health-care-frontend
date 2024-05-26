'use client'
import {Box, Button, Container, Grid, Stack, TextField, Typography} from "@mui/material";
import Image from "next/image";
import assets from '@/assets'
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form"
import {modifyPayload} from "@/utils/modifyPayload";
import {registerPatient} from "@/services/actions/registerPatient";
import {toast} from "sonner";
import {useRouter} from "next/navigation";

interface IPatientData {
  name: string
  email: string
  contactNumber: string
  address: string
}

interface IPatientRegisterFormData {
  password: string;
  patient: IPatientData;
}

const RegisterPage = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IPatientRegisterFormData>()
  const onSubmit: SubmitHandler<IPatientRegisterFormData> = async(values) => {
    const data = modifyPayload(values)
    try{
      const res = await registerPatient(data)

      if(res?.data?.id){
        toast.success(res?.message)
        router.push('/login')
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
                Patient Register
              </Typography>
            </Box>
          </Stack>
          <Box sx={{textAlign: 'center'}}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={3} my={1}>
                <Grid item md={12}>
                  <TextField size="small" fullWidth={true} id="outlined-basic" label="Name" variant="outlined" {...register("patient.name")} />
                </Grid>
                <Grid item md={6}>
                  <TextField size="small" fullWidth={true} id="outlined-basic" label="Email" type="email" variant="outlined" {...register("patient.email")} />
                </Grid>
                <Grid item md={6}>
                  <TextField size="small" fullWidth={true} id="outlined-basic" label="Password" type="password" variant="outlined" {...register("password")} />
                </Grid>
                <Grid item md={6}>
                  <TextField size="small" fullWidth={true} id="outlined-basic" label="Contact Number" type="tel" variant="outlined" {...register("patient.contactNumber")} />
                </Grid>
                <Grid item md={6}>
                  <TextField size="small" fullWidth={true} id="outlined-basic" label="Address" variant="outlined" {...register("patient.address")} />
                </Grid>
              </Grid>
              <Button type="submit" sx={{margin: '20px 0'}} fullWidth={true}>Register</Button>
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