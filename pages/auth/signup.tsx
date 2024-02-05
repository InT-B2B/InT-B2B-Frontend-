import React from "react";

import SEO from "@/components/SEO";
import SignUpWithEmail from "@/modules/auth/component/signUpForm";
import withoutAuth from "@/helpers/withoutAuth";

function SignUp() {
    return (
        <div>
            <SEO title='SignUp - ' description='SignUp to your U2R Technologies account.' image="" url="" />
            <SignUpWithEmail />
        </div>
    );
};

export default withoutAuth(SignUp);