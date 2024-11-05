"use client";

import { useTranslations } from "next-intl";

import AlertLabel from "@/_components/alertLabel";

export type AlertItemsPropsType = {
  isCaptchaExpired?: boolean;
  errorResponseStatusCode?: number;
  remainFailedAttempts?: number;
};

const AuthAlertsItems = ({ isCaptchaExpired, errorResponseStatusCode, remainFailedAttempts }: AlertItemsPropsType) => {
  const t = useTranslations();

  const CaptchaExpiredAlert = () => (
    <AlertLabel type="error" text={t("captcha_expired_alert")} labelParentClass="max-w-fit text-start" />
  );

  const UserPassIncorrectAlerts = () => (
    <div className="pb-1">
      <AlertLabel
        type="error"
        text={t("invalid_username_password_alert_message")}
        labelParentClass="max-w-fit text-start mb-1"
      />
      {remainFailedAttempts! > 0 && (
        <AlertLabel
          type="warning"
          text={t("failed_attempts_alert_message", { count: remainFailedAttempts })}
          labelParentClass="max-w-fit text-start"
        />
      )}
    </div>
  );

  const InvalidCaptchaAlert = () => (
    <AlertLabel type="error" text={t("invalid_captcha")} labelParentClass="max-w-fit text-start" />
  );

  const UserBlockedAlert = () => (
    <AlertLabel type="error" text={t("user_blocked")} labelParentClass="max-w-fit text-start" />
  );

  if (isCaptchaExpired) {
    return <CaptchaExpiredAlert />;
  }
  if (errorResponseStatusCode === 40001) {
    return <UserPassIncorrectAlerts />;
  }
  if (errorResponseStatusCode === 40002) {
    return <InvalidCaptchaAlert />;
  }
  if (errorResponseStatusCode === 40102) {
    return <UserBlockedAlert />;
  }
};

export default AuthAlertsItems;
