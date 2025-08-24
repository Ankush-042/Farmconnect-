'use client';

import { useState } from 'react'; // Keep useState for loading state
import Link from 'next/link';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { useRouter } from 'next/navigation'; // Corrected import for useRouter
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Loader2 } from "lucide-react"
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const signUpSchema = z.object({
  name: z.string().min(2, 'signup.errors.name_required'), // Use translation key
  email: z.string().email('signup.errors.invalid_email'), // Use translation key
  password: z.string().min(6, 'signup.errors.password_min_length'), // Use translation key
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'signup.errors.passwords_no_match', // Use translation key
  path: ['confirmPassword'],
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });
  const { t } = useTranslation(); // Initialize useTranslation

  const onSubmit = async (data: SignUpFormValues) => {
    setLoading(true); // Set loading to true on form submission
    console.log('Sign up submitted:', data);
    // Here you would typically call your backend API to register the user
    // On success, redirect to the login page or dashboard
    // On failure, show an error message
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network request
    setLoading(false); // Set loading to false after request
    router.push('/login'); // Redirect to login after simulated sign up
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">{t('signup.title')}</CardTitle> {/* Use translation key */}
          <CardDescription>{t('signup.description')}</CardDescription> {/* Use translation key */}
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <Label htmlFor="name">{t('signup.name_label')}</Label> {/* Use translation key */}
              <Input id="name" type="text" placeholder="John Doe" {...register('name')} />
              {errors.name && <p className="text-red-500 text-sm">{t(errors.name.message as string)}</p>} {/* Use translation key for error */}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('signup.email_label')}</Label> {/* Use translation key */}
              <Input id="email" type="email" placeholder="m@example.com" {...register('email')} />
              {errors.email && <p className="text-red-500 text-sm">{t(errors.email.message as string)}</p>} {/* Use translation key for error */}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">{t('signup.password_label')}</Label> {/* Use translation key */}
              <Input id="password" type="password" {...register('password')} />
              {errors.password && <p className="text-red-500 text-sm">{t(errors.password.message as string)}</p>} {/* Use translation key for error */}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">{t('signup.confirm_password_label')}</Label> {/* Use translation key */}
              <Input id="confirmPassword" type="password" {...register('confirmPassword')} />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{t(errors.confirmPassword.message as string)}</p>} {/* Use translation key for error */}
            </div>
            <Button type="submit" className="w-full mt-4" disabled={loading}>
              {loading ? (
                <span className="flex items-center">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t('signup.creating_account_button')} {/* Use translation key */}
                </span>
              ) : t('signup.sign_up_button')} {/* Use translation key */}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            {t('signup.existing_account')}{' '}<Link href="/login" className="underline">
              {t('signup.login_link')}
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}