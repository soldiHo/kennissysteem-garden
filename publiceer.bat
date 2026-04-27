@echo off
echo.
echo ====================================
echo   Kennistuin publiceren...
echo ====================================
echo.

set TUIN=C:\Users\solda\OneDrive\documents\tuin
set CONTENT=C:\Users\solda\kennissysteem-garden\content

echo Stap 1: Notities synchroniseren...
robocopy "%TUIN%" "%CONTENT%" /MIR /XD .obsidian /XF .DS_Store > nul
echo   Klaar!

echo Stap 2: Uploaden naar GitHub...
cd /d C:\Users\solda\kennissysteem-garden
git add -A
git commit -m "Tuin bijgewerkt" > nul 2>&1
git push
echo   Klaar!

echo.
echo ====================================
echo   Gepubliceerd! Je tuin is online.
echo   https://soldiHo.github.io/kennissysteem-garden
echo ====================================
echo.
pause
