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
    tags: string[];
    img: string;
    longDescription: { en: string; th: string };
    features: { en: string[]; th: string[] };
    techStack: { name: string; description: { en: string; th: string } }[];
    role: { en: string; th: string };
    duration: { en: string; th: string };
    status: string;
}

export const projects: Project[] = [
    {
        id: "01",
        title: "Budget Preparation Support System",
        category: "Full-stack Developer & System Analyst",
        description: {
            th: "ระบบจัดการงบประมาณบนเว็บสำหรับบันทึกรายรับและรายจ่าย พร้อมแดชบอร์ดแบบเรียลไทม์เพื่อติดตามงบประมาณอย่างมีประสิทธิภาพ",
            en: "A web-based budgeting system to manage income and expenses, featuring a real-time dashboard for improved tracking.",
        },
        tags: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Odoo"],
        img: "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?q=80&w=800&auto=format&fit=crop",
        longDescription: {
            th: "เปลี่ยนและปรับกระบวนการจัดทำงบประมาณแบบแมนนวลให้เป็นระบบบนเว็บเพื่อจัดการบันทึกรายรับและรายจ่าย รวมถึงการวางแผนและออกแบบโครงสร้างต่างๆ จาก flow การทำงานเดิมเพื่อช่วยเพิ่มประสิทธิภาพการทำงาน โดยมีแดชบอร์ดแบบเรียลไทม์สำหรับการติดตามงบประมาณที่ดียิ่งขึ้น ออกแบบ Database Schemas และ ERD Model เพื่อให้จัดเก็บข้อมูลได้อย่างเป็นระบบและรองรับการออกรายงานทางการเงิน พัฒนาและ Deploy เว็บแอปพลิเคชันโดยใช้ Next.js, Tailwind CSS, Node.js, PostgreSQL และ Odoo",
            en: "Converted and improved a manual budgeting process into a web-based system to manage income and expense records. This included planning and designing system structures based on the original workflow to enhance operational efficiency. It features a real-time dashboard for better budget tracking. Designed database schemas and ERD models to ensure systematic data storage and support financial reporting. Developed and deployed the web application using Next.js, Tailwind CSS, Node.js, PostgreSQL, and Odoo.",
        },
        features: {
            th: [
                "ปรับปรุง Workflow และออกแบบโครงสร้างระบบ",
                "จัดการข้อมูลรายรับและรายจ่าย",
                "แดชบอร์ดติดตามสถานะงบประมาณแบบเรียลไทม์",
                "รองรับการจัดเก็บข้อมูลและการออกรายงานทางการเงิน",
            ],
            en: [
                "Workflow Optimization & System Design",
                "Income & Expense Management",
                "Real-time Tracking Dashboard",
                "Financial Reporting Support",
            ],
        },
        techStack: [
            { name: "Next.js", description: { th: "Fullstack Framework สำหรับสร้างเว็บแอปพลิเคชัน", en: "Fullstack Framework for building the web application" } },
            { name: "Tailwind CSS", description: { th: "CSS Framework สำหรับจัดการ UI", en: "CSS Framework for styling the UI" } },
            { name: "Node.js", description: { th: "Runtime สำหรับ Backend API", en: "Runtime for Backend API" } },
            { name: "PostgreSQL", description: { th: "Relational Database สำหรับจัดเก็บข้อมูลงบประมาณ", en: "Relational Database for storing budget data" } },
            { name: "Odoo", description: { th: "ERP Platform สำหรับการจัดการข้อมูลองค์กร", en: "ERP Platform for enterprise data management" } },
        ],
        role: { th: "Full-stack Developer & System Analyst", en: "Full-stack Developer & System Analyst" },
        duration: { th: "ส.ค. 2025 — ปัจจุบัน", en: "Aug 2025 — Present" },
        status: "Ongoing",
    },
    {
        id: "02",
        title: "Game-Vault",
        category: "Full-stack Developer",
        description: {
            th: "แพลตฟอร์มค้นหาเกมที่มีข้อมูลเกมโดยละเอียด ระบบบัญชีผู้ใช้ และระบบคอมเมนต์ พร้อมเชื่อมต่อ API ภายนอกเพื่อแสดงข้อมูลล่าสุด",
            en: "A game browsing platform with detailed game pages, user accounts, and a dynamic commenting system integrated with external APIs.",
        },
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
        img: "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?q=80&w=800&auto=format&fit=crop",
        longDescription: {
            th: "ออกแบบแพลตฟอร์มค้นหาเกมที่ประกอบด้วยหน้ารายละเอียดเกม ระบบจัดการบัญชีผู้ใช้ และระบบคอมเมนต์แบบไดนามิก เชื่อมต่อ External API เพื่อดึงและแสดงข้อมูลเกมแบบครบถ้วน ทำให้ผู้ใช้ได้รับข้อมูลเกมที่อัปเดตล่าสุด พัฒนาเว็บแอปพลิเคชันด้วย Next.js, TypeScript, Tailwind CSS, Prisma และ PostgreSQL เพื่อให้ได้ UI ที่ตอบสนองได้ดี (Responsive)",
            en: "Designed a game browsing platform featuring detailed game pages, user account management, and a dynamic commenting system. Integrated external APIs to fetch and display comprehensive game data, providing users with up-to-date gaming information. Developed the web application using Next.js, TypeScript, Tailwind CSS, Prisma, and PostgreSQL to ensure a responsive UI.",
        },
        features: {
            th: [
                "เชื่อมต่อ External API เพื่อดึงข้อมูลเกม",
                "ระบบจัดการบัญชีผู้ใช้",
                "ระบบคอมเมนต์แบบไดนามิก",
                "ออกแบบ UI ให้ตอบสนองได้ดี (Responsive)",
            ],
            en: [
                "External API Integration",
                "User Account Management",
                "Dynamic Commenting System",
                "Responsive UI Design",
            ],
        },
        techStack: [
            { name: "Next.js", description: { th: "Fullstack Framework สำหรับสร้างเว็บแอปพลิเคชัน", en: "Fullstack Framework for building the web application" } },
            { name: "TypeScript", description: { th: "Type-safe JavaScript สำหรับเพิ่มความน่าเชื่อถือของโค้ด", en: "Type-safe JavaScript for improved code reliability" } },
            { name: "Tailwind CSS", description: { th: "CSS Framework สำหรับจัดการ UI", en: "CSS Framework for styling the UI" } },
            { name: "Prisma", description: { th: "ORM สำหรับจัดการ Database", en: "ORM for database management" } },
            { name: "PostgreSQL", description: { th: "Relational Database สำหรับจัดเก็บข้อมูลผู้ใช้และเกม", en: "Relational Database for storing user and game data" } },
        ],
        role: { th: "Full-stack Developer", en: "Full-stack Developer" },
        duration: { th: "ม.ค. 2025 — พ.ค. 2025", en: "Jan 2025 — May 2025" },
        status: "Completed",
    },
    {
        id: "03",
        title: "Accounting and Store Management System",
        category: "Backend Developer & System Analyst",
        description: {
            th: "ระบบจัดการคลังสินค้าและพนักงานที่ปรับแต่งมาสำหรับธุรกิจขนาดเล็ก พร้อมฟีเจอร์ติดตามสต็อกสินค้าบนเว็บ",
            en: "A custom inventory and employee management platform tailored for small businesses with real-time stock tracking.",
        },
        tags: ["Python", "Django", "PostgreSQL"],
        img: "https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=800&auto=format&fit=crop",
        longDescription: {
            th: "วิเคราะห์และกำหนด Requirement ของระบบเพื่อสร้างแพลตฟอร์มจัดการคลังสินค้าและพนักงานที่ออกแบบมาสำหรับธุรกิจขนาดเล็กโดยเฉพาะ พัฒนาฟีเจอร์ติดตามสินค้าคงคลังบนเว็บ เพื่อให้ผู้ใช้สามารถตรวจสอบระดับสต็อกและจัดการบัญชีพนักงานได้ พัฒนาระบบ Backend โดยใช้ Python, Django และ PostgreSQL",
            en: "Analyzed and defined system requirements to build a custom inventory and employee management platform tailored for small businesses. Implemented a web-based inventory tracking feature, allowing users to monitor stock levels and manage employee accounts. Developed a backend using Python, Django, and PostgreSQL.",
        },
        features: {
            th: [
                "ระบบติดตามสินค้าคงคลังแบบปรับแต่งเฉพาะ",
                "ระบบจัดการบัญชีพนักงาน",
                "วิเคราะห์ Requirement ของระบบ",
                "ติดตามสต็อกสินค้าแบบเรียลไทม์",
            ],
            en: [
                "Custom Inventory Tracking",
                "Employee Account Management",
                "System Requirement Analysis",
                "Real-time Stock Monitoring",
            ],
        },
        techStack: [
            { name: "Python", description: { th: "ภาษาหลักสำหรับพัฒนา Backend", en: "Primary language for backend development" } },
            { name: "Django", description: { th: "Web Framework สำหรับพัฒนาเว็บแอปพลิเคชัน", en: "Web Framework for building the web application" } },
            { name: "PostgreSQL", description: { th: "Relational Database สำหรับจัดเก็บข้อมูลสินค้าและพนักงาน", en: "Relational Database for storing inventory and employee data" } },
        ],
        role: { th: "Backend Developer & System Analyst", en: "Backend Developer & System Analyst" },
        duration: { th: "ส.ค. 2024 — ธ.ค. 2024", en: "Aug 2024 — Dec 2024" },
        status: "Completed",
    },
    {
        id: "04",
        title: "OhYummy",
        category: "Web Developer",
        description: {
            th: "เว็บแอปพลิเคชันร้านอาหารที่มีระบบดูเมนู จองโต๊ะ สั่งอาหาร และติดตามสถานะออเดอร์แบบเรียลไทม์",
            en: "A restaurant web application featuring menu browsing, table reservations, and real-time order status tracking.",
        },
        tags: ["PHP", "HTML", "CSS"],
        img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
        longDescription: {
            th: "พัฒนาเว็บแอปพลิเคชันร้านอาหารที่รองรับการดูเมนู การจองโต๊ะ และระบบสั่งอาหารในตัว พัฒนาฟีเจอร์ติดตามสถานะออเดอร์แบบเรียลไทม์เพื่อยกระดับประสบการณ์ของลูกค้าและทำให้ Workflow การบริการราบรื่นขึ้น สร้างแอปพลิเคชันโดยใช้ PHP, HTML และ CSS สำหรับจัดการลอจิกฝั่งหลังบ้าน",
            en: "Developed a restaurant web application featuring menu browsing, table reservations, and an integrated ordering system. Implemented a real-time order status tracking feature to enhance customer experience and streamline service workflow. Built the application using PHP, HTML, and CSS to manage backend logic.",
        },
        features: {
            th: [
                "ระบบดูเมนูและสั่งอาหาร",
                "ระบบจองโต๊ะ",
                "ติดตามสถานะออเดอร์แบบเรียลไทม์",
                "ปรับปรุง Workflow การบริการให้ราบรื่นขึ้น",
            ],
            en: [
                "Menu Browsing & Ordering",
                "Table Reservations",
                "Real-time Order Status Tracking",
                "Service Workflow Streamlining",
            ],
        },
        techStack: [
            { name: "PHP", description: { th: "ภาษาหลักสำหรับ Backend Logic", en: "Primary language for backend logic" } },
            { name: "HTML", description: { th: "โครงสร้างหน้าเว็บ", en: "Web page structure" } },
            { name: "CSS", description: { th: "จัดการรูปแบบและ Styling ของหน้าเว็บ", en: "Styling and layout of the web pages" } },
        ],
        role: { th: "Web Developer", en: "Web Developer" },
        duration: { th: "ม.ค. 2024 — พ.ค. 2024", en: "Jan 2024 — May 2024" },
        status: "Completed",
    },
];

export function getProjectById(id: string): Project | undefined {
    return projects.find((p) => p.id === id);
}