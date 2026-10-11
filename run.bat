@echo off
title CarePulse Clinical Management System
echo ========================================================
echo Starting CarePulse Clinical Management System...
echo ========================================================
echo.
cd /d "%~dp0backend"
mvn spring-boot:run
pause
