---
sidebar_position: 2
---

# /account/register

This endpoint registers a new user account in the system.

## Request

```
GET https://api.astrakit.cc/api/account/register
```

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| email | string | Yes | User's email address |
| password | string | Yes | Desired account password |
| code | string | Yes | Registration invitation code |

## Example Request

```
GET https://api.astrakit.cc/api/account/register?email=user@example.com&password=yourpassword&code=invitationcode
```

## Example Response

```json
{
  "success": true,
  "message": "Account created successfully",
  "data": {
    "userId": "123456",
    "email": "user@example.com"
  }
}
```

## Error Responses

### Invalid Registration Code

```json
{
  "success": false,
  "message": "Invalid registration code",
  "error": "INVALID_CODE"
}
```

### Email Already Registered

```json
{
  "success": false,
  "message": "Email already registered",
  "error": "EMAIL_EXISTS"
}
```

### Missing Parameters

```json
{
  "success": false,
  "message": "Missing required parameters",
  "error": "INVALID_REQUEST"
}
```
