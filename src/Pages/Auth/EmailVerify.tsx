import { Logo, Mail } from "../../Assets/Index";
import { OutlineButton, SubmitButton } from "../../Components/Button/Index";
import ModalComponent from "../../Components/Display/Modal";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function EmailVerify() {
  const [username, setUsername] = useState<string>("username");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const HandleEmailVerify = () => {
    // <ModalComponent />;
    // console.log("Email Verify")
    setIsModalOpen(true);
  };
  return (
    <div className=" ">
      <div className="border max-w-2xl mx-auto text-center mt-10 md:mt-20 p-10 md:p-12 shadow-xl text-black bg-white ">
        <div className="flex justify-center ">
          <img src={Mail} alt="" />
        </div>
        <p>Verify your email address</p>
        <p className="p-1 md:py-2 md:px-[7.5rem]">
          To confirm your email address,{" "}
          <span className="font-bold text-lg text-lmsPrimary">
            please click
          </span>{" "}
          on the link in the email we sent you.
        </p>
        <p>Still can&apos;t find the email</p>
        <div className="flex justify-center">
          <SubmitButton
            onClick={HandleEmailVerify}
            className="md:w-[25%] py-2  rounded-md bg-lmsPrimary text-white"
          >
            Resend Email
          </SubmitButton>
        </div>
        <div className="mt-5">
          <p>Need more help?</p>
          <p>
            Contact us at{" "}
            <Link to="mailto:" className="text-lmsPrimary underline">
              suppprt@baselinksacademy.com
            </Link>
          </p>
        </div>
        <ModalComponent
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}

export default EmailVerify;
