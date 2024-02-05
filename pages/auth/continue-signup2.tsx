import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";

import Button from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { notify } from "@/components/ui/Toast";
import AuthLayout from "@/modules/auth/component/authLayout";
import { useAuth } from "@/context/AuthContext";
import { registerUser } from "@/http/auth";
import useAuthMutation from "@/hooks/Auth/useAuthMutation";
import withoutAuth from "@/helpers/withoutAuth";
import SEO from "@/components/SEO";


const notifyError = (message: string) => notify({
  type: 'error',
  message,
  theme: 'light'
});

function ContinueSignUpTwo() {
  const { formData, updateFormData } = useAuth();

  const schema = z.object({
    companyName: z.string().min(1, { message: 'First name is required' }),
    companyHN: z.string().min(1, { message: 'H/N is required' }),
    companyTIN: z.string().min(1, { message: 'TIN is required' }),
    companyCountry: z.string().min(1, { message: 'Country is required' }),
    companyRegion: z.string().min(1, { message: 'Region is required' }),
    companyZone: z.string().min(1, { message: 'Zone is required' }),
    companyWoreda: z.string().min(1, { message: 'Woreda is required' }),
    companyKebele: z.string().min(1, { message: 'Kebele is required' }),
    companyPhoneNumber: z.string().min(1, { message: 'Phone Number is required' }),
    companyLicense: z.string().min(1, { message: 'License is required' }),
  });


  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      companyName: '',
      companyHN: '',
      companyTIN: '',
      companyCountry: '',
      companyRegion: '',
      companyZone: '',
      companyWoreda: '',
      companyKebele: '',
      companyPhoneNumber: '',
      companyLicense: null,
    },
  });

  const router = useRouter();
  const userEmail = formData.email

  const { mutate: RegisterUser, isLoading: isUserRegistering } = useAuthMutation(registerUser, {
    onSuccess: (data) => onRegisterSuccess(data),
    onError: (error: any) => onRegisterError(error),
  });

  const onRegisterSuccess = (res: any) => {
    console.log('User registered successfully:', res);
  };

  const onRegisterError = (error: any) => {
    console.error('Error during registration:', error);
  };

  const handleCompanyInfo = (values: any) => {
    updateFormData({user_company: values});

    const formDataToSend = new FormData();
    formDataToSend.append('companyLicense', values.companyLicense[0])
    
    console.log("this the data sent", formData, "and", formDataToSend)
    RegisterUser(formData)
    //router.push(`/auth/verification?email=${userEmail}`);
  };


  return (
    <AuthLayout>
      <SEO title='SignUp - ' description='SignUp to your U2R Technologies account.' image="" url="" />
      <div className="text-center lg:text-left">
        <h1 className="mb-1 md:mb-6 font-semibold text-dark-100 font-manropeEB text-2xl md:text-4xl text-[1.5rem]">
          Sign up
        </h1>
        <p className="md:text-[22px] text-[#536066] font-manropeEB">Tell us more about your Company.</p>
      </div>
      <div className="mt-6 md:my-12">
        <form className="flex flex-col" encType="multipart/form-data" onSubmit={form.onSubmit((values) => handleCompanyInfo(values))}>
          {/* Company / Business Name */}
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="companyName" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
              Company / Business Name
            </label>
            <Input
              placeHolder="Enter Company / Business Name"
              id="companyName"
              {...form.getInputProps('companyName')}
              className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.companyName ? 'border-[red]' : 'border-slate-50'
                }`}
              type="text"
            />
            <p className="text-[red] text-xs">{form.errors.companyName && form.errors.companyName}</p>
          </div>

          {/* H/N and TIN */}
          <div className="flex gap-5">
            <div className="flex flex-col flex-1 gap-2 mb-2">
              <label htmlFor="companyHN" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
                H/N
              </label>
              <Input
                placeHolder="Enter H/N"
                id="companyHN"
                {...form.getInputProps('companyHN')}
                className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.companyHN ? 'border-[red]' : 'border-slate-50'
                  }`}
                type="text"
              />
              <p className="text-[red] text-xs">{form.errors.companyHN && form.errors.companyHN}</p>
            </div>
            <div className="flex flex-col flex-1 gap-2 mb-2">
              <label htmlFor="companyTIN" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
                TIN
              </label>
              <Input
                placeHolder="Enter TIN"
                id="companyTIN"
                {...form.getInputProps('companyTIN')}
                className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.companyTIN ? 'border-[red]' : 'border-slate-50'
                  }`}
                type="text"
              />
              <p className="text-[red] text-xs">{form.errors.companyTIN && form.errors.companyTIN}</p>
            </div>
          </div>

          {/* Country */}
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="companyCountry" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
              Country
            </label>
            <Input
              placeHolder="Enter Country"
              id="companyCountry"
              {...form.getInputProps('companyCountry')}
              className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.companyCountry ? 'border-[red]' : 'border-slate-50'
                }`}
              type="text"
            />
            <p className="text-[red] text-xs">{form.errors.companyCountry && form.errors.companyCountry}</p>
          </div>

          {/* Region and Zone */}
          <div className="flex gap-5">
            <div className="flex flex-col flex-1 gap-2 mb-2">
              <label htmlFor="companyRegion" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
                Region
              </label>
              <Input
                placeHolder="Enter Region"
                id="companyRegion"
                {...form.getInputProps('companyRegion')}
                className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.companyRegion ? 'border-[red]' : 'border-slate-50'
                  }`}
                type="text"
              />
              <p className="text-[red] text-xs">{form.errors.companyRegion && form.errors.companyRegion}</p>
            </div>
            <div className="flex flex-col flex-1 gap-2 mb-2">
              <label htmlFor="companyZone" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
                Zone
              </label>
              <Input
                placeHolder="Enter Zone"
                id="companyZone"
                {...form.getInputProps('companyZone')}
                className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.companyZone ? 'border-[red]' : 'border-slate-50'
                  }`}
                type="text"
              />
              <p className="text-[red] text-xs">{form.errors.companyZone && form.errors.companyZone}</p>
            </div>
          </div>

          {/* Woreda and Kebele */}
          <div className="flex gap-5">
            <div className="flex flex-col flex-1 gap-2 mb-2">
              <label htmlFor="companyWoreda" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
                Woreda
              </label>
              <Input
                placeHolder="Enter Woreda"
                id="companyWoreda"
                {...form.getInputProps('companyWoreda')}
                className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.companyWoreda ? 'border-[red]' : 'border-slate-50'
                  }`}
                type="text"
              />
              <p className="text-[red] text-xs">{form.errors.companyWoreda && form.errors.companyWoreda}</p>
            </div>
            <div className="flex flex-col flex-1 gap-2 mb-2">
              <label htmlFor="companyKebele" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
                Kebele
              </label>
              <Input
                placeHolder="Enter Kebele"
                id="companyKebele"
                {...form.getInputProps('companyKebele')}
                className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.companyKebele ? 'border-[red]' : 'border-slate-50'
                  }`}
                type="text"
              />
              <p className="text-[red] text-xs">{form.errors.companyKebele && form.errors.companyKebele}</p>
            </div>
          </div>

          {/* Business Phone Number */}
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="companyPhoneNumber" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
              Business Phone Number
            </label>
            <Input
              placeHolder="Enter Phone Number"
              id="companyPhoneNumber"
              {...form.getInputProps('companyPhoneNumber')}
              className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.companyPhoneNumber ? 'border-[red]' : 'border-slate-50'
                }`}
              type="text"
            />
            <p className="text-[red] text-xs">{form.errors.companyPhoneNumber && form.errors.companyPhoneNumber}</p>
          </div>

          {/* Renewed Business License */}
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="companyLicense" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
              Renewed Business License
            </label>
            <Input
              placeHolder=""
              id="companyLicense"
              {...form.getInputProps('companyLicense')}
              className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.companyLicense ? 'border-[red]' : 'border-slate-50'
                }`}
              type="file"
            />
            <p className="text-[red] text-xs">{form.errors.companyLicense && form.errors.companyLicense}</p>
          </div>
          <Button
            isLoading={isUserRegistering}
            intent={'primary'}
            size={'sm'}
            className={`w-full h-[44px] md:h-[60px] rounded-lg mt-3 `}
            type="submit"
          >
            Register
          </Button>
        </form>
        <div className="mt-6">
          <p className="text-center text-custom-color30 text-[0.875rem] md:font-semibold font-[400] font-manropeL">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-[#64D1FF]">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default withoutAuth(ContinueSignUpTwo);