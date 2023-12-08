package com.example.Nuitinfo;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.LocaleResolver;
import org.springframework.web.servlet.support.RequestContextUtils;

import java.util.Locale;

@RestController
@RequestMapping("/api")
public class LanguageController {
    @GetMapping("/change-language")
    public ResponseEntity<String> changeLanguage(@RequestParam String lang, HttpServletRequest request) {
        Locale newLocale = new Locale(lang);
        LocaleResolver localeResolver = RequestContextUtils.getLocaleResolver(request);
        localeResolver.setLocale(request, null, newLocale);
        return ResponseEntity.ok("Language changed successfully");
    }
}
