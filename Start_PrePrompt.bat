@echo off
setlocal EnableExtensions

set "ROOT_DIR=%~dp0"
set "LOCAL_EXE=%ROOT_DIR%bin\PromptTyper.exe"
set "BRIDGE_DIR=%APPDATA%\espanso\config\text_automation_tool"
set "BRIDGE_STARTED=0"
set "PROMPT_BANK_PATH=%ROOT_DIR%index.html"
set "PROMPT_BANK_DATA_PATH=%ROOT_DIR%prompt_bank_data.json"

rem Prevent stale tray/background conflicts from older launches.
taskkill /F /IM PromptTyper.exe >nul 2>nul

if exist "%LOCAL_EXE%" (
  start "" /min "%LOCAL_EXE%"
  set "BRIDGE_STARTED=1"
  goto OPEN_UI
)

if exist "%BRIDGE_DIR%" (
  pushd "%BRIDGE_DIR%" >nul

  if exist "app.py" (
    start "" /min pythonw "app.py"
    set "BRIDGE_STARTED=1"
  ) else if exist "main.py" (
    start "" /min pythonw "main.py"
    set "BRIDGE_STARTED=1"
  ) else if exist "bridge.py" (
    start "" /min pythonw "bridge.py"
    set "BRIDGE_STARTED=1"
  ) else if exist "server.py" (
    start "" /min pythonw "server.py"
    set "BRIDGE_STARTED=1"
  )

  popd >nul
)

if "%BRIDGE_STARTED%"=="0" (
  where python >nul 2>nul
  if not errorlevel 1 (
    if exist "%BRIDGE_DIR%" (
      pushd "%BRIDGE_DIR%" >nul
      if exist "app.py" (
        start "" /min pythonw "app.py"
        set "BRIDGE_STARTED=1"
      ) else if exist "main.py" (
        start "" /min pythonw "main.py"
        set "BRIDGE_STARTED=1"
      )
      popd >nul
    )
  )
)

if "%BRIDGE_STARTED%"=="1" (
  echo [PrePrompt] PromptTyper bridge start command sent.
) else (
  echo [PrePrompt] PromptTyper engine not found.
  echo [PrePrompt] Expected local exe: %LOCAL_EXE%
  echo [PrePrompt] Fallback path: %BRIDGE_DIR%
  echo [PrePrompt] Prompt Bank will open in offline/fallback mode.
)

:OPEN_UI
start "" "%ROOT_DIR%index.html"
echo [PrePrompt] Prompt Bank opened.
timeout /t 2 >nul
exit /b 0
