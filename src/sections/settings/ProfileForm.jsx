// import React, { useCallback, useState } from "react";
import FormProvider from "../../components/hook-form/FormProvider";
// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Alert, Button, Stack } from "@mui/material";
import { RHFTextField } from "../../components/hook-form";

const ProfileForm = () => {
  // const [file, setFile] = useState();
  const LoginSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    about: Yup.string().required("About is required"),
    avatarUrl: Yup.string().required("Avatar is required").nullable(true),
  });
  const defaultValues = {
    name: "",
    about: "",
  };
  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });
  const {
    reset,

    setError,
    handleSubmit,
    formState: { errors },
  } = methods;

  // const values = watch();
  const onSubmit = async (data) => {
    try {
      console.log(data);
      // submit data to backend
      //   dispatch(LoginUser(data));
    } catch (error) {
      console.error(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };
  // const handleDrop = useCallback(
  //   (acceptedFiles) => {
  //     const file = acceptedFiles[0];

  //     setFile(file);

  //     const newFile = Object.assign(file, {
  //       preview: URL.createObjectURL(file),
  //     });

  //     if (file) {
  //       setValue("avatar", newFile, { shouldValidate: true });
  //     }
  //   },
  //   [setValue]
  // );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} mt={2}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <RHFTextField
          name="name"
          label="Username"
          helperText={"This name is visible to your contact"}
        />
        <RHFTextField
          multiline
          rows={3}
          maxRows={5}
          name="about"
          label="About"
        />
      </Stack>
      <Stack mt={2} direction={"row"} justifyContent={"end"}>
        <Button color="primary" size="large" type="submit" variant="outlined">
          Save
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default ProfileForm;
