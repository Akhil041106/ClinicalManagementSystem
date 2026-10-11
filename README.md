# 🏥 CarePulse - Clinical Management System (Full-Stack Indian Edition)

[![Java](https://img.shields.io/badge/Java-21-orange.svg)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.3-brightgreen.svg)](https://spring.io/projects/spring-boot)
[![Spring Security](https://img.shields.io/badge/Spring%20Security-6.2-blue.svg)](https://spring.io/projects/spring-security)
[![Thymeleaf](https://img.shields.io/badge/Thymeleaf-3.1-green.svg)](https://www.thymeleaf.org/)
[![Database](https://img.shields.io/badge/Database-H2%20In--Memory-yellow.svg)](https://www.h2database.com/)
[![Currency](https://img.shields.io/badge/Currency-INR%20(%E2%82%B9)-blueviolet.svg)](#)

A full-stack, enterprise-grade Clinical Management System built with **Spring Boot 3**, **Spring Security 6**, **Spring Data JPA**, **Thymeleaf**, and an in-memory **H2 Database**.

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
├── pom.xml                               # Maven project dependencies & build
├── .gitignore                            # Git ignore rules for Maven & IDEs
├── README.md                             # Repository documentation
├── run.bat                               # 1-click Windows desktop launcher
│
└── src/main/
    ├── java/com/example/clinicalmanagement/  # ⚙️ BACKEND
    │   ├── ClinicalManagementApplication.java# App entry & Indian healthcare data seeder
    │   │
    │   ├── config/
    │   │   └── SecurityConfig.java           # Spring Security 6 role-based protection
    │   │
    │   ├── entity/                           # JPA Database Entities
    │   │   ├── User.java                     # Auth credentials & roles
    │   │   ├── Doctor.java                   # Physician details & consultation fee (₹)
    │   │   ├── Patient.java                  # Patient EHR, allergies, emergency contacts
    │   │   ├── Department.java               # Medical specialty departments
    │   │   ├── Appointment.java              # Booking schedule, fees (₹), payment status
    │   │   ├── Consultation.java             # Clinical diagnoses & Rx prescriptions
    │   │   └── TestReport.java               # Diagnostic lab reports, findings, fees (₹)
    │   │
    │   ├── repository/
    │   │   └── Repositories.java             # Spring Data JPA repository interfaces
    │   │
    │   ├── service/
    │   │   └── Services.java                 # Business operations & transaction services
    │   │
    │   └── controller/                       # MVC Web Controllers
    │       ├── AuthController.java           # Login & self-registration routes
    │       ├── AdminController.java          # Admin console & lab report endpoints
    │       ├── DoctorController.java         # Doctor workspace & Rx creation
    │       ├── PatientController.java        # Patient health portal & fee payment
    │       └── AppointmentController.java    # Appointment booking & payment actions
    │
    └── resources/
        ├── application.properties            # Server port (8080) & H2 database config
        │
        ├── templates/                        # 🎨 FRONTEND (HTML5 / Thymeleaf)
        │   ├── login.html                    # Unified gateway with 1-click auto-fill
        │   ├── register.html                 # Patient self-registration
        │   ├── admin.html                    # Admin management console
        │   ├── patient.html                  # Patient health portal
        │   └── doctor.html                   # Doctor consultation portal
        │
        └── static/                           # 🎨 FRONTEND ASSETS
            ├── style.css                     # Responsive CSS3 medical theme & print rules
            └── script.js                     # Tab switching, modal handlers, print logic
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
