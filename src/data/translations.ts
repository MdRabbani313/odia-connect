export interface AppDictionary {
  appName: string;
  appSub: string;
  appTagline: string;
  welcomeBack: string;
  loginSub: string;
  mobileOrEmail: string;
  password: string;
  confirmPassword: string;
  forgotPassword: string;
  loginBtn: string;
  orDivider: string;
  loginWithOtp: string;
  newUser: string;
  createAccount: string;
  alreadyHaveAccount: string;
  signUpTitle: string;
  signUpSub: string;
  fullName: string;
  agreeTerms: string;
  termsLink: string;
  privacyLink: string;
  signUpBtn: string;
  signUpWithOtp: string;
  navHome: string;
  navServices: string;
  navCulture: string;
  navProfile: string;
  greeting: string;
}

export const TRANSLATIONS: Record<'en' | 'or', AppDictionary> = {
  en: {
    appName: 'Odia Connect',
    appSub: 'One App for Every Odia Citizen',
    appTagline: 'Government • Culture • Services',
    welcomeBack: 'Welcome Back',
    loginSub: 'Sign in to access government services',
    mobileOrEmail: 'Mobile Number / Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    forgotPassword: 'Forgot Password?',
    loginBtn: 'Login',
    orDivider: 'OR',
    loginWithOtp: 'Login with OTP',
    newUser: 'New user?',
    createAccount: 'Create Account',
    alreadyHaveAccount: 'Already have an account?',
    signUpTitle: 'Create Your Account',
    signUpSub: 'Join to access all Odia government services',
    fullName: 'Full Name',
    agreeTerms: 'I agree to the',
    termsLink: 'Terms & Conditions',
    privacyLink: 'Privacy Policy',
    signUpBtn: 'Sign Up',
    signUpWithOtp: 'Sign Up with OTP',
    navHome: 'Home',
    navServices: 'Services',
    navCulture: 'Culture',
    navProfile: 'Citizen ID',
    greeting: 'Namaskar'
  },
  or: {
    appName: 'ଓଡ଼ିଆ କନେକ୍ଟ',
    appSub: 'ପ୍ରତ୍ୟେକ ଓଡ଼ିଆ ନାଗରିକଙ୍କ ପାଇଁ ଏକ ଆପ୍',
    appTagline: 'ସରକାର • ସଂସ୍କୃତି • ସେବା',
    welcomeBack: 'ସ୍ଵାଗତମ୍',
    loginSub: 'ସରକାରୀ ସେବା ପାଇବା ପାଇଁ ଲଗ୍-ଇନ୍ କରନ୍ତୁ',
    mobileOrEmail: 'ମୋବାଇଲ୍ ନମ୍ବର / ଇମେଲ୍',
    password: 'ପାସୱାର୍ଡ଼',
    confirmPassword: 'ପାସୱାର୍ଡ଼ ନିଶ୍ଚିତ କରନ୍ତୁ',
    forgotPassword: 'ପାସୱାର୍ଡ଼ ଭୁଲିଗଲେ କି?',
    loginBtn: 'ଲଗ୍ ଇନ୍',
    orDivider: 'କିମ୍ବା',
    loginWithOtp: 'OTP ସହିତ ଲଗ୍ ଇନ୍',
    newUser: 'ନୂଆ ବ୍ୟବହାରକାରୀ?',
    createAccount: 'ଆକାଉଣ୍ଟ୍ ଖୋଲନ୍ତୁ',
    alreadyHaveAccount: 'ପୂର୍ବରୁ ଆକାଉଣ୍ଟ୍ ଅଛି କି?',
    signUpTitle: 'ଆପଣଙ୍କ ଆକାଉଣ୍ଟ୍ ତିଆରି କରନ୍ତୁ',
    signUpSub: 'ସମସ୍ତ ଓଡ଼ିଶା ସରକାରୀ ସେବା ପାଇବାକୁ ଯୋଡ଼ି ହୁଅନ୍ତୁ',
    fullName: 'ପୂରା ନାମ',
    agreeTerms: 'ମୁଁ ସହମତ ଅଟେ',
    termsLink: 'ନିୟମ ଓ ସର୍ତ୍ତାବଳୀ',
    privacyLink: 'ଗୋପନୀୟତା ନୀତି',
    signUpBtn: 'ସାଇନ୍ ଅପ୍',
    signUpWithOtp: 'OTP ସହିତ ସାଇନ୍ ଅପ୍',
    navHome: 'ମୂଳପୃଷ୍ଠା',
    navServices: 'ସେବାଗୁଡ଼ିକ',
    navCulture: 'ସଂସ୍କୃତି',
    navProfile: 'ନାଗରିକ ପରିଚୟ',
    greeting: 'ନମସ୍କାର'
  }
};
