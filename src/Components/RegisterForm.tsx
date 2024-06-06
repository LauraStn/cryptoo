"use client";
import { register } from "@/Service/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [promoCode, setPromoCode] = useState("");

  const [error, setError] = useState("");
  const { push } = useRouter();

  function handleSubmit() {
    setError("");
    if (confirmPassword !== password) {
      setError("Password and it's confirmation must be similar");
    }

    if (
      !firstName ||
      !lastName ||
      !pseudo ||
      !city ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError("All fields are required");
    } else {
      let registerData = {
        firstName: firstName,
        lastName: lastName,
        pseudo: pseudo,
        city: city,
        email: email,
        password: password,
        promoCode: promoCode,
      };
      try {
        register(registerData).then((res: any) => {
          if (res.status === 201) {
            if (typeof window !== "undefined") {
              window.localStorage.setItem("token", res.data.access_token);
              push("/");
            }
          }
        });
      } catch (e) {
        console.log("error", e);

        setError("Credentials taken");
      }
    }
  }

  return (
    <div className="max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
      <h1 className="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">
        Create an account
      </h1>
      <form action="#" className="w-full flex flex-col gap-4">
        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="firstName"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="lastName"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="pseudo"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Pseudo:
          </label>
          <input
            type="text"
            id="pseudo"
            name="pseudo"
            required
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={(e) => setPseudo(e.target.value)}
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="city"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="email"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="password"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="confirmPassword"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="promoCode"
            className="text-sm text-gray-700 dark:text-gray-200 mr-2"
          >
            Code Promo:
          </label>
          <input
            type="text"
            id="promoCode"
            name="promoCode"
            className="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={(e) => setPromoCode(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Register
        </button>
      </form>

      <div className="mt-4 text-center">
        <span className="text-sm text-gray-500 dark:text-gray-300">
          Already have an account?
        </span>{" "}
        <Link href="/login">
          <button className="text-blue-500 hover:text-blue-600"> Login</button>
        </Link>
      </div>
    </div>
  );
};
