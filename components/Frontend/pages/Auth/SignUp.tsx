import React from "react";
import st from "../../../../styles/Auth.module.css";
import Link from "next/link";
import SignIn_btn from "../../src/Auth/SignIn_btn";
import SignUp_btn from "../../src/Auth/SignUp_btn";
import Text_inp from "../../src/Auth/Text_inp";
import Password_inp from "../../src/Auth/Password_inp";
import { select } from "../../Functions/Auth/genderSelect";

function SignUp() {
  let gender:String
  return (
    <div id="signupContainer" className={st.form_signup_Container}>
      <h1 className={st.name}>AJAX-CORE-TECHS</h1>
      <p className="text-xs text-white text-center">
        Please fill in the form below with the appropriate values
      </p>
      <Text_inp desc={"First Name"} />
      <Text_inp desc={"Last Name"} />
      <Text_inp desc={"Username "} />
      <Password_inp desc="Password" />
      <Password_inp desc="Confirm Password" />
      <p className="text-sm text-center text-white">Gender</p>
      <div className="flex justify-between text-white my-4">
        <button
          className="bg-blue-400/20 px-4 border border-blue-400/20 genderMaleAuth_btn"
          onClick={() => {
            gender = 'm'
            select("m");
          }}
          id="gender-m"
        >
          Male
        </button>
        <button
          className="bg-pink-400/20 px-4 border border-pink-400/20 genderFemaleAuth_btn"
          id="gender-f"
          onClick={()=>{
            gender = 'f'
            select('f')
          }}
        >
          Female
        </button>
      </div>
      <div className="flex my-5 p-2 justify-between termsAndAgreementContainer">
        <input type="checkbox" className="w-5" />
        <p className="text-xs text-white text-right ">
          I consent to the following terms and conditions <br />{" "}
          <Link href="#" className="underline hover:text-blue-300">
            Terms and Conditions
          </Link>
        </p>
      </div>
      <SignIn_btn desc={"Sign Up"} />
      <p className="text-xs text-center mt-4 text-white">
        If you already have an account then{" "}
      </p>
      <SignUp_btn desc={"Sign In"} />
    </div>
  );
}

export default SignUp;
