package com.motomotok.neonyorunge;

import com.android.installreferrer.api.InstallReferrerClient;
import com.android.installreferrer.api.InstallReferrerStateListener;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

// Play yükleme kaynağı (reklamdan mı, mağazadan mı): oyun tarafı yalnız sınıfını kaydeder
// (src/telemetry.js installSource). Okunamazsa referrer boş döner, oyun sonraki açılışta dener.
@CapacitorPlugin(name = "InstallSource")
public class InstallSourcePlugin extends Plugin {

    @PluginMethod
    public void get(final PluginCall call) {
        final InstallReferrerClient client = InstallReferrerClient.newBuilder(getContext()).build();
        client.startConnection(new InstallReferrerStateListener() {
            private boolean done = false;

            private void finish(String referrer) {
                if (done) return;
                done = true;
                JSObject ret = new JSObject();
                if (referrer != null) ret.put("referrer", referrer);
                call.resolve(ret);
                try { client.endConnection(); } catch (Exception ignored) { }
            }

            @Override
            public void onInstallReferrerSetupFinished(int code) {
                String referrer = null;
                if (code == InstallReferrerClient.InstallReferrerResponse.OK) {
                    try { referrer = client.getInstallReferrer().getInstallReferrer(); } catch (Exception ignored) { }
                }
                finish(referrer);
            }

            @Override
            public void onInstallReferrerServiceDisconnected() {
                finish(null);
            }
        });
    }
}
