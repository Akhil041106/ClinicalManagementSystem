// CarePulse Clinical Management System - Frontend Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // Auto-dismiss feedback alert banners after 5 seconds
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.style.transition = 'opacity 0.5s ease';
            alert.style.opacity = '0';
            setTimeout(() => alert.remove(), 500);
        }, 5000);
    });

    // Dynamic doctor filtering by department in appointment booking
    const deptSelect = document.getElementById('departmentSelect');
    const doctorSelect = document.getElementById('doctorSelect');

    if (deptSelect && doctorSelect) {
        deptSelect.addEventListener('change', () => {
            const selectedDeptId = deptSelect.value;
            const options = doctorSelect.querySelectorAll('option');

            options.forEach(opt => {
                if (!opt.value) {
                    opt.hidden = false;
                    return;
                }
                const optDept = opt.getAttribute('data-department');
                if (!selectedDeptId || optDept === selectedDeptId) {
                    opt.hidden = false;
                } else {
                    opt.hidden = true;
                }
            });

            doctorSelect.value = '';
        });
    }

    // Initialize Tab Navigation
    initTabs();
});

// Tab Switching System
function initTabs() {
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetTabId = link.getAttribute('data-tab');
            switchTab(targetTabId);
        });
    });
}

function switchTab(tabId) {
    // Deactivate all tab links
    document.querySelectorAll('.tab-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-tab') === tabId) {
            link.classList.add('active');
        }
    });

    // Hide all tab panes
    document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
    });

    // Show target tab pane
    const targetPane = document.getElementById(tabId);
    if (targetPane) {
        targetPane.classList.add('active');
    }
}

// Live Table Search Filter
function filterTable(inputId, tableId) {
    const input = document.getElementById(inputId);
    const filter = input.value.toLowerCase();
    const table = document.getElementById(tableId);
    if (!table) return;

    const trs = table.getElementsByTagName('tr');
    for (let i = 1; i < trs.length; i++) {
        const text = trs[i].textContent || trs[i].innerText;
        if (text.toLowerCase().indexOf(filter) > -1) {
            trs[i].style.display = '';
        } else {
            trs[i].style.display = 'none';
        }
    }
}

// Appointment Status Filter
function filterAppointmentsByStatus(status, pillElement) {
    const pills = document.querySelectorAll('.filter-pill');
    pills.forEach(p => p.classList.remove('active'));
    if (pillElement) {
        pillElement.classList.add('active');
    }

    const rows = document.querySelectorAll('.appointment-row');
    rows.forEach(row => {
        const rowStatus = row.getAttribute('data-status');
        if (status === 'ALL' || rowStatus === status) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Modal Management
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// Open Consultation Modal for Doctor
function openConsultationModal(appointmentId, patientName, reason) {
    const apptIdInput = document.getElementById('consultationAppointmentId');
    const patientNameSpan = document.getElementById('consultationPatientName');
    const reasonSpan = document.getElementById('consultationReason');

    if (apptIdInput) apptIdInput.value = appointmentId;
    if (patientNameSpan) patientNameSpan.textContent = patientName;
    if (reasonSpan) reasonSpan.textContent = reason;

    openModal('consultationModal');
}

// Print Prescription Action
function printPrescription() {
    window.print();
}

// Action Confirmation
function confirmAction(message) {
    return confirm(message || 'Are you sure you want to proceed?');
}
