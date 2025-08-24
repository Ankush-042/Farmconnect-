"use client";

import { useState } from "react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { t } = useTranslation();
  const validateForm = () => {
    const newErrors: any = {};
    if (!email) newErrors.email = t("login.errors.email_required");
    if (!password) newErrors.password = t("login.errors.password_required");
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsLoading(true);
    // Here you would typically handle the login logic,
    // e.g., making an API call to authenticate the user.
    console.log(t("login.logging_in_with"), { email, password });
    // Simulate a network request
    setTimeout(() => {
      setIsLoading(false); // Redirect to dashboard or handle successful login
      // Redirect to dashboard or handle successful login
      console.log("Login successful (simulated)");
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">{t("login.title")}</h1>
          <p className="text-gray-500 dark:text-gray-400">
            {t("login.subtitle")}
          </p>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="space-y-2">
              <Label htmlFor="email">{t("login.email_label")}</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>


            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password as string}
                </p>
              )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                </>
              ) : null}
              {isLoading ? t("login.logging_in_button") : t("login.button")}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">{t("login.no_account")}{" "}
            <Link href="/sign-up" className="underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
