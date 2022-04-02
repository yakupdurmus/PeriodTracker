package com.periodtracker;

import com.facebook.react.ReactActivity;
import com.facebook.react.modules.i18nmanager.I18nUtil;

import android.os.Bundle;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "PeriodTracker";
  }
  
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    I18nUtil sharedI18nUtilInstance = I18nUtil.getInstance();
    sharedI18nUtilInstance.forceRTL(this,true);
    sharedI18nUtilInstance.allowRTL(this, true);
    super.onCreate(null);
  }
}
