package com.motomotok.neonyorunge;

import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    // Alttaki gezinme çubuğu (geri/ana ekran/son uygulamalar) oyun sırasında
    // gizli kalır; ekranın altından kaydırınca geçici olarak görünür.
    // Reklam, izin diyaloğu gibi bir şey odağı alıp geri verince yeniden gizlenir.
    private void hideNavigationBar() {
        WindowInsetsControllerCompat controller =
                WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView());
        controller.setSystemBarsBehavior(WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
        controller.hide(WindowInsetsCompat.Type.navigationBars());
    }

    @Override
    public void onResume() {
        super.onResume();
        hideNavigationBar();
    }

    @Override
    public void onWindowFocusChanged(boolean hasFocus) {
        super.onWindowFocusChanged(hasFocus);
        if (hasFocus) hideNavigationBar();
    }
}
