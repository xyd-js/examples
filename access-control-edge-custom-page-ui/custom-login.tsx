/**
 * Example: Custom login page using useAccessControl context.
 *
 * To use this, set in docs.json:
 *   "login": "./custom-login.tsx"
 *
 * The host wraps your component with AccessControlProvider automatically.
 * Just use useAccessControl() — no manual setup needed.
 */
import React from "react";
import { useAccessControl } from "@xyd-js/client-api";
import type {MetaTags} from "@xyd-js/client-api";

import "./custom-login.css";

export default function CustomLoginUI() {
  const {
    title,
    logo,
    description,
    error,
    clearError,
    providerType,
    hasExternalAuth,
    signInWithOAuth,
    signInWithRedirect,
    signInAsUser,
    signInAsAdmin,
  } = useAccessControl();

  return (
    <div className="custom-login">
      <div className="custom-login__card">
        {logo && <img className="custom-login__logo" src={logo} alt="" />}

        <h1 className="custom-login__title">{title}</h1>

        {description && (
          <p className="custom-login__description">{description}</p>
        )}

        {error && (
          <div className="custom-login__error">
            <span className="custom-login__error-text">{error}</span>
            <button className="custom-login__error-close" onClick={clearError}>
              ✕
            </button>
          </div>
        )}

        <div className="custom-login__actions">
          {hasExternalAuth ? (
            <button
              className="custom-login__btn"
              onClick={providerType === "oauth" ? signInWithOAuth : signInWithRedirect}
            >
              Continue with {providerType === "oauth" ? "OAuth" : "SSO"}
            </button>
          ) : (
            <>
              <button className="custom-login__btn" onClick={signInAsUser}>
                Sign in as User
              </button>
              <button
                className="custom-login__btn custom-login__btn--secondary"
                onClick={signInAsAdmin}
              >
                Sign in as Admin
              </button>
            </>
          )}
        </div>

        <p className="custom-login__footer">
          Custom login page built with useAccessControl()
        </p>
      </div>
    </div>
  );
}

// PageApi: SEO meta tags for this page
export function seoTags(): MetaTags {
  return {
    description: "Sign in to access protected custom login documentation",
    "og:title": "Sign In",
  };
}