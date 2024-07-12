import Image from "next/image";

export default function Login() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="pt-8 px-8 pb-4 border-gray-300 border-solid border rounded w-5/12">
        <div>
          <label htmlFor="corporate_account" className="block text-sm font-normal text-gray-600">Corporate Account No.</label>
          <input id="corporate_account" className="block p-1 text-sm font-normal rounded border-gray-300 border-solid border w-full mt-1" placeholder="Corporate Account No."></input>
        </div>
        <div className="mt-5">
          <label htmlFor="user_id" className="block text-sm font-normal text-gray-600">User Id</label>
          <input id="user_id" className="block p-1 text-sm font-normal rounded border-gray-300 border-solid border w-full mt-1" placeholder="User Id"></input>
        </div>
        <div className="mt-5">
          <label htmlFor="login_password" className="block text-sm font-normal mt-2 text-gray-600">Login Password</label>

          <div className="relative">
            <input id="login_password" type="password" className="block p-1 text-sm font-normal rounded border-gray-300 border-solid border w-full mt-1 pr-6" placeholder="Login Password"></input>
            <button type="button" className="absolute top-0 end-0 p-2 rounded-e-md">
              <svg className="flex-shrink-0 size-3.5 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path className="hs-password-active:hidden" d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
                <path className="hs-password-active:hidden" d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
                <path className="hs-password-active:hidden" d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
                <line className="hs-password-active:hidden" x1="2" x2="22" y1="2" y2="22"></line>
                <path className="hidden hs-password-active:block" d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                <circle className="hidden hs-password-active:block" cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-7">
          <button className="w-full bg-yellow-300 p-1 rounded">Login</button>
        </div>
        <div className="text-center text-sm font-normal text-gray-400 mt-9">
          Without Account? <a className="text-gray-400 text-blue-400" href="auth/register">Register Now</a>
        </div>
      </div>
    </div>
  );
}
