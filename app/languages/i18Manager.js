import i18n  from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';

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
            "resendText" : "Didn't receive?",
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
            "myInformations" : "My Information",
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
            "aboutUs" : "About Us",
            "sendMessage" : "Send Message",
            "reopen" : "Reopn",
            "chatClosed_1" : "You Can’t send any message because",
            "chatClosed_2" : "this ticket Is ",
            "chatClosed" : "Closed",
            "faq" : "FAQ",
            "faq_description" : "Take a look at the common frequently asked questions",
            "information" : "My Information",
            "latest_information" : "Latest Information",
            "information_description" : "all our employees clients are grouped in one place, access your info anywhere any time",
            "information_action" : "See More Insights about your info",
            "support_model_subject" : "what is the new ticket subject ?",
            "support_model_description" : "descripe your ticket",
            "set_new_password" : "Set New Password",
            "current_password" : "Current Password",
            "update_password" : "Update Password",
            "employment_history" : "My Employment History",
            "something_wrong" : "Sorry, something went wrong, try login later",
            "code_sent" : "a verification code was sent to you",
            "checking_code" : "checking the verification code",
            "please_verify" : "Please Verify",
            "phone_number" : "Your Phone Number",
            "validate_inputs" : "please validate your inputs",
            "passwords_not_identical" : "passwords are not identical",
            "all_tickets" : "All Tickets",
            "closed_tickets" : "Closed Tickets",
            "open_tickets" : "Open Tickets",
            "no_info" : "no information available",
            "created_at" : "created at",
            "client" : "client",
            "privacy_policy" : "Privacy Policy",
            "ibs_app" : "IBS Mobile App",
            "privacy_description_1" : "IBS Mobile application is a new version from IBS for smart phones. it enables you to check your payment details. correspondence with IBS customer team and to be updated with any other upcoming releases features.",
            "registration_by" : "Registration will be by:",
            "id_card" : "ID card number",
            "mobile_phone" : "Mobile phone number that is registered at IBS database.",
            "privacy_description_2" : "once you sign in, you will revieve a text message including a code for registration",
            "privacy_description_3" : "once you are signed in with the above data, this will be a confirmation that you areauthorized to access your data",
            "privacy_description_4" : "it's your responsibility to keep the registration code confidential to keep your account safe and secured. please notify us promptly for any unauthorized use to breach to your account.",
            "all_rights_reserved" : "All rights reserved to international business services",
            "user_address" : "Address",
            "password_updated" : "password updated successfully, you will be logged out now ",
            "no_data" : "sorry, no data",
            "year_filter" : "filter by year",
            "client_filter" : "filter by client",
            "tickets_filter" : "filter your tickets",
            "take_look" : "take a look",
            "check_privacy_policy" : "please make sure you have read our privacy policy",
            "provide_password" : "password can't be empty",
            "confirm_your_password" : "please confirm your password",
            "provide_id" : "please provide a valid National Id",
            "provide_phone" : "please provide a phone number",
            "phone_length_error" : "phone number must be 11 digits",
            "no_data" : "no available data",
            "wait_sms" : "please wait a minute before sending another sms",
            "send" : "Send",
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
           "recieveCode" : "إعادة إرسال رمز التفعيل؟ خلال",
           "resend" : "أرسل",
           "resendText" : "إعادة إرسال رمز التفعيل؟ خلال",
            "route" : "الرئيسية",
            "home" : "الرئيسية",
            "myPayments" : "مدفوعاتي",
            "paymentDescription" : "عرض جميع تفاصيل المدفوعات الخاصة بك",
            "aboutIBS" : "عن الشركة",
            "aboutDesctiption" : "نحن نفخر لكوننا نساهم في مجال خدمات الاستعانة بالمصادر الخارجية بكل شغف وإلتزام",
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
            "about_description_1" : "نحن نفخر لكوننا نساهم في مجال خدمات الاستعانة بالمصادر الخارجية بكل شغف وإلتزام",
            "about_description_2" : "ومن خلال التفاني و العمل الجاد، أصبحت IBS من أفضل شركات مجال الاستعانة بالمصادر الخارجية الرائدة في البلاد.",
            "about_description_3" : "تأسست IBS في عام 1984 وميزت نفسها بسرعة داخل السوق مقارنة بمقاول العمل التقليدي الموجود.",
            "about_description_4" : "على مدار 37 عامًا ، ازدهرت IBS مع قاعدة عملاء تضم حوالي 350 شركة محلية ومتعددة الجنسيات وعدد موظفين تابعين لمصادر خارجية يبلغ عددهم 45000 موظف في جميع أنحاء البلاد في مجموعة متنوعة من المجالات.",
            "aboutUs" : "عن الشركة",
            "sendMessage" : "أرسل رسالة",
            "reopen" : "إعادة فتح",
            "chatClosed_1" : "لا يمكنك إرسال أي رسائل لأن",
            "chatClosed_2" : "هذه المحادثة ",
            "chatClosed" : "مغلقة",
            "faq" : "الأسئلة الشائعة",
            "faq_description" : "ألق نظرة علي الأسئلة الشائعة بين المستخدمين",
            "information" : "معلوماتي",
            "latest_information" : "اَخر المعلومات",
            "information_description" : "كل المعلومات الخاصة بموظفينا في مكان واحد, يمكنك الاطلاع عليها بأي وقت",
            "information_action" : "اعرف أكثر عن معلوماتك",
            "support_model_subject" : "ماهو عنوان التذكرة الجديدة ؟",
            "support_model_description" : "برجاء كتابة وصف للتذكرة",
            "set_new_password" : "تحديث كلمة السر",
            "current_password" : "كلمة السر الحالية",
            "update_password" : "حدث كلمة السر",
            "employment_history" : "تاريخي الوظيفي",
            "something_wrong" : "عذرا حدث خطأ ما, يرجي محاولة تسجيل الدخول لاحقا",
            "code_sent" : "تم إرسال كود التفعيل",
            "checking_code" : "جاري التحقق من كود التفعيل",
            "please_verify" : "برجاء تفعيل",
            "phone_number" : "رقم الهاتف",
            "validate_inputs" : "رجاء التحقق من صحة البيانات",
            "passwords_not_identical" : "كلمات السر غير متطابقة",
            "all_tickets" : "كل تذاكر الدعم",
            "closed_tickets" : "تذاكر الدعم المغلقة",
            "open_tickets" : "تذاكر الدعم المتاحة",
            "no_info" : "لا يوجد معلومات متاحة",
            "created_at" : "أنشئت في",
            "client" : "العميل",
            "privacy_policy" : "سياسة الخصوصية",
            "ibs_app" : "تطبيق IBS Mobile",
            "privacy_description_1" : "تطبيق IBS Mobile هو إصدار جديد من IBS للهواتف الذكية. أنها تمكنك من التحقق من تفاصيل الدفع الخاصة بك. المراسلات مع فريق عملاء IBS وتحديثها بأي ميزات إصدارات قادمة أخرى.",
            "registration_by" : "التسجيل سيكون عن طريق:",
            "id_card" : "رقم بطاقة الهوية",
            "mobile_phone" : "رقم الهاتف المحمول المسجل في قاعدة بيانات IBS.",
            "privacy_description_2" : "بمجرد تسجيل الدخول ، ستصلك رسالة نصية تتضمن رمزًا للتسجيل",
            "privacy_description_3" : "بمجرد تسجيل الدخول بالبيانات المذكورة أعلاه ، سيكون هذا تأكيدًا على أنك مصرح لك بالوصول إلى بياناتك",
            "privacy_description_4" : "تقع على عاتقك مسؤولية الحفاظ على سرية رمز التسجيل للحفاظ على أمان حسابك. يرجى إخطارنا على الفور بأي استخدام غير مصرح به لخرق حسابك.",
            "all_rights_reserved" : "جميع الحقوق محفوظة لشركة IBS ",
            "user_address" : "العنوان",
            "password_updated" : "تم تحديث كلمة السر بنجاح, سوف يتم تسجيل خروجك الاَن",
            "no_data" : "عذرا, لا يوجد بيانات",
            "year_filter" : "اختر السنة",
            "client_filter" : "اختر الشركة",
            "tickets_filter" : "تنقية التذاكر",
            "take_look" : "ألق نظرة",
            "check_privacy_policy" : "يرجي التأكد من مراجعة سياسة الخصوصية",
            "provide_password" : "يجب إدخال كلمة السر",
            "confirm_your_password" : "يجب عليك تأكيد كلمة السر",
            "provide_id" : "يجب عليك إدخال الرقم القومي",
            "provide_phone" : "يجب عليك إدخال رقم الهاتف",
            "phone_length_error" : "رقم الهاتف يجب ان يكون 11 رقم",
            "no_data" : "لا يوجد بيانات",
            "wait_sms" : "برجاء الانتظار لدقيقة قبل إرسال رسالة أخري",
            "send" : "ارسل"
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