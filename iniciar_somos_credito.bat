@echo off
title SOMOS CREDITO - Inicio automático

echo ===========================================
echo     INICIANDO SOMOS CREDITO
echo ===========================================
echo.

REM ====== BACKEND ======
echo [1] Verificando backend...
cd somos-credito-backend

if not exist node_modules (
    echo node_modules no existe. Instalando dependencias de backend...
    npm install
)

echo Iniciando BACKEND en puerto 3001...
start cmd /k "node server.js"
cd ..

echo.

REM ====== FRONTEND ======
echo [2] Verificando frontend...
cd somos-credito-frontend

if not exist node_modules (
    echo node_modules no existe. Instalando dependencias de frontend...
    npm install
)

echo Iniciando FRONTEND (Vite)...
start cmd /k "npm run dev"
cd ..

echo.
echo ===========================================
echo   TODO LISTO!
echo   Backend  -> http://localhost:3001
echo   Frontend -> http://localhost:5173
echo ===========================================
pause
