// Mağazada yeni sürüm çıktıysa DJ Vinil haber verir (köprü: app-update-bundle.js
// → window.NativeUpdate). "Güncelle": Android'de Play'in kendi güncelleme
// penceresi oyunun içinde açılır, indirir ve oyunu yeniden başlatır; iOS'ta
// App Store sayfası açılır. Aynı sürüm için günde en fazla bir kez sorulur.
const UPDATE_ASK_KEY = 'beatOrbitUpdateAsk';

// Pencere açıldıysa true döner (aynı açılışta bildirim sorusu çıkmasın diye).
async function updateMaybePrompt(){
  if(!window.NativeUpdate || !NativeUpdate.isNative() || tutorialActive) return false;
  const info = await NativeUpdate.check();
  if(!info.available || state !== 'menu') return false;
  const mark = todayStr() + '|' + info.version;
  let last = ''; try{ last = localStorage.getItem(UPDATE_ASK_KEY) || ''; }catch(e){}
  if(last === mark) return false;
  try{ localStorage.setItem(UPDATE_ASK_KEY, mark); }catch(e){}
  showDjConfirm(t('update_ask'), ()=>NativeUpdate.update(), {yes:t('btn_update'), no:t('btn_later')});
  return true;
}
