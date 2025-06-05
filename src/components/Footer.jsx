// src/components/Footer.jsx
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "../ui/Icons";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white px-6 py-10">
      <div className="max-w-screen-xl mx-auto space-y-8">
        {/* Top Row: Logo & Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-green-700 pb-6">
          {/* Logo */}
          <div className="flex items-start gap-4">
            <img
              src="/icons/logo.svg"
              alt="NICE Logo"
              className="w-16 h-16 object-contain"
            />
            <h1 className="text-2xl md:text-3xl font-[Old_English_Text_MT_V2] leading-snug">
              Nigerian Institution <br /> of Civil Engineers
            </h1>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-[#8FE1A8]">
            <div>
              <h5 className="font-bold text-white mb-2">Member Tools</h5>
              <ul className="space-y-1">
                <li>Dashboard</li>
                <li>Profile</li>
                <li>Uploads</li>
                <li>Payment History</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-2">Support</h5>
              <ul className="space-y-1">
                <li>Contact Support</li>
                <li>FAQ</li>
                <li>Get a Mentor</li>
                <li>Complaint Desk</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-2">Resources</h5>
              <ul className="space-y-1">
                <li>Events Calendar</li>
                <li>News & Updates</li>
                <li>Documents</li>
                <li>Grants</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 text-sm">
          {/* Contact Info */}
          <div>
            <h5 className="font-bold mb-1 text-white">Contact</h5>
            <p className="text-[#8FE1A8] leading-relaxed">
              National Secretariat – 8th Floor, Labour House, Central Area, Abuja.
              <br />
              Email: info@nice.org.ng
              <br />
              Tel: +234 801 234 5678
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl mt-4 md:mt-0 text-[#8FE1A8]">
            <a href="#"><Facebook /></a>
            <a href="#"><Twitter /></a>
            <a href="#"><Instagram /></a>
            <a href="#"><Linkedin /></a>
            <a href="#"><Youtube /></a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-[#8FE1A8] border-t border-green-700 pt-4">
          &copy; {new Date().getFullYear()} Nigerian Institution of Civil Engineers. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;



// import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "../ui/Icons";

// const Footer = () => {
//   return (
//     <footer className="bg-green-900 text-white px-6 py-10">
//       <div className="container mx-auto space-y-10">
//         {/* Branding & Contact */}
//         <div className="flex flex-col lg:flex-row justify-between border-b border-green-700 pb-6 gap-8">
//           <div className="flex items-start gap-4">
//             <img
//               src="/icons/logo.svg"
//               alt="Nigerian Institution of Civil Engineers"
//               className="w-20"
//             />
//             <h1 className="text-3xl font-[Old_English_Text_MT_V2]">
//               Nigerian Institution <br />
//               of Civil Engineers
//             </h1>
//           </div>

//           <div className="text-sm text-[#8FE1A8] space-y-2 max-w-md">
//             <p>
//               <span className="text-white font-semibold">Head Office:</span><br />
//               8th Floor, Labour House, Central Business District, Abuja, Nigeria.<br />
//               +234 801 234 5678
//             </p>
//             <p>
//               <span className="text-white font-semibold">Lagos Office:</span><br />
//               Suite 2, Oshopey Plaza, 17/19 Allen Avenue, Ikeja, Lagos.<br />
//               +234 801 234 5678
//             </p>
//           </div>
//         </div>

//         {/* Portal Links */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#8FE1A8]">
//           <div>
//             <h5 className="text-white font-bold mb-3">Member Tools</h5>
//             <ul className="space-y-2">
//               <li><a href="/dashboard">My Dashboard</a></li>
//               <li><a href="/profile">Profile Settings</a></li>
//               <li><a href="/uploads">Upload Documents</a></li>
//               <li><a href="/payment-history">Payment History</a></li>
//               <li><a href="/support">Support Center</a></li>
//             </ul>
//           </div>

//           <div>
//             <h5 className="text-white font-bold mb-3">Admin Tools</h5>
//             <ul className="space-y-2">
//               <li><a href="/admin">Admin Dashboard</a></li>
//               <li><a href="/admin/approvals">Approve Members</a></li>
//               <li><a href="/admin/payments">Manage Payments</a></li>
//               <li><a href="/admin/reports">Reports & Analytics</a></li>
//             </ul>
//           </div>

//           <div>
//             <h5 className="text-white font-bold mb-3">Get Help</h5>
//             <p className="mb-3">Need assistance? Reach out to our support team for help with your account or payments.</p>
//             <a
//               href="/support"
//               className="inline-block bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded text-sm font-semibold"
//             >
//               CONTACT SUPPORT
//             </a>
//           </div>
//         </div>

//         {/* Social Media */}
//         <div className="border-t border-green-700 pt-6 flex justify-end space-x-4 text-xl">
//           <a href="#"><Facebook /></a>
//           <a href="#"><Twitter /></a>
//           <a href="#"><Instagram /></a>
//           <a href="#"><Linkedin /></a>
//           <a href="#"><Youtube /></a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






// import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "../ui/Icons";

// const Footer = () => {
//   return (
//     <footer className="bg-green-900 text-white px-6 py-10">
//       <div className="container mx-auto">
//         {/* Top Row: Logo & Newsletter */}
//         <div className="flex flex-col lg:flex-row justify-between items-start gap-6 border-b border-green-700 pb-6">
//           <div className="flex items-start  border-white">
//             <img
//               src="/icons/logo.svg" // Replace with your logo path
//               alt="Nigerian Institution of Civil Engineers"
//               className="w-20 mb-4"
//             />

//             <h1 className="text-4xl font-[Old_English_Text_MT_V2]">
//               Nigerian Institution <br />
//               of Civil Engineers
//             </h1>
//           </div>
//           <div className="w-full flex-col border-l md:flex-row grow justify-between pl-5 flex items-start lg:w-1/2">
//             <div>
//               <h4 className="font-semibold text-lg mb-1">
//                 Subscribe to our Newsletter
//               </h4>
//               <p className="text-sm mb-3">
//                 To get the latest news and updates in your mailbox
//               </p>
//             </div>
//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Enter your email address"
//                 className="p-2 rounded-l-md w-2/3 bg-white text-black"
//               />
//               <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-md text-white font-semibold">
//                 SUBSCRIBE
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Links Section */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8">
//           {/* Main Menu */}
//           <div>
//             <h5 className="font-bold mb-3">Main Menu</h5>
//             <ul className="space-y-1 text-sm text-[#8FE1A8]">
//               <li>About NICE</li>
//               <li>Membership</li>
//               <li>Career & Development</li>
//               <li>News & Events</li>
//               <li>Resources</li>
//               <li>Publications</li>
//               <li>Contact Us</li>
//               <li>
//                 <button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded">
//                   Donate Now
//                 </button>
//               </li>
//             </ul>
//           </div>

//           {/* Useful Links */}
//           <div>
//             <h5 className="font-bold mb-3">Useful Links</h5>
//             <ul className="space-y-1 text-sm text-[#8FE1A8]">
//               <li>Join NICE</li>
//               <li>Explore Trainings</li>
//               <li>Payment Portal</li>
//               <li>Events Calendar</li>
//               <li>Grants & Sponsorships</li>
//               <li>Graduate Resources</li>
//               <li>NICESA</li>
//               <li>Get a Mentor</li>
//               <li>Contact Support</li>
//             </ul>
//           </div>

//           {/* Contact Us */}
//           <div>
//             <h5 className="font-bold mb-3">Contact Us</h5>
//             <p className="text-sm mb-4 text-[#8FE1A8]">
//               <b className="text-white">Abuja National Headquarters</b>
//               <br />
//               8th Floor, Labour House, Central Business District, Abuja,
//               Nigeria.
//               <br />
//               +234 801 234 5678
//             </p>
//             <p className="text-sm text-[#8FE1A8]">
//               <b className="text-white">Lagos Liaison Office</b>
//               <br />
//               2nd Floor Suite 2 Front Wing, Oshopey Plaza, 17/19 Allen Avenue,
//               Ikeja, Lagos.
//               <br />
//               +234 801 234 5678
//             </p>
//           </div>

//           {/* Support Box */}
//           <div className="bg-white text-green-900 p-4 rounded shadow">
//             <h6 className="font-bold mb-2">Register your Complaint</h6>
//             <p className="text-sm mb-4">
//               Report any issue or complaint or make requests. Our team will get
//               back to you shortly.
//             </p>
//             <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded text-sm">
//               CONTACT SUPPORT
//             </button>
//           </div>
//         </div>

//         {/* Bottom Row: Social Media */}
//         <div className="border-t border-green-700 pt-4 flex justify-end space-x-4 text-xl">
//           <a href="#">
//             <Facebook />
//           </a>
//           <a href="#">
//             <Twitter />
//           </a>
//           <a href="#">
//             <Instagram />
//           </a>
//           <a href="#">
//             <Linkedin />
//           </a>
//           <a href="#">
//             <Youtube />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
