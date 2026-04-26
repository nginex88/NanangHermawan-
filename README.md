# PUBGM Companion (Legal)

Aplikasi Android sederhana berbasis Jetpack Compose untuk membantu pemain mengatur sensitivity dan preset permainan **secara legal** (tanpa cheat, bypass, atau modifikasi game).

## Fitur
- Sensitivity slider.
- Preset mode (Stability, Balanced, Aggressive).
- Tips singkat untuk latihan recoil.

## Build APK langsung (terminal)
> Prasyarat:
> - Android SDK sudah terpasang.
> - Environment variable `ANDROID_SDK_ROOT` (atau `ANDROID_HOME`) sudah diset.
> - Java 17 direkomendasikan.

```bash
chmod +x build-apk.sh
./build-apk.sh
```

Output APK:
- `app/build/outputs/apk/debug/app-debug.apk`

## Build APK via Android Studio
1. Install Android Studio (Hedgehog atau lebih baru).
2. Buka folder proyek ini.
3. Tunggu Gradle sync.
4. Pilih **Build > Build Bundle(s) / APK(s) > Build APK(s)**.

## Catatan
Proyek ini tidak berinteraksi dengan memori game dan tidak melakukan bypass anti-cheat.
