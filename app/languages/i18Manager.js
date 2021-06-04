import i18n  from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';
import {RNRestart} from 'react-native-restart';

//-------------------------------------------------------------------- Past -----------------------------------------------
//import * as config from '../config/i18n';
//import { I18nManager as RNI18nManager, NativeModules} from 'react-native';
//import languageDetector from './language-detector';
//import translationLoader from './translation-loader';
//import { Updates } from 'expo';

/*
const i18n = {

    init: () => {
        return new Promise((resolve, reject) => {
            i18next
                .use(languageDetector)
                .use(translationLoader)
                .init({
                    fallbackLng: config.fallback,
                    ns: config.namespaces,
                    defaultNS: config.defaultNamespace,
                    interpolation: {
                        escapeValue: false,
                    },
                }, (error) => {
                    if (error) { return reject(error)}
                })
        })
    },

  
    t: (key, options) => i18next.t(key, options),

    get locale() { return i18next.language; },

    get dir() {
        return i18next.dir().toUpperCase();
    },

    get isRTL() {
        return RNI18nManager.isRTL;
    },

    select(map) {
        const key = this.isRTL ? 'rtl' : 'ltr';
        return map[key];
    },

    changeLanguage : (languageKey)=>{
        i18next.locale = 'ar';
        console.log("lamguage is " + languageKey)
        console.log("i18n language is " + i18n.locale)
        console.log("i18n direction is " + i18n.dir)
        console.log("react native direction is " + RNI18nManager.isRTL)
        i18next
            .changeLanguage(languageKey)
            .then(() => {
                if(languageKey === 'ar'){
                    RNI18nManager.forceRTL(true);
                    //Updates.reloadFromCache();
                }else if(languageKey === 'en'){

                    RNI18nManager.forceRTL(false);
                    //Updates.reloadFromCache();
                }
                /*
                if(languageKey === 'ar'){
                    console.log("lamguage is " + languageKey)
                    console.log("i18n language is " + i18n.locale)
                    console.log("i18n direction is " + i18n.dir)
                    console.log("react native direction is " + RNI18nManager.isRTL)
                    if (i18n.dir !== 'RTL') {
                        i18n.dir === 'RTL';
                    }else if(RNI18nManager.isRTL === false){
                        console.log("rtl is false")
                        RNI18nManager.forceRTL(true);
                        //Updates.reloadFromCache();
                    }
                }else if(languageKey === 'en'){
                    if (i18n.dir !== 'LTR') {
                        i18n.dir === 'LTR';
                    }else if(RNI18nManager.isRTL === true){
                        RNI18nManager.forceRTL(false);
                       // Updates.reloadFromCache();
                    }
                }
                //Updates.reloadFromCache();
            });
    }
};
export const t = i18n.t;
export default i18n;
*/
//---------------------------------------------------------------------- end past -----------------------------------------------------
const resources = {
    en : {
        translation : {
            'Hello world': 'hello world hamada',
            "getStarted": "Get Started With Your",
            "ibsAccount" : "IBS Account",
            "getInTouch" : "Get In Touch",
            "getInTouchText" :  "No need to get in touch in person, ask all your inquiries through the in-app chat",
            "getNews" : "Get The Latest News",
            "getNewsText" :  "Get the latest news on your account dashboard, transfer notifications & much more!",
            "monthlyTransfers" : "Check Monthly Transfers",
            "monthlyTransfersText" :  "Keep an eye on your salary transfers through an easy transfers manager",
            "getStartedButton" : "Get Started",
            "loginWith" : "Login With",
            "loginPlaceholder" : "National ID or Passport Number",
            "passwordPlaceholder" : "Your Password",
            "newPassword" : "New Password",
            "setPassword" : "Set Password",
            "confirmPassword" : "Confirm Password",
            "cangePassword" : "Change Password",
            "phone" : "Phone Number",
            "login" : "Login",
            "noAccount" : "Don't have an account?",
            "create" : "Create",
            "forget" : "Forgot ?",
            "createNew" : "Create New",
            "createAccount" : "Create Account",
            "agree" : "i agree to the",
            "terms" : "terms & privacy policy",
            "haveAccount" : "Already have an account ?",
            "reset" : "Reset Your",
            "password" : "Password",
            "sendConfirmation" : "Send Confirmation",
            "backtoLogin" : "Back to Login",
            "enter" : "Enter Your",
            "confirmationCode" : "Confirmation Code",
            "confirm" : "Confirm",
            "recieveCode" : "Didn't Receive Code ?",
            "resend" : "Resend",
            "home" : "Home",
            "myPayments" : "My Payments",
            "paymentDescription" : "View all your payments details from this tap",
            "aboutIBS" : "About IBS",
            "aboutDesctiption" : "We are a proud and happy company that serves the outsourcing field with passion and commitment",
            "seeMore" : "See More",
            "visitUs" : "Visit Us",
            "address" : "2, Street 261, New Maadi, Cairo, Egypt",
            "directions" : "Directions",
            "contactUs" : "Contact Us",
            "payments" : "Payments",
            "myTransactions" : "My Transactions",
            "paymentDetails" : "Payment Details",
            "earnings" : "Earnings",
            "deductions" : "Deductions",
            "otherInfo" : "Other Info",
            "grossSalary" : "Gross Salary",
            "fixedTransportaion" : "Fixed Transportation Allowance",
            "total" : "Total",
            "taxes" : "Taxes",
            "socialInsurance" : "Social Insurance Employee Share",
            "invoice" : "Invoice No.",
            "hourRate" : "Hour Rate",
            "bankName" : "Bank Name",
            "accountNumber" : "Account Number",
            "support" : "Support",
            "myTickets" : "My Tickets",
            "newTicket" : "New Support Ticket",
            "problem" : "What's Your Problem ?",
            "startChat" : "Start Chat With Support",
            "myMessages" : "My Messages",
            "messagesForYou" : "Messages For You",
            "search" : "search",
            "from" : "From",
            "lastMessageOn" : "Last message on",
            "myProfile" : "My Profile",
            "myInformations" : "My Informations",
            "settings" : "Settings",
            "username" : "Username",
            "nationaiID" : "National ID or Passport Number",
            "phone" : "Phone Number",
            "email" : "Email Address",
            "address" : "2, Street 261, New Maadi, Cairo, Egypt",
            "company" : "Company",
            "nationality" : "Nationality",
            "bank" : "Bank Name",
            "hiringDate" : "Hiring Date",
            "ibsNumber" : "IBS Number",
            "jobTitle" : "Job Title",
            "gender" : "Gender",
            "insuranceNumber" : "Insurance Number",
            "changeLanguage" : "Change to Arabic",
            "signout" : "Sign out",
            "skip" : "Skip",
            "ibsaccount" : "IBS Account",
            "filter" : "Filter",
            "noContent" : "Sorry, No Content",
            "loading" : "loading...",
            "loggingOut" : "Logging out...",
            "logging" : "Signing You In..",
            "registering" : "Registering...",
            "MessagesForYou" : "Messages For You",
            "more" : "More",
            "notifications" : "Notifications",
            "closed" : "Closed",
            "hotline" : "Hotline",
            "email" : "Email",
            "website" : "Website",
            "facebook" : "Facebook",
            "medicalMail" : "Medical Mail",
            "paymentMail" : "Payment Mail",
            "customerSupport"  : "Customer Support",
            "about_description_1" : "We are a proud and happy company that serves the outsourcing field with passion and commitment.",
            "about_description_2" : "And with hard work and dedication IBS has become on of Egypt’s top leading Outsourcing firms in the country.",
            "about_description_3" : "IBS was founded in 1984 and distinguished itself quickly within the market compared to the traditional labor contractor that existed.",
            "about_description_4" : "Over a period of 37 years, IBS has flourished with a client base of around 350 local and multinational companies and an outsourced headcount of around 45,000 employees across the country in a variety of fields.",
            "aboutUs" : "About Us"
        },
    },
    ar: {
      translation: {
        'Hello world': 'مرحبا بالعالم',
            "getStarted": "أبــــدأ",
            "ibsAccount" : "حساب IBS",
            "getInTouch" : "ابق على تواصل",
            "getInTouchText" :  "لا داعي للتواصل شخصيًا ، اطرح جميع استفساراتك من خلال الدردشة داخل التطبيق",
            "getNews" : "احصل علي اّخر الأخبار",
            "getNewsText" :  "حصل على آخر الأخبار على لوحة معلومات حسابك ، وإخطارات النقل والمزيد!",
            "monthlyTransfers" : "تحقق من التحويلات الشهرية",
            "monthlyTransfersText" :  "راقب تحويلات راتبك من خلال مدير تحويلات سهل",
            "getStartedButton" : "أبــــدأ",
           "loginWith" : "سجل الدخول بـ",
           "loginPlaceholder" : "رقم بطاقة الأمن القومي أو الباسبور",
           "passwordPlaceholder" : "رقمك السري",
           "newPassword" : "كلمة سر جديدة",
           "setPassword" : "أنشيء كلمة السر",
           "confirmPassword" : "تأكيد كلمة السر",
           "cangePassword" : "تغيير كلمة السر",
           "phone" : "رقم الهاتف المحمول",
           "login" : "سجل الدخول",
           "noAccount" : "لا تملك حساب ؟",
           "create" : "أنشيء واحداً",
           "forget" : "نسيت ؟",
           "createNew" : "أنشيء",
           "createAccount" : "أنشيء الحساب",
           "agree" : "أنا أوافق علي",
           "terms" : "البنود وشروط الخصوصية",
           "haveAccount" : "لديك حساب بالفعل ؟ ",
           "reset" : "إعادة تعيين",
           "password" : "كلمة السر",
           "sendConfirmation" : "إرسال كود التأكيد",
           "backtoLogin" : "عودة لتسجيل الدخول",
           "enter" : "أدخل",
           "confirmationCode" : "كود التأكيد",
           "confirm" : "أكد",
           "recieveCode" : "لم تستلم كود التأكيد ؟",
           "resend" : "أعد الإرسال",
            "route" : "الرئيسية",
            "home" : "الرئيسية",
            "myPayments" : "مدفوعاتي",
            "paymentDescription" : "عرض جميع تفاصيل المدفوعات الخاصة بك",
            "aboutIBS" : "عن الشركة",
            "aboutDesctiption" : "نحن شركة فخورة وسعيدة تخدم مجال التعهيد بشغف والتزام.",
            "seeMore" : "اقرأ المزيد",
            "visitUs" : "زرنا",
            "address" : "شارع 261, المعادي الجديدة, القاهرة, مصر",
            "directions" : "الإتجاهات",
            "contactUs" : "تواصل معنا",
            "route" : "معاملاتي",
            "payments" : "المدفوعات",
            "myTransactions" : "معاملاتي البنكية",
            "paymentDetails" : "بيانات الدفع",
            "earnings" : "الأرباح",
            "deductions" : "الخصومات",
            "otherInfo" : "معلومات أخري",
            "grossSalary" : "الراتب الكلي",
            "fixedTransportaion" : "بدل مواصلات ثابت",
            "total" : "الكلي",
            "taxes" : "الضرائب",
            "socialInsurance" : "حصة موظف التأمين الاجتماعي",
            "invoice" : "رقم الفاتورة",
            "hourRate" : "المعدل في الساعة",
            "bankName" : "اسم البنك",
            "accountNumber" : "رقم الحساب",
            "route" : "الدعم",
            "support" : "الدعم",
            "myTickets" : "تذاكري",
            "newTicket" : "تذكرة دعم جديدة",
            "problem" : "ماهي مشكلتك ؟",
            "startChat" : "ابدأ محادثة مع الدعم",
            "myMessages" : "رسائلي",
            "messagesForYou" : "رسائل لك",
            "search" : "بــحث",
            "from" : "من",
            "lastMessageOn" : "اَخر رسالة في",
            "myProfile" : "حسابي",
            "myInformations" : "معلوماتي",
            "settings" : "الإعدادات",
            "username" : "اسم المستخدم",
            "nationaiID" : "الرقم القومي او رقم الباسبور",
            "phone" : "رقم الهاتف",
            "email" : "البريد الإلكتروني",
            "company" : "الشركة",
            "nationality" : "الجنسية",
            "bank" : "اسم البنك",
            "hiringDate" : "تاريخ التعيين",
            "ibsNumber" : "رقم Ibs",
            "jobTitle" : "المسمي الوظيفي",
            "gender" : "الجنس",
            "insuranceNumber" : "رقم التأمين",
            "changeLanguage" : "التغيير إلي الإنجليزية",
            "signout" : "تسجيل الخروج",
            "skip" : "تخطي",
            "ibsaccount" : "حسـابك",
            "filter" : "تنقية",
            "noContent" : "عذراَ لا يوجد محتوي",
            "loading" : "...جاري التحميل",
            "loggingOut" : "...جاري تسجيل الخروج",
            "logging" : "...جاري تسجيل الدخول",
            "registering" : "...جاري التسجيل",
            "MessagesForYou" : "رسـائلي",
            "more" : "المزيد",
            "notifications" : "الإشعارات",
            "closed" : "مغلق",
            "hotline" : "الخط الساخن",
            "email" : "البريد الإلكتروني",
            "website" : "الموقع",
            "facebook" : "فيس بوك",
            "medicalMail" : "البريد الطبي",
            "paymentMail" : "بريد المدفوعات",
            "customerSupport"  : "الدعم الفني",
            "about_description_1" : "نحن شركة فخورة وسعيدة تخدم مجال التعهيد بشغف والتزام.",
            "about_description_2" : "ومن خلال العمل الجاد والتفاني ، أصبحت IBS من أفضل شركات التعهيد الرائدة في مصر في البلاد.",
            "about_description_3" : "تأسست IBS في عام 1984 وميزت نفسها بسرعة داخل السوق مقارنة بمقاول العمل التقليدي الموجود.",
            "about_description_4" : "على مدار 37 عامًا ، ازدهرت IBS مع قاعدة عملاء تضم حوالي 350 شركة محلية ومتعددة الجنسيات وعدد موظفي الاستعانة بمصادر خارجية لحوالي 45000 موظف في جميع أنحاء البلاد في مجموعة متنوعة من المجالات.",
            "aboutUs" : "عن الشركة",
        },
    },
  };
  
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: I18nManager.isRTL ? 'ar' : 'en',
  
      keySeparator: false, // we do not use keys in form messages.welcome
  
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });
  
  export default i18n;