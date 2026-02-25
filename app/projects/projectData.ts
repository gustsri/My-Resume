// export interface Project {
//     id: string;
//     title: string;
//     category: string;
//     description: { en: string; th: string };
//     tags: string[];
//     img: string;
//     longDescription: { en: string; th: string };
//     features: { en: string[]; th: string[] };
//     techStack: { name: string; description: { en: string; th: string } }[];
//     role: { en: string; th: string };
//     duration: { en: string; th: string };
//     status: string;
// }

// export const projects: Project[] = [
//     {
//         id: "01",
//         title: "Budget Preparation Support System",
//         category: "Full-stack Developer & System Analyst",
//         description: {
//             th: "แปลงกระบวนการจัดทำงบประมาณแบบ Manual ให้เป็นระบบเว็บ สำหรับจัดการข้อมูลรายรับ-รายจ่าย พร้อม Dashboard แบบ Real-time เพื่อการติดตามงบประมาณที่มีประสิทธิภาพ",
//             en: "Converted a manual budgeting process into a web-based system to manage income and expense records, featuring a real-time Dashboard for improved budget tracking.",
//         },
//         tags: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Odoo"],
//         img: "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?q=80&w=800&auto=format&fit=crop",
//         longDescription: {
//             th: "ระบบสนับสนุนการจัดทำงบประมาณที่แปลงกระบวนการทำงานแบบ Manual ให้เป็นระบบเว็บ เพื่อจัดการข้อมูลรายรับและรายจ่ายได้อย่างเป็นระบบ พร้อม Dashboard แบบ Real-time สำหรับติดตามสถานะงบประมาณ",
//             en: "A budget preparation support system that converted manual budgeting workflows into a web-based platform for managing income and expense data systematically, with a real-time Dashboard for tracking budget status.",
//         },
//         features: {
//             th: [
//                 "จัดการข้อมูลรายรับ-รายจ่ายผ่านระบบเว็บ",
//                 "Dashboard แบบ Real-time สำหรับติดตามงบประมาณ",
//                 "ออกแบบ Database Schema และ ERD Model เพื่อรองรับการจัดเก็บข้อมูลและรายงานทางการเงิน",
//                 "พัฒนาและ Deploy เว็บแอปพลิเคชันด้วย Next.js, Tailwind CSS, Node.js, PostgreSQL และ Odoo",
//             ],
//             en: [
//                 "Manage income and expense records via a web-based system",
//                 "Real-time Dashboard for improved budget tracking",
//                 "Designed database schemas and ERD models to ensure consistent data storage and support financial reporting",
//                 "Developed and deployed the web application using Next.js, Tailwind CSS, Node.js, PostgreSQL, and Odoo",
//             ],
//         },
//         techStack: [
//             { name: "Next.js", description: { th: "Fullstack Framework สำหรับสร้างเว็บแอปพลิเคชัน", en: "Fullstack Framework for building the web application" } },
//             { name: "Tailwind CSS", description: { th: "CSS Framework สำหรับจัดการ UI", en: "CSS Framework for styling the UI" } },
//             { name: "Node.js", description: { th: "Runtime สำหรับ Backend API", en: "Runtime for Backend API" } },
//             { name: "PostgreSQL", description: { th: "Relational Database สำหรับจัดเก็บข้อมูลงบประมาณ", en: "Relational Database for storing budget data" } },
//             { name: "Odoo", description: { th: "ERP Platform สำหรับการจัดการข้อมูลองค์กร", en: "ERP Platform for enterprise data management" } },
//         ],
//         role: { th: "Full-stack Developer & System Analyst", en: "Full-stack Developer & System Analyst" },
//         duration: { th: "ส.ค. 2025 — ปัจจุบัน", en: "Aug 2025 — Present" },
//         status: "Ongoing",
//     },
//     {
//         id: "02",
//         title: "Game-Vault",
//         category: "Full-stack Developer",
//         description: {
//             th: "แพลตฟอร์มสำหรับเรียกดูเกม พร้อมหน้ารายละเอียดเกม ระบบจัดการบัญชีผู้ใช้ และระบบคอมเมนต์แบบไดนามิก",
//             en: "A game browsing platform featuring detailed game pages, user account management, and a dynamic commenting system.",
//         },
//         tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
//         img: "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?q=80&w=800&auto=format&fit=crop",
//         longDescription: {
//             th: "Game-Vault เป็นแพลตฟอร์มเรียกดูเกมที่ออกแบบมาพร้อมหน้ารายละเอียดเกม ระบบจัดการบัญชีผู้ใช้ และระบบคอมเมนต์แบบไดนามิก โดยเชื่อมต่อกับ API ภายนอกเพื่อดึงข้อมูลเกมที่อัปเดตอยู่เสมอ",
//             en: "Game-Vault is a game browsing platform designed with detailed game pages, user account management, and a dynamic commenting system. It integrates with external APIs to fetch and display up-to-date gaming information.",
//         },
//         features: {
//             th: [
//                 "หน้ารายละเอียดเกมพร้อมข้อมูลครบถ้วน",
//                 "ระบบจัดการบัญชีผู้ใช้",
//                 "ระบบคอมเมนต์แบบไดนามิก",
//                 "เชื่อมต่อ API ภายนอกเพื่อดึงข้อมูลเกมที่อัปเดต",
//                 "UI ที่ Responsive พัฒนาด้วย Next.js, TypeScript, Tailwind CSS, Prisma และ PostgreSQL",
//             ],
//             en: [
//                 "Detailed game pages with comprehensive game data",
//                 "User account management system",
//                 "Dynamic commenting system",
//                 "Integrated external APIs to fetch and display up-to-date gaming information",
//                 "Responsive UI developed using Next.js, TypeScript, Tailwind CSS, Prisma, and PostgreSQL",
//             ],
//         },
//         techStack: [
//             { name: "Next.js", description: { th: "Fullstack Framework สำหรับสร้างเว็บแอปพลิเคชัน", en: "Fullstack Framework for building the web application" } },
//             { name: "TypeScript", description: { th: "Type-safe JavaScript สำหรับเพิ่มความน่าเชื่อถือของโค้ด", en: "Type-safe JavaScript for improved code reliability" } },
//             { name: "Tailwind CSS", description: { th: "CSS Framework สำหรับจัดการ UI", en: "CSS Framework for styling the UI" } },
//             { name: "Prisma", description: { th: "ORM สำหรับจัดการ Database", en: "ORM for database management" } },
//             { name: "PostgreSQL", description: { th: "Relational Database สำหรับจัดเก็บข้อมูลผู้ใช้และเกม", en: "Relational Database for storing user and game data" } },
//         ],
//         role: { th: "Full-stack Developer", en: "Full-stack Developer" },
//         duration: { th: "ม.ค. 2025 — พ.ค. 2025", en: "Jan 2025 — May 2025" },
//         status: "Completed",
//     },
//     {
//         id: "03",
//         title: "Accounting and Store Management System",
//         category: "Backend Developer & System Analyst",
//         description: {
//             th: "ระบบจัดการสินค้าคงคลังและพนักงานสำหรับธุรกิจขนาดเล็ก พร้อมฟีเจอร์ติดตามสต็อกสินค้าผ่านเว็บ",
//             en: "A custom inventory and employee management platform tailored for small businesses, with web-based stock tracking features.",
//         },
//         tags: ["Python", "Django", "PostgreSQL"],
//         img: "https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=800&auto=format&fit=crop",
//         longDescription: {
//             th: "ระบบบัญชีและจัดการร้านค้าที่ออกแบบมาเพื่อธุรกิจขนาดเล็ก โดยวิเคราะห์และกำหนด Requirements เพื่อสร้างแพลตฟอร์มจัดการสินค้าคงคลังและพนักงาน พร้อมฟีเจอร์ติดตามสต็อกสินค้าผ่านเว็บ",
//             en: "An accounting and store management system designed for small businesses. Analyzed and defined system requirements to build a custom inventory and employee management platform with web-based stock tracking.",
//         },
//         features: {
//             th: [
//                 "วิเคราะห์และกำหนด Requirements สำหรับระบบจัดการสินค้าคงคลังและพนักงาน",
//                 "ฟีเจอร์ติดตามสินค้าคงคลังผ่านเว็บ เพื่อตรวจสอบระดับสต็อก",
//                 "ระบบจัดการบัญชีพนักงาน",
//                 "พัฒนา Backend ด้วย Python, Django และ PostgreSQL",
//             ],
//             en: [
//                 "Analyzed and defined system requirements for inventory and employee management",
//                 "Web-based inventory tracking feature for monitoring stock levels",
//                 "Employee account management system",
//                 "Developed backend using Python, Django, and PostgreSQL",
//             ],
//         },
//         techStack: [
//             { name: "Python", description: { th: "ภาษาหลักสำหรับพัฒนา Backend", en: "Primary language for backend development" } },
//             { name: "Django", description: { th: "Web Framework สำหรับพัฒนาเว็บแอปพลิเคชัน", en: "Web Framework for building the web application" } },
//             { name: "PostgreSQL", description: { th: "Relational Database สำหรับจัดเก็บข้อมูลสินค้าและพนักงาน", en: "Relational Database for storing inventory and employee data" } },
//         ],
//         role: { th: "Backend Developer & System Analyst", en: "Backend Developer & System Analyst" },
//         duration: { th: "ส.ค. 2024 — ธ.ค. 2024", en: "Aug 2024 — Dec 2024" },
//         status: "Completed",
//     },
//     {
//         id: "04",
//         title: "OhYummy",
//         category: "Web Developer",
//         description: {
//             th: "เว็บแอปพลิเคชันสำหรับร้านอาหาร พร้อมฟีเจอร์เรียกดูเมนู จองโต๊ะ และระบบสั่งอาหาร",
//             en: "A restaurant web application featuring menu browsing, table reservations, and an integrated ordering system.",
//         },
//         tags: ["PHP", "HTML", "CSS"],
//         img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
//         longDescription: {
//             th: "OhYummy เป็นเว็บแอปพลิเคชันสำหรับร้านอาหารที่มีฟีเจอร์เรียกดูเมนู ระบบจองโต๊ะ และระบบสั่งอาหารแบบครบวงจร พร้อมฟีเจอร์ติดตามสถานะออเดอร์แบบ Real-time",
//             en: "OhYummy is a restaurant web application with menu browsing, table reservation, and an integrated ordering system, along with a real-time order status tracking feature.",
//         },
//         features: {
//             th: [
//                 "ระบบเรียกดูเมนูอาหาร",
//                 "ระบบจองโต๊ะ",
//                 "ระบบสั่งอาหารแบบครบวงจร",
//                 "ฟีเจอร์ติดตามสถานะออเดอร์แบบ Real-time",
//                 "พัฒนาด้วย PHP, HTML และ CSS สำหรับจัดการ Backend Logic",
//             ],
//             en: [
//                 "Menu browsing system",
//                 "Table reservation system",
//                 "Integrated ordering system",
//                 "Real-time order status tracking feature",
//                 "Built using PHP, HTML, and CSS for backend logic",
//             ],
//         },
//         techStack: [
//             { name: "PHP", description: { th: "ภาษาหลักสำหรับ Backend Logic", en: "Primary language for backend logic" } },
//             { name: "HTML", description: { th: "โครงสร้างหน้าเว็บ", en: "Web page structure" } },
//             { name: "CSS", description: { th: "จัดการรูปแบบและ Styling ของหน้าเว็บ", en: "Styling and layout of the web pages" } },
//         ],
//         role: { th: "Web Developer", en: "Web Developer" },
//         duration: { th: "ม.ค. 2024 — พ.ค. 2024", en: "Jan 2024 — May 2024" },
//         status: "Completed",
//     },
// ];

