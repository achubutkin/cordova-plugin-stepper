package org.apache.cordova.stepper;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Build;

import org.apache.cordova.BuildConfig;
import org.apache.cordova.stepper.util.API26Wrapper;

public class BootReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(final Context context, final Intent intent) {
      if (intent != null) {
        if (intent.getAction().equalsIgnoreCase(
          Intent.ACTION_BOOT_COMPLETED)) {

          SharedPreferences prefs = context.getSharedPreferences("pedometer", Context.MODE_PRIVATE);

          Database db = Database.getInstance(context);

          if (!prefs.getBoolean("correctShutdown", false)) {
            // can we at least recover some steps?
            int steps = Math.max(0, db.getCurrentSteps());
            db.addToLastEntry(steps);
          }
          // last entry might still have a negative step value, so remove that
          // row if that's the case
          db.removeNegativeEntries();
          db.saveCurrentSteps(0);
          db.close();
          prefs.edit().remove("correctShutdown").apply();

          if (Build.VERSION.SDK_INT >= 26) {
            API26Wrapper.startForegroundService(context, new Intent(context, SensorListener.class));
          } else {
            context.startService(new Intent(context, SensorListener.class));
          }
        }
      }
    }
}
