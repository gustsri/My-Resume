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
        title: "AERODYNAMICS UI",
        category: "UX/UI DESIGN",
        description: {
            th: "ระบบจัดการข้อมูลแบบ Real-time ที่ลดแรงต้านการใช้งานของผู้ใช้ด้วยการออกแบบ Interface ที่ลื่นไหลเหมือนรถแข่งที่ผ่านอุโมงค์ลม เน้นประสิทธิภาพสูงสุดในการเข้าถึงข้อมูลสำคัญในพริบตา",
            en: "A real-time data management system that reduces user friction through a streamlined interface design — like a race car in a wind tunnel. Focused on maximum efficiency for accessing critical data in an instant.",
        },
        tags: ["React", "Three.js", "Figma"],
        img: "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?q=80&w=800&auto=format&fit=crop",
        longDescription: {
            th: "โปรเจกต์นี้ได้รับแรงบันดาลใจจากหลักอากาศพลศาสตร์ของรถ F1 โดยออกแบบ Interface ที่ลดแรงต้านของ User Experience ให้เหลือน้อยที่สุด ทุก Element ถูกวางตำแหน่งอย่างมีกลยุทธ์เพื่อให้ผู้ใช้เข้าถึงข้อมูลได้รวดเร็วที่สุด ระบบแสดงผลข้อมูลแบบ Real-time พร้อม 3D Visualization ที่สร้างด้วย Three.js ทำให้ผู้ใช้สามารถวิเคราะห์ข้อมูลได้อย่างเข้าใจง่ายและทันทีทันใด",
            en: "Inspired by F1 aerodynamics, this project features an interface designed to minimize UX friction. Every element is strategically positioned for the fastest data access. The system provides real-time data rendering with 3D Visualization built using Three.js, enabling users to analyze data intuitively and instantly.",
        },
        features: {
            th: [
                "Real-time Data Streaming ด้วย WebSocket",
                "3D Interactive Visualization ด้วย Three.js",
                "Drag & Drop Dashboard Customization",
                "Dark/Light Mode with Smooth Transitions",
                "Responsive Design สำหรับทุกขนาดหน้าจอ",
                "Performance Optimized — โหลดข้อมูลภายใน 200ms",
            ],
            en: [
                "Real-time Data Streaming via WebSocket",
                "3D Interactive Visualization with Three.js",
                "Drag & Drop Dashboard Customization",
                "Dark/Light Mode with Smooth Transitions",
                "Responsive Design for all screen sizes",
                "Performance Optimized — data loads within 200ms",
            ],
        },
        techStack: [
            { name: "React", description: { th: "Core UI Framework สำหรับสร้าง Component-based Architecture", en: "Core UI Framework for Component-based Architecture" } },
            { name: "Three.js", description: { th: "3D Rendering Engine สำหรับ Data Visualization แบบ Interactive", en: "3D Rendering Engine for Interactive Data Visualization" } },
            { name: "Figma", description: { th: "Design System & Prototyping Tool สำหรับ UI/UX Workflow", en: "Design System & Prototyping Tool for UI/UX Workflow" } },
            { name: "WebSocket", description: { th: "Real-time Communication Layer สำหรับ Live Data Updates", en: "Real-time Communication Layer for Live Data Updates" } },
            { name: "Framer Motion", description: { th: "Animation Library สำหรับ Micro-interactions ที่ลื่นไหล", en: "Animation Library for smooth Micro-interactions" } },
        ],
        role: { th: "Lead UI/UX Designer & Frontend Developer", en: "Lead UI/UX Designer & Frontend Developer" },
        duration: { th: "3 เดือน", en: "3 Months" },
        status: "COMPLETED",
    },
    {
        id: "02",
        title: "PIT-STOP E-COMMERCE",
        category: "FULLSTACK",
        description: {
            th: "แพลตฟอร์มซื้อขายที่เน้นความเร็วในการชำระเงินเพียง 3 วินาที (The 3-Second Pit Stop) ลดขั้นตอนที่ซับซ้อนเพื่อให้ผู้ใช้ได้รับประสบการณ์การซื้อที่รวดเร็วและแม่นยำที่สุด",
            en: "An e-commerce platform focused on 3-second checkout speed (The 3-Second Pit Stop). Streamlined steps to deliver the fastest and most accurate purchasing experience.",
        },
        tags: ["Next.js", "Stripe", "PostgreSQL"],
        img: "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?q=80&w=800&auto=format&fit=crop",
        longDescription: {
            th: "Pit-Stop E-Commerce ถูกออกแบบมาเพื่อทำลายสถิติความเร็วในการชำระเงินออนไลน์ เปรียบเสมือนทีม Pit Crew ที่เปลี่ยนยางรถ F1 ได้ภายใน 2 วินาที ระบบนี้ช่วยให้ผู้ใช้เลือกสินค้า กรอกข้อมูล และชำระเงินได้ภายใน 3 ขั้นตอนเท่านั้น ด้วย One-click Checkout, Smart Auto-fill และ Secure Payment Gateway ที่ผ่านการทดสอบความปลอดภัยระดับ Enterprise",
            en: "Pit-Stop E-Commerce is designed to break online checkout speed records — like an F1 Pit Crew changing tires in under 2 seconds. The system lets users select, fill, and pay in just 3 steps with One-click Checkout, Smart Auto-fill, and an Enterprise-grade Secure Payment Gateway.",
        },
        features: {
            th: [
                "3-Second Checkout — ชำระเงินภายใน 3 ขั้นตอน",
                "One-click Purchase สำหรับลูกค้าที่เข้าสู่ระบบแล้ว",
                "Smart Cart ที่คำนวณส่วนลดแบบ Real-time",
                "Stripe Integration สำหรับ Secure Payment Processing",
                "Inventory Management Dashboard สำหรับผู้ขาย",
                "Order Tracking แบบ Real-time พร้อม Push Notifications",
            ],
            en: [
                "3-Second Checkout — pay in just 3 steps",
                "One-click Purchase for logged-in customers",
                "Smart Cart with Real-time discount calculation",
                "Stripe Integration for Secure Payment Processing",
                "Inventory Management Dashboard for sellers",
                "Real-time Order Tracking with Push Notifications",
            ],
        },
        techStack: [
            { name: "Next.js", description: { th: "Fullstack Framework สำหรับ SSR/SSG และ API Routes", en: "Fullstack Framework for SSR/SSG and API Routes" } },
            { name: "Stripe", description: { th: "Payment Gateway สำหรับ Secure Online Transactions", en: "Payment Gateway for Secure Online Transactions" } },
            { name: "PostgreSQL", description: { th: "Relational Database สำหรับ Order & Product Management", en: "Relational Database for Order & Product Management" } },
            { name: "Prisma", description: { th: "ORM สำหรับ Type-safe Database Queries", en: "ORM for Type-safe Database Queries" } },
            { name: "Redis", description: { th: "In-memory Cache สำหรับ Session & Cart Management", en: "In-memory Cache for Session & Cart Management" } },
        ],
        role: { th: "Fullstack Developer", en: "Fullstack Developer" },
        duration: { th: "4 เดือน", en: "4 Months" },
        status: "COMPLETED",
    },
    {
        id: "03",
        title: "TELEMETRY DASHBOARD",
        category: "DATA VISUALIZATION",
        description: {
            th: "แดชบอร์ดแสดงผลข้อมูลเซนเซอร์ในรูปแบบกราฟที่อ่านง่ายที่สุด เพื่อการวิเคราะห์ข้อมูลในระดับวินาทีต่อวินาที ช่วยให้นักพัฒนาเห็นภาพรวมของระบบได้อย่างแม่นยำเหมือนวิศวกรข้างสนาม",
            en: "A sensor data dashboard displaying the most readable charts for second-by-second analysis. Gives developers a precise system overview — like a trackside engineer.",
        },
        tags: ["Python", "D3.js", "IoT"],
        img: "https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=800&auto=format&fit=crop",
        longDescription: {
            th: "Telemetry Dashboard คือศูนย์บัญชาการข้อมูลที่รวบรวม Sensor Data จากอุปกรณ์ IoT หลายร้อยตัวมาแสดงผลในรูปแบบกราฟแบบ Real-time เปรียบเสมือน Pit Wall ของทีม F1 ที่วิศวกรสามารถมอนิเตอร์ทุกพารามิเตอร์ของรถได้ในจอเดียว ระบบรองรับการวิเคราะห์ข้อมูลย้อนหลังและการตั้ง Alert เมื่อค่าผิดปกติ",
            en: "Telemetry Dashboard is a command center that aggregates sensor data from hundreds of IoT devices into real-time charts — like an F1 Pit Wall where engineers monitor every car parameter on a single screen. Supports historical data analysis and anomaly alerting.",
        },
        features: {
            th: [
                "Real-time Sensor Data Visualization ด้วย D3.js",
                "Multi-device IoT Data Aggregation",
                "Historical Data Analysis & Comparison",
                "Custom Alert System สำหรับค่าผิดปกติ",
                "Export Reports เป็น PDF & CSV",
                "Role-based Access Control สำหรับทีม",
            ],
            en: [
                "Real-time Sensor Data Visualization with D3.js",
                "Multi-device IoT Data Aggregation",
                "Historical Data Analysis & Comparison",
                "Custom Alert System for anomalies",
                "Export Reports as PDF & CSV",
                "Role-based Access Control for teams",
            ],
        },
        techStack: [
            { name: "Python", description: { th: "Backend Service สำหรับ Data Processing & API", en: "Backend Service for Data Processing & API" } },
            { name: "D3.js", description: { th: "Data Visualization Library สำหรับ Interactive Charts", en: "Data Visualization Library for Interactive Charts" } },
            { name: "IoT Protocols", description: { th: "MQTT & HTTP สำหรับ Sensor Data Collection", en: "MQTT & HTTP for Sensor Data Collection" } },
            { name: "InfluxDB", description: { th: "Time-series Database สำหรับ Sensor Data Storage", en: "Time-series Database for Sensor Data Storage" } },
            { name: "FastAPI", description: { th: "High-performance Python API Framework", en: "High-performance Python API Framework" } },
        ],
        role: { th: "Data Engineer & Frontend Developer", en: "Data Engineer & Frontend Developer" },
        duration: { th: "5 เดือน", en: "5 Months" },
        status: "IN DEVELOPMENT",
    },
];

export function getProjectById(id: string): Project | undefined {
    return projects.find((p) => p.id === id);
}