// export function getProjectById(id: string): Project | undefined {
//     return projects.find((p) => p.id === id);
// }
export interface Project {
    id: string;
    title: string;
    category: string;
    description: { en: string; th: string };
    githubUrl?: string;
    features?: { en: string[]; th: string[] };
    techStack: string[];
    role: { en: string; th: string };
    status: string;
}

export const projects: Project[] = [
    {
        id: "01",
        title: "Budget Preparation Support System",
        category: "Full-stack Developer & System Analyst",
        description: {
            th: "เปลี่ยนและปรับกระบวนการจัดทำงบประมาณแบบแมนนวลให้เป็นระบบบนเว็บเพื่อจัดการบันทึกรายรับและรายจ่าย รวมถึงการวางแผนและออกแบบโครงสร้างต่างๆ จากการทำงานเดิมเพื่อช่วยเพิ่มประสิทธิภาพการทำงาน โดยมีแดชบอร์ดแบบเรียลไทม์สำหรับการติดตามงบประมาณที่ดียิ่งขึ้น ออกแบบ Database Schemas และ ERD Model เพื่อให้จัดเก็บข้อมูลได้อย่างเป็นระบบและรองรับการออกรายงานทางการเงิน",
            en: "Converted and improved a manual budgeting process into a web-based system to manage income and expense records. This included planning and designing system structures based on the original workflow to enhance operational efficiency. It features a real-time dashboard for better budget tracking. Designed database schemas and ERD models to ensure systematic data storage and support financial reporting.",
        },
        githubUrl: "",
        techStack: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Odoo"],
        role: { th: "Full-stack Developer & System Analyst", en: "Full-stack Developer & System Analyst" },
        status: "Ongoing",
    },
    {
        id: "02",
        title: "Game-Vault",
        category: "Full-stack Developer",
        description: {
            th: "ออกแบบแพลตฟอร์มค้นหาเกมที่ประกอบด้วยหน้ารายละเอียดเกม ระบบจัดการบัญชีผู้ใช้ และระบบคอมเมนต์แบบไดนามิก เชื่อมต่อ External API เพื่อดึงและแสดงข้อมูลเกมแบบครบถ้วน ทำให้ผู้ใช้ได้รับข้อมูลเกมที่อัปเดตล่าสุด พัฒนาเว็บแอปพลิเคชันด้วย Next.js, TypeScript, Tailwind CSS, Prisma และ PostgreSQL เพื่อให้ได้ UI ที่ตอบสนองได้ดี (Responsive)",
            en: "Designed a game browsing platform featuring detailed game pages, user account management, and a dynamic commenting system. Integrated external APIs to fetch and display comprehensive game data, providing users with up-to-date gaming information. Developed the web application using Next.js, TypeScript, Tailwind CSS, Prisma, and PostgreSQL to ensure a responsive UI.",
        },
        githubUrl: "",
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        role: { th: "Full-stack Developer", en: "Full-stack Developer" },
        status: "Completed",
    },
    {
        id: "03",
        title: "Accounting and Store Management System",
        category: "Backend Developer & System Analyst",
        description: {
            th: "วิเคราะห์และกำหนด Requirement ของระบบเพื่อสร้างแพลตฟอร์มจัดการคลังสินค้าและพนักงานที่ออกแบบมาสำหรับธุรกิจขนาดเล็กโดยเฉพาะ พัฒนาฟีเจอร์ติดตามสินค้าคงคลังบนเว็บ เพื่อให้ผู้ใช้สามารถตรวจสอบระดับสต็อกและจัดการบัญชีพนักงานได้ พัฒนาระบบ Backend โดยใช้ Python, Django และ PostgreSQL",
            en: "Analyzed and defined system requirements to build a custom inventory and employee management platform tailored for small businesses. Implemented a web-based inventory tracking feature, allowing users to monitor stock levels and manage employee accounts. Developed a backend using Python, Django, and PostgreSQL.",
        },
        githubUrl: "",
        techStack: ["Python", "Django", "PostgreSQL"],
        role: { th: "Backend Developer & System Analyst", en: "Backend Developer & System Analyst" },
        status: "Completed",
    },
    {
        id: "04",
        title: "OhYummy",
        category: "Web Developer",
        description: {
            th: "พัฒนาเว็บแอปพลิเคชันร้านอาหารที่รองรับการดูเมนู การจองโต๊ะ และระบบสั่งอาหารในตัว พัฒนาฟีเจอร์ติดตามสถานะออเดอร์แบบเรียลไทม์เพื่อยกระดับประสบการณ์ของลูกค้าและทำให้ Workflow การบริการราบรื่นขึ้น สร้างแอปพลิเคชันโดยใช้ PHP, HTML และ CSS สำหรับจัดการลอจิกฝั่งหลังบ้าน",
            en: "Developed a restaurant web application featuring menu browsing, table reservations, and an integrated ordering system. Implemented a real-time order status tracking feature to enhance customer experience and streamline service workflow. Built the application using PHP, HTML, and CSS to manage backend logic.",
        },
        githubUrl: "",
        techStack: ["PHP", "HTML", "CSS"],
        role: { th: "Web Developer", en: "Web Developer" },
        status: "Completed",
    },
    {
        id: "05",
        title: "Eldercare ",
        category: "Backend developer",
        description: {
            th: "Eldercare เป็นโปรเจกต์เว็บจับคู่บริการ (ทำขึ้นเป็นคอนเซปต์) ที่ช่วยเชื่อมโยงผู้สูงอายุกับผู้ดูแลอิสระ เพื่อให้บริการต่างๆ เช่น พาไปหาหมอที่โรงพยาบาล หรือไปรับจ้างอยู่เป็นเพื่อน ตัวระบบจะแบ่งการใช้งานออกเป็น 2 ฝั่งชัดเจน คือฝั่งคนดูแลสามารถเข้ามาอัปเดตตารางคิวว่างของตัวเองเพื่อรับงานหารายได้เสริม ส่วนฝั่งลูกค้าก็สามารถเข้ามาค้นหาคนดูแล ทักไปสอบถามรายละเอียด และกดจองคิวตามวันเวลาที่สะดวก",
            en: "Eldercare is a conceptual service-matching web platform connecting elderly individuals with freelance caregivers for essential services like hospital escorts and companionship. The system features a dual-interface architecture, allowing caregivers to manage their availability to earn extra income, while enabling users to easily search, inquire, and schedule appointments based on specific time slots.",
        },
        githubUrl: "",
        techStack: ["Python (Django)", "HTML", "PostgreSQL", "Docker", "Jenkins"],
        role: { th: "Web Developer", en: "Web Developer" },
        status: "Completed",
    },
    {
        id: "06",
        title: "YouSabuy  ",
        category: "Backend developer",
        description: {
            th: "YouSabuy เป็นโปรเจกต์เว็บแอปพลิเคชันสำหรับการจัดการหอพักแบบครบวงจร ระบบเริ่มต้นตั้งแต่หน้าเว็บไซต์สาธารณะที่ให้ผู้สนใจเข้ามาดูรูปตัวอย่างห้องพัก ดูผังห้อง และทำการจองห้องพักผ่านระบบออนไลน์ได้ ในส่วนของระบบจัดการภายใน แบ่งการทำงานเป็น 2 ส่วนหลัก คือ 1. ฝั่งผู้เช่า (Tenant) ที่สามารถชำระค่าเช่า แจ้งซ่อม เรียกใช้บริการแม่บ้าน และส่งข้อความร้องเรียนไปยังส่วนกลางได้ และ 2. ฝั่งผู้ดูแลหอพัก (Admin) ที่สามารถบันทึกหน่วยค่าน้ำ-ค่าไฟเพื่อคำนวณบิลค่าห้อง รวมถึงรับเรื่องร้องเรียนและแจ้งซ่อมจากผู้เช่า",
            en: "YouSabuy is a comprehensive dormitory management web application designed to streamline end-to-end operations. The platform features a public-facing portal for room previews, floor plan viewing, and online booking. Internally, it provides a tenant dashboard for requesting maintenance, booking cleaning services, submitting complaints, and paying rent, alongside an admin interface for calculating utility bills and managing tenant requests.",
        },
        githubUrl: "",
        techStack: ["PHP (Laravel)", "Blade", "CSS"],
        role: { th: "Web Developer", en: "Web Developer" },
        status: "Completed",
    },
];

export function getProjectById(id: string): Project | undefined {
    return projects.find((p) => p.id === id);
}