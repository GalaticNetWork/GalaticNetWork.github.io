@echo off
setlocal enabledelayedexpansion

rem Ruta de la carpeta que contiene los archivos
set "folder=C:\AppServ\www\relogdigital\audio\minutos"

rem Cambiar al directorio de trabajo
cd /d "%folder%"

rem Iterar sobre los archivos MIN*.mp3
for %%f in (MIN*.mp3) do (
    rem Obtener el número del archivo
    set "filename=%%~nf"
    set "number=!filename:~3,2!"

    rem Renombrar el archivo
    ren "%%f" "!number!.mp3"
)

echo Renombrado completado.
pause
