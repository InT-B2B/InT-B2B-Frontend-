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
import SEO from "@/components/SEO";

const notifyError = (message: string) => notify({
  type: 'error',
  message,
  theme: 'light'
});

function ContinueSignUpOne() {
  const { formData, updateFormData } = useAuth();

  const schema = z.object({
    managerFirstName: z.string().min(1, { message: 'First name is required' }),
    managerMiddleName: z.string().min(1, { message: 'Middle name is required' }),
    managerLastName: z.string().min(1, { message: 'Last name is required' }),
    managerCountry: z.string().min(1, { message: 'Country is required' }),
    managerRegion: z.string().min(1, { message: 'Region is required' }),
    managerZone: z.string().min(1, { message: 'Zone is required' }),
    managerWoreda: z.string().min(1, { message: 'Woreda is required' }),
    managerKebele: z.string().min(1, { message: 'Kebele is required' }),
    managerPhoneNumber: z.string().min(1, { message: 'Phone Number is required' }),
    //managerRenewedIDFront: z.string().min(1, { message: 'ID (Front Side) is required' }),
    //managerRenewedIDBack: z.string().min(1, { message: 'ID (Back Side) is required' }),
  });


  const form = useForm({
    validate: zodResolver(schema),
    initialValues: {
      managerFirstName: '',
      managerMiddleName: '',
      managerLastName: '',
      managerCountry: '',
      managerRegion: '',
      managerZone: '',
      managerWoreda: '',
      managerKebele: '',
      managerPhoneNumber: '',
      managerRenewedIDFront: [],
      managerRenewedIDBack: [],
    },
  });

  const router = useRouter();
  const userEmail = formData.email

  const handleUserInfo = (values: any) => {
    const formDataToSend = new FormData();

    console.log(values, formDataToSend)
    updateFormData({ user_profile: values });

    formDataToSend.append('managerRenewedIDFront', values.managerRenewedIDFront)
    formDataToSend.append('managerRenewedIDBack', values.managerRenewedIDBack)

    router.push(`/auth/continue-signup2?email=${userEmail}`);
    console.log("After File handled", formDataToSend)
  };

  return (
    <AuthLayout>
      <SEO title='SignUp - ' description='SignUp to your U2R Technologies account.' image="" url="" />
      <div className="text-center lg:text-left">
        <h1 className="mb-1 md:mb-6 font-semibold text-dark-100 font-manropeEB text-2xl md:text-4xl text-[1.5rem]">
          Sign up
        </h1>
        <p className="md:text-[22px] text-[#536066] font-manropeEB">Tell us more about yourself.</p>
      </div>
      <div className="mt-6 md:my-12">
        <form className="flex flex-col" encType="multipart/form-data" onSubmit={form.onSubmit((values) => handleUserInfo(values))}>
          {/* First name */}
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="managerFirstName" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
              First name
            </label>
            <Input
              placeHolder="Enter First Name"
              id="managerFirstName"
              {...form.getInputProps('managerFirstName')}
              className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.managerFirstName ? 'border-[red]' : 'border-slate-50'
                }`}
              type="text"
            />
            <p className="text-[red] text-xs">{form.errors.managerFirstName && form.errors.managerFirstName}</p>
          </div>

          {/* Middle Name */}
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="managerMiddleName" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
              Middle name
            </label>
            <Input
              placeHolder="Enter Middle Name"
              id="managerMiddleName"
              {...form.getInputProps('managerMiddleName')}
              className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.managerMiddleName ? 'border-[red]' : 'border-slate-50'
                }`}
              type="text"
            />
            <p className="text-[red] text-xs">{form.errors.managerMiddleName && form.errors.managerMiddleName}</p>
          </div>

          {/* last Name */}
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="managerLastName" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
              Last name
            </label>
            <Input
              placeHolder="Enter Last Name"
              id="managerLastName"
              {...form.getInputProps('managerLastName')}
              className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.managerLastName ? 'border-[red]' : 'border-slate-50'
                }`}
              type="text"
            />
            <p className="text-[red] text-xs">{form.errors.managerLastName && form.errors.managerLastName}</p>
          </div>

          {/* Country */}
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="managerCountry" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
              Country
            </label>
            <Input
              placeHolder="Enter Country"
              id="managerCountry"
              {...form.getInputProps('managerCountry')}
              className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.managerCountry ? 'border-[red]' : 'border-slate-50'
                }`}
              type="text"
            />
            <p className="text-[red] text-xs">{form.errors.managerCountry && form.errors.managerCountry}</p>
          </div>

          {/* Region and Zone */}
          <div className="flex gap-5">
            <div className="flex flex-col flex-1 gap-2 mb-2">
              <label htmlFor="managerRegion" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
                Region
              </label>
              <Input
                placeHolder="Enter Region"
                id="managerRegion"
                {...form.getInputProps('managerRegion')}
                className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.managerRegion ? 'border-[red]' : 'border-slate-50'
                  }`}
                type="text"
              />
              <p className="text-[red] text-xs">{form.errors.managerRegion && form.errors.managerRegion}</p>
            </div>
            <div className="flex flex-col flex-1 gap-2 mb-2">
              <label htmlFor="managerZone" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
                Zone
              </label>
              <Input
                placeHolder="Enter Zone"
                id="managerZone"
                {...form.getInputProps('managerZone')}
                className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.managerZone ? 'border-[red]' : 'border-slate-50'
                  }`}
                type="text"
              />
              <p className="text-[red] text-xs">{form.errors.managerZone && form.errors.managerZone}</p>
            </div>
          </div>

          {/* Woreda and Kebele */}
          <div className="flex gap-5">
            <div className="flex flex-col flex-1 gap-2 mb-2">
              <label htmlFor="managerWoreda" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
                Woreda
              </label>
              <Input
                placeHolder="Enter Woreda"
                id="managerWoreda"
                {...form.getInputProps('managerWoreda')}
                className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.managerWoreda ? 'border-[red]' : 'border-slate-50'
                  }`}
                type="text"
              />
              <p className="text-[red] text-xs">{form.errors.managerWoreda && form.errors.managerWoreda}</p>
            </div>
            <div className="flex flex-col flex-1 gap-2 mb-2">
              <label htmlFor="managerKebele" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
                Kebele
              </label>
              <Input
                placeHolder="Enter Kebele"
                id="managerKebele"
                {...form.getInputProps('managerKebele')}
                className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.managerKebele ? 'border-[red]' : 'border-slate-50'
                  }`}
                type="text"
              />
              <p className="text-[red] text-xs">{form.errors.managerKebele && form.errors.managerKebele}</p>
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="managerPhoneNumber" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
              Phone Number
            </label>
            <Input
              placeHolder="Enter Phone Number"
              id="managerPhoneNumber"
              {...form.getInputProps('managerPhoneNumber')}
              className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.managerPhoneNumber ? 'border-[red]' : 'border-slate-50'
                }`}
              type="text"
            />
            <p className="text-[red] text-xs">{form.errors.managerPhoneNumber && form.errors.managerPhoneNumber}</p>
          </div>

          {/* Dropdown Choice */}
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="userRole" className="font-manropeL leading-[27.04px] font-semibold text-gray-700">
              User Role
            </label>
            <select
              id="userRole"
              {...form.getInputProps('userRole')}
              className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] rounded-[10px] px-4 focus-within:border-[#64D1FF] ${form.errors.userRole ? 'border-[red]' : 'border-slate-50'
                }`}
            >
              <option value="" disabled>I am a...</option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
              {/* Add more options as needed */}
            </select>
            <p className="text-[red] text-xs">{form.errors.userRole && form.errors.userRole}</p>
          </div>

          {/* Renewed ID Front */}
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="managerRenewedIDFront" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
              Renewed ID - Front
            </label>
            <Input
              placeHolder="Upload ID - Front Side"
              id="managerRenewedIDFront"
              {...form.getInputProps('managerRenewedIDFront')}
              className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.managerRenewedIDFront ? 'border-[red]' : 'border-slate-50'
                }`}
              type="file"
            />
            <p className="text-[red] text-xs">{form.errors.managerRenewedIDFront && form.errors.managerRenewedIDFront}</p>
          </div>

          {/* Renewed ID Back */}
          <div className="flex flex-col gap-2 mb-2">
            <label htmlFor="managerRenewedIDBack" className=" font-manropeL leading-[27.04px] font-semibold text-gray-700">
              Renewed ID - Back
            </label>
            <Input
              placeHolder="Upload ID - Back Side"
              id="managerRenewedIDBack"
              {...form.getInputProps('managerRenewedIDBack')}
              className={`w-full text-black border h-[44px] md:h-[60px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] ${form.errors.managerRenewedIDBack ? 'border-[red]' : 'border-slate-50'
                }`}
              type="file"
            />
            <p className="text-[red] text-xs">{form.errors.managerRenewedIDBack && form.errors.managerRenewedIDBack}</p>
          </div>
          <Button
            isLoading={false}
            intent={'primary'}
            size={'sm'}
            className={`w-full h-[44px] md:h-[60px] rounded-lg mt-3 `}
            type="submit"
          >
            Continue
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

export default ContinueSignUpOne;