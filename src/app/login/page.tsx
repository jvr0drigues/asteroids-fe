import { emailLogin, signup } from './actions'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { JSX, SVGProps } from 'react'
import Link from 'next/link'
import { Label } from '@/components/ui/label'
import { headers } from 'next/headers'

export default function LoginPage() {
  const headersList = headers();
  const currentUrl = headersList.get('referer') || '';
  const url = new URL(currentUrl);
  const message = url.searchParams.get('message');
  
  return (
    <div className="flex h-screen bg-gray-100">
          <div className="flex flex-col w-1/2 bg-black text-white p-12 space-y-6">
              <div className="flex items-center space-x-2">
                  <AsteroidIcon className="h-6 w-6 text-white" />
                  <span className="font-bold text-lg">Asteroids</span>
              </div>
              <div className="mt-20">
                  <blockquote>
                      &quot;AsteroidsApp provides real-time data on near-Earth asteroids, making it easy for researchers and space enthusiasts to stay updated on potential threats and fascinating discoveries. With its intuitive design and reliable information, tracking asteroid activity has never been more efficient or engaging.&quot;
                  </blockquote>
                  <cite className="block mt-4">Sofia Davis</cite>
              </div>
          </div>
          <div className="flex flex-col w-1/2 items-center justify-center p-12">
              <div className="flex justify-end w-full pr-12">
                  <Link className="text-gray-600 hover:text-gray-800" href="#" prefetch={false}>
                      Login
                  </Link>
              </div>
              <div className="w-full max-w-md">
                  <div className="mb-6">
                      <h2 className="text-3xl font-bold mb-2">Login</h2>
                      <div className="text-gray-600">Enter your email below to login to your account</div>
                  </div>
                  <div className="space-y-4">
                    <form id="login-form" className="grid gap-4">
                        <Label htmlFor="email">Email</Label>
                        <Input 
                            id="email"
                            name="email"
                            type="email"
                            placeholder="name@example.com"
                            required
                        />
                        <Label htmlFor="password">Password:</Label>
                        <Input 
                            minLength={6}
                            id="password" 
                            name="password" 
                            type="password" 
                            required 
                        />
                        {message && (
                            <div className="text-sm font-medium text-destructive">
                              {message}
                            </div>
                        )}
                        <Button 
                            className="bg-[#bd1e59] text-white w-full" 
                            formAction={emailLogin}>Login</Button>
                        <Button formAction={signup}>Sign up</Button>
                    </form>
                      
                      <div className="flex items-center">
                          <div className="flex-grow h-px bg-gray-300" />
                          <span className="px-4 text-gray-500">OR CONTINUE WITH</span>
                          <div className="flex-grow h-px bg-gray-300" />
                      </div>
                      <Button className="bg-white text-gray-600 border border-gray-300 w-full">
                          <ChromeIcon className="h-5 w-5 text-gray-600 mr-2" />
                          Google
                      </Button>
                  </div>
                  <div className="text-xs text-gray-500 mt-4">
                      By clicking continue, you agree to our{" "}
                      <a href="#" className="text-[#bd1e59]">
                          Terms of Service
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-[#bd1e59]">
                          Privacy Policy
                      </a>
                      .
                  </div>
              </div>
          </div>
      </div>
  )
}

function ChromeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="21.17" x2="12" y1="8" y2="8" />
        <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
        <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
      </svg>
    )
  }

  function AsteroidIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" />
        <circle cx="8" cy="10" r="2" fill="currentColor" />
        <circle cx="16" cy="13" r="1.5" fill="currentColor" />
        <circle cx="12" cy="16" r="1" fill="currentColor" />
        <path d="M10 20 L12 15 L15 18" stroke="currentColor" />
      </svg>
    );
}
