# 🏥 CarePulse - Clinical Management System (Full-Stack Indian Edition)

[![Java](https://img.shields.io/badge/Java-21-orange.svg)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.3-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![Spring Security](https://img.shields.io/badge/Spring%20Security-6.2-blue.svg)](https://spring.io/projects/spring-security)
[![Thymeleaf](https://img.shields.io/badge/Thymeleaf-3.1-green.svg)](https://www.thymeleaf.org/)
[![Database](https://img.shields.io/badge/Database-MySQL%208.0-blue.svg)](https://www.mysql.com/)
[![Currency](https://img.shields.io/badge/Currency-INR%20(%E2%82%B9)-blueviolet.svg)](#)

A full-stack, enterprise-grade Clinical Management System built with **Spring Boot 3**, **Spring Security 6**, **Spring Data JPA**, **Thymeleaf**, and **MySQL 8.0 Database**.

Designed specifically for healthcare management with role-based access, Indian healthcare profiles, Indian Rupee (`₹`) billing, payment tracking, and a diagnostic laboratory test reports module.

---

## 🌟 Key Features

### 🛡️ 1. Multi-Portal Separation
- **Dedicated Admin Portal (`/admin`)**:
  - Live hospital operational KPIs (Physicians, Patients, Pending Reviews, Realized Revenue in `₹`).
  - Medical personnel directory & doctor onboarding modal.
  - Patient registry with allergy alerts, blood groups, and medical histories.
  - Appointment master schedule with approval/cancellation controls.
  - Clinical departments & medical specialties management.
  - **Diagnostic Lab Reports Console**: Order, issue, and manage laboratory investigations.
- **Dedicated Patient Portal (`/patient`)**:
  - Health overview: Medical ID, age, blood group, critical allergy hazard alerts.
  - 4-step specialist appointment booking with dynamic specialty & doctor dropdowns.
  - My Visits history with consultation fees in `₹` and real-time **"💳 Pay (₹...)"** buttons.
  - Prescriptions & EHR with formal digital Rx cards and print-ready stylesheet (`@media print`).
  - **Diagnostic Test Reports Tab**: Review lab investigation findings, normal reference ranges, test fees in `₹`, and print lab reports.
  - Medical profile & emergency contacts editor.
- **Dedicated Doctor Portal (`/doctor`)**:
  - Daily clinical queue with patient vitals and contact information.
  - Consultation fee tracking in `₹` and payment status badges (`PAID` / `PENDING`).
  - Interactive digital prescription writer (symptoms, vitals, diagnosis, medication schedule, instructions, follow-up date).
  - Diagnostic test reports review for attending patients.

### 💳 2. Indian Healthcare Localization & Currency (`₹`)
- Authentic Indian names across administrators, doctors, and patients.
- All consultation fees and lab test charges are strictly in **Indian Rupees (`₹`)**.
- Realized clinic revenue and patient outstanding dues tracked in **`₹` (INR)**.

### 🔬 3. Diagnostic Test Reports Module
- Full laboratory investigation tracking across Pathology, Radiology, Hematology, and Biochemistry.
- Captures test parameters, qualitative/quantitative results, biological reference ranges, and pathologist remarks.
- Integrated fee collection (`PAID` / `PENDING`) and browser printing support (`🖨️ Print Lab Reports`).

---

## 📂 Project Architecture (Backend & Frontend)

```
ClinicalManagementSystem/
├── .gitignore                            # Git ignore rules for Maven & IDEs
├── README.md                             # Repository documentation
├── run.bat                               # 1-click Windows desktop launcher
│
├── backend/                              # ⚙️ BACKEND (Spring Boot / Java 21)
│   ├── pom.xml                           # Maven dependencies (MySQL Driver, JPA, Security)
│   ├── run.bat                           # Backend runner
│   │
│   └── src/main/
│       ├── java/com/example/clinicalmanagement/
│       │   ├── ClinicalManagementApplication.java # Bootstrap & Data Seeder
│       │   ├── config/SecurityConfig.java         # Spring Security 6 Role Filter
│       │   ├── entity/                            # JPA Entities (User, Doctor, Patient, etc.)
│       │   ├── repository/Repositories.java       # Spring Data JPA Repositories
│       │   ├── service/Services.java              # Transactional Business Services
│       │   └── controller/                        # REST & Web MVC Controllers
│       │
│       └── resources/
│           └── application.properties             # MySQL Connection & JPA Settings
│
└── frontend/                             # 🎨 FRONTEND (HTML5 / Thymeleaf / CSS3 / JS)
    ├── login.html                        # Gateway with 1-click auto-fill
    ├── register.html                     # Patient self-registration
    ├── admin.html                        # Admin management console
    ├── patient.html                      # Patient health portal
    ├── doctor.html                       # Doctor consultation portal
    ├── style.css                         # Responsive CSS3 medical theme & print styles
    └── script.js                         # Tab switching, modal handlers, print logic
```

---

## 🚀 Getting Started

### Prerequisites
- **Java**: JDK 17 or JDK 21+
- **Maven**: 3.8+ (or Maven wrapper)

### Running the Application

#### Option 1: One-Click Desktop Launcher (Windows)
Double-click `run.bat` in the project root directory.

#### Option 2: Command Line
```bash
# Clone the repository
git clone https://github.com/<your-username>/ClinicalManagementSystem.git
cd ClinicalManagementSystem

# Build and run
mvn clean compile
mvn spring-boot:run
```

Once started, open your web browser at:
👉 **[http://localhost:8080/login](http://localhost:8080/login)**

---

## 🔑 Pre-Seeded Test Credentials

The system automatically initializes authentic Indian healthcare records on first boot:

| Portal | Tab to Select | Username | Password | Persona & Role |
| :--- | :--- | :--- | :--- | :--- |
| **Admin Portal** | 🛡️ Admin Portal | `admin` | `admin123` | Vikram Malhotra (Hospital Admin) |
| **Doctor Portal** | 🩺 Doctor Portal | `dr.sharma` | `doctor123` | Dr. Rajesh Sharma, MD (Cardiology) |
| **Patient Portal** | 👤 Patient Portal | `rahul.s` | `patient123` | Rahul Sharma (Patient) |

*Tip: The login page has **Auto-Fill** buttons for each portal tab to sign in instantly without typing.*

---

## 📤 How to Upload to GitHub

Follow these steps to upload this project to your GitHub repository:

```bash
# 1. Initialize git in the project root (if not already initialized)
git init

# 2. Add all required backend and frontend files
git add .

# 3. Create your initial commit
git commit -m "Initial commit: CarePulse Clinical Management System with Admin, Patient & Doctor portals"

# 4. Set the main branch
git branch -M main

# 5. Link to your GitHub repository
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 6. Push code to GitHub
git push -u origin main
```
