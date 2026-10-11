# ⚙️ Backend Module (Java 21 / Spring Boot 3.2)

This directory contains the complete server-side Java backend, database models, security, and configuration.

## Structure:
- **`pom.xml`**: Maven dependencies (Spring Boot Web, Data JPA, Security, Thymeleaf, H2 Database).
- **`run.bat`**: 1-click Windows desktop startup script.
- **`src/main/resources/application.properties`**: Server port (8080), H2 in-memory database URL, and JPA settings.
- **`src/main/java/com/example/clinicalmanagement/`**:
  - `ClinicalManagementApplication.java`: Main bootstrap class and initial data seeder (Indian doctors, patients, appointments, lab reports).
  - `config/SecurityConfig.java`: Role-based authentication rules (`ADMIN`, `DOCTOR`, `PATIENT`) & CSRF protection.
  - `entity/`: Database entities (`User`, `Doctor`, `Patient`, `Department`, `Appointment`, `Consultation`, `TestReport`).
  - `repository/Repositories.java`: Spring Data JPA repository interfaces.
  - `service/Services.java`: Business logic and database transaction management.
  - `controller/`: Web controllers (`AuthController`, `AdminController`, `DoctorController`, `PatientController`, `AppointmentController`).
