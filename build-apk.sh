#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_ROOT"

if ! command -v gradle >/dev/null 2>&1; then
  echo "[ERROR] Gradle belum terpasang. Install Gradle atau gunakan Android Studio."
  exit 1
fi

if [[ -z "${ANDROID_SDK_ROOT:-}" && -z "${ANDROID_HOME:-}" ]]; then
  echo "[ERROR] ANDROID_SDK_ROOT / ANDROID_HOME belum diset."
  echo "Contoh: export ANDROID_SDK_ROOT=\$HOME/Android/Sdk"
  exit 1
fi

if [[ -z "${JAVA_HOME:-}" ]]; then
  echo "[WARN] JAVA_HOME belum diset. Disarankan pakai JDK 17."
fi

echo "[INFO] Menjalankan build APK debug..."
gradle :app:assembleDebug

echo "[SUCCESS] APK tersedia di: app/build/outputs/apk/debug/app-debug.apk"
