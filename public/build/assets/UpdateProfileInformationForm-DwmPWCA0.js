import{q as g,W as h,j as e,a as j}from"./app-bbf-b08z.js";import{I as i,T as m}from"./TextInput-DCn2bKwy.js";import{I as o}from"./InputLabel-DoNaaC2J.js";import{P as v}from"./PrimaryButton-BxWiEdkr.js";import{z as y}from"./transition-B4GNSpYI.js";function k({mustVerifyEmail:n,status:c,className:d=""}){const s=g().props.auth.user,{data:l,setData:t,patch:u,errors:r,processing:f,recentlySuccessful:p}=h({name:s.name,email:s.email,profile_image:null}),x=a=>{a.preventDefault(),u(route("profile.update"),{preserveScroll:!0,forceFormData:!0})};return e.jsxs("section",{className:d,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Profile Information"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Update your account's profile information and email address."})]}),e.jsxs("form",{onSubmit:x,className:"mt-6 space-y-6",encType:"multipart/form-data",children:[e.jsxs("div",{children:[e.jsx(o,{htmlFor:"profile_image",value:"Profile Image"}),s.profile_image&&e.jsx("div",{className:"mt-2 mb-4",children:e.jsx("img",{src:`/storage/${s.profile_image}`,alt:"Profile",className:"w-20 h-20 rounded-full object-cover"})}),e.jsx("input",{type:"file",id:"profile_image",name:"profile_image",className:"mt-1 block w-full text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",onChange:a=>t("profile_image",a.target.files[0]),accept:"image/*"}),e.jsx(i,{className:"mt-2",message:r.profile_image})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"name",value:"Name"}),e.jsx(m,{id:"name",className:"mt-1 block w-full",value:l.name,onChange:a=>t("name",a.target.value),required:!0,isFocused:!0,autoComplete:"name"}),e.jsx(i,{className:"mt-2",message:r.name})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"email",value:"Email"}),e.jsx(m,{id:"email",type:"email",className:"mt-1 block w-full",value:l.email,onChange:a=>t("email",a.target.value),required:!0,autoComplete:"username"}),e.jsx(i,{className:"mt-2",message:r.email})]}),n&&s.email_verified_at===null&&e.jsxs("div",{children:[e.jsxs("p",{className:"mt-2 text-sm text-gray-800",children:["Your email address is unverified.",e.jsx(j,{href:route("verification.send"),method:"post",as:"button",className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Click here to re-send the verification email."})]}),c==="verification-link-sent"&&e.jsx("div",{className:"mt-2 text-sm font-medium text-green-600",children:"A new verification link has been sent to your email address."})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(v,{disabled:f,children:"Save"}),e.jsx(y,{show:p,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{k as default};
