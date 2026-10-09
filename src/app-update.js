// Mağazada yeni sürüm var mı? Varsa güncelle.
// Android: Google Play'in resmi uygulama içi güncellemesi (immediate). Play
//   kendi tam ekran güncelleme penceresini oyunun içinde açar, indirir ve
//   uygulamayı kendisi yeniden başlatır. Play Store'a gitmek gerekmez.
// iOS: böyle bir sistem yok; App Store'daki sayfa açılır.
// esbuild ile www/app-update-bundle.js olarak paketlenir (npm run build:update).
import { Capacitor } from '@capacitor/core';
import { AppUpdate, AppUpdateAvailability } from '@capawesome/capacitor-app-update';

const IOS_APP_ID = '6817908576';
const isNative = () => Capacitor.isNativePlatform();
let lastInfo = null;

// {available, version} — mağazaya ulaşılamazsa / web'de {available:false}.
async function check() {
  if (!isNative()) return { available: false };
  try {
    lastInfo = await AppUpdate.getAppUpdateInfo();
    return {
      available: lastInfo.updateAvailability === AppUpdateAvailability.UPDATE_AVAILABLE,
      version: lastInfo.availableVersionCode || lastInfo.availableVersionName || '',
    };
  } catch (e) {
    return { available: false };
  }
}

async function update() {
  if (!isNative()) return;
  try {
    if (Capacitor.getPlatform() === 'android' && lastInfo && lastInfo.immediateUpdateAllowed) {
      await AppUpdate.performImmediateUpdate();   // başarılıysa uygulama yeniden başlar
      return;
    }
    await AppUpdate.openAppStore(Capacitor.getPlatform() === 'ios' ? { appId: IOS_APP_ID } : undefined);
  } catch (e) {
    // Oyuncu Play penceresini kapattıysa ya da hata olduysa mağaza sayfasına düş.
    try { await AppUpdate.openAppStore(Capacitor.getPlatform() === 'ios' ? { appId: IOS_APP_ID } : undefined); } catch (e2) {}
  }
}

window.NativeUpdate = { isNative, check, update };
