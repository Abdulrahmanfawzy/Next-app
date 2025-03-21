"use client"
import { useState } from "react";
import FacebookLogin, { SuccessResponse } from "@greatsumini/react-facebook-login";

const FacebookLoginButton = () => {
    const [message, setMessage] = useState<{ text: string, severity: "error" | "success" }>();

    const onSuccessHandler = async (response: SuccessResponse) => {
        // console.log(response);
        // console.log(response.accessToken.email || "");
        // window.localStorage.setItem("facebookEmail" , response.email || "");
        
        const apiResponse = await fetch("/api/facebook-login", {
            method: "POST",
            body: JSON.stringify({ userId: response.userID, accessToken: response.accessToken })
        });
        const data = await apiResponse.json();
        if (data.success) setMessage({ text: "Login Successful.", severity: "success" })
            console.log(data);
            console.log(data.picture.data.url);
            window.localStorage.setItem("facebookEmail" , data.email);
            window.localStorage.setItem("image" , data.picture.data.url);
    }

    return (
        <div className="text-center h-100 bg-white border-2 border-gray-200 flex justify-center items-center">
            <FacebookLogin
                appId="1183864926673449"
                onSuccess={onSuccessHandler}
                onFail={(error) => {
                    setMessage({ text: "Error occured", severity: "error" });
                }}
                render={({ onClick }) => (
                    <div>
                        <h2 className="text-black mb-5 text-3xl">Login With Facebook Account</h2>
                        <button className="btn btn-success cursor-pointer py-3 px-3 rounded" style={{"background":"blue"}} onClick={onClick}>
                            Login to Facebook
                        </button>
                    </div>
                )}
            />
            {message &&
                <div className={`${message.severity === "error" ? "text-red-600" : "text-green-600"}`}>
                    {message.text}
                </div>
            }
        </div>
    );
};

export default FacebookLoginButton;