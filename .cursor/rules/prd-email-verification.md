# PRD: Email Verification After Signup

## Overview
Implement an email verification system for new users. After signing up, users receive an email with a secure, expiring verification link. Users cannot access protected features until their email is verified.

## Goals
- Ensure only users with valid email addresses can activate their accounts.
- Prevent access to protected features until verification is complete.
- Use secure, random tokens and expiring links for verification.

## User Stories
- As a new user, I want to receive a verification email after signup so I can activate my account.
- As a user, I want to be blocked from logging in or using protected features until I verify my email.
- As an admin, I want to see which users have not verified their email.

## Requirements
### Functional
1. On signup, generate a secure, random verification token linked to the user.
2. Store the token and its expiration (e.g., 1 hour) in the database.
3. Send an email to the user with a verification link containing the token.
4. Add an `email_verified` boolean field to the user model (default: false).
5. When the user clicks the link, verify the token and mark the user as verified if valid and not expired.
6. Block login and protected API access for users whose email is not verified.
7. Allow resending the verification email if needed.

### Non-Functional
- Tokens must be cryptographically secure and unguessable.
- Verification links must expire after a set time (e.g., 1 hour).
- The system must not reveal whether an email is registered when resending verification.

## Out of Scope
- Password reset (handled separately)
- Multi-factor authentication

## Success Criteria
- Users cannot access protected features until verified.
- Verification emails are sent and links expire as expected.
- Admins can see verification status in user management.

## Open Questions
- Should verification be required for all users or only some roles?
- Should unverified accounts be deleted after a period?

## Milestones
1. Update user model and database
2. Implement token generation and storage
3. Implement email sending
4. Implement verification endpoint
5. Block access for unverified users
6. Add resend verification feature
7. Admin visibility of verification status 