export interface Project {
    id: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    img: string;
    longDescription: string;
    features: string[];
    techStack: { name: string; description: string }[];
    role: string;
    duration: string;
    status: string;
}

export const projects: Project[] = [
    {
        id: "01",
        title: "AERODYNAMICS UI",
        category: "UX/UI DESIGN",
        description:
            "ระบบจัดการข้อมูลแบบ Real-time ที่ลดแรงต้านการใช้งานของผู้ใช้ด้วยการออกแบบ Interface ที่ลื่นไหลเหมือนรถแข่งที่ผ่านอุโมงค์ลม เน้นประสิทธิภาพสูงสุดในการเข้าถึงข้อมูลสำคัญในพริบตา",
        tags: ["React", "Three.js", "Figma"],
        img: "https://images.unsplash.com/photo-1596272875729-ed2ff7d6d9c5?q=80&w=800&auto=format&fit=crop",
        longDescription:
            "โปรเจกต์นี้ได้รับแรงบันดาลใจจากหลักอากาศพลศาสตร์ของรถ F1 โดยออกแบบ Interface ที่ลดแรงต้านของ User Experience ให้เหลือน้อยที่สุด ทุก Element ถูกวางตำแหน่งอย่างมีกลยุทธ์เพื่อให้ผู้ใช้เข้าถึงข้อมูลได้รวดเร็วที่สุด ระบบแสดงผลข้อมูลแบบ Real-time พร้อม 3D Visualization ที่สร้างด้วย Three.js ทำให้ผู้ใช้สามารถวิเคราะห์ข้อมูลได้อย่างเข้าใจง่ายและทันทีทันใด",
        features: [
            "Real-time Data Streaming ด้วย WebSocket",
            "3D Interactive Visualization ด้วย Three.js",
            "Drag & Drop Dashboard Customization",
            "Dark/Light Mode with Smooth Transitions",
            "Responsive Design สำหรับทุกขนาดหน้าจอ",
            "Performance Optimized — โหลดข้อมูลภายใน 200ms",
        ],
        techStack: [
            { name: "React", description: "Core UI Framework สำหรับสร้าง Component-based Architecture" },
            { name: "Three.js", description: "3D Rendering Engine สำหรับ Data Visualization แบบ Interactive" },
            { name: "Figma", description: "Design System & Prototyping Tool สำหรับ UI/UX Workflow" },
            { name: "WebSocket", description: "Real-time Communication Layer สำหรับ Live Data Updates" },
            { name: "Framer Motion", description: "Animation Library สำหรับ Micro-interactions ที่ลื่นไหล" },
        ],
        role: "Lead UI/UX Designer & Frontend Developer",
        duration: "3 เดือน",
        status: "COMPLETED",
    },
    {
        id: "02",
        title: "PIT-STOP E-COMMERCE",
        category: "FULLSTACK",
        description:
            "แพลตฟอร์มซื้อขายที่เน้นความเร็วในการชำระเงินเพียง 3 วินาที (The 3-Second Pit Stop) ลดขั้นตอนที่ซับซ้อนเพื่อให้ผู้ใช้ได้รับประสบการณ์การซื้อที่รวดเร็วและแม่นยำที่สุด",
        tags: ["Next.js", "Stripe", "PostgreSQL"],
        img: "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?q=80&w=800&auto=format&fit=crop",
        longDescription:
            "Pit-Stop E-Commerce ถูกออกแบบมาเพื่อทำลายสถิติความเร็วในการชำระเงินออนไลน์ เปรียบเสมือนทีม Pit Crew ที่เปลี่ยนยางรถ F1 ได้ภายใน 2 วินาที ระบบนี้ช่วยให้ผู้ใช้เลือกสินค้า กรอกข้อมูล และชำระเงินได้ภายใน 3 ขั้นตอนเท่านั้น ด้วย One-click Checkout, Smart Auto-fill และ Secure Payment Gateway ที่ผ่านการทดสอบความปลอดภัยระดับ Enterprise",
        features: [
            "3-Second Checkout — ชำระเงินภายใน 3 ขั้นตอน",
            "One-click Purchase สำหรับลูกค้าที่เข้าสู่ระบบแล้ว",
            "Smart Cart ที่คำนวณส่วนลดแบบ Real-time",
            "Stripe Integration สำหรับ Secure Payment Processing",
            "Inventory Management Dashboard สำหรับผู้ขาย",
            "Order Tracking แบบ Real-time พร้อม Push Notifications",
        ],
        techStack: [
            { name: "Next.js", description: "Fullstack Framework สำหรับ SSR/SSG และ API Routes" },
            { name: "Stripe", description: "Payment Gateway สำหรับ Secure Online Transactions" },
            { name: "PostgreSQL", description: "Relational Database สำหรับ Order & Product Management" },
            { name: "Prisma", description: "ORM สำหรับ Type-safe Database Queries" },
            { name: "Redis", description: "In-memory Cache สำหรับ Session & Cart Management" },
        ],
        role: "Fullstack Developer",
        duration: "4 เดือน",
        status: "COMPLETED",
    },
    {
        id: "03",
        title: "TELEMETRY DASHBOARD",
        category: "DATA VISUALIZATION",
        description:
            "แดชบอร์ดแสดงผลข้อมูลเซนเซอร์ในรูปแบบกราฟที่อ่านง่ายที่สุด เพื่อการวิเคราะห์ข้อมูลในระดับวินาทีต่อวินาที ช่วยให้นักพัฒนาเห็นภาพรวมของระบบได้อย่างแม่นยำเหมือนวิศวกรข้างสนาม",
        tags: ["Python", "D3.js", "IoT"],
        img: "https://images.unsplash.com/photo-1551288049-bbbda5366391?q=80&w=800&auto=format&fit=crop",
        longDescription:
            "Telemetry Dashboard คือศูนย์บัญชาการข้อมูลที่รวบรวม Sensor Data จากอุปกรณ์ IoT หลายร้อยตัวมาแสดงผลในรูปแบบกราฟแบบ Real-time เปรียบเสมือน Pit Wall ของทีม F1 ที่วิศวกรสามารถมอนิเตอร์ทุกพารามิเตอร์ของรถได้ในจอเดียว ระบบรองรับการวิเคราะห์ข้อมูลย้อนหลังและการตั้ง Alert เมื่อค่าผิดปกติ",
        features: [
            "Real-time Sensor Data Visualization ด้วย D3.js",
            "Multi-device IoT Data Aggregation",
            "Historical Data Analysis & Comparison",
            "Custom Alert System สำหรับค่าผิดปกติ",
            "Export Reports เป็น PDF & CSV",
            "Role-based Access Control สำหรับทีม",
        ],
        techStack: [
            { name: "Python", description: "Backend Service สำหรับ Data Processing & API" },
            { name: "D3.js", description: "Data Visualization Library สำหรับ Interactive Charts" },
            { name: "IoT Protocols", description: "MQTT & HTTP สำหรับ Sensor Data Collection" },
            { name: "InfluxDB", description: "Time-series Database สำหรับ Sensor Data Storage" },
            { name: "FastAPI", description: "High-performance Python API Framework" },
        ],
        role: "Data Engineer & Frontend Developer",
        duration: "5 เดือน",
        status: "IN DEVELOPMENT",
    },
];

export function getProjectById(id: string): Project | undefined {
    return projects.find((p) => p.id === id);
}
