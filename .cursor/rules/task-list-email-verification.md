# Task List: Email Verification Feature

## 1. Update User Model and Database
- Add `email_verified` boolean field to the user entity (default: false).
- Create a migration or update the database schema to include this field.

## 2. Implement Token Generation and Storage
- Create a new entity/table for `email_verification_token` with fields: id, user_id, token, expires_at.
- Implement logic to generate a secure, random token on signup.
- Store the token and expiration in the database.

## 3. Implement Email Sending
- Integrate an email service (e.g., JavaMailSender or external API).
- Create an email template for verification.
- Send the verification email with a link containing the token after signup.

## 4. Implement Verification Endpoint
- Create a REST endpoint to receive the verification token from the link.
- Validate the token: check existence, expiration, and match to user.
- If valid, set `email_verified` to true for the user and delete/invalidate the token.
- Return appropriate success or error responses.

## 5. Block Access for Unverified Users
- Update login logic to block access for users whose `email_verified` is false.
- Ensure all protected API endpoints check for verified status.

## 6. Add Resend Verification Feature
- Create an endpoint to request a new verification email.
- Generate a new token and send a new email if the user is not verified.
- Do not reveal whether the email is registered in the system.

## 7. Admin Visibility of Verification Status
- Update admin user management endpoints to include `email_verified` status.
- Optionally, add filters or views for unverified users.

## 8. Testing
- Write unit and integration tests for all new logic (token generation, email sending, endpoint, blocking, etc.).
- Test edge cases: expired token, invalid token, already verified, etc. 