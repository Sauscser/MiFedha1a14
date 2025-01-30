# Preserve Expo SDK classes and methods
-keep class expo.** { *; }

# Preserve React Native classes and methods
-keep class com.facebook.react.** { *; }

# Keep annotations (used by libraries like Retrofit or Dagger)
-keepattributes *Annotation*

# Preserve the main activity (replace with your app’s package and class name)
-keep class com.yourcompany.yourappname.MainActivity { *; }

# Avoid obfuscating classes with native methods
-keepclasseswithmembers class * {
    native <methods>;
}

# Preserve all public methods and fields in your app
-keepclassmembers class ** {
    public *;
}

# Optimize and obfuscate everything else
-allowaccessmodification
-dontpreverify
-dontwarn sun.misc.**
