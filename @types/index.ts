export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    isVerified: boolean;
    roleId: number;
    twoFactorAuth: boolean;
    two_factor_auth: boolean;
    slug: string | null;
};
// CustomUser from the back end is like 
// class CustomUser(AbstractBaseUser, PermissionsMixin, TimestampsModel):
//     email = models.EmailField(_('email_address'), unique=True)
//     is_active = models.BooleanField(_('active'), default=True)
//     is_staff = models.BooleanField(_('staff_status'), default=False)
//     is_verified = models.BooleanField(_('verified'), default=False)
//     is_approved = models.BooleanField(_('approved'), default=False)

export interface UserProfile {
    managerFirstName: string;
    managerMiddleName: string;
    managerLastName: string;
    managerCountry: string;
    managerRegion: string;
    managerZone: string;
    managerWoreda: string;
    managerKebele: string;
    managerPhoneNumber: string;
    managerRenewedIDFront: string;
    managerRenewedIDBack: string;
}

export interface UserCompany {
    companyName: string;
    companyHN: string;
    companyTIN: string;
    companyCountry: string;
    companyRegion: string;
    companyZone: string;
    companyWoreda: string;
    companyKebele: string;
    companyPhoneNumber: string;
    companyLicense: string;
}

export interface FormData {
    email: string;
    password: string;
    confirmPassword: string;
    agree: boolean;
    user_profile: UserProfile;
    user_company: UserCompany;
}

export type AuthResponse = {
    token: string;
    user: User;
};

export interface AuthContextProps {
    auth: AuthResponse | undefined;
    email: string;
    redirect: string;
    userCameFrom: string | undefined;
    userCameFromForOAuth: string | undefined;
    formData: (value: FormData | undefined) => void;
    handleAuth: (value: AuthResponse | undefined) => void;
    handleEmail: (value: string) => void;
    handleRedirect: (value: string) => void;
    handleUserCameFrom: (value: string | undefined) => void;
    handleUserCameFromForOAuth: (value: string | undefined) => void;
}