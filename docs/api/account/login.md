---
sidebar_position: 1
---

# /account/login

This endpoint authenticates a user and returns an authentication token.

## Request

```
GET https://api.astrakit.cc/api/account/login
```

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| email | string | Yes | User's email address |
| password | string | Yes | User's account password |

## Example Request

```
GET https://api.astrakit.cc/api/account/login?email=user@example.com&password=yourpassword
```

## Example Response

```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "123456",
      "email": "user@example.com"
    }
  }
}
```

## Error Responses

### Invalid Credentials

```json
{
  "success": false,
  "message": "Invalid email or password",
  "error": "AUTH_FAILED"
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
